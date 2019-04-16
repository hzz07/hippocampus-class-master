<template>
  <div class="GoodsLists">
    <div class="buy-goods-box" v-if="goods.length">
      <div class="buy-goods">
        <ul class="buy-goods-ul">
          <li class="buy-goods-li clearFix" v-for="item in goods" :key="item.id">
            <div class="buy-goods-left flowLeft" v-if="$route.path==='/buy'">
              <label @click="choiceGoods(item.id,item.money)" class="icocheck" :class="goodsIds.length && goodsIds.indexOf(item.id) > -1?'icocheck2':'icocheck1'">
                <input type="checkbox" value="">
              </label>
            </div>
            <div class="buy-goods-img-box flowLeft">
              <img src="../../assets/images/boutique_class001.png" class="goods-left-img" alt="">
            </div>
            <div class="buy-goods-right">
              <p class="buy-goods-right-title">{{item.title}}</p>
              <p class="buy-goods-right-label">{{item.type}}</p>
              <span class="buy-goods-right-money">￥{{item.money}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsLists',
  props: {
    goods: {
      type: Array,
      default: () => {}
    },
    goodsIds: {
      type: Array,
      default: () => {}
    },
    totalMoney: {
      type: Number
    }
  },
  data() {
    return {
      changeTotalMoney: 0
    }
  },
  methods: {
    choiceGoods(indexId, money) {
      let thisIndexId = this.goodsIds.indexOf(indexId);
      let thisMoney = Number(money);
      if (thisIndexId >= 0) {
        this.goodsIds.splice(thisIndexId, 1);
        if (this.totalMoney > 0) {
          this.changeTotalMoney = this.changeTotalMoney - thisMoney;
        }
      } else {
        this.goodsIds.push(indexId);
        this.changeTotalMoney = this.changeTotalMoney + thisMoney;
      }
      let data = {'totalMoney': this.changeTotalMoney, 'checkedAll': false}
      this.$emit('sendTotal', data);
    }
  },
  watch: {
    totalMoney() {
      this.changeTotalMoney = this.totalMoney;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .buy-goods-box{
    .buy-goods{
      .buy-goods-ul{
        .buy-goods-li{
          background-color: white;
          margin-bottom: px2rem(20px);
          padding: px2rem(30px);
          display: flex;
          .buy-goods-left{
            position: relative;
            width: px2rem(40px);
            margin-right: px2rem(30px);
            input{
              opacity: 0;
              width: 100%;
            }
            .icocheck{
              position: absolute;
              top: 50%;
              left: 0;
              margin-top: px2rem(-20px);
            }
            .icocheck1{
              @include mix-ico-carFalse;
            }
            .icocheck2{
              @include mix-ico-carTrue;
            }
          }
          .buy-goods-img-box{
            width: px2rem(240px);
            height: 0;
            padding-bottom: 20.25%;
            overflow: hidden;
            border-radius: px2rem(8px);
            .goods-left-img{
              width: 100%;
            }
            margin: 0 px2rem(25px) 0 0;
          }
          .buy-goods-right{
            width: 0;
            flex: 1;
            overflow: hidden;
            .buy-goods-right-title{
              min-width: 1px;
              font-size: px2rem(28px);
              font-weight: bolder;
              line-height: px2rem(44px);
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            .buy-goods-right-label{
              font-size: px2rem(26px);
              font-weight: bolder;
              color: #999999;
              line-height: px2rem(44px);
            }
            .buy-goods-right-money{
              display: inline-block;
              font-size: px2rem(28px);
              font-weight: bolder;
              color: $color-theme;
              margin-top: px2rem(16px);
            }
          }
        }
      }
    }
  }
</style>