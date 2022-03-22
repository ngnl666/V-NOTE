<template>
  <div
    class="hidden lg:flex flex-col fixed top-0 right-0 pt-24 pr-4 md:pt-16 lg:pt-32"
  >
    <LatestNotes v-for="item in getLatestNote" :key="item.id" :note="item" />
  </div>

  <div
    class="w-11/12 mx-auto mb-12 md:block md:w-1/2"
    v-if="!isOpen && myNotes[0]"
  >
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
import { inject, toRefs, onMounted } from 'vue';

import ActiveChart from '@/components/ActiveChart.vue';
import CreateNote from '@/views/CreateNote.vue';
import LatestNotes from '@/components/LatestNotes.vue';
import Note from '@/components/Note.vue';
import OpenNoteBtn from '@/components/OpenNoteBtn.vue';

export default {
  name: 'Home',
  components: {
    ActiveChart,
    CreateNote,
    LatestNotes,
    Note,
    OpenNoteBtn,
  },
  setup() {
    const store = inject('store');
    const { state, getAllNote, setCurrNote } = store;

    getAllNote();

    onMounted(() => setCurrNote(''));

    return {
      ...toRefs(state),
    };
  },
};
</script>
