<template>
  <h2 class="pageTitle mb-8 pl-0 md:pl-16">探索</h2>
  <section class="w-full">
    <ExploreNote />
    <ExploreNote />
    <ExploreNote />
    <ExploreNote />
  </section>
</template>

<script>
import ExploreNote from '@/components/ExploreNote.vue';

export default {
  name: 'Explore',
  components: {
    ExploreNote,
  },
};
</script>
