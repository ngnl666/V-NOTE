<template>
  <div class="max-w-4xl mx-auto px-2 md:px-6">
    <div class="border border-gray-300 rounded-3xl p-8">
      <div class="mb-4 justify-between md:flex md:mb-8">
        <h2 class="pageTitle">文章列表</h2>
        <div class="flex justify-center">
          <div class="relative mb-4 md:mb-0">
            <input
              type="text"
              class="text-gray-400 text-center placeholder-gray-300 input-focus rounded-3xl px-16 py-2"
              placeholder="請輸入關鍵字"
              v-model="currKeyword"
            />
            <span
              class="text-xl cursor-pointer absolute right-3 pt-1.5"
              :class="{
                'text-gray-400': currKeyword,
                'text-gray-300': !currKeyword,
              }"
              @click="clearInput()"
              ><i class="far fa-times-circle duration-150 hover:rotate-90"></i
            ></span>
          </div>
          <span
            class="text-yellow-400 ml-6 pt-1.5 md:text-xl active:scale-125"
            @click="setKeyword('★')"
            ><i class="fas fa-star"></i
          ></span>
        </div>
        <p
          class="text-md text-gray-400 cursor-pointer pt-2 text-right md:text-lg md:text-center dark:text-white"
          @click="timeSort()"
        >
          照時間順序<span class="ml-2"
            ><i
              class="fas fa-arrow-up duration-200"
              :class="{ 'rotate-180': isRotate }"
            ></i
          ></span>
        </p>
      </div>
      <hr />
      <MyNotes v-for="item in filteredNote" :key="item._id" :myNote="item" />
      <div class="text-center" v-if="!myNotes.length">
        <p class="reminder">目前還沒有發表任何文章喔!</p>
        <router-link class="homeBtn" to="/">回首頁</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, inject, ref, onMounted, toRefs } from 'vue';

import MyNotes from '@/components/MyNotes.vue';

export default {
  name: 'AllNote',
  components: {
    MyNotes,
  },
  setup() {
    const store = inject('store');
    const { state, getAllNote, setKeyword, sortMyNotes } = store;

    const isRotate = ref(true);

    const currKeyword = computed({
      get() {
        return state.keyword;
      },
      set(value) {
        return setKeyword(value.replace(/[^\w\s]/gi, ''));
      },
    });

    const clearInput = () => setKeyword('');

    const timeSort = () => {
      isRotate.value = !isRotate.value;
      sortMyNotes(isRotate.value);
    };

    onMounted(async () => {
      await getAllNote();
    });

    return {
      ...toRefs(state),
      clearInput,
      currKeyword,
      isRotate,
      setKeyword,
      timeSort,
    };
  },
};
</script>
