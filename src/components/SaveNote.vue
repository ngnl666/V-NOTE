<template>
  <div class="flex flex-wrap py-8 md:flex-nowrap" v-if="!loadNote">
    <div class="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
      <span class="text-gray-700 text-lg font-semibold dark:text-white"
        >Arron Su</span
      >
      <span class="text-gray-500 text-sm mt-1">2021-10-12</span>
      <ul class="flex mt-6">
        <li
          class="
            bg-gray-200
            text-white
            rounded-md
            px-2
            py-0.5
            mr-4
            hover:bg-black
            dark:bg-gray-400 dark:hover:bg-black
          "
          v-for="item in 3"
        >
          123
        </li>
      </ul>
    </div>
    <div class="md:flex-grow">
      <h2 class="text-gray-900 text-2xl font-medium mb-2 dark:text-white">
        Bitters hashtag waistcoat fashion axe chia unicorn
      </h2>
      <p class="text-gray-500 leading-relaxed dark:text-gray-400">
        Glossier echo park pug, church-key sartorial biodiesel vexillologist
        pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
        selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie
        portland craft beer.
      </p>
      <span class="text-indigo-500 inline-flex items-center mt-4"
        >閱讀更多
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </span>
    </div>
  </div>

  <div class="h-36 shadow rounded-md p-8" v-else>
    <div class="flex animate-pulse space-x-4">
      <div class="h-12 w-12 bg-gray-400 rounded-full"></div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 w-3/4 bg-gray-400 rounded"></div>
        <div class="space-y-2">
          <div class="h-4 bg-gray-400 rounded"></div>
          <div class="h-4 w-5/6 bg-gray-400 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SaveNote',
  setup() {
    let loadNote = ref(true);

    setTimeout(() => (loadNote.value = false), 1000);

    return {
      loadNote,
    };
  },
};
</script>
