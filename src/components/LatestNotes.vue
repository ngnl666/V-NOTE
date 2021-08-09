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
      "
      :class="{ fade: isFade }"
      @click.self="setAnimation(note)"
    >
      <p class="text-white font-thin">標題: {{ note.title }}</p>
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
import { reactive, ref, inject, computed, toRefs } from 'vue';
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
    const { state, addStar, setCurrNote } = store;

    const isFade = ref(false);

    const setAnimation = cur => {
      isFade.value = true;
      setTimeout(() => (isFade.value = false), 1000);
      setCurrNote(cur);
    };

    return {
      ...toRefs(state),
      isFade,
      addStar,
      note,
      setAnimation,
    };
  },
};
</script>

<style lang="scss" scoped>
.LatestNotes {
  &:hover {
    transform: scale(1.35);
    transition: 0.25s;
    margin: 1rem 0;
  }
}

// animation
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
