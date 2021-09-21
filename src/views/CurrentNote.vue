<template>
  <div
    class="max-w-5xl mx-auto flex justify-center space-x-12 items-center"
    v-if="!isEdit"
  >
    <loading
      v-model:active="loadingStatus.isLoading"
      :can-cancel="true"
      :is-full-page="loadingStatus.fullPage"
      :blur="loadingStatus.blur"
      :loader="loadingStatus.loader"
      :color="loadingStatus.color"
    />
    <div
      class="nextPageBtn"
      :class="{ invisible: !hasNextPage[0] }"
      @click="
        nextPage(-1);
        triggerAnimation();
      "
    >
      <i class="fas fa-chevron-left"></i>
    </div>
    <div class="w-[820px] overflow-hidden">
      <div
        class="w-full border border-gray-300 rounded-3xl p-8"
        :class="{ fadeToggle: displaying }"
      >
        <router-view> </router-view>
      </div>
    </div>
    <div
      class="nextPageBtn"
      :class="{ invisible: !hasNextPage[1] }"
      @click="
        nextPage(1);
        triggerAnimation();
      "
    >
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
  <CreateNote v-else>
    <template v-slot:note>
      <Note />
    </template>
  </CreateNote>
</template>

<script>
import { onMounted, inject, ref, toRefs, onUnmounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import CreateNote from '@/views/CreateNote.vue';
import Note from '@/components/Note.vue';

export default {
  name: 'CurrentNote',
  components: {
    Loading,
    CreateNote,
    Note,
  },
  setup() {
    const store = inject('store');
    const { state, nextPage, resetHasNextPage, setCurrNote, setLoading } =
      store;

    let displaying = ref(false);

    const triggerAnimation = () => {
      displaying.value = true;
      setTimeout(() => (displaying.value = false), 500);
    };

    setLoading();

    onMounted(() => resetHasNextPage());

    onUnmounted(() => setCurrNote(''));

    return {
      ...toRefs(state),
      triggerAnimation,
      displaying,
      nextPage,
    };
  },
};
</script>

<style scoped>
@keyframes fadeToggle {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.35;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}

.fadeToggle {
  animation: fadeToggle 0.5s ease-out;
}
</style>
