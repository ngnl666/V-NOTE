<template>
    <div class="flex flex-col fixed top-0 right-0 pt-16 pr-16">
        <LatestNotes v-for="item in getLatestNote" :key="item.id" :note="item" />
    </div>
    <Note />
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
