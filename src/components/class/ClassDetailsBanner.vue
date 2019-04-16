<template>
  <div class="ClassDetailsBanner">
    <div class="center">
      <div class="ClassDetailsBanner-box">
        <img src="" class="Banner-img" alt="">
      </div>
      <div class="Banner-title">
        <span class="title1">初中物理</span>
        <span class="title2">第十章浮力视频课程</span>
      </div>
      <div class="Banner-buyNumber clearFix">
        <span class="flowLeft">视频教学课程</span>
        <span class="flowRight">42343人已购买</span>
      </div>
      <div class="Banner-money">
        <span class="newMoney">￥299</span>
        <span class="oldMoney">￥399</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassDetailsBanner'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .ClassDetailsBanner{
    background: #ffffff;
    .ClassDetailsBanner-box{
      width: 100%;
      height: 0;
      padding-bottom: 56.23%;
      overflow: hidden;
      border-radius: px2rem(8px);
      background-color: lightsalmon;
      margin: px2rem(30px) 0;
      Banner-img{
        width: 100%;
      }
    }
    .Banner-title{
      span{
        display: inline-block;
        line-height: px2rem(40px);
        font-size: px2rem(30px);
        vertical-align: middle;
      }
      .title1{
        margin-right: px2rem(6px);
      }
    }
    .Banner-buyNumber{
      span{
        display: inline-block;
        line-height: px2rem(56px);
        font-size: px2rem(26px);
        color: #666666;
      }
    }
    .Banner-money{
      padding-bottom: px2rem(25px);
      margin-bottom: px2rem(20px);
      span{
        display: inline-block;
        font-size: px2rem(28px);
        color: #999999;
        line-height: px2rem(62px);
        vertical-align: middle;
      }
      .newMoney{
        font-size: px2rem(32px);
        color: $color-theme;
      }
    }
  }
</style>