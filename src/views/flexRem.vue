<template>
  <div>
    <div class="rem">字体是rem(14)</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import '../styles/functions.scss';
.rem {
  width: rem(1020);
  height: rem(100);
  border: 2px solid red;
  font-size: rem(14);
}
</style>
