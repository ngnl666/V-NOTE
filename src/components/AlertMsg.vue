<template>
  <div
    class="p-4 rounded-xl fixed right-5 bottom-5 z-50 animate-bounce"
    :class="{
      'bg-green-200': alertMsg.type === 'success',
      'bg-red-300': alertMsg.type === 'error',
    }"
  >
    <span class="text-white">{{ alertMsg.msg }}</span>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {
  name: 'AlertMsg',
  setup() {
    const store = inject('store');
    const { state } = store;

    return {
      ...toRefs(state),
    };
  },
};
</script>
