<template>
  <div class="mx-auto my-8">
    <ul class="space-x-4 flex justify-center text-gray-400 dark:text-white">
      <li><router-link :to="{ name: 'Home' }">首頁</router-link></li>
      <li><router-link :to="{ name: 'all' }">所有文章</router-link></li>
      <li><router-link to="/todo">待辦事項</router-link></li>
      <li><router-link to="/new">新功能</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style lang="scss" scoped>
.router-link-active {
  @apply text-green-400;
}

li:not(:last-child)::after {
  @apply ml-4;
  content: '|';
}
</style>
