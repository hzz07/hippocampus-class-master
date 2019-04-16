<template>
  <div class="ClassBottomBtn">
    <div class="full"></div>
    <div class="btn-box clearFix">
      <div class="box customer-service-box flowLeft">
        <span class="icoCustomerService1"></span>
        <p>联系客服</p>
      </div>
      <div class="box collection-box flowLeft">
        <span class="icoCollection1"></span>
        <p>收藏</p>
      </div>
      <div class="buy-box flowRight">
        <span class="to-buyCar">加入购物车</span>
        <span class="to-buy">立即购买</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassBottomBtn'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .ClassBottomBtn{
    .full{
      height: px2rem(100px);
    }
    .btn-box{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: white;
      .box{
        text-align: center;
        padding: px2rem(10px);
        width: px2rem(110px);
        .icoCustomerService1{
          @include mix-ico-consultation1;
        }
        .icoCollection1{
          @include mix-ico-collection1;
        }
        span{
          margin: px2rem(8px) 0;
        }
        p{
          font-size: px2rem(20px);
          line-height: px2rem(24px);
          color: #666666;
        }
      }
      .customer-service-box{
        margin-left: px2rem(30px);
      }
      .buy-box{
        font-size: 0;
        border-radius: px2rem(40px);
        overflow: hidden;
        margin-right: px2rem(30px);
        margin-top: px2rem(10px);
        span{
          display: inline-block;
          width: px2rem(210px);
          height: px2rem(80px);
          line-height: px2rem(80px);
          font-size: px2rem(30px);
          text-align: center;
          color: white;
        }
        .to-buyCar{
          background-color: #a5d2ff;
        }
        .to-buy{
          background-color: $color-theme;
        }
      }
    }
  }

</style>