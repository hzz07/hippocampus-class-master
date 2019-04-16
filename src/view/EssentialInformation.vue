<template>
  <div class="EssentialInformation">
    <essential-information-header></essential-information-header>
    <essential-information-input :showInput="showInputBox"></essential-information-input>
    <adress-picker></adress-picker>
  </div>
</template>

<script>
import EssentialInformationHeader from '../components/common/header/Header'
import EssentialInformationInput from '../components/common/input/Input'
import AdressPicker from '../components/common/picker/Picker'
export default {
  name: 'EssentialInformation',
  components: {
    EssentialInformationHeader,
    EssentialInformationInput,
    AdressPicker
  },
  data() {
    return {
      showInputBox: 5
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .EssentialInformation-button{
    margin: px2rem(80px) px2rem(60px) px2rem(20px) px2rem(60px);
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
</style>