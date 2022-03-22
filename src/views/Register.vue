<template>
  <div
    class="w-10/12 md:w-1/2 lg:w-4/12 bg-gray-100 rounded-2xl shadow-lg shadow-indigo-500/50 mx-auto mt-28 pt-12 pb-4 relative dark:bg-gray-500"
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
      REGISTER
    </h2>
    <div class="w-10/12 mx-auto relative mb-4">
      <label class="p-2 pl-4 rounded-full absolute" for="user_name"
        ><i class="fas fa-pen text-purple-300"></i
      ></label>
      <input
        class="w-full pl-10 focus:border-purple-500"
        type="text"
        name="name"
        id="user_name"
        autocomplete="off"
        placeholder="your name"
        required
        v-model="username"
        @blur="validateName"
      />
      <span class="text-red-400">{{ msg['username'] }}</span>
    </div>
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
        @blur="validateEmail"
      />
      <span class="text-red-400">{{ msg['email'] }}</span>
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
        @blur="validatePassword"
      />
      <span class="text-red-400">{{ msg['password'] }}</span>
    </div>
    <p
      class="underline text-gray-500 text-center cursor-pointer hover:text-blue-400 dark:text-white"
      @click="loginWithDemoAccount"
    >
      使用測試帳號登入(demo)
    </p>
  </div>
  <div
    class="w-8/12 md:w-2/6 lg:w-3/12 bg-gray-300 rounded-xl cursor-pointer mx-auto mb-10 -mt-2 py-2 hover:bg-gray-100"
  >
    <p
      class="text-center text-white font-bold dark:text-black"
      @click="register()"
    >
      註冊
    </p>
  </div>
</template>

<script>
import { inject, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { createAccount } from '@/compositions/auth';

export default {
  name: 'Register',
  setup() {
    const store = inject('store');
    const router = useRouter();
    const { state, setAlertMsg, loginWithDemoAccount } = store;

    let username = ref('');
    let email = ref('');
    let password = ref('');
    let msg = ref([]);

    const validateName = () => {
      if (!username.value || username.value.length > 10) {
        msg.value['username'] = '使用者名稱不得為空或大於8個字元';
      } else {
        msg.value['username'] = '';
      }
    };

    const validateEmail = () => {
      if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        msg.value['email'] = '請輸入正確的電子郵件地址';
      } else {
        msg.value['email'] = '';
      }
    };

    const validatePassword = () => {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
        msg.value['password'] = '密碼至少需為8個英文數字';
      } else {
        msg.value['password'] = '';
      }
    };

    const register = async () => {
      if (
        msg.value['username'] === '' &&
        msg.value['email'] === '' &&
        msg.value['password'] === ''
      ) {
        const res = await createAccount(
          email.value,
          password.value,
          username.value
        );
        if (res.type === 'success') {
          setAlertMsg(res.type, res.msg);
          router.push({ name: 'login' });
        } else {
          setAlertMsg(res.type, res.msg);
        }
      } else {
        validateName();
        validateEmail();
        validatePassword();
      }
    };

    return {
      ...toRefs(state),
      register,
      validateName,
      validateEmail,
      validatePassword,
      loginWithDemoAccount,
      username,
      email,
      password,
      msg,
    };
  },
};
</script>
