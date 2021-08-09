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
      <h2 class="text-2xl text-gray-400 mb-8">文章列表</h2>
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
import { inject, toRefs } from 'vue';
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

    setLoading();

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 900px;
}
</style>
