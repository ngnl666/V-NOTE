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
            <NoteTopBar>
                <template v-slot:edit>
                    <span
                        class="hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
                        @click="
                            setIsEdit(true);
                            setIsOpen(true);
                        "
                    >
                        <i class="fas fa-edit"></i>
                    </span>
                </template>
                <template v-slot:delete>
                    <span
                        class="hover:text-gray-500 dark:hover:text-gray-400 dark:text-white"
                        @click="setShowModal(currNote, true)"
                    >
                        <i class="far fa-trash-alt"></i>
                    </span>
                </template>
                <template v-slot:star>
                    <span class="text-yellow-400">
                        <i
                            class="far fa-star duration-200 hover:scale-125"
                            @click="addStar(currNote.id, true)"
                            v-if="!currNote.stared"
                        ></i>
                        <i
                            class="fas fa-star duration-200 hover:scale-125"
                            @click="addStar(currNote.id, false)"
                            v-else
                        ></i>
                    </span>
                </template>
            </NoteTopBar>
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
        const { state, fetchCurrNote, getTime, setShowModal, setIsEdit, addStar } = store;

        const route = useRoute();

        fetchCurrNote(route.params.id);

        return {
            ...toRefs(state),
            getTime,
            setShowModal,
            setIsEdit,
            addStar,
        };
    },
};
</script>
