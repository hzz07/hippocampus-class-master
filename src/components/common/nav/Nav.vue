<template>
  <div class="Nav">
    <div class="full"></div>
    <ul class="Nav-ul">
      <router-link tag="li" to="/home" class="Nav-li">
        <div class="Nav-img-box">
          <span class="icon" :class="this.$route.path==='/home'?'iconHome2':'iconHome1'"></span>
        </div>
        <p class="Nav-word" :class="{active:this.$route.path==='/home'}">首页</p>
      </router-link>
      <router-link tag="li" to="/classList" class="Nav-li">
        <div class="Nav-img-box">
          <span class="icon iconClass1" :class="this.$route.path==='/classList'?'iconClass2':'iconClass1'"></span>
        </div>
        <p class="Nav-word" :class="{active:this.$route.path==='/classList'}">课程</p>
      </router-link>
      <router-link tag="li" to="/buy" class="Nav-li">
        <div class="Nav-img-box">
          <span class="icon iconBuy1" :class="this.$route.path==='/buy'?'iconBuy2':'iconBuy1'"></span>
        </div>
        <p class="Nav-word" :class="{active:this.$route.path==='/buy'}">购物车</p>
      </router-link>
      <router-link tag="li" to="/my" class="Nav-li">
        <div class="Nav-img-box">
          <span class="icon iconMy1" :class="this.$route.path==='/my'?'iconMy2':'iconMy1'"></span>
        </div>
        <p class="Nav-word" :class="{active:this.$route.path==='/my'}">我的</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .Nav{
    overflow: hidden;
    .full{
      height: px2rem(137px);
    }
    .Nav-ul{
      font-size: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: white;
      z-index: 2;
      .Nav-li{
        display: inline-block;
        width: 25%;
        text-align: center;
        .Nav-img-box{
          width: 100%;
          .icon{
            margin-top: px2rem(30px);
          }
          .iconHome1{
            @include mix-ico_home1;
          }
          .iconHome2{
            @include mix-ico_home2;
          }
          .iconClass1{
            @include mix-ico_class1;
          }
          .iconClass2{
            @include mix-ico_class2;
          }
          .iconBuy1{
            @include mix-ico_buy1;
          }
          .iconBuy2{
            @include mix-ico_buy2;
          }
          .iconMy1{
            @include mix-ico_my1;
          }
          .iconMy2{
            @include mix-ico_my2;
          }
        }
        p{
          font-size: $font-size-small;
          color: #999999;
          line-height: px2rem(60px);
        }
        .active{
          color: $color-theme;
        }
      }
    }
  }

</style>