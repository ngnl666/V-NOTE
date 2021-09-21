<template>
  <div class="flex flex-col fixed top-0 right-0 pt-16 pr-16">
    <LatestNotes v-for="item in getLatestNote" :key="item.id" :note="item" />
  </div>
  <CreateNote>
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

export default {
  name: 'Home',
  components: {
    LatestNotes,
    OpenNoteBtn,
    CreateNote,
    Note,
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
