<template>
  <div class="max-w-4xl mx-auto px-2 md:px-4">
    <transition name="faded" mode="out-in">
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
.faded-enter-active,
.faded-leave-active {
  transition: 1s;
}
.faded-enter-from,
.faded-leave-to {
  opacity: 0;
}
.faded-enter-to,
.faded-leave-from {
  opacity: 1;
}
.faded-leave-from {
  transform: translateY(20%);
}
.faded-enter-from {
  transform: translateY(20%);
}
</style>
