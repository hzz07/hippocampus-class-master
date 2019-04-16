<template>
  <div class="SharePage">
    <div class="top">
      <span class="top-img"></span>
    </div>
    <div class="shareBox">
      <div class="share-photo-box">
        <img src="../assets/images/photo.png" class="photo" alt="">
      </div>
      <div class="share-words">
        <p>您的好友XXX向您分享</p>
        <p>一个提高学习的课程</p>
      </div>
      <div class="share-class-box">
        <div class="share-class">
          <img src="../../static/imgs/article2_img002.png" class="class-img" alt="">
        </div>
      </div>
      <div class="phone-box">
        <input type="tel" placeholder="请输入手机号" class="phone">
      </div>
      <div class="btn">
        <span>去看看</span>
      </div>
    </div>
    <div class="introduce-box">
      <h2><span class="left"></span>海码课堂<span class="right"></span></h2>
      <p>心动不如行动,海码课堂隆重推出热销优惠课程,将初中学段的物理、化学课程进行精心组合,享受多种组合,更多的优惠! 精选课程 精品课程中包含了初中物理、化学自主学习...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharePage'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .SharePage{
    width: 100%;
    height: 100%;
    background: #c7dafa url("../assets/images/shareBg.png")no-repeat center top;
    background-size: 100%;
    .top{
      padding-top: px2rem(120px);
      text-align: center;
      .top-img{
        @include mix-ico-shareTop;
      }
    }
    .shareBox{
      margin-top: px2rem(126px);
      .share-photo-box{
        height: px2rem(80px);
        width: px2rem(80px);
        margin: 0 auto;
        .photo{
          width: 100%;
        }
      }
      .share-words{
        margin: px2rem(10px) 0 px2rem(20px) 0;
        p{
          font-size: px2rem(22px);
          line-height: px2rem(42px);
          text-align: center;
        }
      }
      .share-class-box{
        .share-class{
          width: px2rem(350px);
          height: 0;
          padding-bottom: 26%;
          overflow: hidden;
          margin: 0 auto;
          border-radius: px2rem(8px);
          .class-img{
            width: 100%;
          }
        }
      }
      .phone-box{
        text-align: center;
        margin-top: px2rem(40px);
        margin-bottom: px2rem(20px);
        .phone{
          width: px2rem(380px);
          height: px2rem(60px);
          line-height: px2rem(60px);
          border-radius: px2rem(30px);
          border: 1px solid #cccccc;
          text-align: center;
          font-size: px2rem(28px);
        }
      }
      .btn{
        background-color: $color-theme;
        width: px2rem(380px);
        border-radius: px2rem(30px);
        text-align: center;
        margin: 0 auto;
        span{
          display: inline-block;
          height: px2rem(60px);
          line-height: px2rem(60px);
          font-size: px2rem(30px);
          color: white;
        }
      }
    }
    .introduce-box{
      margin-top: px2rem(130px);
      h2{
        font-size: px2rem(28px);
        text-align: center;
        margin-bottom: px2rem(10px);
        .left{
          @include mix-ico-title-left;
          margin-right: px2rem(10px);
          margin-bottom: px2rem(9px);
        }
        .right{
          @include mix-ico-title-right;
          margin-left: px2rem(10px);
          margin-bottom: px2rem(9px);
        }
      }
      p{
        font-size: px2rem(24px);
        line-height: px2rem(44px);
        padding: 0 px2rem(95px);
        color: #999999;
      }
    }
  }

</style>