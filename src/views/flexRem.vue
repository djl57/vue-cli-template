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
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid red;
  font-size: rem(14);
}
</style>
