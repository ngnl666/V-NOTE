<template>
  <div id="app box-border">
    <router-link to="/">
      <img class="mx-auto pt-8 mb-8" alt="Vue logo" src="./assets/logo.png" />
    </router-link>
    <h1 class="text-3xl text-center text-green-500 mt-8 mb-8">V-NOTE</h1>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import { provide } from 'vue';

import store from '@/compositions/store';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    provide('store', store);
  },
};
</script>
