<template>
  <div class="home">
    <div class="nav" v-for="(item, index) in navs" :key="index">
      <router-link :to="item.link">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { name: "svg", link: "/svg" },
        { name: "flexible", link: "/flexible" },
        { name: "flexRem", link: "/flexRem" },
        { name: "xlsx", link: "/xlsx" },
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.home {
  display: flex;
}
.nav {
  padding: 10px;
}
</style>
