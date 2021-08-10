<template>
  <div class="container p-4 hover:bg-gray-200">
    <div class="myNote__header flex justify-between px-6 mb-6">
      <h3 class="text-xl">{{ myNote.title }}</h3>
      <div class="LatestNotes__icon">
        <span class="LatestNotes__edit hover:bg-gray-200 px-2">
          <i class="fas fa-edit"></i>
        </span>
        <span class="LatestNotes__edit hover:bg-gray-200 px-2">
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
    <div class="myNote__body px-6">
      <section class="text-gray-500">{{ tempContent }}</section>
    </div>
    <div class="myNote__footer text-right text-gray-500 mb-4">
      2021/08/10 12:00:00
    </div>
    <hr />
  </div>
</template>

<script>
import { inject, ref, onMounted, reactive } from 'vue';

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

    let tempContent = ref('');

    tempContent.value = `${myNote.content.substring(0, 200)}  ．．．`;

    return {
      myNote,
      addStar,
      tempContent,
    };
  },
};
</script>

<style lang="scss" scoped></style>
