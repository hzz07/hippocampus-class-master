<template>
  <div class="Header">
    <div class="header-box center">
      <span class="Header-back" @click="routerback"></span>
      <span class="Header-title">{{this.$route.meta.title}}</span>
      <div class="Header-details-box" v-if="this.$route.path=='/classDetails'">
        <span class="ico-buyCar"></span>
        <router-link tag="span" class="ico-share" to="/sharePage"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    routerback() {
      this.$router.back(-1);
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .Header{
    background: $color-theme;
    .header-box{
      position: relative;
      text-align: center;
      .Header-back{
        position: absolute;
        @include mix-ico-back;
        left: 0;
        top: 50%;
        margin-top: px2rem(-17.5px);
      }
      .Header-title{
        line-height: px2rem(80px);
        color: $color-text;
        font-size: $font-size-medium-x;
      }
      .Header-details-box{
        position: absolute;
        top: 0;
        right: 0;
        margin-top: px2rem(21px);
        .ico-buyCar{
          @include mix-ico-buyCar;
          margin-right: px2rem(30px);
        }
        .ico-share{
          @include mix-ico-share;
        }
      }
    }
  }

</style>