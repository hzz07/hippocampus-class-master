<template>
  <div class="ConfirmationInformation">
    <con-infor-header></con-infor-header>
    <con-infor-goods :goods="goods"></con-infor-goods>
    <div class="conInfor-coupon-box clearFix">
      <span class="coupon-word flowLeft">优惠卷</span>
      <span class="flowLeft" :class="coupons.length==0?'couponNumber1':'couponNumber2'">{{coupons.length}} 张可用</span>
      <span class="iconfont coupon-forward flowRight" @click="showCoupons">&#xe616;</span>
      <span class="flowRight coupon-word" v-if="coupon!=''">{{coupon}}折</span>
    </div>
    <div class="conInfor-coupon-box clearFix">
      <span class="coupon-word flowLeft">商品金额</span>
      <span class="coupon-money flowRight">￥{{totalMoney}}</span>
    </div>
    <div class="conInfor-totalMoney-box">
      <span class="totalMoney-word flowLeft">实付金额:</span>
      <span class="totalMoney-money-logo flowLeft">￥</span>
      <span class="totalMoney-money flowLeft">{{actualMoney}}</span>
      <span class="totalMoney-placeOrder flowRight" @click="toPay">提交订单</span>
    </div>
    <mt-popup v-model='regionVisible1' position='bottom' class="showCoupons-popup">
      <div class="showCoupons-button-box clearFix">
        <span>选择优惠卷</span>
        <span class="iconfont ico-close flowRight" @click="closeCoupons">&#xe608;</span>
      </div>
      <div class="coupons-lists">
        <div class="coupons center" v-for="item in coupons" :key="item.id" @click="choiceCoupons(item.id,item.discount)">
          <div class="coupons-top clearFix">
            <div class="coupons-left flowLeft">
              <p>{{item.discount}}折</p>
            </div>
            <div class="coupons-right flowRight">
              <p class="top"><span>优惠卷</span>{{item.couponsTitle}}</p>
              <p>{{item.condition}}</p>
            </div>
          </div>
          <div class="coupons-bottom">
            <p><span>有效期:</span>{{item.term}}</p>
          </div>
          <div class="coupons-checked-flow" v-if="checkedCoupons1==item.id">
            <span class="coupons-checked"></span>
          </div>
        </div>
      </div>
      <div class="coupons-button center">
        <span @click="submitCoupons">确定</span>
      </div>
    </mt-popup>
    <mt-popup v-model='regionVisible2' position='bottom' class="showPayType-popup">
      <div class="showCoupons-button-box clearFix">
        <span>选择支付方式</span>
        <span class="iconfont ico-close flowRight" @click="closePays">&#xe608;</span>
      </div>
      <div class="coupons-lists">
        <div class="pay-box pay-box1 clearFix">
          <div class="pay-img pay-zhifubao flowLeft"></div>
          <div class="pay-words flowLeft"><p>支付宝支付</p></div>
          <div class="pay-check flowRight">
            <label class="icocheck" :class="checkedPayType=='zhiFuBao'?'icocheck2':'icocheck1'"><input v-model="checkedPayType" type="radio" value="zhiFuBao" name="payType"></label>
          </div>
        </div>
        <div class="pay-box pay-box2 clearFix">
          <div class="pay-img pay-weichat flowLeft"></div>
          <div class="pay-words"><p>微信支付</p></div>
          <div class="pay-check flowRight">
            <label class="icocheck icocheck1"  :class="checkedPayType=='weiChat'?'icocheck2':'icocheck1'"><input v-model="checkedPayType" type="radio" value="weiChat" name="payType"></label>
          </div>
        </div>
      </div>
      <div class="coupons-button center">
        <span>确定</span>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import ConInforHeader from '../../components/common/header/Header'
import ConInforGoods from '../../components/buy/GoodsLists'
export default {
  name: 'ConfirmationInformation',
  components: {
    ConInforHeader,
    ConInforGoods
  },
  data() {
    return {
      goods: [
        {
          'img': '',
          'title': '红红火火恍恍惚惚红红火火恍恍惚惚',
          'type': '视频',
          'money': '240.5',
          'id': '1'
        },
        {
          'img': '',
          'title': '红红火火恍恍惚惚红红火火恍恍惚惚',
          'type': '视频',
          'money': '299',
          'id': '2'
        }
      ],
      totalMoney: 539.5,
      actualMoney: 539.5,
      regionVisible1: false,
      regionVisible2: false,
      coupons: [
        {'id': '001', 'discount': '6', 'couponsTitle': '高中物理优惠卷', 'condition': '仅限购买高中物理课程可享8折', 'term': '2019.03.15至2019.04.01'},
        {'id': '002', 'discount': '7', 'couponsTitle': '海马课堂优惠卷', 'condition': '购买平台内课堂均可享受7折优惠', 'term': '2019.03.12至2019.03.25'},
        {'id': '003', 'discount': '7.5', 'couponsTitle': '高中化学优惠卷', 'condition': '仅限购买高中化学课程可享7.5折', 'term': '2019.03.01至2019.04.01'},
        {'id': '004', 'discount': '8.5', 'couponsTitle': '初中物理优惠卷', 'condition': '仅限购买初中物理课程可享8.5折', 'term': '2019.03.19至2019.04.19'}
      ],
      checkedCoupons1: '',
      checkedCoupons: '',
      coupon1: '',
      coupon: '',
      checkedPayType: ''
    }
  },
  methods: {
    showCoupons() {
      this.regionVisible1 = true;
      this.checkedCoupons1 = this.checkedCoupons;
    },
    closeCoupons() {
      this.regionVisible1 = false;
    },
    closePays() {
      this.regionVisible2 = false;
    },
    choiceCoupons(id, res) {
      this.checkedCoupons1 = id;
      this.coupon1 = res;
    },
    submitCoupons() {
      this.checkedCoupons = this.checkedCoupons1;
      this.regionVisible1 = false;
      this.coupon = this.coupon1;
      this.actualMoney = String(this.totalMoney * (Number(this.coupon) / 10));
      this.actualMoney = this.actualMoney.substr(0, this.actualMoney.indexOf('.') + 3);
    },
    toPay() {
      this.regionVisible2 = true;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .ConfirmationInformation{
    height: 100%;
    background-color: #f3f3f3;
    .conInfor-coupon-box{
      background-color: white;
      padding: px2rem(30px);
      margin-bottom: px2rem(10px);
      span{
        display: inline-block;
        line-height: px2rem(60px);
      }
      .coupon-word{
        color: #555555;
        margin-right: px2rem(10px);
        font-size: px2rem(28px);
      }
      .couponNumber1{
        background-color: #b6b6b6;
        font-size: px2rem(22px);
        text-align: center;
        border-radius: px2rem(8px);
        width: px2rem(130px);
        color: white;
      }
      .couponNumber2{
        background-color: $color-theme;
        font-size: px2rem(22px);
        text-align: center;
        border-radius: px2rem(8px);
        width: px2rem(130px);
        color: white;
      }
      .coupon-word{
        color: #999999;
        margin-right: px2rem(6px);
      }
      .coupon-forward{
        color: #999999;
      }
      .coupon-money{
        font-size: px2rem(28px);
        color: $color-theme;
      }
    }
    .conInfor-totalMoney-box{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 2;
      background-color: white;
      span{
        display: inline-block;
        line-height: px2rem(100px);
      }
      .totalMoney-word{
        margin-left: px2rem(35px);
        font-size: px2rem(30px);
      }
      .totalMoney-money-logo{
        font-size: px2rem(26px);
        color: $color-theme;
        margin-left: px2rem(10px);
      }
      .totalMoney-money{
        font-size: px2rem(34px);
        color: $color-theme;
      }
      .totalMoney-placeOrder{
        font-size: px2rem(32px);
        color: white;
        text-align: center;
        background-color: $color-theme;
        width: px2rem(259px);
      }
    }
    .showCoupons-popup,.showPayType-popup{
      width: 100%;
      background-color: white;
      border-bottom: 1px solid #f3f3f3;
      .showCoupons-button-box{
        span{
          display: inline-block;
          line-height: px2rem(105px);
          font-size: px2rem(30px);
          margin: 0 px2rem(30px);
        }
      }
      .coupons-lists{
        max-height: px2rem(800px);
        overflow: scroll;
        .coupons{
          background: url("../../assets/images/coupons-bg.png")no-repeat center center;
          background-size: 100% 100%;
          border-radius: px2rem(8px);
          margin-bottom: px2rem(10px);
          position: relative;
          .coupons-top{
            display: flex;
            .coupons-left{
              text-align: center;
              p{
                display: inline-block;
                line-height: px2rem(165px);
                font-size: px2rem(64px);
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
            top: 0;
            right: 0;
            width: px2rem(85px);
            height: px2rem(85px);
            border-radius: px2rem(8px);
            overflow: hidden;
            span{
              @include mix-ico-coupons-checked;
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
    }
    .coupons-button{
      padding: px2rem(30px) 0;
      span{
        display: inline-block;
        width: 100%;
        line-height: px2rem(90px);
        border-radius: px2rem(10px);
        background-color: $color-theme;
        color: white;
        text-align: center;
        font-size: px2rem(32px);
      }
    }
  }
</style>