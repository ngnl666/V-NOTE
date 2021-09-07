<template>
  <div class="container box-border mx-auto my-8">
    <ul class="sidebar flex justify-center text-gray-400 dark:text-white">
      <li class="px-2"><router-link to="/">首頁</router-link></li>
      <li class="px-2"><router-link to="/all">所有文章</router-link></li>
      <li class="px-2"><router-link to="/todo">待辦事項</router-link></li>
      <li class="px-2"><router-link to="/new">新功能</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
.sidebar {
  .router-link-active {
    @apply text-green-400;
  }

  li:not(:last-child)::after {
    @apply ml-4;
    content: '|';
  }
}
</style>
