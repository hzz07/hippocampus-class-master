<template>
  <div class="My">
    <div class="My-header">
      <span class="ico-setUp"></span>
      <span class="word">我的</span>
      <span class="ico-contactCustomerService"></span>
    </div>
    <div class="My-top">
      <div class="Head-portrait-box">
        <router-link tag="div" class="Head-portrait" to="/personalData">
          <img src="../assets/images/phone-bg.png" class="Head-img" alt="" v-if="photo==''">
          <img :src="photo" class="Head-img" alt="" v-if="photo!=''">
        </router-link>
      </div>
      <div class="My-name"><router-link tag="span" to="/personalData">{{name}}</router-link><router-link tag="span" class="edit" to="/personalData"></router-link></div>
    </div>
    <div class="My-nav clearFix">
      <div class="nav-box nav-box1">
        <div class="myNav-img-box">
          <span class="ico-myNav ico-myNav1"></span>
          <span class="num">8</span>
        </div>
        <p class="p-myNav1">{{identity=='teacher'?'观看记录':'学习记录'}}</p>
      </div>
      <div class="nav-box nav-box2" v-if="identity=='parents'||identity=='student'">
        <div class="myNav-img-box">
          <span class="ico-myNav ico-myNav2"></span>
          <span class="num">1</span>
        </div>
        <p class="p-myNav2">错题本</p>
      </div>
      <div class="nav-box nav-box2" v-if="identity=='teacher'">
        <router-link tag="div" class="myNav-img-box" to="/homeworkRemaining">
          <span class="ico-myNav ico-myNav2"></span>
          <span class="num">1</span>
        </router-link>
        <router-link tag="p" class="p-myNav2" to="/homeworkRemaining">留作业</router-link>
      </div>
      <div class="nav-box nav-box3">
        <div class="myNav-img-box">
          <span class="ico-myNav ico-myNav3"></span>
          <span class="num">10</span>
        </div>
        <p class="p-myNav3">课程订单</p>
      </div>
    </div>
    <div class="My-list-box">
      <div class="My-list">
        <router-link tag="div" class="list-box clearFix" to="/learningSituation" v-if="identity=='parents'">
          <div class="list-left flowLeft">
            <span class="list-logo logo-LearningSituation"></span>
            <span>学习情况</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </router-link>
        <div class="list-box clearFix" v-if="identity=='student'">
          <div class="list-left flowLeft">
            <span class="list-logo logo-myClass"></span>
            <span>我的班级</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </div>
        <div class="list-box clearFix">
          <div class="list-left flowLeft">
            <span class="list-logo logo-myCollection"></span>
            <span>我的收藏</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </div>
        <div class="list-box clearFix">
          <div class="list-left flowLeft">
            <span class="list-logo logo-activationCard"></span>
            <span>学习卡激活</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </div>
        <div class="list-box clearFix">
          <div class="list-left flowLeft">
            <span class="list-logo logo-activationRecord"></span>
            <span>激活记录</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </div>
      </div>
      <div class="My-list">
        <router-link tag="div" class="list-box clearFix" to="/rollBag">
          <div class="list-left flowLeft">
            <span class="list-logo logo-rollBag"></span>
            <span>卷包</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </router-link>
        <router-link tag="div" class="list-box clearFix" to="/learningTaskReminder" v-if="identity=='student'||identity=='parents'">
          <div class="list-left flowLeft">
            <span class="list-logo logo-taskReminder"></span>
            <span>学习任务提醒</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
          <span class="flowRight list-right-word">您有2个待查看学习任务</span>
        </router-link>
        <router-link tag="div" class="list-box clearFix" to="/bindingChildrenAccounts" v-if="identity=='student'||identity=='parents'">
          <div class="list-left flowLeft">
            <span class="list-logo logo-bindAccount"></span>
            <span>{{identity=='student'?'绑定家长账号':'绑定孩子账号'}}</span>
          </div>
          <span class="list-right flowRight iconfont">&#xe616;</span>
        </router-link>
      </div>
    </div>
    <my-nav></my-nav>
  </div>
</template>

<script>
import MyNav from '../components/common/nav/Nav'
export default {
  name: 'My',
  components: {
    MyNav
  },
  data() {
    return {
      name: '啥是佩奇',
      photo: '',
      identity: ''
    }
  },
  methods: {
    getInfor() {
      this.photo = this.$store.state.BasicInfor.photo;
      this.name = this.$store.state.BasicInfor.userName;
      this.identity = this.$store.state.BasicInfor.checkIdentity;
    }
  },
  mounted() {
    this.getInfor();
    // this.name = this.$store.state.nickName;
    // this.photo = this.$store.state.photoImg;
  },
  activated() {
    let oldName = this.name;
    let oldPhoto = this.photo;
    if (oldName != this.$store.state.nickName) {
      this.name = this.$store.state.nickName;
    }
    if (oldPhoto != this.$store.state.photoImg) {
      this.photo = this.$store.state.photoImg;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .My{
    background-color: #f4f4f4;
    .My-header{
      text-align: center;
      background: #8bb3f3;
      position: relative;
      .ico-setUp{
        @include mix-ico-setUp;
        position: absolute;
        left: px2rem(30px);
        top: px2rem(29px);
      }
      .word{
        line-height: px2rem(90px);
        font-size: px2rem(32px);
        color: white;
      }
      .ico-contactCustomerService{
        @include mix-ico-kf;
        position: absolute;
        right: px2rem(30px);
        top: px2rem(29px);
      }
    }
    .My-top{
      background: url("../assets/images/myBg.png") no-repeat center top;
      height: px2rem(325px);
      background-size: 100% 100%;
      overflow: hidden;
      .Head-portrait-box{
        width: px2rem(170px);
        height: px2rem(170px);
        background-color: white;
        border-radius: 50%;
        overflow: hidden;
        margin: px2rem(40px) auto;
        .Head-portrait{
          width: px2rem(150px);
          height: px2rem(150px);
          margin: px2rem(10px) auto;
          .Head-img{
            width: 100%;
          }
        }
      }
      .My-name{
        text-align: center;
        span{
          display: inline-block;
          font-size: px2rem(30px);
          color: white;
          vertical-align: middle;
        }
        .edit{
          @include mix-ico-edit;
          vertical-align: middle;
          margin-left: px2rem(10px);
        }
      }
    }
    .My-nav{
      background-color: white;
      padding: 0 px2rem(30px);
      display: flex;
      border-bottom: px2rem(20px) solid #f4f4f4;
      .nav-box{
        float: left;
        text-align: center;
        .myNav-img-box{
          position: relative;
          .ico-myNav{
            margin-top: px2rem(40px);
          }
          .num{
            position: absolute;
            display: inline-block;
            width: px2rem(30px);
            height: px2rem(30px);
            font-size: px2rem(20px);
            color: white;
            background-color: #ff5301;
            border-radius: 50%;
            line-height: px2rem(30px);
          }
        }
        .ico-myNav1{
          @include mix-ico-myNav1;
        }
        .ico-myNav2{
          @include mix-ico-myNav2;
        }
        .ico-myNav3{
          @include mix-ico-myNav3;
        }
        p{
          font-size: px2rem(28px);
          line-height: px2rem(32px);
          margin-bottom: px2rem(20px);
        }
      }
      .nav-box2{
        flex: 1;
        .num{
          top: px2rem(30px);
          right: px2rem(160px);
        }
      }
      .nav-box1,.nav-box3{
        width: px2rem(150px);
        .num{
          top: px2rem(30px);
          right: px2rem(40px);
        }
      }
    }
    .My-list{
      background-color: white;
      border-bottom: px2rem(10px) solid #f4f4f4;
      .list-box{
        padding: px2rem(35px) px2rem(30px);
        border-bottom: 1px solid #f4f4f4;
        .list-left{
          span{
            vertical-align: middle;
            display: inline-block;
            font-size: px2rem(24px);
            height: px2rem(44px);
            line-height: px2rem(44px);
          }
          .list-logo{
            margin-right: px2rem(18px);
          }
          .logo-LearningSituation{
            @include mix-ico-LearningSituation;
          }
          .logo-myCollection{
            @include mix-ico-myCollection;
          }
          .logo-myClass{
            @include mix-ico-myClass;
          }
          .logo-activationRecord{
            @include mix-ico-activationRecord;
          }
          .logo-activationCard{
            @include mix-ico-activationCard;
          }
          .logo-rollBag{
            @include mix-ico-rollBag;
          }
          .logo-taskReminder{
            @include mix-ico-taskReminder;
          }
          .logo-bindAccount{
            @include mix-ico-bindAccount;
          }
        }
        .list-right{
          display: inline-block;
          height: px2rem(44px);
          line-height: px2rem(44px);
          color: #999999;
        }
        .list-right-word{
          display: inline-block;
          height: px2rem(44px);
          line-height: px2rem(44px);
          color: #fb0303;
          font-size: px2rem(22px);
          margin-right: px2rem(10px);
        }
      }
      .list-box:last-child{
        border-bottom: none;
      }
    }
    .My-list:last-child{
      border-bottom: px2rem(40px) solid #f4f4f4;
    }
  }

</style>