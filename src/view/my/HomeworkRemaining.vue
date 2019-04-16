<template>
  <div class="HomeworkRemaining">
    <homework-remaining-header></homework-remaining-header>
    <div class="JobDetails-box">
      <div class="JobDetails-content">
        <div class="box clearFix" @click="changeTime('01')">
          <h3 class="flowLeft">布置时间:</h3>
          <input class="flowLeft" v-model="startTime" placeholder="请设置布置时间" readonly="readonly">
        </div>
        <div class="box clearFix" @click="changeTime('02')">
          <h3 class="flowLeft">截止时间:</h3>
          <input class="flowLeft" v-model="endTime" placeholder="请设置截止时间" readonly="readonly">
        </div>
        <div class="class-box">
          <div class="top clearFix" @click="toShowClass">
            <h3 class="flowLeft">发送到班级</h3>
            <span class="flowRight ico-down iconfont" v-if="showClass==false">&#xe6b5;</span>
            <span class="flowRight ico-down iconfont" v-if="showClass==true">&#xe6b6;</span>
          </div>
          <div class="bottom clearFix" v-if="showClass">
            <div class="bottom-box" v-for="item in classLists" :key="item.id">
              <label @click.prevent="checkedClassClick(item.id)">
                <span class="icocheck icocheck1" :class="{icocheck2:checkedClass.length && checkedClass.indexOf(item.id) > -1}"></span>
                <span class="name">{{item.name}}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="JobDetails-content JobDetails-content2">
        <div class="box clearFix">
          <h3 class="flowLeft">学习内容</h3>
        </div>
        <div class="contents-box">
          <textarea class="contents" placeholder="请在此处输入要发布的学习内容，让学生每天都有进步哦。"></textarea>
          <div class="contents-boxs">
            <div class="boxs voice-box">
              <span class="iconfont">&#xe6e1;</span>
              <p>发送语音</p>
            </div>
            <div class="boxs file-box" v-if="!showPhoto">
              <span class="iconfont">&#xe609;</span>
              <p>上传文件</p>
            </div>
            <div class="boxs photos-box" v-if="showPhoto">
              <div class="photo">
                <span></span>
                <img src="" alt="">
              </div>
            </div>
            <div class="boxs more-box">
              <span class="iconfont">&#xe600;</span>
              <p>更多</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <datetime-picker
      :showPicker="showTimePicker"
      :pickerType="pickerType"
      :value01="startTime"
      :value02="endTime"
      @startTime="getStartTime"
      @endTime="getEndTime"
      @showPicker="isShowPicker"
    ></datetime-picker>
  </div>
</template>

<script>
import HomeworkRemainingHeader from '../../components/common/header/Header'
import DatetimePicker from '../../components/common/picker/DatetimePicker'
export default {
  name: 'HomeworkRemaining',
  components: {
    HomeworkRemainingHeader,
    DatetimePicker
  },
  data() {
    return {
      showPhoto: false,
      showTimePicker: false,
      pickerType: '',
      startTime: '',
      endTime: '',
      classLists: [
        {'id': '001', 'name': '初中化学一班'},
        {'id': '002', 'name': '初中化学二班'},
        {'id': '003', 'name': '初中物理一班'},
        {'id': '004', 'name': '初中化学五班'},
        {'id': '005', 'name': '初中物理一班'},
        {'id': '006', 'name': '高中化学一班'},
        {'id': '007', 'name': '高中物理三班'},
        {'id': '008', 'name': '高中物理四班'}
      ],
      checkedClass: [],
      showClass: false
    }
  },
  methods: {
    changeTime(val) {
      this.showTimePicker = true;
      this.pickerType = val;
    },
    getStartTime(data) {
      this.startTime = data;
    },
    getEndTime(data) {
      this.endTime = data;
    },
    isShowPicker(data) {
      this.showTimePicker = data;
    },
    checkedClassClick(val) {
      let thisId = this.checkedClass.indexOf(val);
      if (thisId == -1) {
        this.checkedClass.push(val)
      } else {
        this.checkedClass.splice(thisId, 1);
      }
    },
    toShowClass() {
      this.showClass = !this.showClass;
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  .JobDetails-box{
    .JobDetails-content{
      border-bottom: px2rem(18px) solid #f4f4f4;
      .box{
        padding: px2rem(28px) px2rem(30px);
        border-bottom:  px2rem(2px) solid #f4f4f4;
        h3{
          font-size: px2rem(28px);
          line-height: px2rem(48px);
          margin-right: px2rem(20px);
        }
        input{
          font-size: px2rem(26px);
          line-height: px2rem(30px);
          padding: px2rem(9px) 0;
          color: #666666;
          max-width: px2rem(536px);
        }
        .ico-down{
          margin-top: px2rem(12px);
          color: #cccccc;
        }
      }
      .class-box{
        .top{
          padding: px2rem(28px) px2rem(30px);
          border-bottom:  px2rem(2px) solid #f4f4f4;
          h3{
            font-size: px2rem(28px);
            line-height: px2rem(48px);
            margin-right: px2rem(20px);
          }
          .ico-down{
            margin-top: px2rem(12px);
            color: #cccccc;
          }
        }
        .bottom{
          padding: px2rem(15px) px2rem(30px);
          .bottom-box{
            float: left;
            width: 40%;
            padding: px2rem(15px) 0;
            font-size: 0;
            .icocheck{
              display: inline-block;
              width: px2rem(24px);
              height: px2rem(24px);
              vertical-align: middle;
              border-radius: 50%;
              margin-right: px2rem(20px);
            }
            .icocheck1{
              border: 1px solid $color-theme;
            }
            .icocheck2{
              background-color: $color-theme;
            }
            .name{
              display: inline-block;
              font-size: px2rem(24px);
              line-height: px2rem(30px);
              vertical-align: middle;
              color: #666666;
            }
          }
        }
      }
    }
    .JobDetails-content2,.JobDetails-content2 .box{
      border-bottom: none;
      .contents-box{
        position: relative;
        min-height: px2rem(400px);
        margin: 0 px2rem(30px);
        border: 1px solid #eeeeee;
        .contents{
          width: 95%;
          font-size: px2rem(26px);
          line-height: px2rem(40px);
          padding: px2rem(20px) 2.5%;
          border: none;
          resize: none;
          outline: none;
          height: px2rem(200px);
        }
       .contents-boxs{
         position: absolute;
         width: 100%;
         bottom: 0;
         left: 0;
         font-size: 0;
         .boxs{
           display: inline-block;
           width: px2rem(110px);
           height: px2rem(110px);
           border: 1px dashed #eeeeee;
           margin-left: px2rem(20px);
           margin-bottom: px2rem(20px);
           text-align: center;
           span{
             font-size: px2rem(62px);
             color: #cccccc;
           }
           p{
             font-size: px2rem(20px);
             line-height: px2rem(40px);
             color: #999999;
             text-align: center;
           }
         }
        }
      }
    }
  }
</style>