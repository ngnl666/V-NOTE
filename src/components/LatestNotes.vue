<template>
  <div class="w-48 p-4 animate__animated animate__backInDown xl:w-56">
    <div
      class="bg-gradient-to-br from-green-400 to-green-200 text-white flex justify-between rounded-xl shadow-xl cursor-pointer p-4 hover:scale-125 hover:duration-300 hover:my-4"
      :class="{ fade: isFade }"
      @click.self="goToNote(note._id)"
    >
      <p
        class="text-md font-extralight lg:text-lg"
        @click.self="goToNote(note._id)"
      >
        標題: {{ note.title }}
      </p>
      <span>
        <i
          class="far fa-star iconHover"
          @click="addStar(note._id, true)"
          v-if="!note.stared"
        ></i>
        <i
          class="fas fa-star iconHover"
          @click="addStar(note._id, false)"
          v-else
        ></i>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, inject, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import 'animate.css';

export default {
  name: 'LatestNotes',
  props: {
    note: {
      type: Object,
    },
  },
  setup(props) {
    const store = inject('store');
    const router = useRouter();
    const { state, addStar } = store;

    const note = toRefs(props).note;
    const isFade = ref(false);

    const goToNote = id => {
      isFade.value = true;
      setTimeout(() => {
        isFade.value = false;
        router.push({ path: `/current/view/${id}` });
      }, 750);
    };

    return {
      addStar,
      note,
      isFade,
      ...toRefs(state),
      goToNote,
    };
  },
};
</script>

<style lang="scss" scoped>
@keyframes fadeout {
  20% {
    transform: translate(-10%, 0%);
  }
  60% {
    transform: translate(150%, 0%);
  }
  100% {
    transform: translate(150%, 0%);
    opacity: 0;
  }
}
.fade {
  animation: fadeout 0.75s ease-in;
}
</style>
