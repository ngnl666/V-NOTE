<template>
  <div
    class="max-w-5xl mx-auto justify-center space-x-12 items-center px-2 mb-8 md:flex"
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
      v-if="isShowNextPage"
      @click="
        nextPage(-1, currNote._id);
        triggerAnimation();
      "
    >
      <i class="fas fa-chevron-left"></i>
    </div>
    <!-- phone page btn -->
    <div class="flex justify-around !ml-0 md:hidden">
      <div
        class="phone-nextPageBtn"
        v-if="isShowNextPage"
        @click="
          nextPage(-1, currNote._id);
          triggerAnimation();
        "
      >
        上一篇
        <i class="fas fa-chevron-left"></i>
      </div>
      <div
        class="phone-nextPageBtn"
        v-if="isShowNextPage"
        @click="
          nextPage(1, currNote._id);
          triggerAnimation();
        "
      >
        <i class="fas fa-chevron-right"></i>
        下一篇
      </div>
    </div>
    <!-- phone page btn end-->
    <div
      class="max-w-[820px] border border-green-300 rounded-3xl p-3 !ml-0 md:p-8 md:!ml-8"
      :class="{ fadeToggle: displaying }"
    >
      <router-view> </router-view>
    </div>
    <div
      class="nextPageBtn"
      v-if="isShowNextPage"
      @click="
        nextPage(1, currNote._id);
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
import { inject, ref, toRefs, onUnmounted } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import CreateNote from '@/views/CreateNote.vue';
import Note from '@/components/Note.vue';

export default {
  name: 'CurrentNote',
  components: {
    CreateNote,
    Loading,
    Note,
  },
  setup() {
    const store = inject('store');
    const { state, getAllNote, nextPage, setCurrNote } = store;

    let displaying = ref(false);
    let isShowNextPage =
      localStorage.getItem('isShowNextPage') === 'false' ? false : true;

    const triggerAnimation = () => {
      displaying.value = true;
      setTimeout(() => (displaying.value = false), 500);
    };

    getAllNote();

    onUnmounted(() => setCurrNote(''));

    return {
      displaying,
      nextPage,
      isShowNextPage,
      ...toRefs(state),
      triggerAnimation,
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
