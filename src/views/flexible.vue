<template>
  <div class="box">
    <div class="vmin">vmin：根据宽度或高度的较小值当百分比的分母（20vmin*20vmin）</div>
    <div class="vmax">vmax：根据宽度或高度的较小值当百分比的分母（20vmax*20vmax）</div>
    <div class="vw-box">
      <div class="vw" v-for="(item,index) in 5" :key="index">vw: 根据宽度（20vw*20vw）</div>
    </div>
    <div class="vh">vh: 根据高度（20vh*20vh）</div>
    <div class="functions">使用sass函数</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "../styles/functions.scss";
.box {
  width: 100vw;
  height: 100vh;
  // border: 5px solid yellow;
  box-sizing: border-box;
}
.vmin {
  width: 20vmin;
  height: 20vmin;
  border: 1px solid red;
}
.vmax {
  width: 20vmax;
  height: 20vmax;
  border: 1px solid red;
}
.vw-box {
  overflow: hidden;
  .vw {
    width: 20vw;
    height: 20vw;
    border: 1px solid red;
    float: left;
    box-sizing: border-box;
  }
}
.vh {
  width: 20vh;
  height: 20vh;
  border: 1px solid red;
}
.functions {
  width: vw(20);
  height: vw(20);
  border: 1px solid red;
}
</style>
