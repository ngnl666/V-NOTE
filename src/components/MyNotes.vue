<template>
  <div class="p-2 md:p-4">
    <div v-if="!loadNote">
      <div class="flex justify-between px-2 mb-6 md:px-6">
        <h3
          class="text-gray-900 text-2xl font-medium md:text-3xl dark:text-white"
          v-html="highLight(myNote.title)"
        ></h3>
        <NoteTopBar>
          <template v-slot:edit>
            <span
              class="noteTopBarIcon mr-1 md:text-xl"
              @click="openShareBox(myNote.title)"
            >
              <i class="fas fa-share-alt"></i>
            </span>
          </template>
          <template v-slot:delete>
            <span
              class="noteTopBarIcon md:text-xl"
              @click="setShowModal(myNote, true)"
            >
              <i class="far fa-trash-alt"></i>
            </span>
          </template>
          <template v-slot:star>
            <span class="text-yellow-400 md:text-xl">
              <i
                class="far fa-star iconHover"
                @click="addStar(myNote.id, true)"
                v-if="!myNote.stared"
              ></i>
              <i
                class="fas fa-star iconHover"
                @click="addStar(myNote.id, false)"
                v-else
              ></i>
            </span>
          </template>
        </NoteTopBar>
      </div>
      <router-link :to="`/current/view/${myNote.id}`" class="cursor-pointer">
        <div class="px-2 mb-8 md:px-6">
          <section
            class="break-words text-gray-500 md:text-xl dark:text-gray-400"
            v-html="highLight(tempContent)"
          ></section>
          <span class="text-indigo-500 inline-flex items-center mt-4 md:text-xl"
            >閱讀更多
            <i class="fas fa-arrow-right ml-2"></i>
          </span>
        </div>
        <div class="my-4 md:flex justify-between">
          <ul class="flex flex-wrap">
            <li
              class="
                bg-gray-200
                text-white
                rounded-md
                px-2
                py-0.5
                mr-4
                mb-4
                hover:bg-black
                md:mb-0 md:text-xl
                dark:bg-gray-400 dark:hover:bg-black
              "
              v-for="tag in myNote.tags"
              :key="tag.id"
              @click.prevent="searchTag(tag)"
            >
              # {{ tag }}
            </li>
          </ul>
          <div class="md:text-xl dark:text-white">
            {{ getTime(myNote.date) }}
          </div>
        </div>
        <hr />
      </router-link>
    </div>
    <div class="shadow rounded-md p-4" v-else>
      <div class="flex animate-pulse space-x-4">
        <div class="h-12 w-12 bg-gray-400 rounded-full"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 w-3/4 bg-gray-400 rounded"></div>
          <div class="space-y-2">
            <div class="h-4 bg-gray-400 rounded"></div>
            <div class="h-4 w-5/6 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue';

import format from '../compositions/format.js';
import NoteTopBar from '@/components/NoteTopBar.vue';
import Modal from '@/components/Modal.vue';

import Swal from 'sweetalert2';

export default {
  name: 'MyNotes',
  props: {
    myNote: {
      type: Object,
    },
  },
  components: {
    NoteTopBar,
    Modal,
  },
  setup({ myNote }) {
    const store = inject('store');
    const { state, addStar, setShowModal, getTime, setKeyword } = store;
    const { markup } = format;

    let tempContent = ref('');
    let loadNote = ref(true);

    const swalStyle = Swal.mixin({
      customClass: {
        confirmButton:
          'bg-gray-300 text-white rounded-xl px-4 py-3 hover:bg-gray-300/50',
        htmlContainer: '!text-gray-400',
        input: 'bg-gray-300',
      },
      buttonsStyling: false,
    });

    const inputOptions = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          '0jpg': "<img class='scenery' src='../src/assets/images/0.jpg'/>",
          '1jpg': "<img class='scenery' src='../src/assets/images/1.jpg'/>",
          '2jpg': "<img class='scenery' src='../src/assets/images/2.jpg'/>",
        });
      }, 1000);
    });

    const highLight = val => {
      if (state.keyword) {
        let highLightVal = val.replace(
          new RegExp(state.keyword, 'g'),
          `<span class="text-red-400">${state.keyword}</span>`
        );
        return markup(highLightVal);
      }
      return markup(val);
    };

    const searchTag = tag => setKeyword(`#${tag}`);

    const openShareBox = async title => {
      const { value: color } = await Swal.fire({
        title: `確定發布 <span class="text-red-400">${title}</span> 至探索`,
        html: `<p>平台上的所有人將會看到你發佈的文章，請先選擇背景圖</p>`,
        width: '800px',
        input: 'radio',
        confirmButtonText: '發佈',
        inputOptions: inputOptions,
        inputValidator: value => {
          if (!value) {
            return '請選擇一張背景圖!';
          }
        },
      });
      if (color) {
        // 儲存 發佈的文章和背景
        Swal.fire({ html: `<p>發布成功！</p>`, icon: 'success' });
      }
    };

    setTimeout(() => (loadNote.value = false), 1000);

    tempContent.value = `${myNote.content.substring(0, 200)}．．．`;

    return {
      myNote,
      tempContent,
      loadNote,
      getTime,
      addStar,
      setShowModal,
      highLight,
      searchTag,
      openShareBox,
      markup,
    };
  },
};
</script>

<style lang="scss">
input[type='radio'] {
  width: 10px !important;
  height: 10px !important;
}
</style>
