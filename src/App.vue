<template>
  <div id="app">
    <div class="darkmode absolute top-10 left-8">
      <input
        class="tgl darkBtn"
        id="darkmodeBtn"
        type="checkbox"
        v-model="darkmode"
      />
      <label class="lightLabel" for="darkmodeBtn" v-if="!darkmode"></label>
      <label class="darkLabel" for="darkmodeBtn" v-else></label>
    </div>

    <router-link to="/">
      <img class="mx-auto pt-8 mb-8" alt="Vue logo" src="./assets/logo.png" />
    </router-link>
    <h1 class="text-3xl text-center text-green-500 mt-8 mb-8">V-NOTE</h1>
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

    let darkmode = ref(localStorage.getItem('darkmode'));

    watch(
      () => darkmode.value,
      v => {
        setDarkMode(v);
      }
    );

    onMounted(() => {
      // 顯示問題
      if (darkmode.value === 'true')
        document.documentElement.classList.add('dark');
    });

    provide('store', store);

    return {
      darkmode,
    };
  },
};
</script>

<style lang="scss" scoped>
.tgl {
  @apply hidden;
  + .lightLabel,
  + .darkLabel {
    @apply outline-none block w-20 h-9 relative cursor-pointer select-none shadow-xl text-center;

    &:after,
    &:before {
      @apply block relative w-3/6 h-full;
      content: '';
    }

    &:before {
      @apply hidden;
    }

    &:after {
      @apply left-0;
    }
  }

  &:checked + .lightLabel:after,
  &:checked + .darkLabel:after {
    @apply left-2/4;
  }
}
.darkBtn {
  + .lightLabel,
  + .darkLabel {
    @apply bg-white rounded-3xl p-0.5;
    transition: all 0.4s ease;
    border: 1px solid #e8eae9;

    &:after {
      @apply bg-white pt-0.5 rounded-3xl;
      content: '☀️';
      transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        padding 0.3s ease, margin 0.3s ease;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    }

    &:hover:after {
      will-change: padding;
    }

    &:active {
      box-shadow: inset 0 0 0 2em #e8eae9;
    }
  }

  + .darkLabel {
    &:after {
      @apply text-yellow-400;
      content: '☾';
    }
  }

  &:checked + .lightLabel,
  &:checked + .darkLabel {
    @apply bg-green-300;

    &:active {
      @apply shadow-none;
    }
  }
}
</style>
