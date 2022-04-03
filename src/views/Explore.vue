<template>
  <loading
    v-model:active="loadingStatus.isLoading"
    :can-cancel="true"
    :is-full-page="loadingStatus.fullPage"
    :blur="loadingStatus.blur"
    :loader="loadingStatus.loader"
    :color="loadingStatus.color"
  />
  <h2 class="pageTitle mb-8 pl-0 md:pl-16">探索</h2>
  <div class="w-full mx-auto flex flex-col items-center mb-4 md:w-1/2">
    <div class="w-full px-4">
      <div class="flex flex-col items-center relative">
        <div class="w-full">
          <p class="text-lg text-gray-400 text-center mb-2 dark:text-gray-300">
            主題
          </p>
          <VueMultiselect
            v-model="taggingSelected"
            :options="taggingOptions"
            :multiple="true"
            :taggable="true"
            @select="selectOption"
            @remove="removeOption"
            openDirection="bottom"
            placeholder="請選擇主題"
          />
        </div>
      </div>
    </div>
  </div>
  <section class="w-full">
    <ExploreNote
      v-for="item in filteredSharedNote"
      :key="item._id"
      :note="item"
    />
  </section>
  <div class="sentinel"></div>
</template>

<script>
import { inject, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
import VueMultiselect from 'vue-multiselect';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import ExploreNote from '@/components/ExploreNote.vue';

export default {
  name: 'Explore',
  components: {
    ExploreNote,
    VueMultiselect,
    Loading,
  },
  setup() {
    const store = inject('store');
    const {
      state,
      getPaginate,
      setSelectedTags,
      setNewPost,
      removeShareNotes,
    } = store;

    let taggingSelected = ref([]);
    let taggingOptions = ref([]);
    let page = 0;
    let target;
    let timeout = null;

    const selectOption = op => {
      taggingSelected.value = [...new Set([...taggingSelected.value, op])];
    };

    const removeOption = op => {
      taggingSelected.value = [...taggingSelected.value].splice(
        [...taggingSelected.value].findIndex(item => item === op),
        1
      );
    };

    const getOption = () => {
      state.shareNotes.forEach(item => {
        taggingOptions.value = [
          ...new Set([...taggingOptions.value, ...item.Notes[0].tags]),
        ];
      });
    };

    const callback = async (entries, observer) => {
      if (timeout === null) {
        if (entries[0].isIntersecting && page && state.newPost) {
          await getPaginate(page);
          page++;
          getOption();

          timeout = setTimeout(() => (timeout = null), 1000);
        }
      }
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0,
      rootMargin: '10px',
    });

    watch(taggingSelected, (taggingSelected, old) => {
      setSelectedTags(taggingSelected);
    });

    onMounted(async () => {
      await getPaginate(page);
      await getOption();
      target = document.querySelector('.sentinel');
      observer.observe(target);
      page++;
    });

    onUnmounted(() => {
      removeShareNotes();
      setSelectedTags([]);
      setNewPost(true);
      observer.unobserve(target);
    });

    return {
      ...toRefs(state),
      selectOption,
      removeOption,
      taggingSelected,
      taggingOptions,
    };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
