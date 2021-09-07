<template>
  <div class="container border-box mx-auto">
    <loading
      v-model:active="loadingStatus.isLoading"
      :can-cancel="true"
      :is-full-page="loadingStatus.fullPage"
      :blur="loadingStatus.blur"
      :loader="loadingStatus.loader"
      :color="loadingStatus.color"
    />

    <div class="allNote border border-gray-300 rounded-3xl p-8">
      <div class="allNote__header flex justify-between mb-8">
        <h2 class="text-2xl text-gray-400 dark:text-white">文章列表</h2>
        <span class="allNote__searchInput relative">
          <input
            type="text"
            class="
              allNote__searchBar
              input-focus
              rounded-3xl
              text-gray-400 text-center
              placeholder-gray-300
              px-16
              py-2
            "
            placeholder="請輸入關鍵字"
            v-model="currKeyword"
          />
          <span
            class="text-xl absolute right-3 pt-1.5"
            :class="{
              'text-gray-400': currKeyword,
              'text-gray-300': !currKeyword,
            }"
            @click="clearInput()"
            ><i class="far fa-times-circle"></i
          ></span>
        </span>
        <p
          class="
            text-md
            align-middle
            text-gray-400
            cursor-pointer
            dark:text-white
          "
          @click="timeSort()"
        >
          照時間順序<span class="ml-2"
            ><i
              class="allNote__arrow fas fa-arrow-up"
              :class="{ 'rotate-180': isRotate }"
            ></i
          ></span>
        </p>
      </div>
      <hr />
      <div class="border-box">
        <div v-if="!myNotes.length">
          <p class="text-3xl text-bold text-center py-8 dark:text-white">
            目前還沒有發表任何文章喔!
          </p>
          <p
            class="
              text-center text-xl text-gray-400
              underline
              hover:text-green-400
              dark:text-white
            "
          >
            <router-link to="/">回首頁</router-link>
          </p>
        </div>

        <MyNotes v-for="item in filteredNote" :key="item.id" :myNote="item" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, inject, ref, onMounted, toRefs } from 'vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import MyNotes from '@/components/MyNotes.vue';

export default {
  name: 'AllNote',
  components: {
    Loading,
    MyNotes,
  },
  setup() {
    const store = inject('store');
    const { state, SortMyNotes, setKeyword, setLoading } = store;

    const isRotate = ref(true);

    const timeSort = () => {
      isRotate.value = !isRotate.value;
      SortMyNotes(isRotate.value);
    };

    const currKeyword = computed({
      get() {
        return state.keyword;
      },
      set(value) {
        return setKeyword(value);
      },
    });

    const clearInput = () => setKeyword('');

    setLoading();

    onMounted(() => {
      SortMyNotes(isRotate.value);
    });

    return {
      ...toRefs(state),
      isRotate,
      currKeyword,
      clearInput,
      timeSort,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 900px;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: all 0.25s;
}
</style>
