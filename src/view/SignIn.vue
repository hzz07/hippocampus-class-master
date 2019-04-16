<template>
  <div class="sign-in">
    <sign-in-logo :showLogo="showLogoBox"></sign-in-logo>
    <sign-in-input :showInput="showInputBox"></sign-in-input>
    <div class="other-signIn-box clearFix">
      <span class="other-toPhone flowLeft" @click="SwitchLoginMode">{{showInputBox===1?'短信验证码登录':'用户名密码登录'}}</span>
      <div class="flowRight">
        <router-link tag="span" class="other-toPhone" to="/registration">注册</router-link>
        <i class="other-verticalLine"></i>
        <router-link tag="span" to="/forgetPassword" class="other-forgetPassword">忘记密码</router-link>
      </div>
    </div>
    <div class="third-signIn-box">
      <div class="third-title clearFix">
        <span class="title-left title-line flowLeft"></span>
        <span class="title-word">第三方登录</span>
        <span class="title-right title-line flowRight"></span>
      </div>
      <ul class="third-ul">
        <li class="third-li">
          <!--<img class="third-img" src="../../assets/images/qq-img.png" alt="">-->
        </li>
        <li class="third-li">
          <img class="third-img" src="../assets/images/qq-img.png" alt="">
        </li>
        <li class="third-li">
          <img class="third-img" src="../assets/images/weichat-img.png" alt="">
        </li>
        <li class="third-li">
          <!-- <img class="third-img" src="../../assets/images/qq-img.png" alt="">-->
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import SignInLogo from '../components/common/logo/Logo'
import SignInInput from '../components/common/input/Input'
export default {
  name: 'SignIn',
  components: {
    SignInLogo,
    SignInInput
  },
  data() {
    return {
      showLogoBox: 1,
      showInputBox: 1
    }
  },
  methods: {
    SwitchLoginMode() {
      if (this.showInputBox === 1) {
        this.showInputBox = 2;
      } else {
        this.showInputBox = 1;
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .sign-in {
    width: 100%;
    height: 100%;
    background: url("../assets/images/signIn-bg.png")no-repeat center center;
    background-size: 100% 100%;
    overflow: hidden;
    .other-signIn-box{
      margin: 0 px2rem(60px);
      padding: 0 px2rem(47px);
      span{
        font-size: $font-size-small-s;
        color: $color-text-x;
      }
      i{
        display: inline-block;
        width: 2px;
        height: px2rem(24px);
        background: $color-text-x;
        vertical-align: middle;
      }
    }
    .third-signIn-box{
      .third-title{
        padding: 0 px2rem(60px);
        display: flex;
        margin-top: px2rem(140px);
        .title-line{
          flex: 1;
          display: inline-block;
          height: px2rem(30px);
          border-bottom:1px solid $color-line;
        }
        .title-word{
          display: inline-block;
          line-height: px2rem(60px);
          font-size: $font-size-small;
          color: $color-text-x;
          margin: 0 px2rem(16px);
        }
      }
      .third-ul{
        display: flex;
        justify-content:space-around;
        padding: px2rem(80px) px2rem(60px) 0 px2rem(60px);
        .third-li{
          width: 25%;
          text-align: center;
          .third-img{
            width: 50%;
          }
        }
      }
    }
  }
</style>