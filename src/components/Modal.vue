<template>
  <teleport to="#app">
    <div
      class="w-full h-screen bg-black/10 z-40 fixed top-0"
      @click="setShowModal(currNote, false)"
    >
      <div
        class="flex w-[350px] bg-white shadow-md rounded-lg overflow-hidden z-50 absolute top-1/3 left-1/2 -translate-x-2/4"
      >
        <div class="w-2 bg-red-500"></div>
        <div class="relative pl-2.5 py-3">
          <p class="text-xl font-bold mb-2">
            確定要刪除 <span class="text-red-500">{{ currNote.title }}</span>
          </p>
          <span
            class="text-lg text-gray-500 cursor-pointer absolute top-1.5 right-0"
            @click="setShowModal(currNote, false)"
            ><i class="far fa-times-circle duration-150 hover:rotate-90"></i
          ></span>
          <div class="flex box-border">
            <p class="text-gray-600 text-md mr-16">刪除後將無法復原</p>
            <div class="space-x-2">
              <button
                class="modalBtn bg-gray-200 hover:bg-gray-100"
                @click="setShowModal(currNote, false)"
              >
                取消
              </button>
              <button
                class="modalBtn bg-red-500 text-white hover:bg-red-400"
                @click="deleteOneNote(currNote)"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {
  name: 'Modal',
  setup() {
    const store = inject('store');
    const { state, deleteOneNote, setShowModal } = store;

    return {
      ...toRefs(state),
      deleteOneNote,
      setShowModal,
    };
  },
};
</script>
