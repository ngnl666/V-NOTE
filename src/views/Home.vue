<template>
  <div class="home">
    <div
      class="box-border flex flex-col-reverse fixed top-0 right-0 pt-8 pr-16"
    >
      <LatestNotes v-for="item in getLatestNote" :key="item.id" :note="item" />
    </div>
    <Note />
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';

import Note from '@/views/Note.vue';
import LatestNotes from '@/components/LatestNotes.vue';

export default {
  name: 'Home',
  components: {
    Note,
    LatestNotes,
  },
  setup() {
    const store = inject('store');
    const { state } = store;

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
