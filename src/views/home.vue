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
      navs: [{ name: "svg", link: "/svg" }, { name: "map01", link: "/map01" }]
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
