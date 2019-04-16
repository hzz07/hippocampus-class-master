<template>
  <div class="ClassWriteComment">
    <write-comment-header></write-comment-header>
    <div class="text-box">
      <textarea class="center" v-model="commentDatas" placeholder="请输入评论内容"></textarea>
    </div>
    <div class="full"></div>
    <div class="publish-btn" @click="publishComment">
      <span>发布</span>
    </div>
  </div>
</template>

<script>
import WriteCommentHeader from '../../components/common/header/Header'
import {MessageBox, Toast} from 'mint-ui';
export default {
  name: 'ClassWriteComment',
  components: {
    WriteCommentHeader
  },
  data() {
    return {
      commentDatas: ''
    }
  },
  methods: {
    publishComment() {
      if (this.commentDatas === '') {
        MessageBox.alert('评论内容不能为空!').then(action => {});
        return false;
      } else {
        Toast('评论发布成功,3秒后自动跳转');
        setTimeout(() => {
          this.$router.push({path: '/classDetails'});
        }, 3000);
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .ClassWriteComment{
    height: 100%;
    .text-box{
      padding: px2rem(60px) 0;
      height: 77%;
      textarea{
        display: block;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
        font-size: px2rem(32px);
        color: #333;
      }
    }
    .full{
      height: px2rem(100px);
    }
    .publish-btn{
      position: fixed;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: $color-theme;
      text-align: center;
      span{
        display: inline-block;
        color: white;
        line-height: px2rem(100px);
        font-size: px2rem(32px);
      }
    }
  }

</style>