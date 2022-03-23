<template>
  <div class="note border border-gray-300 rounded-3xl p-6 mb-6 md:p-8">
    <div class="mb-8">
      <div class="flex justify-between mb-6">
        <div>
          <label
            class="text-gray-400 align-middle mr-4 dark:text-white"
            for="note__title--input"
            >標題:</label
          >
          <input
            type="text"
            id="note__title--input"
            class="mt-2 inline-block"
            maxlength="15"
            autocomplete="off"
            v-model.trim="note.title"
          />
          <span
            class="text-red-400 block mt-4 md:ml-4"
            :class="{ hidden: !isNull }"
            >*此欄位不能為空</span
          >
        </div>
        <div
          class="text-3xl text-red-400 cursor-pointer animate-pulse md:pr-6"
          @click="openInfoBox"
        >
          <i class="fas fa-info-circle hover:scale-110 duration-150"></i>
        </div>
      </div>
      <div class="mb-4">
        <label
          class="text-gray-400 align-middle block mr-4 md:inline-block dark:text-white"
          for="note__tags--input"
          >Tags:</label
        >
        <span class="relative">
          <input
            type="text"
            id="note__tags--input"
            class="mt-2"
            maxlength="10"
            autocomplete="off"
            v-model.trim="tag"
            @keyup.enter="addTags()"
          />
          <span
            class="text-2xl text-green-400 absolute right-3 pt-1 mt-2"
            @click="addTags()"
            ><i class="fas fa-arrow-alt-circle-right"></i
          ></span>
          <div
            class="text-red-400 block mt-4 md:ml-4"
            v-if="note.tags.length === 5"
          >
            *最多同時擁有 5 個 tag
          </div>
        </span>
      </div>

      <ul class="flex flex-wrap">
        <li
          class="bg-gray-200 text-white rounded-md px-2 py-0.5 mr-4 mb-4 md:mb-0 dark:bg-gray-400"
          v-for="(tag, index) in note.tags"
          :key="index"
        >
          # {{ tag }}
        </li>
      </ul>
    </div>
    <div class="mb-8 md:w-10/12">
      <div class="mb-4 flex justify-between items-start">
        <label class="text-gray-400 dark:text-white"
          >內文:
          <span
            class="text-red-400 block mt-4 md:ml-4"
            :class="{ hidden: !isNull }"
            >*此欄位不能為空</span
          >
        </label>
        <div class="bg-gray-400/30 rounded-lg flex space-x-4 pr-4 py-1">
          <span class="noteUtility pl-4" @click="markup('bold')"
            ><i class="fas fa-bold"></i
          ></span>
          <span class="noteUtility" @click="markup('underline')"
            ><i class="fas fa-underline"></i
          ></span>
          <span class="noteUtility" @click="markup('quote')"
            ><i class="fas fa-quote-right"></i
          ></span>
          <span class="noteUtility">
            <label for="image"><i class="fas fa-images"></i></label
            ><input
              type="file"
              class="hidden"
              name="image"
              id="image"
              accept=".png,.jpg,.jpeg"
              ref="file"
              @change="uploadFile()"
          /></span>
        </div>
      </div>
      <textarea v-model.trim="note.content"></textarea>
      <div class="flex justify-center mt-8 flex-wrap">
        <div class="m-4 relative" v-for="item in currImage" :key="item._id">
          <i
            class="fas fa-times-circle text-xl absolute -top-4 -left-2 iconHover"
            @click="removeImg(item)"
          ></i>
          <img
            class="w-52 h-32 rounded-md shadow-2xl"
            :src="item.url"
            alt="my-image"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <button
        class="bg-transparent border border-red-700 text-red-700 font-bold rounded py-2 px-6 mr-4 hover:bg-red-700 hover:text-white dark:text-white"
        @click="
          setIsOpen(false);
          setIsEdit(false);
        "
      >
        取消
      </button>
      <button
        class="bg-green-400 text-white font-bold rounded py-2 px-6 hover:bg-green-500"
        @click="upload(note)"
      >
        上傳
      </button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, inject, toRefs, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import format from '../compositions/format.js';

import Swal from 'sweetalert2';

export default {
  name: 'Note',
  setup() {
    const store = inject('store');
    const router = useRouter();

    const {
      state,
      editNote,
      removeImg,
      removeCurrImage,
      setAlertMsg,
      setCurrImage,
      setIsEdit,
      setIsOpen,
      uploadImg,
      uploadNote,
    } = store;
    const { selectedArea, formatWord } = format;
    const file = ref(null);
    let isNull = ref(false);
    let tag = ref('');

    const note = reactive({
      _id: state.currNote._id || '',
      uid: JSON.parse(localStorage.getItem('userInfo'))?.uid || '',
      author: state.currNote.author || state.userInfo.displayName,
      title: state.currNote.title || '',
      content: state.currNote.content || '',
      tags: state.currNote.tags || [],
      stared: state.currNote.stared || false,
      image: state.currNote.image || '',
      shared: state.currNote.shared || false,
      createdAt: state.currNote.createdAt || '',
      updatedAt: state.currNote.updatedAt || '',
    });
    if (state.currNote.tags) note.tags = [...state.currNote.tags];

    const swalStyle = Swal.mixin({
      customClass: {
        confirmButton:
          'bg-gray-300 text-white rounded-xl px-4 py-3 hover:bg-gray-300/50',
        htmlContainer: '!text-gray-400',
      },
      buttonsStyling: false,
    });

    const openInfoBox = () => {
      swalStyle.fire({
        title: 'MarkDown 注意事項',
        icon: 'info',
        html: '<ul class="space-y-2"><li>1. 將要 markdown 的文字<span class="font-bold">反白</span>後選取工具列</li><li>2. 若要取消 markdown 請<span class="font-bold">一同刪除兩側</span>的註記</li></ul>',
        confirmButtonText: '我知道了',
      });
    };

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
      if (!state.userInfo.emailVerified) {
        setAlertMsg('error', '信箱驗證完成才可發文！');
        return;
      }

      state.isEdit ? editNote(note._id, note) : uploadNote(note);
      setIsOpen(false);
      setIsEdit(false);
      isNull.value = false;
      note.title = note.content = '';
    };

    const markup = type => {
      const content = document.querySelector('textarea');

      if (content.selectionStart !== content.selectionEnd) {
        const selectedWordIndex = selectedArea(
          note.content,
          content.selectionStart,
          content.selectionEnd
        );
        note.content = formatWord(note.content, selectedWordIndex, type);
      }
    };

    const uploadFile = async () => {
      await uploadImg(file.value.files[0]);
      window.scrollTo(0, document.body.scrollHeight);
    };

    onMounted(() => {
      if (!state.userInfo) {
        setAlertMsg('error', '請先登入！');
        router.push({ name: 'login' });
        return;
      }
      if (!state.userInfo.emailVerified) {
        setAlertMsg('error', '信箱驗證完成才可發文！');
      }
      openInfoBox();
      state.currNote.image ? setCurrImage(state.currNote.image) : false;
    });

    onUnmounted(() => {
      setIsEdit(false);
      removeCurrImage();
    });

    return {
      ...toRefs(state),
      addTags,
      file,
      isNull,
      markup,
      note,
      openInfoBox,
      removeImg,
      setIsEdit,
      setIsOpen,
      tag,
      upload,
      uploadFile,
    };
  },
};
</script>
