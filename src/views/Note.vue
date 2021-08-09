<template>
  <div class="container box-border mx-auto">
    <transition name="fade" mode="out-in">
      <div class="mx-auto flex justify-center" v-if="!isOpen">
        <button
          class="
            bg-green-500
            transition
            duration-500
            hover:bg-green-400
            text-white text-xl
            font-bold
            py-4
            px-6
            border-b-8 border-green-700
            hover:border-green-500
            rounded
          "
          @click="isOpen = !isOpen"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="note border border-gray-300 rounded-3xl p-8" v-else>
        <div class="note__header mb-8">
          <label class="note__label text-gray-400 align-middle mr-4"
            >標題:</label
          >
          <input type="text" class="note__title" v-model="note.title" />
          <span class="text-red-400 ml-4" v-if="!note.title && isNull"
            >*此欄位不能為空</span
          >
        </div>
        <div class="note__body mb-8">
          <div class="note__input-group mb-4">
            <label class="note__label text-gray-400">內文:</label>
            <span class="text-red-400 ml-4" v-if="!note.content && isNull"
              >*此欄位不能為空</span
            >
          </div>
          <textarea class="note__content" v-model="note.content"></textarea>
        </div>
        <div class="note__footer flex justify-end">
          <button
            class="
              note__cancel-btn
              bg-transparent
              border border-red-700
              hover:bg-red-700 hover:text-white
              text-red-700
              font-bold
              rounded
              py-2
              px-6
              mr-4
            "
            @click="isOpen = !isOpen"
          >
            取消
          </button>
          <button
            class="
              note__upload-btn
              bg-green-500
              hover:bg-green-700
              text-white
              font-bold
              rounded
              py-2
              px-6
            "
            @click="upload(note)"
          >
            上傳
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, ref, inject, toRefs } from 'vue';

export default {
  name: 'Note',
  setup() {
    const store = inject('store');
    const { state, uploadNote } = store;

    let isOpen = ref(false);
    let isNull = ref(false);

    const note = reactive({
      title: '',
      content: '',
      stared: false,
      date: new Date(),
    });

    const upload = note => {
      if (!note.title || !note.content) {
        isNull.value = true;
        return;
      }
      uploadNote(note);
      note.title = '';
      note.content = '';
      isOpen.value = !isOpen;
      isNull.value = false;
    };

    return {
      ...toRefs(state),
      note,
      isOpen,
      isNull,
      upload,
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 18rem;
  height: 2.5rem;
  border: 1px solid #c0c0c0;
  border-radius: 1rem;
  padding-left: 0.8rem;

  &:focus {
    border: 2px solid #42b883;
    outline: none;
  }
}

textarea {
  width: 85%;
  height: 35rem;
  border: 1px solid #c0c0c0;
  border-radius: 1rem;
  resize: none;
  padding: 0.8rem 0 0 0.8rem;

  &:focus {
    border: 2px solid #42b883;
    outline: none;
  }
}

.container {
  max-width: 900px;
}

// animation
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-leave-from {
  transform: translateY(20%);
}
.fade-enter-from {
  transform: translateY(20%);
}
</style>
