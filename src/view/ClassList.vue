<template>
  <div class="ClassList">
    <class-header @keywords="getSearchResult"></class-header>
    <div class="ClassList-nav">
      <ul class="ClassList-nav-ul clearFix">
        <li class="ClassList-nav-li" @click="ClassListNavClick(item.id)" v-for="(item) in classNav" :key="item.id">
          <transition name="fade">
            <span class="iconfont" v-show="currentCount==item.id">&#xe63e;</span>
          </transition>
          <span :class="{spanActive:currentCount==item.id}">{{item.navTitle}}</span>
        </li>
      </ul>
    </div>
    <div class="ClassList-lists">
      <ul class="ClassList-lists-ul">
        <router-link tag="li" class="ClassList-lists-li clearFix" v-for="item in classList" :key="item.id" to="/classDetails">
          <div class="lists-li-left flowLeft">
            <img :src="item.imgSrl" class="lists-li-img" alt="">
          </div>
          <div class="lists-li-right flowRight">
            <p class="lists-li-title"><span>{{item.word}}</span>{{item.words}}</p>
            <div class="lists-li-other clearFix">
              <span class="lists-li-other-money flowLeft">￥{{item.money}}</span>
              <div class="lists-li-other-eye flowRight">
                <span class="iconfont">&#xe6e0;</span>
                <span>{{item.eye}}人</span>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
    <class-nav></class-nav>
  </div>
</template>

<script>
import ClassHeader from '../components/class/ClassHeader'
import ClassNav from '../components/common/nav/Nav'
export default {
  name: 'ClassList',
  components: {
    ClassHeader,
    ClassNav
  },
  data() {
    return {
      currentCount: 1,
      classNav: [],
      classList: []
    }
  },
  methods: {
    ClassListNavClick(res) {
      this.currentCount = res;
      this.classList = this.classNav[res - 1].classList
    },
    getClassInfo() {
      this.axios.get('../../static/mock/class.json')
        .then(this.initClassPage)
        .catch(function (error) {
          console.log(error);
        });
    },
    initClassPage(res) {
      let data = res.data;
      this.classNav = data.classNav;
      this.classList = data.classNav[0].classList;
    },
    getSearchResult(data) {
      this.classNav.forEach((item, index) => {
        if (item.navTitle === data) {
          this.currentCount = this.classNav[index].id;
          this.classList = this.classNav[index].classList;
        }
      })
    }
  },
  mounted() {
    this.getClassInfo();
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .ClassList{
    background-color: #f3f3f3;
    .ClassList-nav{
      .ClassList-nav-ul{
        padding: px2rem(30px) 0;
        background-color: white;
        .ClassList-nav-li{
          float: left;
          width: 21%;
          text-align: right;
          padding-right: 4%;
          line-height: px2rem(40px);
          font-size: 0;
          .fade-enter{
            opacity: 0;
          }
          .fade-enter-active{
            transition: opacity 1s;
          }
          .fade-leave-to{
            opacity: 0;
          }
          .fade-leave-active{
            transition: opacity 1s;
          }
          span{
            color: #333333;
            font-size: px2rem(28px);
            margin-left: px2rem(4px);
          }
          .iconfont,.spanActive{
            color: $color-theme;
          }
        }
      }
    }
    .ClassList-lists{
      margin-top: px2rem(20px);
      .ClassList-lists-ul{
        .ClassList-lists-li{
          background-color: white;
          margin-bottom: px2rem(8px);
          padding: px2rem(30px);
          display: flex;
          .lists-li-left{
            margin-right: px2rem(30px);
            width: px2rem(240px);
            height: 0;
            padding-bottom: 20.125%;
            overflow: hidden;
            border-radius: px2rem(8px);
            .lists-li-img{
              width: 100%;
            }
          }
          .lists-li-right{
            flex: 1;
            .lists-li-title{
              line-height: px2rem(40px);
              margin-top: px2rem(6px);
              font-size: px2rem(18px);
              color: #666666;
              letter-spacing: px2rem(3px);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              overflow: hidden;
              span{
                margin-right: px2rem(10px);
              }
            }
            .lists-li-other{
              margin-top: px2rem(14px);
              .lists-li-other-money,.lists-li-other-eye span{
                font-size: px2rem(24px);
                color: #999999;
              }
            }
          }
        }
      }
    }
  }
</style>