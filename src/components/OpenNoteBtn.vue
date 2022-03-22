<template>
  <div class="mx-auto flex justify-center mb-8">
    <button
      class="bg-green-400 text-white text-xl font-bold border-b-8 border-green-700 transition duration-500 rounded animate-pulse py-4 px-6 hover:bg-green-300 hover:border-green-500"
      @click="setIsOpen(true)"
    >
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>
<script>
import { inject } from 'vue';

export default {
  name: 'OpenNoteBtn',
  setup() {
    const store = inject('store');
    const { setIsOpen } = store;

    return {
      setIsOpen,
    };
  },
};
</script>
