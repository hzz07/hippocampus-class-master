<template>
  <div class="LearningSituation">
    <learning-situation-header></learning-situation-header>
    <div class="student-box">
      <div class="box">
        <div class="top clearFix">
          <div class="img-box flowLeft">
            <img src="../../assets/images/photo.png" class="photoImg" alt="">
          </div>
          <span class="name flowLeft">啥是佩奇</span>
          <span class="look flowRight" @click="toLook">查看</span>
        </div>
        <p class="bottom">昨天学习啦~</p>
      </div>
      <div class="box">
        <div class="top clearFix">
          <div class="img-box flowLeft">
            <img src="../../assets/images/photo.png" class="photoImg" alt="">
          </div>
          <span class="name flowLeft">鱼子酱</span>
          <span class="look flowRight" @click="toLook">查看</span>
        </div>
        <p class="bottom">昨天未学习~</p>
      </div>
    </div>
  </div>
</template>

<script>
import LearningSituationHeader from '../../components/common/header/Header'
export default {
  name: 'LearningSituation',
  components: {
    LearningSituationHeader
  },
  methods: {
    toLook() {
      this.$router.push({path: '/detailsOfLearning'})
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  $img-box_height:percentage(40/345);
  .LearningSituation{
    height: 100%;
    background-color: #f4f4f4;
    .student-box{
      .box{
        background-color: white;
        margin-bottom: px2rem(2px);
        height: px2rem(150px);
        padding: px2rem(20px) px2rem(30px) 0 px2rem(30px);
        .top{
          .img-box{
            width: px2rem(80px);
            height: 0;
            padding-bottom: $img-box_height;
            overflow: hidden;
            .photoImg{
              width: 100%;
            }
          }
          span{
            display: inline-block;
            font-size: px2rem(26px);
          }
          .name{
            margin-left: px2rem(20px);
            line-height: px2rem(80px);
          }
          .look{
            width: px2rem(100px);
            height: px2rem(40px);
            line-height: px2rem(40px);
            background-color: #f4f4f4;
            color: #999999;
            text-align: center;
            margin-top: px2rem(40px);
            border-radius: px2rem(20px);
          }
        }
        .bottom{
          font-size: px2rem(26px);
          color: #999999;
          line-height: px2rem(66px);
          padding-bottom: px2rem(4px);
        }
      }
    }
  }

</style>