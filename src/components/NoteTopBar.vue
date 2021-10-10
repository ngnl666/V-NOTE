<template>
  <Modal v-if="showModal" />
  <div class="space-x-4">
    <slot name="edit"></slot>
    <slot name="delete"></slot>
    <slot name="star"></slot>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';

import Modal from '@/components/Modal.vue';

export default {
  name: 'NoteTopBar',
  components: {
    Modal,
  },
  setup() {
    const store = inject('store');
    const { state } = store;

    return {
      ...toRefs(state),
    };
  },
};
</script>
