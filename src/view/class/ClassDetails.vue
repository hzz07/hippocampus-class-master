<template>
  <div class="ClassDetails">
    <class-details-header></class-details-header>
    <class-details-banner></class-details-banner>
    <div class="ClassDetails-coursePackage-box" v-show="isCoursePackage">
      <div class="coursePackage">
        <div class="title-box">
          <h2 class="coursePackage-title center">课程包简介</h2>
        </div>
        <div class="title-details" :style="{height:(showP?heightP:'3.53125rem'),overflow:'hidden',transition:'0.7s'}">
          <div ref="pTop" class="pTop"></div>
          <p ref="titleP">给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
          <div ref="pBottom" class="pBottom"></div>
        </div>
        <div class="icon-box">
          <span class="iconfont" :class="!showP?'icoUp':'icoDowm'" @click="toShowAll">&#xe6b5;</span>
        </div>
      </div>
      <div class="coursePackage">
        <div class="title-box">
          <h2 class="coursePackage-title center">课程包目录</h2>
        </div>
        <div class="catalog-box">
          <ul class="catalog-box-ul">
            <li class="catalog-box-li">
              <ul class="catalog-ul">
                <li class="catalog-li">
                  <span>1-1初中物理</span>
                </li>
                <li class="catalog-li">
                  <span>1-1初中化学</span>
                </li>
              </ul>
            </li>
            <li class="catalog-box-li">
              <ul class="catalog-ul">
                <li class="catalog-li">
                  <span>2-1初中物理</span>
                </li>
                <li class="catalog-li">
                  <span>2-1初中化学</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ClassDetails-box" v-show="!isCoursePackage">
      <div class="ClassDetails-nav">
        <div class="ClassDetails-nav-box">
          <ul class="ClassDetails-nav-ul center">
            <li class="ClassDetails-nav-li" v-for="item in navList" :key="item.id" @click="navClick($event,item.id)">
              <span :class="{active:currentNav==item.id}">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="active-box">
          <div ref="active" class="active" :style="{left:currentActiveLeft2+'px'}"><span></span></div>
        </div>
      </div>
      <div class="ClassDetails-content-box">
        <div class="ClassDetails-content-briefIntroduction" v-if="currentNav==0">
          <div class="title-details" :style="{height:(showP?heightP:'3.53125rem'),overflow:'hidden',transition:'0.7s'}">
            <div ref="pTop" class="pTop"></div>
            <p ref="titleP">给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈给哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
            <div ref="pBottom" class="pBottom"></div>
          </div>
          <div class="icon-box">
            <span class="iconfont" :class="!showP?'icoUp':'icoDowm'" @click="toShowAll">&#xe6b5;</span>
          </div>
        </div>
        <div class="ClassDetails-content-teaching" v-if="currentNav==1">
          <class-details-chapter :chapters="teachingList"></class-details-chapter>
        </div>
        <div class="ClassDetails-content-examples" v-if="currentNav==2">
          <class-details-chapter :chapters="examplesList"></class-details-chapter>
        </div>
        <div class="ClassDetails-content-exercises" v-if="currentNav==3">
          <class-details-chapter :chapters="exercisesList"></class-details-chapter>
        </div>
        <div class="ClassDetails-content-comment" v-if="currentNav==4">
          <div class="comment-box center">
            <div class="comment-top-box clearFix">
              <div class="photo flowLeft">
                <img src="../../assets/images/photo.png" alt="">
              </div>
              <span class="name flowLeft">比尔盖茨31857</span>
              <span class="time flowRight">08:26:39</span>
              <span class="day flowRight">2019-03-29</span>
            </div>
            <div class="comment-bottom-box">
              <p>在下很喜欢这个老师的教学方式，教学质量很好，讲解思路清晰，讲的通俗易懂，很不错的课程。</p>
            </div>
          </div>
          <div class="comment-box center">
            <div class="comment-top-box clearFix">
              <div class="photo flowLeft">
                <img src="../../assets/images/photo.png" alt="">
              </div>
              <span class="name flowLeft">比尔盖茨31857</span>
              <span class="time flowRight">08:26:39</span>
              <span class="day flowRight">2019-03-29</span>
            </div>
            <div class="comment-bottom-box">
              <p>在下很喜欢这个老师的教学方式，教学质量很好，讲解思路清晰，讲的通俗易懂，很不错的课程。</p>
            </div>
          </div>
          <router-link class="to-write-comment" to="/classWriteComment"></router-link>
        </div>
      </div>
    </div>
    <class-details-bottom-btn></class-details-bottom-btn>
  </div>
</template>

<script>
import ClassDetailsHeader from '../../components/common/header/Header'
import ClassDetailsBanner from '../../components/class/ClassDetailsBanner'
import ClassDetailsChapter from '../../components/class/ClassChapter'
import ClassDetailsBottomBtn from '../../components/class/ClassBottomBtn'
export default {
  name: 'ClassDetails',
  components: {
    ClassDetailsHeader,
    ClassDetailsBanner,
    ClassDetailsBottomBtn,
    ClassDetailsChapter
  },
  data() {
    return {
      showP: false,
      heightP: '',
      isCoursePackage: false,
      navList: [
        {'name': '简介', 'id': 0},
        {'name': '教学', 'id': 1},
        {'name': '例题', 'id': 2},
        {'name': '习题', 'id': 3},
        {'name': '评论', 'id': 4}
      ],
      teachingList: [
        {
          'id': '1',
          'chapterName': '第一章',
          'title': '运动学',
          'children': [
            {'id': '1-1', 'title': '运动与力学', 'isFree': true},
            {'id': '1-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '1-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        },
        {
          'id': '2',
          'chapterName': '第二章',
          'title': '力学',
          'children': [
            {'id': '2-1', 'title': '运动与力学', 'isFree': true},
            {'id': '2-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '2-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        }
      ],
      examplesList: [
        {
          'id': '1',
          'chapterName': '第一章',
          'title': '运动学',
          'children': [
            {'id': '1-1', 'title': '运动与力学', 'isFree': true},
            {'id': '1-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '1-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        },
        {
          'id': '2',
          'chapterName': '第二章',
          'title': '力学',
          'children': [
            {'id': '2-1', 'title': '运动与力学', 'isFree': true},
            {'id': '2-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '2-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        },
        {
          'id': '3',
          'chapterName': '第三章',
          'title': '浮力',
          'children': [
            {'id': '3-1', 'title': '运动与力学', 'isFree': true},
            {'id': '3-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '3-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        },
        {
          'id': '4',
          'chapterName': '第四章',
          'title': '光学',
          'children': [
            {'id': '4-1', 'title': '运动与力学', 'isFree': true},
            {'id': '4-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        }
      ],
      exercisesList: [
        {
          'id': '1',
          'chapterName': '第一章',
          'title': '运动学',
          'children': [
            {'id': '1-1', 'title': '运动与力学', 'isFree': true},
            {'id': '1-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '1-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        },
        {
          'id': '2',
          'chapterName': '第二章',
          'title': '力学',
          'children': [
            {'id': '2-1', 'title': '运动与力学', 'isFree': true},
            {'id': '2-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '2-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        },
        {
          'id': '3',
          'chapterName': '第三章',
          'title': '浮力',
          'children': [
            {'id': '3-1', 'title': '运动与力学', 'isFree': true},
            {'id': '3-2', 'title': '作用力与反作用力', 'isFree': true},
            {'id': '3-3', 'title': '阿基米德原理', 'isFree': false}
          ],
          'show': false
        }
      ],
      currentNav: 0,
      currentActiveLeft1: null,
      currentActiveLeft2: null
    }
  },
  methods: {
    toShowAll() {
      this.showP = !this.showP;
    },
    navClick(e, res) {
      this.currentNav = res;
      let thisLeft = e.currentTarget.offsetLeft;
      this.currentActiveLeft2 = thisLeft - this.currentActiveLeft1;
    }
  },
  mounted() {
    let pTopHeight = this.$refs.pTop.offsetTop;
    let pBottomHeight = this.$refs.pBottom.offsetTop;
    this.heightP = (pBottomHeight - pTopHeight) + 'px';
    this.currentActiveLeft1 = this.$refs.active.offsetLeft;
    this.currentActiveLeft2 = 0;
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .ClassDetails{
    height: 100%;
    background-color: #f3f3f3;
    .ClassDetails-coursePackage-box{
      .coursePackage{
        margin-bottom: px2rem(10px);
        .title-box{
          margin-bottom: px2rem(4px);
          background-color: white;
          padding: px2rem(25px) 0;
          .coursePackage-title{
            font-size: px2rem(28px);
            line-height: px2rem(30px);
            padding-left: px2rem(15px);
            border-left: 4px solid $color-theme;
          }
        }
        .title-details {
          background-color: white;
          .pTop,.pBottom{
            height: px2rem(25px);
          }
          p {
            font-size: px2rem(24px);
            color: #999999;
            text-indent: 2em;
            line-height: px2rem(44px);
            padding: 0 px2rem(40px);
          }
        }
        .icon-box{
          text-align: center;
          background-color: white;
          .iconfont{
            display: inline-block;
            font-size: px2rem(40px);
            color: #999999;
            margin-bottom: px2rem(30px);
            margin-top: px2rem(25px);
          }
        }
        .catalog-box{
          .catalog-box-ul{
            .catalog-box-li{
              background-color: white;
              padding: px2rem(25px) px2rem(42px);
              margin-bottom: px2rem(20px);
              span{
                display: inline-block;
                font-size: px2rem(26px);
                color: #666666;
                line-height: px2rem(46px);
                height: px2rem(46px);
              }
            }
          }
        }
      }
    }
    .ClassDetails-box{
      .ClassDetails-nav{
        .ClassDetails-nav-box{
          background-color: white;
          .ClassDetails-nav-ul{
            font-size: 0;
            .ClassDetails-nav-li{
              width: 20%;
              text-align: center;
              display: inline-block;
              padding-top: px2rem(35px);
              span{
                display: inline-block;
                font-size: px2rem(32px);
                color: rgba(85,85,85,.5);
                padding-bottom: px2rem(22px);
                width: px2rem(80px);
              }
              .active{
                color: $color-theme;
              }
            }
          }
        }
        .active-box{
          height: px2rem(5px);
          padding: 0 px2rem(30px);
          position: relative;
          .active{
            text-align: center;
            width: 20%;
            font-size: 0;
            position: relative;
            top: px2rem(-1.5px);
            transition: 0.5s;
            span{
              display: inline-block;
              width: px2rem(80px);
              height: px2rem(8px);
              background-color: $color-theme;
              border-radius: px2rem(4px);
            }
          }
        }
      }
      .ClassDetails-content-briefIntroduction{
        .title-details {
          background-color: white;
          .pTop,.pBottom{
            height: px2rem(25px);
          }
          p {
            font-size: px2rem(24px);
            color: #999999;
            text-indent: 2em;
            line-height: px2rem(44px);
            padding: 0 px2rem(40px);
          }
        }
        .icon-box{
          text-align: center;
          background-color: white;
          .iconfont{
            display: inline-block;
            font-size: px2rem(40px);
            color: #999999;
            margin-bottom: px2rem(30px);
            margin-top: px2rem(25px);
          }
          .icoUp{
            transform-origin: center center;
            transform: rotate(0deg);
            transition: transform 0.2s;
          }
          .icoDowm{
            transform-origin: center center;
            transform: rotate(180deg);
            transition: transform 0.2s;
          }
        }
      }
      .ClassDetails-content-teaching,.ClassDetails-content-examples,.ClassDetails-content-exercises,.ClassDetails-content-comment{
        background-color: white;
        padding-top: px2rem(25px);
        overflow: hidden;
      }
      .ClassDetails-content-comment{
        .comment-box{
          .comment-top-box{
            padding-top: px2rem(40px);
            .photo{
              width: px2rem(70px);
              height: 0;
              padding-bottom: px2rem(70px);
              img{
                width: 100%;
              }
            }
            span{
              display: inline-block;
              line-height: px2rem(70px);
              color: #999999;
            }
            .name{
              font-size: px2rem(26px);
              margin-left: px2rem(10px);
            }
            .time,.day{
              font-size: px2rem(20px);
            }
            .time{
              margin-left: px2rem(10px);
            }
          }
          .comment-bottom-box{
            padding-top: px2rem(25px);
            padding-bottom: px2rem(30px);
            border-bottom: 1px solid #f3f3f3;
            p{
              font-size: px2rem(28px);
              color: #555555;
              line-height: px2rem(42px);
            }
          }
        }
        .to-write-comment{
          @include mix-ico-comment;
          position: fixed;
          right: px2rem(50px);
          bottom: px2rem(190px);
        }
      }
    }
  }

</style>