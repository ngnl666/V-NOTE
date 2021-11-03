<template>
  <div
    class="
      hidden
      lg:flex
      flex-col
      fixed
      top-0
      right-0
      pt-24
      pr-4
      md:pt-16
      lg:pt-32
    "
  >
    <LatestNotes v-for="item in getLatestNote" :key="item.id" :note="item" />
  </div>

  <div class="text-center hidden md:block lg:-ml-12 xl:ml-0" v-if="!isOpen">
    <ActiveChart />
  </div>

  <CreateNote class="mb-20">
    <template v-slot:btn>
      <OpenNoteBtn />
    </template>
    <template v-slot:note>
      <Note />
    </template>
  </CreateNote>
</template>

<script>
import { inject, toRefs } from 'vue';

import LatestNotes from '@/components/LatestNotes.vue';
import CreateNote from '@/views/CreateNote.vue';
import OpenNoteBtn from '@/components/OpenNoteBtn.vue';
import Note from '@/components/Note.vue';
import ActiveChart from '@/components/ActiveChart.vue';

export default {
  name: 'Home',
  components: {
    LatestNotes,
    OpenNoteBtn,
    CreateNote,
    Note,
    ActiveChart,
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
