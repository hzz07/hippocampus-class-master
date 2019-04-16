<template>
  <div class="ClassChapter">
    <div v-for="item in chapters" :key="item.id">
      <div class="chapter clearFix">
        <span class="flowLeft">{{item.chapterName}}</span>
        <span class="flowLeft">{{item.title}}</span>
        <span class="iconfont flowRight" @click="showcChapterLists(item.id)" :class="item.show?'icoDowm':'icoUp'">&#xe6b5;</span>
      </div>
      <div :style="{height:(item.show?2.6875*item.children.length+'rem':'0px'),overflow:'hidden',transition:'0.5s'}">
        <div class="chapter-list" v-for="listItem in item.children" :key="listItem.id"  >
          <div class="list clearFix">
            <span class="iconfont ico-paly flowLeft"></span>
            <div class="flowLeft box clearFix">
              <span class="flowLeft serial-number">{{listItem.id}}</span>
              <p class="words flowLeft">{{listItem.title}}</p>
              <span class="word flowLeft" v-show="item.isFree">free</span>
              <router-link tag="span" class="btn flowRight" to="/classTests">学习</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassChapter',
  props: {
    chapters: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    showcChapterLists(res) {
      this.chapters[res - 1].show = !this.chapters[res - 1].show;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .chapter{
    border-radius: px2rem(4px);
    background-color: rgba(244,244,244,.6);
    padding: px2rem(26px) px2rem(20px);
    margin: px2rem(10px) px2rem(30px);
    span{
      display: inline-block;
      font-size: px2rem(28px);
      color: #555555;
      line-height: px2rem(28px);
    }
    .iconfont{
      font-size: px2rem(40px);
      color: #999999;
    }
  }
  .chapter-list{
    .list{
      padding: 0 px2rem(45px);
      height: px2rem(86px);
      display: flex;
      .ico-paly{
        @include mix-ico-play1;
        margin-right: px2rem(25px);
        margin-top: px2rem(29px);
      }
      .box{
        flex: 1;
        border-bottom: 1px solid #f3f3f3;
        .serial-number,.words{
          font-size: px2rem(26px);
          color: #666666;
          display: inline-block;
          line-height: px2rem(86px);
          height: px2rem(86px);
        }
        .serial-number{
          margin-right: px2rem(25px);
        }
        .words{
          max-width: px2rem(180px);
          overflow: hidden;
          margin-right: px2rem(10px);
        }
        .word{
          @include mix-ico-free;
          width: px2rem(52px);
          height: px2rem(30px);
          color: white;
          text-align: center;
          font-size: px2rem(20px);
          line-height: px2rem(30px);
          margin-top: px2rem(20px);
        }
        .btn{
          display: inline-block;
          width: px2rem(90px);
          height: px2rem(36px);
          line-height: px2rem(36px);
          font-size: px2rem(22px);
          text-align: center;
          border-radius: px2rem(18px);
          border: 1px solid #a5d2ff;
          color: $color-theme;
          margin-top: px2rem(25px);
        }
      }
    }
  }
</style>