<template>
  <div class="JobDetails">
    <job-details-header></job-details-header>
    <div class="JobDetails-box">
      <div class="JobDetails-content">
        <div class="box clearFix">
          <h3 class="flowLeft">布置时间:</h3>
          <p class="flowLeft">2018/04/01 16:40</p>
        </div>
        <div class="box clearFix">
          <h3 class="flowLeft">截止时间:</h3>
          <p class="flowLeft">2018/04/01 16:40</p>
        </div>
        <div class="box clearFix">
          <h3 class="flowLeft">查收班级:</h3>
          <p class="flowLeft">初中化学一班</p>
        </div>
      </div>
      <div class="JobDetails-content JobDetails-content2">
        <div class="box clearFix">
          <h3 class="flowLeft">学习内容:</h3>
          <p class="flowLeft">完成牛顿定律公示的由来，完成牛顿定律公示的由来，完成牛顿定律公示的由来。</p>
        </div>
        <div class="box clearFix">
          <h3 class="flowLeft">附&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件:</h3>
          <div class="flowLeft">
            <p class="audio-p">
              <span class="time">25s</span>
              <audio src=""></audio>
            </p>
            <div class="img-box">
              <img src="" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 按需加载
const JobDetailsHeader = r => require.ensure([], () => r(require('../../components/common/header/Header')));
// JobDetailsHeader from '../../components/common/header/Header'
export default {
  name: 'JobDetails',
  components: {
    JobDetailsHeader
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  $img_height:percentage(75/183);
  .JobDetails-box{
    .JobDetails-content{
      border-bottom: px2rem(18px) solid #f4f4f4;
      .box{
        padding: px2rem(28px) px2rem(30px);
        border-bottom:  px2rem(2px) solid #f4f4f4;
        h3{
          font-size: px2rem(28px);
          line-height: px2rem(48px);
          margin-right: px2rem(20px);
        }
        p{
          font-size: px2rem(26px);
          line-height: px2rem(48px);
          color: #666666;
          max-width: px2rem(536px);
        }
      }
    }
    .JobDetails-content2{
      border-bottom: none;
      p{
        border-bottom: none;
      }
      .audio-p{
        width: px2rem(183px);
        line-height: px2rem(33px);
        margin-top: px2rem(7.5px);
        height: px2rem(33px);
        background-color: $color-theme;
        border-radius: px2rem(8px);
        .time{
          display: inline-block;
          line-height: px2rem(33px);
          font-size: px2rem(20px);
          color: white;
          vertical-align: top;
          margin-left: px2rem(20px);
        }
      }
      .img-box{
        margin-top: px2rem(30px);
        width: px2rem(150px);
        height: 0;
        padding-bottom: $img_height;
        img{
          width: 100%;
        }
      }
    }
  }

</style>