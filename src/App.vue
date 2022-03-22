<template>
  <div id="app" @click.self="dropdown = false">
    <AlertMsg v-if="alertMsg.exist"></AlertMsg>
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
          <p v-if="userInfo.displayName">歡迎回來 {{ userInfo.displayName }}</p>
          <p v-else>請先登入</p>
        </button>
        <div
          class="w-48 bg-white rounded-md border-2 border-gray-100 shadow-xl absolute right-1 mt-4 py-2 animate__animated animate__fadeIn dark:bg-gray-700"
          v-if="dropdown"
        >
          <router-link class="dropDownItem" :to="{ name: 'all' }"
            ><i class="fas fa-book-open mr-2"></i>我的文章</router-link
          >
          <hr />
          <router-link class="dropDownItem" to="/login"
            ><i class="fas fa-sign-in-alt mr-2"></i>登入</router-link
          >
          <a class="dropDownItem cursor-pointer" @click="signOut"
            ><i class="fas fa-sign-out-alt mr-2"></i>登出</a
          >
        </div>
      </div>
    </div>
    <img
      class="logoImg mx-auto h-44 pt-8 mb-8 md:h-auto"
      src="./assets/images/logo.png"
      alt="V-NOTE"
    />
    <router-link class="max-w-xl" to="/">
      <h1 class="text-3xl text-center font-black text-green-500 my-8">
        V-NOTE
      </h1>
    </router-link>
    <NavBar />
    <router-view></router-view>
    <div
      class="goTop w-10 h-10 bg-gray-100 rounded-full cursor-pointer fixed bottom-3 right-5 transition duration-500 md:w-14 md:h-14"
      :class="{ 'bg-gray-300': !onTop }"
      @click="goTop"
    >
      <i
        class="fas fa-rocket text-xl relative top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:text-3xl"
      ></i>
    </div>
  </div>
</template>

<script>
import { watch, provide, ref, toRefs, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import '@/compositions/firebase';
import { userSignOut } from '@/compositions/auth';

import store from '@/compositions/store';
import NavBar from '@/components/NavBar.vue';
import AlertMsg from '@/components/AlertMsg.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AlertMsg,
  },
  setup() {
    const { setDarkMode, state, setAlertMsg, setUserInfo } = store;
    const router = useRouter();

    let darkmode = ref(JSON.parse(localStorage.getItem('darkmode')));
    let dropdown = ref(false);
    let onTop = ref(false);

    const goTop = () => window.scrollTo(0, 'smooth');

    const showDropdown = () => (dropdown.value = !dropdown.value);

    const signOut = async () => {
      const res = await userSignOut();
      if (res.type === 'success') {
        setAlertMsg(res.type, res.msg);
        router.push({ name: 'login' });
      } else {
        setAlertMsg(res.type, res.msg);
      }
    };

    window.addEventListener('scroll', () =>
      window.pageYOffset ? (onTop.value = false) : (onTop.value = true)
    );

    watch(
      () => darkmode.value,
      v => {
        setDarkMode(v);
      }
    );

    onMounted(() => {
      setUserInfo();
      setDarkMode(darkmode.value);
    });

    provide('store', store);

    return {
      ...toRefs(state),
      darkmode,
      dropdown,
      goTop,
      onTop,
      showDropdown,
      signOut,
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
    @apply w-20 h-9 text-lg block outline-none bg-white text-center rounded-3xl p-0.5
            relative cursor-pointer select-none shadow-xl;
    transition: all 0.4s ease;
    border: 1px solid #e8eae9;

    &:before,
    &:after {
      @apply block relative w-3/6 h-full pr-1;
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
