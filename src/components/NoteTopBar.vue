<template>
    <div class="space-x-4">
        <span class="hover:text-gray-500 dark:hover:text-gray-400 dark:text-white">
            <i class="fas fa-edit"></i>
        </span>
        <span class="hover:text-gray-500 dark:hover:text-gray-400 dark:text-white" @click="deleteMyNote(myNote.id)">
            <i class="far fa-trash-alt"></i>
        </span>
        <span class="text-yellow-400">
            <!-- 不會動態更換 -->
            <i class="far fa-star" @click="addStar(myNote.id, true)" v-if="!myNote.stared"></i>
            <i class="fas fa-star" @click="addStar(myNote.id, false)" v-else></i>
        </span>
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    name: 'NoteTopBar',
    props: {
        myNote: {
            type: Object,
        },
    },
    setup({ myNote }) {
        const store = inject('store');
        const { addStar, deleteMyNote } = store;

        return {
            myNote,
            addStar,
            deleteMyNote,
        };
    },
};
</script>
