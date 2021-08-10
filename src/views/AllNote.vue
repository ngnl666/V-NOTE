<template>
  <div class="container border-box mx-auto">
    <loading
      v-model:active="loadingStatus.isLoading"
      :can-cancel="true"
      :is-full-page="loadingStatus.fullPage"
      :blur="loadingStatus.blur"
      :loader="loadingStatus.loader"
      :color="loadingStatus.color"
    />

    <div class="allNote border border-gray-300 rounded-3xl p-8">
      <div class="allNote__header flex justify-between mb-8">
        <h2 class="text-2xl text-gray-400">文章列表</h2>
        <p
          class="text-md align-middle text-gray-400 cursor-pointer"
          @click="timeSort"
        >
          照時間順序<span class="ml-2"
            ><i
              class="allNote__arrow fas fa-arrow-down"
              :class="{ 'rotate-180': isRotate }"
            ></i
          ></span>
        </p>
      </div>
      <hr />
      <div class="border-box">
        <div v-if="!myNotes.length">
          <p class="text-3xl text-bold text-center py-8">
            目前還沒有發表任何文章喔!
          </p>
          <p
            class="
              text-center text-xl text-gray-400
              underline
              hover:text-green-400
            "
          >
            <router-link to="/">回首頁</router-link>
          </p>
        </div>

        <MyNotes v-for="item in myNotes" :key="item.id" :myNote="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { inject, ref, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import MyNotes from '@/components/MyNotes.vue';

export default {
  name: 'AllNote',
  components: {
    Loading,
    MyNotes,
  },
  setup() {
    const store = inject('store');
    const { state, setLoading } = store;

    const isRotate = ref(false);

    const timeSort = () => {
      isRotate.value = !isRotate.value;
    };

    setLoading();

    return {
      ...toRefs(state),
      isRotate,
      timeSort,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 900px;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: all 0.25s;
}
</style>
