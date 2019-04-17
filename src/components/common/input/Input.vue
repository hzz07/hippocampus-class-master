<template>
  <div class="Input">
    <div class="input-box" v-if="showInput===1||showInput===3||showInput===5">
      <i v-if="showInput===5"></i><span class="ico-userName"></span><input
      v-model="someInputVal.userNameText"
      type="text"
      class="input-userName"
      placeholder="请输入用户名"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      maxlength="25"
    ><span class="ico-delect" @click="delectUserNmae" v-if="showInput===1"></span>
    </div>
    <div class="input-box" v-if="showInput===2||showInput===3||showInput===4||showInput===5">
      <i v-if="showInput===5"></i><span class="ico-phoneNumber"></span>
      <input v-if="showInput!==5"
      v-model="someInputVal.phoneNumberText"
      maxlength="11"
      type="tel"
      class="input-phoneNumber"
      placeholder="请输入手机号码"
      onkeyup="value=value.replace(/[^0-9]/g,'')"
      onpaste="value=value.replace(/[^0-9]/g,'')"
      oncontextmenu="value=value.replace(/[^0-9]/g,'')"
    >
      <input v-if="showInput===5"
        v-model="someInputVal.phoneNumberText"
        maxlength="11"
        type="tel"
        class="input-phoneNumber"
        placeholder="请输入手机号码"
        onkeyup="value=value.replace(/[^0-9]/g,'')"
        onpaste="value=value.replace(/[^0-9]/g,'')"
        oncontextmenu="value=value.replace(/[^0-9]/g,'')"
        readonly="readonly"
      >
      <span class="ico-delect" @click="delectPhoneNumber" v-if="showInput===2"></span>
    </div>
    <div class="input-box clearFix" v-if="showInput===2||showInput===3||showInput===4">
      <span class="ico-verificationCode"></span><input
      type="tel"
      class="input-verificationCode"
      placeholder="请输入验证码"
      v-model="someInputVal.verificationCodeText"
      onkeyup="value=value.replace(/[^0-9]/g,'')"
      onpaste="value=value.replace(/[^0-9]/g,'')"
      oncontextmenu="value=value.replace(/[^0-9]/g,'')"
      maxlength="6"
    ><span class="verificationCode flowRight" @click="getverificationCode" :class="{verificationCode2:showInput!==2,verificationCode1:timer}">{{conutTimeText}}</span>
    </div>
    <div class="input-box" v-if="showInput===1||showInput===3||showInput===4">
      <span class="ico-password"></span><input
      :type="seePassword1===0?'password':'text'"
      class="input-password"
      v-model="someInputVal.userPasswordText1"
      placeholder="请输入密码"
      maxlength="25"
    ><span :class="seePassword1===1?'icoShowPassword':'icoHidePassword'" @click="viewPassword1" v-if="showInput===1||showInput===3"></span>
    </div>
    <div class="input-box" v-if="showInput===3||showInput===4">
      <span class="ico-password"></span><input
      :type="seePassword2===0?'password':'text'"
      class="input-password"
      v-model="someInputVal.userPasswordText2"
      placeholder="请再次确认密码"
      maxlength="25"
    ><span :class="seePassword2===1?'icoShowPassword':'icoHidePassword'" @click="viewPassword2" v-if="showInput===1||showInput===3"></span>
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-gender"></span>
      <p class="input-single-election">
        <label class="single-election-word"><span>男</span><span class="icoCheck" :class="someInputVal.checkGender==='man'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkGender" value="man"/></label>
        <label class="single-election-word"><span>女</span><span class="icoCheck" :class="someInputVal.checkGender==='woman'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkGender" value="woman"/></label>
      </p>
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-identity"></span>
      <p class="input-single-election">
        <label class="single-election-word"><span>学生</span><span class="icoCheck" :class="someInputVal.checkIdentity==='student'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkIdentity" value="student"/></label>
        <label class="single-election-word"><span>教师</span><span class="icoCheck" :class="someInputVal.checkIdentity==='teacher'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkIdentity" value="teacher"/></label>
        <label class="single-election-word"><span>家长</span><span class="icoCheck" :class="someInputVal.checkIdentity==='parents'?'icoYesCheck':'icoNoCheck'"></span><input class="displayNone" type="radio" v-model="someInputVal.checkIdentity" value="parents"/></label>
      </p>
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-school"></span><input
      v-model="someInputVal.schoolText"
      type="text" class="input-school"
      placeholder="请输入学校姓名"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      maxlength="30"
    >
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-class"></span><input
      v-model="someInputVal.classText"
      type="text"
      class="input-class"
      placeholder="请输入班级姓名"
      onpaste="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      oncontextmenu="value=value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g,'')"
      maxlength="10"
    >
    </div>
    <div class="input-box" v-if="showInput===5">
      <i v-if="showInput===5"></i><span class="ico-region"></span><input
      v-model="someInputVal.regionText"
      type="text"
      @click="showAddressPicker"
      class="input-region"
      placeholder="请选择省、市、区"
      readonly="readonly"
    >
    </div>
    <div class="Registration-statement" v-if="showInput===3">
      <i :class="statementStatus===0?'statementCheckedNo':'statementCheckedYes'" @click="statementChecked"></i><span>我同意</span><span class="statement-word-blue">《海马课堂服务协议》</span>
    </div>
    <div class="input-button">
      <span v-if="showInput==1||showInput==2" @click="getInputVal1" class="button1">登录</span>
      <span v-if="showInput==3" @click="getInputVal2" class="button2">注册</span>
      <span v-if="showInput==4" @click="getInputVal3" class="button2">重置密码</span>
      <span v-if="showInput==5" @click="getInputVal4" class="button2">提交</span>
    </div>
  </div>
</template>

<script>
import Bus from '../../../assets/javascripts/eventBus'
import {MessageBox, Toast} from 'mint-ui';
import {mapMutations} from 'vuex';
import axios from '../../../api/http.js'
export default {
  name: 'Input',
  props: {
    showInput: {
      type: Number,
      default: 1
    },
    adress: ''
  },
  data() {
    return {
      seePassword1: 0,
      seePassword2: 0,
      someInputVal: {
        userNameText: '',
        userPasswordText1: '',
        userPasswordText2: '',
        phoneNumberText: '',
        verificationCodeText: '',
        checkGender: '',
        checkIdentity: '',
        schoolText: '',
        classText: '',
        regionText: ''
      },
      statementStatus: 0,
      valueOk: false,
      isclickedFlag: false,
      timer: null,
      canClick: true,
      conutTime: 60,
      conutTimeText: '获取验证码'
    }
  },
  methods: {
    getAreadyInfor() {
      if (this.showInput !== 3) {
        this.someInputVal.userNameText = this.$store.state.userName;
      }
      if (this.showInput == 5) {
        this.someInputVal.phoneNumberText = this.$store.state.phoneNumber;
      }
    },
    getverificationCode() {
      this.isclickedFlag = true;
      if (!this.canClick) {
        return
      }
      this.canClick = false;
      this.conutTimeText = this.conutTime + 's后重试';
      this.timer = setInterval(() => {
        this.conutTime--;
        this.conutTimeText = this.conutTime + 's后重试';
        if (this.conutTime <= 0) {
          clearInterval(this.timer);
          this.canClick = true;
          this.conutTimeText = '重新获取';
          this.conutTime = 60
        }
      }, 1000);
    },
    // 打开地址选择器
    showAddressPicker() {
      Bus.$emit('showAdressPicker', true);
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    },
    viewPassword1() {
      if (this.seePassword1 === 0) {
        this.seePassword1 = 1;
      } else {
        this.seePassword1 = 0;
      }
    },
    viewPassword2() {
      if (this.seePassword2 === 0) {
        this.seePassword2 = 1;
      } else {
        this.seePassword2 = 0;
      }
    },
    delectUserNmae() {
      this.someInputVal.userNameText = '';
    },
    delectPhoneNumber() {
      this.someInputVal.phoneNumberText = '';
    },
    statementChecked() {
      if (this.statementStatus === 0) {
        this.statementStatus = 1;
      } else {
        this.statementStatus = 0;
      }
    },
    checkedInput() {
      // 用户名登陆
      if (this.showInput === 1) {
        if (!this.someInputVal.userNameText || this.someInputVal.userNameText == '') {
          MessageBox.alert('请填写用户名').then(action => {});
          return false;
        }
        if (this.someInputVal.userNameText != this.$store.state.userName) {
          MessageBox.alert('该用户名不存在,请先注册').then(action => {});
          return false;
        }
        if (!this.someInputVal.userPasswordText1 || this.someInputVal.userPasswordText1 == '') {
          MessageBox.alert('请输入密码').then(action => {});
          return false;
        }
        this.valueOk = true;
        // 手机号登陆
      } else if (this.showInput === 2) {
        if (!this.someInputVal.phoneNumberText || this.someInputVal.phoneNumberText == '') {
          MessageBox.alert('请填写手机号').then(action => {});
          return false;
        }
        if (this.someInputVal.phoneNumberText != this.$store.state.phoneNumber) {
          MessageBox.alert('该手机号尚未注册,请先注册').then(action => {});
          return false;
        }
        if (!this.isclickedFlag) {
          MessageBox.alert('请先获取验证码').then(action => {});
          return false;
        }
        if (!this.someInputVal.verificationCodeText || this.someInputVal.verificationCodeText == '') {
          MessageBox.alert('请输入验证码').then(action => {});
          return false;
        }
        this.valueOk = true;
        // 注册
      } else if (this.showInput === 3) {
        if (!this.someInputVal.userNameText || this.someInputVal.userNameText == '') {
          MessageBox.alert('请输入用户名').then(action => {
          });
          return false;
        }
        if (!this.someInputVal.phoneNumberText || this.someInputVal.phoneNumberText == '') {
          MessageBox.alert('请输入手机号码').then(action => {
          });
          return false;
        }
        if (!this.isclickedFlag) {
          MessageBox.alert('请先获取验证码').then(action => {});
          return false;
        }
        if (!this.someInputVal.verificationCodeText || this.someInputVal.verificationCodeText == '') {
          MessageBox.alert('请输入验证码').then(action => {
          });
          return false;
        }
        if (!this.someInputVal.userPasswordText1 || this.someInputVal.userPasswordText1 == '') {
          MessageBox.alert('请输入密码').then(action => {
          });
          return false;
        }
        if (!this.someInputVal.userPasswordText2 || this.someInputVal.userPasswordText2 == '') {
          MessageBox.alert('请再次输入密码').then(action => {
          });
          return false;
        }
        if (this.someInputVal.userPasswordText1 && this.someInputVal.userPasswordText2 && this.someInputVal.userPasswordText1 !== this.someInputVal.userPasswordText2) {
          MessageBox.alert('第二次输入的密码与第一次不一致,请重新输入').then(action => {
          });
          return false;
        }
        if (this.statementStatus == 0) {
          MessageBox.alert('请勾选海马课堂服务协议').then(action => {
          });
          return false;
        }
        this.valueOk = true;
        // 重置密码
      } else if (this.showInput === 4) {
        if (!this.someInputVal.phoneNumberText || this.someInputVal.phoneNumberText == '') {
          MessageBox.alert('请输入手机号码').then(action => {});
          return false;
        }
        if (this.someInputVal.phoneNumberText != this.$store.state.phoneNumber) {
          MessageBox.alert('该手机号尚未注册,请先注册').then(action => {});
          return false;
        }
        if (!this.isclickedFlag) {
          MessageBox.alert('请先获取验证码').then(action => {});
          return false;
        }
        if (!this.someInputVal.verificationCodeText || this.someInputVal.verificationCodeText == '') {
          MessageBox.alert('请输入验证码').then(action => {});
          return false;
        }
        if (!this.someInputVal.userPasswordText1 || this.someInputVal.userPasswordText1 == '') {
          MessageBox.alert('请输入密码').then(action => {});
          return false;
        }
        if (!this.someInputVal.userPasswordText2 || this.someInputVal.userPasswordText2 == '') {
          MessageBox.alert('请再次输入密码').then(action => {});
          return false;
        }
        if (this.someInputVal.userPasswordText1 && this.someInputVal.userPasswordText2 && this.someInputVal.userPasswordText1 !== this.someInputVal.userPasswordText2) {
          MessageBox.alert('第二次输入的密码与第一次不一致,请重新输入').then(action => {});
          return false;
        }
        this.valueOk = true;
        // 基本信息
      } else if (this.showInput === 5) {
        if (!this.someInputVal.userNameText || this.someInputVal.userNameText == '') {
          MessageBox.alert('请填写用户名').then(action => {});
          return false;
        }
        if (!this.someInputVal.checkGender || this.someInputVal.checkGender == '') {
          MessageBox.alert('请选择性别').then(action => {});
          return false;
        }
        if (!this.someInputVal.checkIdentity || this.someInputVal.checkIdentity == '') {
          MessageBox.alert('请选择您的身份').then(action => {});
          return false;
        }
        if (!this.someInputVal.schoolText || this.someInputVal.schoolText == '') {
          MessageBox.alert('请填写学校名称').then(action => {});
          return false;
        }
        if (!this.someInputVal.classText || this.someInputVal.classText == '') {
          MessageBox.alert('请填写班级名称').then(action => {});
          return false;
        }
        if (!this.someInputVal.regionText || this.someInputVal.regionText == '') {
          MessageBox.alert('请选择所在地区').then(action => {});
          return false;
        }
        this.valueOk = true;
      }
    },
    ...mapMutations(['saveSuginInInfor']),
    getInputVal1() {
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      }
      let data = {'flag': this.valueOk};
      let req = {
        username:this.someInputVal.userNameText,
        password:this.someInputVal.userPasswordText1
      }
      console.log(req)
      axios.userLogin(req).then(({ data }) => {
        if (data.flag===1) {
          Toast(data.success);
          this.saveSuginInInfor(data);
          setTimeout(() => {
            this.$router.push({path: '/home'})
          }, 3000);
        } else {
          Toast('出现了一些小问题，请您重试！');
        }
      })

    },
    ...mapMutations(['saveRegistrationInfor']),
    getInputVal2() {
      let self = this;
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      };
      let req = {
        username: this.someInputVal.userNameText,
        iphone: this.someInputVal.phoneNumberText,
        password: this.someInputVal.userPasswordText1
      }
      axios.userRegister(req).then(({ data }) => {
				if (data.success) {
          Toast(data.success);
          if(data.flag === 0){
            return false
          }
					self.saveRegistrationInfor(req);
					setTimeout(() => {
					  this.$router.push({path: '/essentialInformationInput'})
					}, 3000);
				} else {
          Toast('出现了一些小问题，请您重试！');
				}
			})


    },
    ...mapMutations('BasicInfor', ['changePassword']),
    getInputVal3() {
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      };
      let data = {
        userPassword: this.someInputVal.userPasswordText1
      }
      this.changePassword(data);
      Toast('恭喜您，重置密码成功，请重新登录');
      setTimeout(() => {
        this.$router.push({path: '/signIn'})
      }, 3000);
    },
    ...mapMutations(['saveBasicInfor']),
    getInputVal4() {
      this.checkedInput();
      if (!this.valueOk) {
        return false;
      }
      let data = {
        userName: this.someInputVal.userNameText,
        checkGender: this.someInputVal.checkGender,
        checkIdentity: this.someInputVal.checkIdentity,
        school: this.someInputVal.schoolText,
        class: this.someInputVal.classText,
        region: this.someInputVal.regionText
      }
      this.saveBasicInfor(data);
      Toast('您的信息已提交成功');
      setTimeout(() => {
        this.$router.push({path: '/home'})
      }, 3000);
    }
  },
  mounted() {
    Bus.$on('adressData', (data) => {
      this.someInputVal.regionText = data.name;
    });
    this.getAreadyInfor();
  },
  watch: {
    showInput() {
      if (this.showInput === 2) {
        this.someInputVal.userNameText = '';
        this.someInputVal.userPasswordText1 = '';
        clearInterval(this.timer);
        this.timer = null;
        this.canClick = true;
        this.conutTime = 60
        this.conutTimeText = '获取验证码';
      } else if (this.showInput === 1) {
        this.someInputVal.phoneNumberText = '';
        this.someInputVal.verificationCodeText = '';
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
@import "~scss/variable";
@import "~iconsScss/sprite";

.Input {
  padding: px2rem(110px) px2rem(60px) 0 px2rem(60px);
  .input-box {
    margin-top: px2rem(15px);
    border-bottom: 1px solid $color-border;
    display: flex;
    align-items: center;
    padding: px2rem(8px) px2rem(8px);
    i{
      @include mix-ico-xing;
      margin-right: px2rem(8px);
    }
    input{
      flex: 1;
      line-height: px2rem(60px);
      vertical-align: middle;
      min-width: px2rem(200px);
      font-size: $font-size-small;
      margin: px2rem(0px) px2rem(20px);
    }
    .input-single-election{
      margin: 0 px2rem(20px);
      height: px2rem(60px);
      line-height: px2rem(60px);
      .single-election-word{
        display: inline-block;
        width: px2rem(120px);
        color: $color-text-x;
        font-size: $font-size-small;
        margin-right: px2rem(50px);
        font-size: 0;
        span{
          font-size: px2rem(28px);
          display: inline-block;
          vertical-align: middle;
        }
      }
      .single-election-word:last-child{
        margin-right: px2rem(0px);
      }
      .icoCheck{
        vertical-align: middle;
        margin-left: px2rem(16px);
      }
      .icoNoCheck{
        @include mix-ico-NoCheck;
      }
      .icoYesCheck{
        @include mix-ico-YesCheck;
      }
    }
    .ico-userName {
      @include mix-ico-userName;
    }
    .ico-delect{
      @include mix-ico-delect;
    }
    .ico-password {
      @include mix-ico-password;
    }
    .icoHidePassword{
      @include mix-ico-hidePassword;
    }
    .icoShowPassword{
      @include mix-ico-showPassword;
    }
    .ico-phoneNumber{
      @include mix-ico-phoneNumber;
    }
    .ico-verificationCode{
      @include mix-ico-verificationCode;
    }
    .verificationCode{
      display: inline-block;
      width: px2rem(160px);
      height: px2rem(55px);
      line-height: px2rem(55px);
      border-radius: px2rem(27.5px);
      text-align: center;
      background: $color-border;
      font-size: $font-size-small;
      color: $color-text;
    }
    .verificationCode1{
      background: #d3d3d3!important;
    }
    .verificationCode2{
      background: $color-theme;
    }
    .ico-gender{
      @include mix-ico-gender;
    }
    .ico-identity{
      @include mix-ico-identity;
    }
    .ico-school{
      @include mix-ico-school;
    }
    .ico-class{
      @include mix-ico-class;
    }
    .ico-region{
      @include mix-ico-region;
    }
  }
  .Registration-statement{
    margin-top: px2rem(40px);
    i,span{
      vertical-align: middle;
    }
    i{
      margin-right: px2rem(10px);
    }
    .statementCheckedNo{
      @include mix-ico-checkBox1;
    }
    .statementCheckedYes{
      @include mix-ico-checkBox2;
    }
    span{
      font-size: $font-size-small;
    }
    .statement-word-blue{
      color: $color-theme;
    }
  }
  .input-button{
    margin: px2rem(80px) 0 px2rem(20px) 0;
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
  .button1{
    background: linear-gradient(left, #8f96f5, #5be5f2);
  }
  .button2{
    background: $color-theme;
  }
}
</style>
