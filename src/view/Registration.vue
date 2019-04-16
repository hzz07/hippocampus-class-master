<template>
  <div class="Registration">
    <registration-header></registration-header>
    <registration-logo :showLogo="showLogoBox"></registration-logo>
    <registration-input :showInput="showInputBox"></registration-input>
    <div class="other-Registration-box clearFix">
      <span class="other-toSignIn flowRight">已有账号，<router-link tag="span" class="other-toSignIn-blue" to="/signIn">去登录</router-link></span>
    </div>
  </div>
</template>

<script>
import RegistrationHeader from '../components/common/header/Header'
import RegistrationLogo from '../components/common/logo/Logo'
import RegistrationInput from '../components/common/input/Input'
export default {
  name: 'Registration',
  components: {
    RegistrationHeader,
    RegistrationLogo,
    RegistrationInput
  },
  data() {
    return {
      showLogoBox: 2,
      showInputBox: 3
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .other-Registration-box{
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