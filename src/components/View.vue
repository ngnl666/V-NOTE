<template>
    <div class="px-4">
        <div class="flex justify-between mb-8">
            <div>
                <h3 class="text-3xl dark:text-white">
                    {{ currNote.title }}
                </h3>
                <p class="text-gray-400 font-extralight mt-4">
                    {{ getTime(currNote.date) }}
                </p>
            </div>
            <NoteTopBar :myNote="currNote" />
        </div>
        <div class="font-light tracking-wide leading-8 dark:text-white">
            {{ currNote.content }}
        </div>
    </div>
</template>

<script>
import { inject, toRefs } from 'vue';
import { useRoute } from 'vue-router';

import NoteTopBar from '@/components/NoteTopBar.vue';

export default {
    name: 'View',
    components: {
        NoteTopBar,
    },
    setup() {
        const store = inject('store');
        const { state, fetchCurrNote, getTime } = store;

        const route = useRoute();

        fetchCurrNote(route.params.id);

        return {
            ...toRefs(state),
            getTime,
        };
    },
};
</script>
