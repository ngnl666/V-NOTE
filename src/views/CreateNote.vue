<template>
  <div class="max-w-4xl mx-auto px-2 md:px-4">
    <transition name="fade" mode="out-in">
      <slot name="btn" v-if="!isOpen"></slot>
      <slot name="note" v-else></slot>
    </transition>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';

export default {
  name: 'CreateNote',
  setup() {
    const store = inject('store');
    const { state } = store;

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
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
