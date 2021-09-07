<template>
  <div class="container box-border mx-auto">
    <transition name="fade" mode="out-in">
      <div class="mx-auto flex justify-center" v-if="!isOpen">
        <button
          class="
            bg-green-400
            transition
            duration-500
            text-white text-xl
            font-bold
            border-b-8 border-green-700
            rounded
            py-4
            px-6
            hover:bg-green-300 hover:border-green-500
          "
          @click="isOpen = !isOpen"
        >
          <i class="fas fa-plus"></i>
        </button>
        <button @click="generateNote">generate</button>
      </div>
      <div class="note border border-gray-300 rounded-3xl p-8" v-else>
        <div class="note__header mb-8">
          <div class="note__titleGroup mb-6">
            <label
              class="
                note__label
                text-gray-400
                align-middle
                mr-4
                dark:text-white
              "
              for="note__title--input"
              >標題:</label
            >
            <input
              type="text"
              class="note__title"
              id="note__title--input"
              maxlength="15"
              autocomplete="off"
              v-model="note.title"
            />
            <span class="text-red-400 ml-4" v-if="!note.title.trim() && isNull"
              >*此欄位不能為空</span
            >
          </div>
          <div class="note__tagInputGroup mb-4">
            <label
              class="
                note__label
                text-gray-400
                align-middle
                mr-4
                dark:text-white
              "
              for="note__tags--input"
              >Tags:</label
            >
            <span class="note__tagInput relative">
              <input
                type="text"
                class="note__title"
                id="note__tags--input"
                maxlength="10"
                autocomplete="off"
                v-model="tag"
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

          <div class="note__tags">
            <ul class="flex flex-wrap">
              <li
                class="
                  bg-gray-200
                  rounded-md
                  text-white
                  px-2
                  py-0.5
                  mr-4
                  dark:bg-gray-400
                "
                v-for="tag in note.tags"
                :key="note.id"
              >
                # {{ tag }}
              </li>
            </ul>
          </div>
        </div>
        <div class="note__body mb-8">
          <div class="note__input-group mb-4">
            <label class="note__label text-gray-400 dark:text-white"
              >內文:</label
            >
            <span
              class="text-red-400 ml-4"
              v-if="!note.content.trim() && isNull"
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
              text-red-700
              font-bold
              rounded
              py-2
              px-6
              mr-4
              hover:bg-red-700 hover:text-white
              dark:text-white
            "
            @click="isOpen = !isOpen"
          >
            取消
          </button>
          <button
            class="
              note__upload-btn
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
    let tag = ref('');

    const note = reactive({
      title: '',
      content: '',
      tags: [],
      stared: false,
    });

    const addTags = () => {
      if (tag.value.trim() !== '' && note.tags.length < 5) {
        note.tags.push(tag.value);
        tag.value = '';
      }
    };

    const upload = note => {
      if (!note.title.trim() || !note.content.trim()) {
        isNull.value = true;
        return;
      }
      uploadNote(note);
      note.title = note.content = '';
      isOpen.value = !isOpen;
      isNull.value = false;
    };

    // dev
    const generateNote = () => {
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          if (i % 2 === 0) {
            uploadNote(
              reactive({
                title: `TEST${i + 1}`,
                content:
                  '1. 對照 excel (左皮右機)，先橘在黃 2. 建立虛擬機(新d槽/baseVM/Less14) - 三個 e 槽皆相同(接less-xx) - less-xx/hardDisk/ - 改虛擬機名字 3. 開機 - 新增d槽 - 查ip - 回遠端桌面輸入網址 4. nodepad++ C:/xampp/apache/conf/httpd.conf - 調整讀檔順序 5. 重啟 xampp 6. 建立虛擬機(新d槽/baseVM/Less14) - 三個 e 槽皆相同(接less-xx)',
                tags: ['123', '456', '789'],
                stared: false,
                date: new Date(),
              })
            );
          } else {
            uploadNote(
              reactive({
                title: `TEST${i + 1}`,
                content:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus vero voluptatem harum, quos dignissimos consequatur fugit nesciunt aperiam perferendis rerum provident perspiciatis illo temporibus tenetur atque ex voluptatibus rem saepe qui iure. Unde reprehenderit impedit omnis? Totam dolores, accusantium blanditiis, repellat pariatur maxime perferendis necessitatibus impedit ipsa soluta corporis quia.',
                tags: ['111', '222', '333'],
                stared: false,
                date: new Date(),
              })
            );
          }
        }, 1000 * i);
      }
    };

    return {
      ...toRefs(state),
      tag,
      note,
      isOpen,
      isNull,
      addTags,
      upload,
      generateNote,
    };
  },
};
</script>

<style lang="scss" scoped>
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
