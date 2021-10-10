<template>
  <loading
    v-model:active="loadingStatus.isLoading"
    :can-cancel="true"
    :is-full-page="loadingStatus.fullPage"
    :blur="loadingStatus.blur"
    :loader="loadingStatus.loader"
    :color="loadingStatus.color"
  />

  <h2 class="text-2xl text-gray-400 ml-12 dark:text-white">我的收藏</h2>
  <div class="w-full mx-auto flex flex-col items-center md:w-1/2">
    <div class="w-full px-4">
      <div class="flex flex-col items-center relative">
        <div class="w-full">
          <p class="text-lg text-gray-400 text-center dark:text-gray-300">
            Followers
          </p>
          <div class="border border-gray-200 rounded-lg flex my-2 p-1">
            <div class="flex flex-auto flex-wrap">
              <div
                class="
                  text-green-400
                  bg-green-100
                  border border-green-300
                  font-medium
                  rounded-full
                  flex
                  items-center
                  m-1
                  py-1
                  px-2
                "
                v-for="item in 3"
              >
                <div class="text-xs font-normal leading-none mr-2">HTML</div>
                <i class="fas fa-times"></i>
              </div>
              <div class="flex-1">
                <input class="h-full w-full invisible" />
              </div>
            </div>
            <div
              class="
                text-gray-300
                w-8
                py-1
                pl-2
                pr-1
                border-l
                flex
                items-center
                border-gray-200
              "
            >
              <button
                class="w-6 h-6 text-gray-600 cursor-pointer dark:text-white"
              >
                <i class="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            rounded
            max-h-select
            shadow
            z-40
            overflow-y-auto
            absolute
            top-100
          "
        >
          <div class="w-full flex flex-col">
            <div
              class="
                w-full
                bg-white
                border-gray-100 border-b
                rounded-t
                cursor-pointer
                dark:bg-gray-700 dark:text-white dark:border-gray-400
              "
              v-for="item in 6"
            >
              <div
                class="
                  w-full
                  border-transparent border-l-4
                  flex
                  relative
                  items-center
                  p-2
                  hover:border-green-200
                  dark:hover:border-green-100
                "
              >
                <div class="w-full flex items-center">
                  <div class="mx-2 leading-6">Python</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="text-gray-600 overflow-hidden">
    <div class="container mx-auto px-5 py-24">
      <div class="-my-16 divide-y-2 divide-gray-100">
        <SaveNote v-for="i in 4" />
      </div>
    </div>
  </section>
</template>

<script>
import { inject, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import SaveNote from '@/components/SaveNote.vue';

export default {
  name: 'Save',
  components: {
    Loading,
    SaveNote,
  },
  setup() {
    const store = inject('store');
    const { state, setLoading } = store;

    setLoading();

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.top-100 {
  top: 100%;
}

.max-h-select {
  max-height: 130px;
}
</style>
