<template>
    <div class="cursor-pointer p-4">
        <div v-if="!loadNote">
            <div class="flex justify-between px-6 mb-6">
                <h3 class="text-xl dark:text-white" v-html="highLight(myNote.title)"></h3>
                <NoteTopBar>
                    <template v-slot:edit>
                        <span class="noteTopBarIcon mr-1">
                            <i class="fas fa-share-alt"></i>
                        </span>
                    </template>
                    <template v-slot:delete>
                        <span class="noteTopBarIcon" @click="setShowModal(myNote, true)">
                            <i class="far fa-trash-alt"></i>
                        </span>
                    </template>
                    <template v-slot:star>
                        <span class="text-yellow-400">
                            <i
                                class="far fa-star duration-200 hover:scale-125"
                                @click="addStar(myNote.id, true)"
                                v-if="!myNote.stared"
                            ></i>
                            <i
                                class="fas fa-star duration-200 hover:scale-125"
                                @click="addStar(myNote.id, false)"
                                v-else
                            ></i>
                        </span>
                    </template>
                </NoteTopBar>
            </div>
            <router-link :to="`/current/view/${myNote.id}`">
                <div class="px-6 mb-8">
                    <section
                        class="break-words text-gray-500 dark:text-gray-400"
                        v-html="highLight(tempContent)"
                    ></section>
                </div>
                <div class="flex justify-between my-4">
                    <ul class="flex">
                        <li
                            class="
                                bg-gray-200
                                text-white
                                rounded-md
                                px-2
                                py-0.5
                                mr-4
                                hover:bg-black
                                dark:bg-gray-400 dark:hover:bg-black
                            "
                            v-for="tag in myNote.tags"
                            :key="tag.id"
                            @click.prevent="searchTag(tag)"
                        >
                            # {{ tag }}
                        </li>
                    </ul>
                    <div class="dark:text-white">
                        {{ getTime(myNote.date) }}
                    </div>
                </div>
                <hr />
            </router-link>
        </div>
        <div class="shadow rounded-md p-4" v-else>
            <div class="flex animate-pulse space-x-4">
                <div class="h-12 w-12 bg-gray-400 rounded-full"></div>
                <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 w-3/4 bg-gray-400 rounded"></div>
                    <div class="space-y-2">
                        <div class="h-4 bg-gray-400 rounded"></div>
                        <div class="h-4 w-5/6 bg-gray-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { inject, ref } from 'vue';

import NoteTopBar from '@/components/NoteTopBar.vue';
import Modal from '@/components/Modal.vue';

export default {
    name: 'MyNotes',
    props: {
        myNote: {
            type: Object,
        },
    },
    components: {
        NoteTopBar,
        Modal,
    },
    setup({ myNote }) {
        const store = inject('store');
        const { state, addStar, setShowModal, getTime, setKeyword } = store;

        let tempContent = ref('');
        let loadNote = ref(true);

        const highLight = val =>
            val.replace(new RegExp(state.keyword, 'g'), `<span class="text-red-400">${state.keyword}</span>`);

        const searchTag = tag => setKeyword(`#${tag}`);

        setTimeout(() => (loadNote.value = false), 1000);

        tempContent.value = `${myNote.content.substring(0, 200)}．．．閱讀更多`;

        return {
            myNote,
            tempContent,
            loadNote,
            getTime,
            addStar,
            setShowModal,
            highLight,
            searchTag,
        };
    },
};
</script>
