<template>
  <div
    class="
      container
      box-border
      cursor-pointer
      p-4
      hover:bg-gray-200
      dark:hover:bg-transparent
    "
  >
    <div class="myNote__header flex justify-between px-6 mb-6">
      <h3 class="text-xl dark:text-white" v-html="highLight(myNote.title)"></h3>
      <div class="LatestNotes__icon">
        <span class="LatestNotes__edit px-2 hover:bg-gray-200 dark:text-white">
          <i class="fas fa-edit"></i>
        </span>
        <span
          class="LatestNotes__edit px-2 hover:bg-gray-200 dark:text-white"
          @click="deleteMyNote(myNote.id)"
        >
          <i class="far fa-trash-alt"></i>
        </span>
        <span class="LatestNotes__star text-yellow-400 px-2">
          <i
            class="far fa-star"
            @click="addStar(myNote.id, true)"
            v-if="!myNote.stared"
          ></i>
          <i class="fas fa-star" @click="addStar(myNote.id, false)" v-else></i>
        </span>
      </div>
    </div>
    <router-link :to="`/current/view/${myNote.id}`">
      <div class="myNote__body px-6 mb-8">
        <section
          class="break-words text-gray-500 dark:text-gray-400"
          v-html="highLight(tempContent)"
        ></section>
      </div>
      <div class="myNote__footer flex justify-between my-4">
        <div class="myNote__tags">
          <ul class="flex">
            <li
              class="
                bg-gray-200
                rounded-md
                text-white
                px-2
                py-0.5
                mr-4
                hover:bg-black
                dark:bg-gray-400 dark:hover:bg-black
              "
              v-for="tag in myNote.tags"
              :key="tag.id"
              @click.prevent="searchTag(tag)"
            >
              # {{ tag }}
            </li>
          </ul>
        </div>
        <div class="myNote__cratetime dark:text-white">
          {{ getTime(myNote.date) }}
        </div>
      </div>
      <hr />
    </router-link>
  </div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  name: 'MyNotes',
  props: {
    myNote: {
      type: Object,
    },
  },
  setup({ myNote }) {
    const store = inject('store');
    const { state, addStar, deleteMyNote, getTime, setKeyword } = store;

    let tempContent = ref('');

    tempContent.value = `${myNote.content.substring(0, 200)}．．．閱讀更多`;

    const highLight = val =>
      val.replace(
        new RegExp(state.keyword, 'g'),
        `<span class="text-red-400">${state.keyword}</span>`
      );

    const searchTag = tag => setKeyword(`#${tag}`);

    return {
      myNote,
      addStar,
      deleteMyNote,
      tempContent,
      getTime,
      highLight,
      searchTag,
    };
  },
};
</script>
