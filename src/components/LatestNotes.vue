<template>
  <div
    class="container w-56 box-border p-4 animate__animated animate__backInDown"
  >
    <div
      class="
        LatestNotes
        bg-gradient-to-br
        from-green-400
        to-green-200
        flex
        justify-between
        rounded-xl
        shadow-xl
        p-4
        hover:scale-125 hover:duration-300 hover:my-4
      "
      :class="{ fade: isFade }"
      @click.self="goToNote(note.id)"
    >
      <p class="text-white font-extralight" @click.self="goToNote(note.id)">
        標題: {{ note.title }}
      </p>
      <span class="LatestNotes__star text-white">
        <i
          class="far fa-star"
          @click="addStar(note.id, true)"
          v-if="!note.stared"
        ></i>
        <i class="fas fa-star" @click="addStar(note.id, false)" v-else></i>
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
  setup({ note }) {
    // destructor props
    const store = inject('store');
    const { state, addStar } = store;

    const router = useRouter();
    const isFade = ref(false);

    const goToNote = id => {
      isFade.value = true;
      setTimeout(() => {
        isFade.value = false;
        router.push({ path: `/current/view/${id}` });
      }, 1000);
    };

    return {
      ...toRefs(state),
      isFade,
      addStar,
      note,
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
    opacity: 0;
  }
}
.fade {
  animation: fadeout 0.75s ease-in;
}
</style>
