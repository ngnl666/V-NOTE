<template>
  <div class="container box-border mx-auto">
    <loading
      v-model:active="loadingStatus.isLoading"
      :can-cancel="true"
      :is-full-page="loadingStatus.fullPage"
      :blur="loadingStatus.blur"
      :loader="loadingStatus.loader"
      :color="loadingStatus.color"
    />

    <div class="currentNote border border-gray-300 rounded-3xl p-8">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'CurrentNote',
  components: {
    Loading,
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
