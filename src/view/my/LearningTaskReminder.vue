<template>
  <div class="LearningTaskReminder">
    <task-reminder-header></task-reminder-header>
    <div class="TaskReminderList center">
      <router-link tag="div" class="List" to="/jobDetails">
        <div class="top clearFix">
          <span class="name flowLeft">亲爱的啥是佩奇</span>
          <span class="word1 flowRight">未读消息</span>
          <span class="dian flowRight"></span>
        </div>
        <p>您好！再忙也不能忘记学习哦！1班老师给你布置了一个学习提升任务，快去查看吧！</p>
        <div class="bottom">
          <span>2018.02.23</span>
        </div>
      </router-link>
      <div class="List">
        <div class="top clearFix">
          <span class="name flowLeft">亲爱的啥是佩奇</span>
          <span class="word1 flowRight">未读消息</span>
          <span class="dian flowRight"></span>
        </div>
        <p>您好！再忙也不能忘记学习哦！1班老师给你布置了一个学习提升任务，快去查看吧！</p>
        <div class="bottom">
          <span>2018.02.23</span>
        </div>
      </div>
      <div class="List">
        <div class="top clearFix">
          <span class="name flowLeft">亲爱的啥是佩奇</span>
          <span class="word2 flowRight">已读消息</span>
        </div>
        <p>您好！再忙也不能忘记学习哦！1班老师给你布置了一个学习提升任务，快去查看吧！</p>
        <div class="bottom">
          <span>2018.02.23</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskReminderHeader from '../../components/common/header/Header'
export default {
  name: 'LearningTaskReminder',
  components: {
    TaskReminderHeader
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .LearningTaskReminder{
    height: 100%;
    background-color: #f3f3f3;
    .TaskReminderList{
      .List{
        margin-top: px2rem(20px);
        background-color: white;
        border-radius: px2rem(8px);
        padding: 0 px2rem(30px);
        .top{
          padding: px2rem(20px) 0;
          span{
            display: inline-block;
          }
          .name{
            font-size: px2rem(28px);
            line-height: px2rem(28px);
          }
          .word1{
            font-size: px2rem(20px);
            line-height: px2rem(28px);
            margin-left: px2rem(10px);
          }
          .word2{
            font-size: px2rem(20px);
            line-height: px2rem(28px);
            color: #999999;
          }
          .dian{
            width: px2rem(15px);
            height: px2rem(15px);
            border-radius: 50%;
            background-color: #d93f30;
            margin-top: px2rem(6.5px);
          }
        }
        p{
          font-size: px2rem(24px);
          line-height: px2rem(44px);
          color: #666666;
        }
        .bottom{
          text-align: right;
          margin-top: px2rem(10px);
          span{
            display: inline-block;
            line-height: px2rem(40px);
            font-size: px2rem(20px);
            color: #999999;
          }
        }
      }
    }
  }

</style>