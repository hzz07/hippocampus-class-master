<template>
  <div class="PersonalData">
    <div class="PersonalData-header">
      <div class="header-box center">
        <span class="Header-back" @click="routerback"></span>
        <span class="Header-title">个人资料</span>
        <span class="Header-preservation" @click="saveData">保存</span>
      </div>
    </div>
    <div class="data-box photoBox">
      <div class="box clearFix">
        <span class="word-left flowLeft">头像</span>
        <div class="Box flowRight">
          <input type="file" id="add-photo" value="" @change="getPhoto" name="file" class="photoInput" accept="image/*" readonly="readonly">
          <span class="iconfont ico-to flowRight">&#xe616;</span>
          <div class="photo-box flowRight" v-if="personalData.photoSrc==''">
            <img src="../../assets/images/phone-bg.png" class="photo">
          </div>
          <div class="photo-box flowRight" v-if="personalData.photoSrc!=''">
            <img id="img" :src="personalData.photoSrc" class="photo">
          </div>
        </div>
      </div>
    </div>
    <div class="data-box">
      <div class="box clearFix">
        <span class="word-left flowLeft">昵称</span>
        <input type="text" placeholder="请填写您的昵称" v-model="personalData.name" class="input flowRight">
      </div>
    </div>
    <div class="data-box">
      <div class="box clearFix">
        <span class="word-left flowLeft">性别</span>
        <p class="input-single-election flowRight">
          <label class="single-election-word">
            <span class="icoCheck" :class="personalData.checkGender=='man'?'icoYesCheck':'icoNoCheck'"></span>
            <span>男</span>
            <input class="displayNone" v-model="personalData.checkGender" type="radio" value="man"/>
          </label>
          <label class="single-election-word">
            <span class="icoCheck" :class="personalData.checkGender=='woman'?'icoYesCheck':'icoNoCheck'"></span>
            <span>女</span>
            <input class="displayNone" v-model="personalData.checkGender" type="radio" value="woman"/>
          </label>
        </p>
      </div>
    </div>
    <div class="data-box">
      <div class="box clearFix">
        <span class="word-left flowLeft">地址</span>
        <div class="clearFix flowRight" style="width: 80%" @click="pickerClick">
          <span class="iconfont ico-to flowRight">&#xe616;</span>
          <span class="word flowRight">{{personalData.adress}}</span>
        </div>
      </div>
    </div>
    <div class="data-box">
      <div class="box clearFix">
        <span class="word-left flowLeft">身份</span>
        <span class="word flowRight" v-if="personalData.identity==='student'">学生</span>
        <span class="word flowRight" v-if="personalData.identity==='teacher'">教师</span>
        <span class="word flowRight" v-if="personalData.identity==='parents'">家长</span>
      </div>
    </div>
    <div class="full"></div>
    <div class="data-box">
      <div class="box clearFix">
        <span class="word-left flowLeft">学校</span>
        <input type="text" class="input flowRight" v-model="personalData.school">
      </div>
    </div>
    <personal-data-picker></personal-data-picker>
  </div>
</template>

<script>
import Bus from '../../assets/javascripts/eventBus'
import PersonalDataPicker from '../../components/common/picker/Picker'
import {MessageBox} from 'mint-ui';
import {mapMutations} from 'vuex'
export default {
  name: 'PersonalData',
  components: {
    PersonalDataPicker
  },
  data() {
    return {
      personalData: {
        photoSrc: '',
        name: '',
        checkGender: '',
        adress: '',
        identity: '',
        school: ''
      }
    }
  },
  methods: {
    getMassage() {
      this.personalData.photoSrc = this.$store.state.BasicInfor.photo;
      this.personalData.name = this.$store.state.BasicInfor.userName;
      this.personalData.checkGender = this.$store.state.BasicInfor.checkGender;
      this.personalData.identity = this.$store.state.BasicInfor.checkIdentity;
      this.personalData.adress = this.$store.state.BasicInfor.region;
      this.personalData.school = this.$store.state.BasicInfor.school;
    },
    routerback() {
      this.$router.back(-1);
    },
    pickerClick() {
      Bus.$emit('showPicker', true);
    },
    getPhoto() {
      let file = document.getElementById('add-photo').files[0];
      document.getElementById('add-photo').value = '';
      let _this = this;
      // if (file.type != 'image/jpg' && file.type != 'image/jpeg' && file.type != 'image/JPG' && file.type != 'image/JPEG') {
      //   MessageBox.alert('图片类型必须为.jpg、.jpeg').then(action => {});
      //   return false;
      // }
      // if (file.size / 1024 > 10000) {
      //   MessageBox.alert('图片过大，请重试。').then(action => {});
      //   return false;
      // }
      if (file.type.indexOf('image') == 0) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          let newUrl = this.result;
          _this.personalData.photoSrc = newUrl;
        };
      }
    },
    ...mapMutations('BasicInfor', ['savePersonalData']),
    saveData() {
      if (this.personalData.name == '') {
        MessageBox.alert('还不知道您怎么称呼呢，请填写昵称').then(action => {});
        return false;
      }
      let data = {
        userName: this.personalData.name,
        photo: this.personalData.photoSrc,
        checkGender: this.personalData.checkGender,
        region: this.personalData.adress,
        school: this.personalData.school
      };
      this.savePersonalData(data);
      this.$router.push({path: '/my'})
    }
  },
  mounted() {
    Bus.$on('adressData', (data) => {
      this.personalData.adress = data.name;
    })
    this.getMassage();
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .PersonalData{
    background-color: #f4f4f4;
    height: 100%;
    .PersonalData-header{
      background-color: $color-theme;
      .header-box{
        position: relative;
        text-align: center;
        .Header-back{
          position: absolute;
          @include mix-ico-back;
          left: 0;
          top: 50%;
          margin-top: px2rem(-17.5px);
        }
        .Header-title{
          line-height: px2rem(80px);
          color: $color-text;
          font-size: $font-size-medium-x;
        }
        .Header-preservation{
          position: absolute;
          right: 0;
          top: 0;
          font-size: px2rem(28px);
          color: white;
          line-height: px2rem(80px);
        }
      }
    }
    .data-box{
      padding: 0 px2rem(30px);
      background-color: white;
      margin-bottom: px2rem(2px);
      .word-left{
        display: inline-block;
        font-size: px2rem(28px);
        line-height: px2rem(98px);
      }
      .word{
        max-width: px2rem(500px);
        overflow: hidden;
        height: px2rem(98px);
        display: inline-block;
        font-size: px2rem(28px);
        line-height: px2rem(98px);
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .ico-to{
        font-size: px2rem(30px);
        color: #999999;
        margin-top: px2rem(34px);
        margin-left: px2rem(10px);
      }
      .input{
        font-size: px2rem(28px);
        line-height: px2rem(30px);
        color: #333;
        margin-top: px2rem(34px);
        width: px2rem(300px);
        text-align: right;
      }
      .input-single-election{
        margin-top: px2rem(34px);
        .single-election-word{
          height: px2rem(28px);
          span{
            display: inline-block;
            vertical-align: middle;
            font-size: px2rem(28px);
            color: #666666;
            line-height: px2rem(34px);
          }
          .icoCheck{
            margin-left: px2rem(16px);
          }
          .icoNoCheck{
            @include mix-ico-NoCheck;
          }
          .icoYesCheck{
            @include mix-ico-YesCheck;
          }
        }
      }
    }
    .photoBox{
      .word-left{
        line-height: px2rem(155px);
      }
      .Box{
        width: px2rem(165px);
        height: px2rem(155px);
        overflow: hidden;
        position: relative;
        .photoInput{
          width: 100%;
          height: 100%;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }
        .photo-box{
          margin-right: px2rem(25px);
          border-radius: 50%;
          margin-top: px2rem(22.5px);
          width: px2rem(100px);
          height: 0;
          padding-bottom: 60.6060606%;
          overflow: hidden;
          .photo{
            width: 100%;
          }
        }
        .ico-to{
          margin-top: px2rem(62.5px);
        }
      }
    }
    .full{
      height: px2rem(20px);
    }
  }

</style>