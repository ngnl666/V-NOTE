<template>
  <div class="container box-border mx-auto my-8">
    <ul class="sidebar flex justify-center text-gray-400">
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/all">所有文章</router-link></li>
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
.sidebar {
  li {
    padding: 0 0.5rem;

    .router-link-active {
      color: #48bb78;
    }
  }
  li:not(:last-child)::after {
    content: '|';
    margin-left: 1rem;
  }
}
</style>
