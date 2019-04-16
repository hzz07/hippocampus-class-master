<template>
  <div class="ClassSearch">
    <div class="header-box center clearFix">
      <div class="input-box flowLeft">
        <span class="iconfont ico-search">&#xe615;</span>
        <input type="text" v-model="searchText" class="search-input" placeholder="请输入课程名称">
      </div>
      <span class="search-cancel flowRight" @click="returnBack">取消</span>
    </div>
    <div class="full1"></div>
    <div class="box center">
      <h3>热门搜索</h3>
      <ul class="box-ul">
        <li class="box-li" v-for="(item,index) in hotData" :key="index" @click="hotClick(item)">{{item}}</li>
      </ul>
    </div>
    <div class="full2 center"></div>
  <div class="box center" v-show="historyData.length">
      <h3>历史搜索</h3>
      <ul class="box-ul">
        <ul class="box-ul">
          <li class="box-li" v-for="(item,index) in historyData" :key="index">{{item}}</li>
        </ul>
      </ul>
    </div>
    <div class="clearHistory" @click="clearInput" v-show="historyData.length">
      <span class="iconfont">&#xe637;</span>
      <span>清除历史搜索</span>
    </div>
    <div class="search-lists" v-if="searchText.length > 0">
      <div class="none-word" v-if="searchList.length==0">抱歉，没有找到与{{searchText}}相关的信息</div>
      <ul class="lists-ul">
        <li class="lists-li" :class="{checkedLi:item.isChecked==true}" @click="toThisResult(item.name,index)" v-for="(item,index) in searchList" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassSearch',
  data() {
    return {
      searchText: '',
      hotData: ['高中物理', '高中', '物理', '初中', '初中物理', '高中化学', '初中化学'],
      list: {
        'G': [
          {'name': '高中物理', 'spell': 'gaozhongwuli', 'isChecked': false},
          {'name': '高中化学', 'spell': 'gaozhonghuaxue', 'isChecked': false}
        ],
        'C': [
          {'name': '初中物理', 'spell': 'chuzhongwuli', 'isChecked': false},
          {'name': '初中化学', 'spell': 'chuzhonghuaxue', 'isChecked': false}
        ]
      },
      historyData: [],
      timer: null,
      searchList: []
    }
  },
  methods: {
    clearInput() {
      this.historyData = [];
    },
    hotClick(val) {
      if (this.historyData.indexOf(val) == -1) {
        this.historyData.push(val);
      }
    },
    returnBack() {
      this.$emit('back', false)
    },
    toThisResult(item, val) {
      for (let i = 0; i < this.searchList.length; i++) {
        if (val == i) {
          this.searchList[i].isChecked = true;
        } else {
          this.searchList[i].isChecked = false;
        }
      }
      setTimeout(() => {
        if (this.$route.path == '/classList') {
          this.$emit('hideSearch', {'show': false, 'searchResult': item});
        } else {
          this.$emit('hideSearch', false);
        }
      }, 100);
    }
  },
  watch: {
    searchText() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchText) {
        this.searchList = [];
        return
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.list) {
          this.list[i].forEach((value) => {
            if (value.spell.indexOf(this.searchText) > -1 || value.name.indexOf(this.searchText) > -1) {
              result.push(value)
            }
          })
        }
        this.searchList = result
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .ClassSearch {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: white;
    .header-box {
      padding: px2rem(25px) 0;
      .input-box{
        background-color: #f3f3f3;
        border-radius: px2rem(32.5px);
        color: #999999;
        display: flex;
        width: px2rem(620px);
        span {
          display: inline-block;
          font-size: px2rem(28px);
          line-height: px2rem(28px);
          vertical-align: middle;
        }
        .ico-search {
          margin: px2rem(18.5px) px2rem(20px);
        }
        .search-input{
          flex: 1;
          vertical-align: middle;
          line-height: px2rem(24px);
          height: px2rem(24px);
          padding: px2rem(20.5px) 0;
        }
      }
      .search-cancel {
        font-size: px2rem(24px);
        line-height: px2rem(58px);
        margin-left: px2rem(12px);
        color: #999999;
      }
    }
    .full1{
      background-color: #f3f3f3;
      height: px2rem(20px);
    }
    .box{
      h3{
        font-size: px2rem(26px);
        color: #666666;
        line-height: px2rem(26px);
        padding: px2rem(32px) 0 px2rem(30px) 0;
      }
      .box-ul{
        font-size: 0;
        .box-li{
          display: inline-block;
          font-size: px2rem(28px);
          margin: px2rem(10px) px2rem(25px) px2rem(10px) 0;
          padding: 0 px2rem(30px);
          border: 1px solid #f3f3f3;
          color: #999999;
          line-height: px2rem(68px);
        }
      }
    }
    .full2{
      background-color: #f3f3f3;
      height: px2rem(2px);
    }
    .clearHistory{
      margin-top: px2rem(180px);
      text-align: center;
      font-size: px2rem(28px);
      color: #999999;
    }
    .search-lists{
      position: fixed;
      width: 100%;
      height: 100%;
      top: px2rem(135px);
      background-color: white;
      .none-word{
        font-size: px2rem(28px);
        line-height: px2rem(60px);
        color: #d93f30;
        padding: px2rem(20px) px2rem(30px);
      }
      .lists-ul{
        font-size: 0;
        padding: px2rem(20px) 0;
        .lists-li{
          height: px2rem(60px);
          line-height: px2rem(60px);
          font-size: px2rem(28px);
          color: #555555;
          padding: px2rem(0px) px2rem(30px);
          border-bottom: 1px solid #f4f4f4;
        }
        .checkedLi{
          background-color: $color-theme;
          color: white;
        }
      }
    }
  }

</style>