<template>
  <div class="Buy">
    <buy-header :showEdit="goods.length" @delectGoods="toShowDelect"></buy-header>
    <div class="buy-nothing-box" v-if="goods.length==0">
      <buy-none></buy-none>
      <p class="to-buy-button">买买买</p>
    </div>

    <buy-goods @sendTotal="getTotalStatus" :goods="goods" :goodsIds="goodsIds" :totalMoney="totalMoney"></buy-goods>

    <div class="buy-settlement-box clearFix">
      <div class="buy-settlement-left flowLeft">
        <label for="all" @click="choiceAllGoods" class="icocheck" :class="isCheckedAll===false?'icocheck1':'icocheck2'"><input type="input-checkbox" id="all" name="all" value="all"></label>
        <span>全选</span>
      </div>
      <div class="flowRight" :class="goodsIds.length?'toSettlement2':'toSettlement1'">
        <span v-if="!buttonWords" @click="toSettlementGoods">去结算</span>
        <span v-if="buttonWords" @click="toDelectGoods">删除</span>
      </div>
      <div class="flowRight total" v-if="!buttonWords">
        <span>合计: </span>
        <span class="color">￥{{totalMoney}}</span>
      </div>
    </div>
    <buy-nav></buy-nav>
  </div>
</template>

<script>
import BuyHeader from '../components/buy/BuyHeader'
import BuyNone from '../components/common/none/None'
import BuyGoods from '../components/buy/GoodsLists'
import BuyNav from '../components/common/nav/Nav'
export default {
  name: 'Buy',
  components: {
    BuyHeader,
    BuyNone,
    BuyGoods,
    BuyNav
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
        },
        {
          'img': '',
          'title': '红红火火恍恍惚惚红红火火恍恍惚惚',
          'type': '视频',
          'money': '399.99',
          'id': '3'
        }
      ],
      goodsIds: [],
      isCheckedAll: false,
      totalMoney: 0,
      buttonWords: false
    }
  },
  methods: {
    getTotalStatus(res) {
      this.isCheckedAll = res.checkedAll;
      this.totalMoney = res.totalMoney;
    },
    choiceAllGoods() {
      this.isCheckedAll = !this.isCheckedAll;
      if (this.isCheckedAll) {
        this.goodsIds = [];
        this.totalMoney = 0;
        this.goods.forEach(item => {
          this.goodsIds.push(item.id);
          this.totalMoney = this.totalMoney + Number(item.money);
        })
      } else {
        this.goodsIds = [];
        this.totalMoney = 0;
      }
    },
    toShowDelect(res) {
      this.buttonWords = res;
      this.goodsIds = [];
      this.isCheckedAll = false;
      this.totalMoney = 0;
    },
    toSettlementGoods() {
      this.$router.push({path: '/confirmationInformation'})
    },
    toDelectGoods() {
      let delectId = '';
      this.goodsIds.forEach(item => {
        delectId = item;
        this.goods.forEach((item, i) => {
          let thisId = item.id;
          if (thisId == delectId) {
            this.goods.splice(i, 1);
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .Buy{
    height: 100%;
    background-color: #f3f3f3;
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
    .buy-nothing-box{
      text-align: center;
      .to-buy-button{
        width: px2rem(216px);
        height: px2rem(75px);
        line-height: px2rem(75px);
        color: white;
        font-size: px2rem(32px);
        background-color: $color-theme;
        border-radius: px2rem(4px);
        margin: px2rem(40px) auto;
      }
    }
    .buy-settlement-box{
      position: fixed;
      background-color: white;
      left: 0;
      bottom: px2rem(138px);
      width: 100%;
      .buy-settlement-left{
        .icocheck{
          display: inline-block;
          margin: 0 px2rem(20px) 0 px2rem(30px);
          vertical-align: middle;
        }
        span{
          vertical-align: middle;
          display: inline-block;
          font-size: px2rem(30px);
          line-height: px2rem(100px);
        }
      }
      .total span,.to-settlement span{
        vertical-align: middle;
        display: inline-block;
        font-size: px2rem(30px);
        line-height: px2rem(100px);
      }
      .total .color{
        color: #666666;
        margin-left: px2rem(6px);
        margin-right: px2rem(10px);
      }
      .toSettlement1{
        width: px2rem(200px);
        background-color: #cccccc;
        text-align: center;
        span{
          color: white;
          line-height: px2rem(100px);
          display: inline-block;
        }
      }
      .toSettlement2{
        width: px2rem(200px);
        background-color: $color-theme;
        text-align: center;
        span{
          color: white;
          line-height: px2rem(100px);
          display: inline-block;
        }
      }
    }
  }
</style>