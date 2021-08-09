<template>
  <div class="container bg-gray-300 p-4">
    <div class="myNote__header flex justify-between px-6">
      <h3 class="text-xl">{{ myNote.title }}</h3>
      <span class="LatestNotes__star text-yellow-300">
        <i
          class="far fa-star"
          @click="addStar(myNote.id, true)"
          v-if="!myNote.stared"
        ></i>
        <i class="fas fa-star" @click="addStar(myNote.id, false)" v-else></i>
      </span>
    </div>
    <div class="myNote__body"></div>
    <div class="myNote__footer mb-4"></div>
    <hr />
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'MyNotes',
  props: {
    myNote: {
      type: Object,
    },
  },
  setup({ myNote }) {
    const store = inject('store');
    const { addStar } = store;

    return {
      myNote,
      addStar,
    };
  },
};
</script>

<style lang="scss" scoped></style>
