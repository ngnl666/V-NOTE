<template>
  <loading
    v-model:active="loadingStatus.isLoading"
    :can-cancel="true"
    :is-full-page="loadingStatus.fullPage"
    :blur="loadingStatus.blur"
    :loader="loadingStatus.loader"
    :color="loadingStatus.color"
  />
  <div
    class="w-10/12 md:w-1/2 lg:w-4/12 bg-gray-100 rounded-2xl shadow-lg shadow-indigo-500/50 mx-auto mt-20 pt-12 pb-4 relative dark:bg-gray-500"
  >
    <div
      class="w-24 h-24 bg-purple-300 opacity-90 rounded-full absolute -top-1/4 right-1/2 translate-x-1/2 dark:bg-white"
    >
      <span
        class="text-5xl text-indigo-600 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
        ><i class="fas fa-user"></i
      ></span>
    </div>
    <h2 class="text-center text-xl tracking-wider mb-6 dark:text-white">
      LOGIN
    </h2>
    <div class="w-10/12 mx-auto relative mb-4">
      <label class="p-2 pl-4 rounded-full absolute" for="user_email"
        ><i class="fas fa-envelope text-purple-300"></i
      ></label>
      <input
        class="w-full pl-10 focus:border-purple-500"
        type="email"
        name="email"
        id="user_email"
        autocomplete="off"
        placeholder="email"
        required
        v-model="email"
      />
    </div>
    <div class="w-10/12 mx-auto relative mb-6">
      <label class="p-2 pl-4 rounded-full absolute" for="user_password"
        ><i class="fas fa-lock text-purple-300"></i
      ></label>
      <input
        class="w-full pl-10 focus:border-purple-500"
        type="password"
        name="password"
        id="user_password"
        placeholder="password"
        required
        v-model="password"
      />
    </div>
    <div class="flex justify-around">
      <p
        class="underline text-gray-500 cursor-pointer hover:text-blue-400 dark:text-white"
        @click="loginWithDemoAccount"
      >
        使用測試帳號登入(demo)
      </p>
      <router-link
        class="underline text-gray-500 cursor-pointer hover:text-blue-400 dark:text-white"
        :to="{ name: 'register' }"
      >
        註冊
      </router-link>
    </div>
  </div>
  <div
    class="w-8/12 md:w-2/6 lg:w-3/12 bg-gray-300 rounded-xl cursor-pointer mx-auto mb-10 -mt-2 py-2 hover:bg-gray-100"
    @click="login(email, password)"
  >
    <p class="text-center text-white font-bold dark:text-black">登入</p>
  </div>
</template>

<script>
import { inject, ref, toRefs, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { signIn } from '@/compositions/auth';

export default {
  name: 'Login',
  components: {
    Loading,
  },
  setup() {
    const store = inject('store');
    const router = useRouter();
    const { state, setAlertMsg, setIsLoading, loginWithDemoAccount } = store;

    let email = ref('');
    let password = ref('');

    const login = async (email, password) => {
      if (!email || !password) {
        setAlertMsg('error', '帳號密碼不得為空！');
        return;
      }
      const res = await signIn(email, password);
      if (!res?.type) {
        setAlertMsg('success', '登入成功！');
        router.push({ name: 'Home' });
      } else {
        setAlertMsg(res.type, res.msg);
      }
    };

    onMounted(() => {
      setIsLoading();
      window.scrollTo(0, document.body.scrollHeight);
    });

    return {
      ...toRefs(state),
      login,
      loginWithDemoAccount,
      email,
      password,
    };
  },
};
</script>
