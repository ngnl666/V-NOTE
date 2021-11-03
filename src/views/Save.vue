<template>
  <loading
    v-model:active="loadingStatus.isLoading"
    :can-cancel="true"
    :is-full-page="loadingStatus.fullPage"
    :blur="loadingStatus.blur"
    :loader="loadingStatus.loader"
    :color="loadingStatus.color"
  />

  <h2 class="pageTitle md:text-left md:ml-12 md:mb-0">我的收藏</h2>
  <div class="w-full mx-auto flex flex-col items-center md:w-1/2">
    <div class="w-full px-4">
      <div class="flex flex-col items-center relative">
        <div class="w-full">
          <p class="text-lg text-gray-400 text-center mb-2 dark:text-gray-300">
            Category
          </p>
          <VueMultiselect
            v-model="taggingSelected"
            :options="taggingOptions"
            :multiple="true"
            :taggable="true"
            @select="selectOption"
            @remove="removeOption"
            openDirection="bottom"
            placeholder="請選擇分類"
          />
        </div>
      </div>
    </div>
  </div>

  <section class="text-gray-600 overflow-hidden">
    <div class="container mx-auto px-8 py-24">
      <div class="-my-16 divide-y-2 divide-gray-100">
        <SaveNote v-for="i in 4" />
      </div>
    </div>
  </section>
</template>

<script>
import { inject, reactive, toRefs } from 'vue';
import VueMultiselect from 'vue-multiselect';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import SaveNote from '@/components/SaveNote.vue';

export default {
  name: 'Save',
  components: {
    VueMultiselect,
    Loading,
    SaveNote,
  },
  setup() {
    const store = inject('store');
    const { state, setLoading } = store;

    const taggingSelected = reactive([]);
    const taggingOptions = reactive(['Vue.js', 'Javascript', 'Open Source']);

    const selectOption = op => taggingSelected.push(op);

    const removeOption = op =>
      taggingSelected.splice(
        taggingSelected.findIndex(item => item === op),
        1
      );

    setLoading();

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
