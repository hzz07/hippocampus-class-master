<template>
  <div class="RollBag">
    <roll-header></roll-header>
    <div class="roll-box">
      <div class="coupons-lists">
        <div class="coupons center" v-for="item in coupons" :key="item.id">
          <div class="coupons-top clearFix">
            <div class="coupons-left flowLeft">
              <p>{{item.discount}}</p>
            </div>
            <div class="coupons-right flowRight">
              <p class="top"><span>{{item.type}}</span>{{item.couponsTitle}}</p>
              <p>{{item.condition}}</p>
            </div>
          </div>
          <div class="coupons-bottom">
            <p>{{item.term}}</p>
          </div>
          <div class="coupons-checked-flow" v-if="item.state != '0'">
            <span class="coupons-checked span1" v-if="item.state == '1'"></span>
            <span class="coupons-checked span2" v-if="item.state == '2'"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RollHeader from '../../components/common/header/Header'
export default {
  name: 'RollBag',
  components: {
    RollHeader
  },
  data() {
    return {
      coupons: [
        {'id': '000', 'discount': '体验卡', 'type': '体验卡', 'couponsTitle': '海码课堂体验卡', 'condition': '平台内课堂均可免费体验', 'term': '使用范围: 无时间期限，仅限一节课程', 'state': '0'},
        {'id': '001', 'discount': '6折', 'type': '优惠卷', 'couponsTitle': '高中物理优惠卷', 'condition': '仅限购买高中物理课程可享8折', 'term': '有效期: 2019.03.15至2019.04.01', 'state': '0'},
        {'id': '002', 'discount': '7折', 'type': '优惠卷', 'couponsTitle': '海马课堂优惠卷', 'condition': '购买平台内课堂均可享受7折优惠', 'term': '有效期: 2019.03.12至2019.03.25', 'state': '1'},
        {'id': '003', 'discount': '7.5折', 'type': '优惠卷', 'couponsTitle': '高中化学优惠卷', 'condition': '仅限购买高中化学课程可享7.5折', 'term': '有效期: 2019.03.01至2019.04.01', 'state': '2'},
        {'id': '004', 'discount': '8.5折', 'type': '优惠卷', 'couponsTitle': '初中物理优惠卷', 'condition': '仅限购买初中物理课程可享8.5折', 'term': '有效期: 2019.03.19至2019.04.19', 'state': '1'},
        {'id': '005', 'discount': '体验卡', 'type': '体验卡', 'couponsTitle': '海码课堂体验卡', 'condition': '平台内课堂均可免费体验', 'term': '使用范围: 无时间期限，仅限一节课程', 'state': '0'}
      ]
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .coupons-lists{
    padding: px2rem(30px) 0;
    .coupons{
      background: url("../../assets/images/coupons-bg.png")no-repeat center center;
      background-size: 100% 100%;
      border-radius: px2rem(8px);
      margin-bottom: px2rem(20px);
      position: relative;
      .coupons-top{
        display: flex;
        .coupons-left{
          text-align: center;
          p{
            display: inline-block;
            line-height: px2rem(165px);
            font-size: px2rem(42px);
            font-weight: bolder;
            color: white;
            width: px2rem(194px);
          }
        }
        .coupons-right{
          flex: 1;
          p{
            line-height: px2rem(62px);
            font-size: px2rem(26px);
            color: white;
            padding-left: px2rem(30px);
          }
          .top{
            margin-top: px2rem(25px);
            span{
              display: inline-block;
              font-size: px2rem(22px);
              color: $color-theme;
              width: px2rem(100px);
              height: px2rem(45px);
              background-color: white;
              text-align: center;
              line-height: px2rem(45px);
              border-radius: px2rem(4px);
              margin-right: px2rem(8px);
            }
          }
        }
      }
      .coupons-bottom{
        line-height: px2rem(60px);
        color: white;
        font-size: px2rem(24px);
        padding-left: px2rem(30px);
        span{
          margin-right: px2rem(8px);
        }
      }
      .coupons-checked-flow{
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: px2rem(8px);
        overflow: hidden;
        .span1{
          @include mix-ico-used;
        }
        .span2{
          @include mix-ico-overdued;
        }
      }
    }
    .pay-box{
      display: flex;
      border-bottom: 2px solid #f3f3f3;
      .pay-img{
        margin: px2rem(25px) px2rem(26px) px2rem(25px) px2rem(30px);
      }
      .pay-zhifubao{
        @include mix-ico-zhifubao;
      }
      .pay-weichat{
        @include mix-ico-weichat;
      }
      .pay-words{
        flex: 1;
        p{
          line-height: px2rem(110px);
          font-size: px2rem(28px);
          color: #666666;
        }
      }
      .pay-check{
        width: px2rem(38px);
        height: px2rem(38px);
        margin: px2rem(17px) px2rem(30px) px2rem(17px) 0;
        input{
          opacity: 0;
          width: 100%;
        }
        .icocheck1{
          @include mix-ico-carFalse;
        }
        .icocheck2{
          @include mix-ico-carTrue;
        }
      }
    }
    .pay-box2{
      margin-bottom: px2rem(60px);
    }
  }

</style>