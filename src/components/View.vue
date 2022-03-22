<template>
  <div class="p-4" v-if="currNote.title">
    <div class="flex justify-between mb-8">
      <div>
        <h3 class="text-3xl dark:text-white">
          {{ currNote.title }}
        </h3>
        <p class="text-gray-400 font-extralight mt-4">
          建立於 {{ getTime(currNote.createdAt) }}
        </p>
      </div>
      <NoteTopBar v-if="isShowNextPage">
        <template v-slot:edit>
          <span
            class="noteTopBarIcon"
            @click="
              setIsEdit(true);
              setIsOpen(true);
            "
          >
            <i class="fas fa-edit"></i>
          </span>
        </template>
        <template v-slot:delete>
          <span class="noteTopBarIcon" @click="setShowModal(currNote, true)">
            <i class="far fa-trash-alt"></i>
          </span>
        </template>
      </NoteTopBar>
      <div v-else>
        <p class="rounded-md p-0.5 dark:bg-gray-100">
          <span class="author text-sm font-bold md:text-xl">Written by</span>
          <span class="">- {{ currNote.author }}</span>
        </p>
      </div>
    </div>
    <div
      class="font-light tracking-wide leading-8 dark:text-white"
      v-html="markup(currNote.content)"
    ></div>
    <div v-for="img in currNote.image">
      <div class="my-4">
        <img class="rounded-xl shadow-xl" :src="img.url" alt="這是一張圖片" />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, toRefs, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

import format from '../compositions/format.js';
import NoteTopBar from '@/components/NoteTopBar.vue';

export default {
  name: 'View',
  components: {
    NoteTopBar,
  },
  setup() {
    const store = inject('store');
    const route = useRoute();
    const {
      state,
      addStar,
      getTime,
      getOneNote,
      setIsEdit,
      setIsOpen,
      setShowModal,
    } = store;
    const { markup } = format;

    let isShowNextPage =
      localStorage.getItem('isShowNextPage') === 'false' ? false : true;

    getOneNote(route.params.id);

    onUnmounted(() => {
      window.scrollTo({
        top: document.querySelector('.logoImg').offsetHeight + 20,
        behavior: 'smooth',
      });
    });

    return {
      addStar,
      getTime,
      isShowNextPage,
      setIsEdit,
      setIsOpen,
      setShowModal,
      ...toRefs(state),
      markup,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

.author {
  font-family: 'Satisfy', cursive;
}
</style>
