<template>
  <div class="HomeHeader">
    <div class="HomeHeader-box center">
      <div class="HomeHeader-left">
        <span class="left-search iconfont">&#xe612;</span>
      </div>
      <div class="HomeHeader-input">
        <span class="ico-seach-logo iconfont">&#xe615;</span>
        <input type="text" @click="toSearch" class="header-input" placeholder="搜索">
      </div>
    </div>
    <home-search @hideSearch="getHideSearchFlag" @back="closeSearch" v-if="isSearch"></home-search>
  </div>
</template>

<script>
import HomeSearch from '../../components/common/search/Search'
export default {
  name: 'HomeHeader',
  components: {
    HomeSearch
  },
  data() {
    return {
      isSearch: false
    }
  },
  methods: {
    toSearch() {
      this.isSearch = true;
    },
    closeSearch(data) {
      this.isSearch = data;
    },
    getHideSearchFlag(data) {
      this.isSearch = data;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .HomeHeader{
    background: $color-theme;
    .HomeHeader-box{
      display: flex;
      height: px2rem(88px);
      align-items: center;
      .HomeHeader-left{
        width: px2rem(44px);
        height: px2rem(44px);
        margin-right: px2rem(15px);
        .left-search{
          font-size: px2rem(44px);
          color: $color-text;
        }
      }
      .HomeHeader-input{
        flex: 1;
        position: relative;
        .ico-seach-logo{
          position: absolute;
          font-size: px2rem(36px);
          left: 38%;
          top: 50%;
          margin-top: px2rem(-18px);
          color: #dddddd;
        }
        .header-input{
          width: 92%;
          height: px2rem(60px);
          line-height: px2rem(60px);
          background-color: $color-text;
          border-radius: px2rem(30px);
          padding: 0 4%;
          text-align: center;
        }
      }
    }
  }

</style>