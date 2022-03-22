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
                @click="addStar(myNote._id, true)"
                v-if="!myNote.stared"
              ></i>
              <i
                class="fas fa-star iconHover"
                @click="addStar(myNote._id, false)"
                v-else
              ></i>
            </span>
          </template>
        </NoteTopBar>
      </div>
      <router-link :to="`/current/view/${myNote._id}`" class="cursor-pointer">
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
              class="bg-gray-200 text-white rounded-md px-2 py-0.5 mr-4 mb-4 hover:bg-black md:mb-0 md:text-xl dark:bg-gray-400 dark:hover:bg-black"
              v-for="(tag, index) in myNote.tags"
              :key="index"
              @click.prevent="searchTag(tag)"
            >
              # {{ tag }}
            </li>
          </ul>
          <div class="md:text-xl dark:text-white">
            {{ getTime(myNote.createdAt) }}
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
import { inject, ref, toRefs } from 'vue';
import Swal from 'sweetalert2';

import format from '../compositions/format.js';
import Modal from '@/components/Modal.vue';
import NoteTopBar from '@/components/NoteTopBar.vue';

export default {
  name: 'MyNotes',
  props: {
    myNote: {
      type: Object,
    },
  },
  components: {
    Modal,
    NoteTopBar,
  },
  setup(props) {
    const store = inject('store');
    const {
      state,
      addStar,
      setShowModal,
      setAlertMsg,
      getTime,
      setKeyword,
      editNote,
      publishNote,
    } = store;
    const { markup } = format;

    let loadNote = ref(true);
    const myNote = toRefs(props).myNote;
    const tempContent = ref(`${myNote.value.content.substring(0, 200)}．．．`);

    const inputOptions = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          '0.jpg': "<img class='scenery' src='../src/assets/images/0.jpg'/>",
          '1.jpg': "<img class='scenery' src='../src/assets/images/1.jpg'/>",
          '2.jpg': "<img class='scenery' src='../src/assets/images/2.jpg'/>",
        });
      }, 1000);
    });

    const openShareBox = async title => {
      const { value: jpg } = await Swal.fire({
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
      if (myNote.value.shared) setAlertMsg('error', '你已經分享過此文章了！');
      if (jpg && !myNote.value.shared) {
        const data = { _id: myNote.value._id, scene: jpg, like: 0 };
        const sharedNote = { ...myNote.value };

        sharedNote.shared = true;
        await editNote(sharedNote._id, sharedNote);
        publishNote(data);
        Swal.fire({ html: `<p>發布成功！</p>`, icon: 'success' });
      }
    };

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

    setTimeout(() => (loadNote.value = false), 1000);

    return {
      addStar,
      getTime,
      loadNote,
      myNote,
      setShowModal,
      tempContent,
      highLight,
      markup,
      openShareBox,
      searchTag,
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
