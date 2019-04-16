<template>
  <div class="None">
    <div class="nothing-img-box"></div>
    <p class="nothing-word" v-if="this.$route.path=='/buy'">你的购物车空空如也</p>
    <p class="nothing-word" v-if="this.$route.path=='/learningTaskReminder'">那你还没有创建任何班级</p>
    <p class="nothing-word" v-if="this.$route.path=='/learningTaskReminder'">快创建班级邀请学生，一起学习吧！</p>
  </div>
</template>

<script>
export default {
  name: 'None'
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .None{
    text-align: center;
    .nothing-img-box{
      margin-top: px2rem(100px);
      @include mix-ico-kongkong;
      margin-bottom: px2rem(50px);
    }
    .nothing-word{
      font-size: px2rem(28px);
      line-height: px2rem(48px);
      color: #666666;
    }
  }

</style>