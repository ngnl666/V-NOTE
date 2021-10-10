<template>
  <div id="app">
    <div class="flex justify-between pt-8 px-8">
      <div>
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
      <div class="relative z-50">
        <button
          class="border-2 rounded-2xl cursor-pointer px-4 py-2 dark:text-white"
          @click="showDropdown"
        >
          歡迎回來 Arron
        </button>
        <div
          class="
            w-48
            bg-white
            rounded-md
            border-2 border-gray-100
            shadow-xl
            absolute
            right-1
            mt-4
            py-2
            animate__animated animate__fadeIn
            dark:bg-gray-700
          "
          v-if="dropdown"
        >
          <router-link class="dropDownItem" :to="{ name: 'all' }"
            ><i class="fas fa-book-open mr-2"></i>我的文章</router-link
          >
          <hr />
          <router-link class="dropDownItem" to="/signin"
            ><i class="fas fa-sign-in-alt mr-2"></i>登入</router-link
          >
          <router-link class="dropDownItem" to="/signout"
            ><i class="fas fa-sign-out-alt mr-2"></i>登出</router-link
          >
        </div>
      </div>
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
    let dropdown = ref(false);

    const showDropdown = () => (dropdown.value = !dropdown.value);

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
      showDropdown,
      dropdown,
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
