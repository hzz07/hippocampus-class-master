<template>
  <div class="BuyHeader">
    <div class="BuyHeader-box center">
      <span class="BuyHeader-back"></span>
      <span class="BuyHeader-title">购物车</span>
      <span class="BuyHeader-edit" @click="toEdit" v-if="showEdit>0">{{isEdit==false?'编辑':'完成'}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuyHeader',
  props: {
    showEdit: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    toEdit() {
      this.isEdit = !this.isEdit;
      this.$emit('delectGoods', this.isEdit);
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .BuyHeader{
    background-color: $color-theme;
    .BuyHeader-box{
      position: relative;
      text-align: center;
      .BuyHeader-back{
        position: absolute;
        @include mix-ico-back;
        left: 0;
        top: 50%;
        margin-top: px2rem(-17.5px);
      }
      .BuyHeader-title{
        line-height: px2rem(80px);
        color: white;
      }
      .BuyHeader-edit{
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: px2rem(-25px);
        line-height: px2rem(50px);
        color: white;
        font-size: px2rem(28px);
      }
    }
  }
</style>