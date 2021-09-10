<template>
    <div class="px-4">
        <div class="mb-8">
            <h3 class="text-3xl dark:text-white">
                {{ currNote.title }}
            </h3>
            <p class="text-gray-400 font-extralight mt-4">
                {{ getTime(currNote.date) }}
            </p>
        </div>
        <div class="font-light tracking-wide leading-8 dark:text-white">
            {{ currNote.content }}
        </div>
    </div>
</template>

<script>
import { inject, watch, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'View',
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
