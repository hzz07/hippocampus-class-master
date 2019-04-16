<template>
  <div class="BindingChildrenAccounts">
    <binding-children-accounts-hearder></binding-children-accounts-hearder>
    <div class="input-box">
      <div class="box">
        <input
          type="tel"
          class="phoneNumber"
          maxlength="11"
          v-model="phoneNumber"
          onkeyup="value=value.replace(/[^0-9]/g,'')"
          onpaste="value=value.replace(/[^0-9]/g,'')"
          oncontextmenu="value=value.replace(/[^0-9]/g,'')"
          placeholder="请输入手机号">
      </div>
      <div class="box clearFix">
        <input
          type="text"
          class="idCode"
          v-model="verificationCode"
          onkeyup="value=value.replace(/[^0-9]/g,'')"
          onpaste="value=value.replace(/[^0-9]/g,'')"
          oncontextmenu="value=value.replace(/[^0-9]/g,'')"
          maxlength="6"
          placeholder="请输入验证码">
        <span class="flowRight"  @click="getverificationCode(1)">{{conutTimeText1}}</span>
      </div>
    </div>
    <div class="btn" @click="bind">
      <span>绑定</span>
    </div>
    <div class="notes">
      <p><span>注:</span>家长与孩子之间相互绑定或者解绑需要得到对方同意，并输入验证码。</p>
    </div>
    <div class="record">
      <div class="title">
        <span class="title-left"></span>
        <span class="title-word">绑定账号记录</span>
        <span class="title-right"></span>
      </div>
      <div class="record-list">
        <div class="noneBox" v-if="bindLists.length==0">
          <span></span>
          <p>快来绑定账号查看孩子的学习情况吧~</p>
        </div>
        <div class="list-box" v-if="bindLists.length">
          <div class="list clearFix" v-for="(item,index) in bindLists" :key="index">
            <i></i>
            <span class="time">{{item.time}}</span>
            <span>{{item.phone}}</span>
            <span class="btn-span flowRight" @click="toUntying(index,item.phone)">解绑</span>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model='regionVisible' v-if="regionVisible" class="untying-box">
      <h2 class="untying-title">解绑该账户</h2>
      <div class="untying-input-box">
        <input type="text" placeholder="请输入验证码">
        <span @click="getverificationCode(2)">{{conutTimeText2}}</span>
      </div>
      <div class="untying-btn-box">
        <span class="btn1" @click="cancelUntying">取消</span>
        <span class="line"></span>
        <span class="btn2" @click="trueUntying(unbindNum)">确定</span>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import BindingChildrenAccountsHearder from '../../components/common/header/Header'
import {MessageBox} from 'mint-ui';
export default {
  name: 'BindingChildrenAccounts',
  components: {
    BindingChildrenAccountsHearder
  },
  data() {
    return {
      bindLists: [],
      regionVisible: false,
      isclickedFlag: false,
      timer: null,
      canClick: true,
      conutTime: 60,
      conutTimeText1: '获取验证码',
      conutTimeText2: '获取验证码',
      phoneNumber: '',
      verificationCode: '',
      thisNum: '',
      unbindNum: '',
      unbindPhone: ''
    }
  },
  methods: {
    bind() {
      if (this.phoneNumber == '') {
        MessageBox.alert('手机号码不能为空').then(action => {});
        return false;
      } else if (this.isclickedFlag == false) {
        MessageBox.alert('请获取验证码').then(action => {});
        return false;
      } else if (this.verificationCode == '') {
        MessageBox.alert('验证码不能为空').then(action => {});
        return false;
      }
      let date = new Date();
      let time = date.getFullYear() + '/' + (((date.getMonth() + 1) > 10) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 10) ? date.getDate() : ('0' + date.getDate()))
      this.bindLists.push({'time': time, 'phone': this.phoneNumber})
      this.phoneNumber = '';
      this.verificationCode = '';
      this.conutTimeText1 = '获取验证码';
      this.clearInfor();
    },
    toUntying(val, phone) {
      this.unbindNum = val;
      this.unbindPhone = phone;
      this.regionVisible = true;
      this.clearInfor();
      this.conutTimeText1 = '获取验证码';
    },
    cancelUntying() {
      this.regionVisible = false;
      this.clearInfor();
      this.conutTimeText2 = '获取验证码';
    },
    trueUntying() {
      this.regionVisible = false;
      this.bindLists.splice(this.unbindNum, 1);
    },
    clearInfor() {
      this.isclickedFlag = false;
      clearInterval(this.timer);
      this.canClick = true;
      this.conutTime = 60;
    },
    getverificationCode(ref) {
      if (ref == 1) {
        this.thisNum = this.phoneNumber;
      } else if (ref == 2) {
        this.thisNum = this.unbindPhone;
      }
      this.isclickedFlag = true;
      if (!this.canClick) {
        return
      }
      this.canClick = false;
      let conutTimeText = this.conutTime + 's后重试';
      if (ref == 1) {
        this.conutTimeText1 = conutTimeText;
      } else if (ref == 2) {
        this.conutTimeText2 = conutTimeText;
      }
      this.timer = setInterval(() => {
        this.conutTime--;
        conutTimeText = this.conutTime + 's后重试';
        if (this.conutTime <= 0) {
          clearInterval(this.timer);
          this.canClick = true;
          conutTimeText = '重新获取';
          this.conutTime = 60
        }
        if (ref == 1) {
          this.conutTimeText1 = conutTimeText;
        } else if (ref == 2) {
          this.conutTimeText2 = conutTimeText;
        }
      }, 1000);
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .BindingChildrenAccounts{
    .input-box{
      margin-top: px2rem(95px);
      .box{
        padding: 0 px2rem(20px);
        height: px2rem(88px);
        margin: px2rem(25px) px2rem(100px) 0 px2rem(100px);
        border-bottom:1px solid #cccccc;
        input{
          font-size: px2rem(28px);
          line-height: px2rem(88px);
        }
        .phoneNumber{
          width: 100%;
        }
        .idCode{
          width: 50%;
        }
        span{
          display: inline-block;
          width: px2rem(140px);
          height: px2rem(40px);
          text-align: center;
          line-height: px2rem(40px);
          border: 1px solid #cccccc;
          font-size: px2rem(20px);
          margin-top: px2rem(24px);
          color: #666666;
          border-radius: px2rem(8px);
        }
      }
    }
    .btn{
      margin: px2rem(165px) px2rem(100px) px2rem(60px) px2rem(100px);
      background-color: $color-theme;
      border-radius: px2rem(8px);
      overflow: hidden;
      text-align: center;
      span{
        display: inline-block;
        font-size: px2rem(32px);
        color: white;
        line-height: px2rem(90px);
      }
    }
    .notes{
      margin: 0 px2rem(100px) px2rem(80px) px2rem(100px);
      p{
        line-height: px2rem(46px);
        font-size: px2rem(26px);
        color: #666666;
        span{
          color: $color-theme;
          margin-right: px2rem(10px);
        }
      }
    }
    .record{
      .title{
        text-align: center;
        span{
          display: inline-block;
          vertical-align: top;
        }
        .title-left,.title-right{
          width: px2rem(42px);
          height: px2rem(13px);
          border-bottom: 1px dashed #cccccc;
        }
        .title-word{
          font-size: px2rem(28px);
          line-height: px2rem(28px);
          margin: 0 px2rem(6px);
        }
      }
      .record-list{
        .noneBox{
          margin-top: px2rem(60px);
          text-align: center;
          span{
            @include mix-ico-bindAccounts;
            margin-bottom: px2rem(25px);
          }
          p{
            font-size: px2rem(22px);
            color: #999999;
          }
        }
        .list-box{
          margin-top: px2rem(15px);
          .list{
            padding: px2rem(10px) px2rem(100px);
            i,span{
              display: inline-block;
              vertical-align: middle;
            }
            i{
              width: px2rem(10px);
              height: px2rem(10px);
              border-radius: 50%;
              background-color: $color-theme;
            }
            span{
              font-size: px2rem(28px);
              line-height: px2rem(28px);
              color: #999999;
            }
            .btn-span{
              font-size: px2rem(24px);
              color: white;
              width: px2rem(80px);
              height: px2rem(28px);
              line-height: px2rem(28px);
              background-color: #cccccc;
              text-align: center;
              border-radius: px2rem(8px);
            }
          }
        }
      }
    }
    .untying-box{
      width: px2rem(580px);
      .untying-title{
        font-size: px2rem(32px);
        line-height: px2rem(132px);
        text-align: center;
      }
      .untying-input-box{
        margin-top: px2rem(4px);
        border-bottom: 1px solid #eeeeee;
        padding: 0 px2rem(65px) px2rem(36px) px2rem(65px);
        font-size: 0;
        input,span{
          display: inline-block;
          vertical-align: middle;
          background-color: #eeeeee;
          height: px2rem(60px);
          line-height: px2rem(60px);
          font-size: px2rem(22px);
          text-align: center;
          border-radius: px2rem(30px);
        }
        input::placeholder{
          color: #999999;
          font-size: px2rem(22px);
        }
        input{
          width: px2rem(280px);
          margin-right: px2rem(20px);
        }
        span{
          width: px2rem(150px);
          color: #999999;
        }
      }
      .untying-btn-box{
        font-size: 0;
        display: flex;
        span {
          display: inline-block;
          height: px2rem(98px);
          line-height: px2rem(98px);
          font-size: px2rem(30px);
          color: #cccccc;
          text-align: center;
        }
        .line{
          width: 1px;
          background-color: #eeeeee;
        }
        .btn1,.btn2{
          flex: 1;
        }
        .btn2{
          color: $color-theme;
        }
      }
    }
  }

</style>