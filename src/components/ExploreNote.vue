<template>
  <div class="p-4 w-100 mx-auto md:w-3/4 lg:w-3/5">
    <router-link :to="`/current/view/${note._id}`" class="cursor-pointer">
      <div
        class="border-2 border-gray-200/60 rounded-lg overflow-hidden shadow-xl"
      >
        <img
          class="lg:h-48 md:h-36 w-full object-cover object-center"
          :src="scene"
        />
        <div class="p-6">
          <p class="text-lg font-medium text-gray-400 mb-1 dark:text-gray-300">
            {{ note.Notes[0].author }}
          </p>
          <h3 class="text-2xl font-medium text-gray-900 mb-3 dark:text-white">
            {{ note.Notes[0].title }}
          </h3>
          <p
            class="leading-relaxed mb-3 dark:text-gray-400"
            v-html="markup(tempContent)"
          ></p>
          <div class="flex flex-wrap items-center mb-4">
            <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >閱讀更多
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <span
              class="exploreAttribute"
              @click.prevent="sendLike(note._id, 1)"
              v-if="!isLiked"
            >
              <i class="far fa-heart iconHover mr-2"></i>
              {{ note.like }}
            </span>
            <span
              class="exploreAttribute text-red-500"
              @click.prevent="sendLike(note._id, -1)"
              v-if="isLiked"
            >
              <i class="fas fa-heart iconHover mr-2"></i>
              {{ note.like }}
            </span>
          </div>
          <div class="flex justify-between">
            <p class="text-gray-400 dark:text-gray-300">
              {{ getTime(note.createdAt) }}
            </p>
            <ul class="flex flex-wrap justify-end">
              <li
                class="bg-gray-200 text-white rounded-md px-1.5 py-0.25 mr-4 mb-4 md:mb-0 md:text-xl dark:bg-gray-400 dark:hover:bg-black"
                v-for="(tag, index) in note.Notes[0].tags"
                :key="index"
              >
                # {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue';
import format from '../compositions/format.js';

export default {
  name: 'ExploreNote',
  props: {
    note: {
      type: Object,
    },
  },
  setup({ note }) {
    const store = inject('store');
    const { state, getTime, likedNote, setLikedNoteList, setAlertMsg } = store;
    const { markup } = format;

    const tempContent = ref(`${note.Notes[0].content.substring(0, 200)}．．．`);
    const scenes = {
      '0.jpg':
        'https://firebasestorage.googleapis.com/v0/b/v-note-86a34.appspot.com/o/scenes%2F0.jpg?alt=media&token=5656169a-a745-47c0-8646-a01acc7fa868',
      '1.jpg':
        'https://firebasestorage.googleapis.com/v0/b/v-note-86a34.appspot.com/o/scenes%2F1.jpg?alt=media&token=308023d2-0c14-4372-a44a-aec11975f616',
      '2.jpg':
        'https://firebasestorage.googleapis.com/v0/b/v-note-86a34.appspot.com/o/scenes%2F2.jpg?alt=media&token=540e741f-fac2-48af-ae06-3671b8be2565',
    };
    const scene = scenes[note.scene];

    let isLiked = ref(false);

    const sendLike = (id, status) => {
      if (!state.userInfo) {
        setAlertMsg('error', '請先登入才可使用此功能！');
        return;
      }
      isLiked.value = !isLiked.value;

      likedNote(id, status);
      setLikedNoteList(note._id, isLiked.value);
    };

    onMounted(() => {
      const list = JSON.parse(localStorage.getItem('likedNotes')) || [];
      list.includes(note._id)
        ? (isLiked.value = true)
        : (isLiked.value = false);
    });

    return {
      markup,
      sendLike,
      getTime,
      isLiked,
      note,
      scene,
      tempContent,
    };
  },
};
</script>
