<template>
  <div class="note border border-gray-300 rounded-3xl p-8">
    <div class="mb-8">
      <div class="mb-6">
        <label
          class="text-gray-400 align-middle mr-4 dark:text-white"
          for="note__title--input"
          >標題:</label
        >
        <input
          type="text"
          id="note__title--input"
          maxlength="15"
          autocomplete="off"
          v-model.trim="note.title"
        />
        <span class="text-red-400 ml-4" :class="{ hidden: !isNull }"
          >*此欄位不能為空</span
        >
      </div>
      <div class="mb-4">
        <label
          class="text-gray-400 align-middle mr-4 dark:text-white"
          for="note__tags--input"
          >Tags:</label
        >
        <span class="relative">
          <input
            type="text"
            id="note__tags--input"
            maxlength="10"
            autocomplete="off"
            v-model.trim="tag"
            @keyup.enter="addTags()"
          />
          <span
            class="text-2xl text-green-400 absolute right-3 pt-1"
            @click="addTags()"
            ><i class="fas fa-arrow-alt-circle-right"></i
          ></span>
          <div class="text-red-400 ml-4" v-if="note.tags.length === 5">
            *最多同時擁有 5 個 tag
          </div>
        </span>
      </div>

      <ul class="flex flex-wrap">
        <li
          class="
            bg-gray-200
            text-white
            rounded-md
            px-2
            py-0.5
            mr-4
            dark:bg-gray-400
          "
          v-for="(tag, index) in note.tags"
          :key="index"
        >
          # {{ tag }}
        </li>
      </ul>
    </div>
    <div class="mb-8">
      <div class="mb-4">
        <label class="text-gray-400 dark:text-white">內文:</label>
        <span class="text-red-400 ml-4" :class="{ hidden: !isNull }"
          >*此欄位不能為空</span
        >
      </div>
      <textarea v-model.trim="note.content"></textarea>
    </div>
    <div class="flex justify-end">
      <button
        class="
          bg-transparent
          border border-red-700
          text-red-700
          font-bold
          rounded
          py-2
          px-6
          mr-4
          hover:bg-red-700 hover:text-white
          dark:text-white
        "
        @click="
          setIsOpen(false);
          setIsEdit(false);
        "
      >
        取消
      </button>
      <button
        class="
          bg-green-400
          text-white
          font-bold
          rounded
          py-2
          px-6
          hover:bg-green-500
        "
        @click="upload(note)"
      >
        上傳
      </button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, inject, toRefs, onUnmounted } from 'vue';

export default {
  name: 'Note',
  setup() {
    const store = inject('store');
    const { state, uploadNote, setIsOpen, setIsEdit, editNote } = store;

    let isNull = ref(false);
    let tag = ref('');

    const note = reactive({
      title: state.currNote.title || '',
      content: state.currNote.content || '',
      tags: state.currNote.tags || [],
      stared: state.currNote.stared || false,
      id: state.currNote.id || '',
      date: state.currNote.date || null,
    });
    if (state.currNote.tags) note.tags = [...state.currNote.tags];

    const addTags = () => {
      if (tag.value && note.tags.length < 5) {
        note.tags.push(tag.value);
      }
      tag.value = '';
    };

    const upload = note => {
      if (!note.title || !note.content) {
        isNull.value = true;
        window.scrollTo({
          top: document.querySelector('.note').offsetTop - 20,
          behavior: 'smooth',
        });
        return;
      }

      state.isEdit ? editNote(note) : uploadNote(note);
      setIsOpen(false);
      setIsEdit(false);
      isNull.value = false;
      note.title = note.content = '';
    };

    onUnmounted(() => {
      setIsEdit(false);
    });

    return {
      ...toRefs(state),
      tag,
      note,
      isNull,
      addTags,
      setIsOpen,
      setIsEdit,
      upload,
    };
  },
};
</script>
