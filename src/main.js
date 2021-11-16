import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/compositions/store';
import './index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'sweetalert2/dist/sweetalert2.min.css';

const { state, setIsEdit, setIsOpen } = store;

router.beforeEach((to, from) => {
  if (state.isOpen) {
    let abort = from.params.id
      ? confirm('文章尚未編輯完成，確定要離開嗎？')
      : confirm('文章尚未發布，確定要離開嗎？');

    if (!abort) return false;
  }
  setIsEdit(false);
  setIsOpen(false);
});

createApp(App).use(router).use(VueAxios, axios).mount('#app');
