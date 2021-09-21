<template>
  <div id="app">
    <div class="absolute top-10 left-8">
      <input
        class="controlBtn"
        id="darkmodeBtn"
        type="checkbox"
        v-model="darkmode"
      />
      <label
        class="controlLabel after:content-[attr(data-content)]"
        data-content="☀️"
        for="darkmodeBtn"
      ></label>
    </div>
    <router-link class="max-w-xl" to="/">
      <img
        class="logoImg mx-auto pt-8 mb-8"
        src="./assets/images/logo.png"
        alt="V-NOTE"
      />
      <h1 class="text-3xl text-center font-black text-green-500 my-8">
        V-NOTE
      </h1>
    </router-link>
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import { watch, provide, ref, onMounted } from 'vue';

import store from '@/compositions/store';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const { setDarkMode } = store;

    let darkmode = ref(JSON.parse(localStorage.getItem('darkmode')));

    watch(
      () => darkmode.value,
      v => {
        setDarkMode(v);
      }
    );

    onMounted(() => {
      setDarkMode(darkmode.value);
    });

    provide('store', store);

    return {
      darkmode,
    };
  },
};
</script>

<style lang="scss" scoped>
.controlBtn {
  @apply hidden;

  &:checked + .controlLabel {
    @apply bg-green-300;

    &:after {
      @apply left-2/4;
    }
  }

  + .controlLabel {
    @apply w-20 h-9 block outline-none bg-white text-center rounded-3xl p-0.5 
            relative cursor-pointer select-none shadow-xl;
    transition: all 0.4s ease;
    border: 1px solid #e8eae9;

    &:before,
    &:after {
      @apply block relative w-3/6 h-full;
    }

    &:before {
      @apply hidden;
    }

    &:after {
      @apply bg-white rounded-3xl pt-0.5 left-0;
      transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        padding 0.3s ease, margin 0.3s ease;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    &:active {
      box-shadow: inset 0 0 0 2em #e8eae9;
    }
  }
}
</style>
