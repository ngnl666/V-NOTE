<template>
  <div class="container border-box mx-auto">
    <div class="allNote border border-gray-300 rounded-3xl p-8">
      <h2 class="text-xl text-gray-400">文章列表</h2>
      <div class="border-box">
        <MyNotes />
      </div>
    </div>
  </div>
</template>
<script>
import MyNotes from '@/components/MyNotes.vue';

export default {
  name: 'AllNote',
  components: {
    MyNotes,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 900px;
}
</style>
