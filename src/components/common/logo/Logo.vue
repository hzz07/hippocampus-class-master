<template>
  <div class="Logo logo1" v-if="showLogo===1">
    <img src="../../../assets/images/logo1.png" alt="">
  </div>
  <div class="Logo logo2" v-else-if="showLogo===2">
    <img src="../../../assets/images/logo2.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    showLogo: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .Logo {
    width: px2rem(200px);
    height: px2rem(0px);
    padding-bottom: 27%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .logo1{
    margin: px2rem(188px) auto 0 auto;
  }
  .logo2{
    margin: px2rem(65px) auto 0 auto;
  }
</style>