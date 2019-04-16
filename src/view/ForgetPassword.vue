<template>
  <div class="Forget-password">
    <forget-password-header></forget-password-header>
    <forget-password-logo :showLogo="showLogoBox"></forget-password-logo>
    <forget-password-input :showInput="showInputBox"></forget-password-input>
    <div class="other-Forget-password-box clearFix">
      <span class="other-toSignIn flowRight">已有账号，<router-link tag="span" class="other-toSignIn-blue" to="/signIn">去登录</router-link></span>
    </div>
  </div>
</template>

<script>
import ForgetPasswordHeader from '../components/common/header/Header'
import ForgetPasswordLogo from '../components/common/logo/Logo'
import ForgetPasswordInput from '../components/common/input/Input'
export default {
  name: 'ForgetPassword',
  components: {
    ForgetPasswordHeader,
    ForgetPasswordLogo,
    ForgetPasswordInput
  },
  data() {
    return {
      showLogoBox: 2,
      showInputBox: 4
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .Forget-password-button{
    margin: px2rem(100px) px2rem(60px) px2rem(20px) px2rem(60px);
    background: $color-theme;
    height: px2rem(94px);
    border-radius: px2rem(47px);
    overflow: hidden;
    span{
      display: inline-block;
      width: 100%;
      height: px2rem(94px);
      line-height: px2rem(94px);
      text-align: center;
      color: $color-text;
    }
  }
  .other-Forget-password-box{
    margin: 0 px2rem(60px);
    padding: 0 px2rem(47px);
    span{
      font-size: $font-size-small-s;
      color: $color-text-x;
    }
    .other-toSignIn-blue{
      color: $color-theme;
    }
  }

</style>