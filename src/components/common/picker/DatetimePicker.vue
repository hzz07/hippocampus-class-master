<template>
  <div class="DatetimePicker">
      <div class="pickerDemo">
        <div class="title" :class="showDateTime==false?'titleOld':'titleNew'">
          <p>选择时间 : {{selectedValue}}</p>
          <div class="words">
            <span>年</span><span>月</span><span>日</span><span>时</span><span>分</span>
          </div>
       </div>
        <!-- @touchmove.prevent 阻止默认事件，此方法可以在选择时间时阻止页面也跟着滚动。 -->
        <div class="pickerPop" @touchmove.prevent>
          <!-- 年月日时分选择 -->
          <mt-datetime-picker
            lockScroll="true"
            ref="datePicker"
            v-model="dateVal"
            class="myPicker"
            type="datetime"
            confirmText="完成"
            :startDate="startDate"
            :endDate="endDate"
            year-format="{value}"
            month-format="{value}"
            date-format="{value}"
            hour-format="{value}"
            minute-format="{value}"
            second-format="{value}"
            @confirm="dateConfirm()"
            @visible-change="changeDate"
            @input="change"
          >
          </mt-datetime-picker>
        </div>
      </div>
  </div>
</template>

<script>
import {formatDateMin} from '../../../assets/javascripts/formatdate.js'
export default {
  name: 'DatetimePicker',
  props: {
    showPicker: {
      type: Boolean,
      default: false
    },
    pickerType: {
      type: String,
      default: ''
    },
    value01: {
      type: String,
      default: ''
    },
    value02: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      pVisible: false,
      dateVal: '', // 默认是当前日期
      selectedValue: '',
      startDate: new Date('2019-01-01'),
      endDate: new Date('2019-12-31'),
      showDateTime: false
    }
  },
  components: {
  },
  created () {
  },
  methods: {
    selectData () { // 打开时间选择器
      // 如果已经选过日期，则再次打开时间选择器时，日期回显（不需要回显的话可以去掉 这个判断）
      if (this.pickerType == '01') {
        this.selectedValue = this.value01;
      } else if (this.pickerType == '02') {
        this.selectedValue = this.value02;
      }
      if (this.selectedValue) {
        this.dateVal = this.selectedValue
      } else {
        this.dateVal = new Date()
      }
      this.$refs['datePicker'].open()
    },
    dateConfirm () {
      this.selectedValue = formatDateMin(this.dateVal);
      if (this.pickerType == '01') {
        this.$emit('startTime', this.selectedValue);
      } else if (this.pickerType == '02') {
        this.$emit('endTime', this.selectedValue);
      }
    },
    changeDate(data) {
      this.showDateTime = data;
      this.$emit('showPicker', this.showDateTime);
    },
    change(data) {
      this.selectedValue = formatDateMin(data);
    }
  },
  watch: {
    showPicker() {
      if (this.showPicker == true) {
        this.selectData();
      }
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .title{
    z-index: 2500;
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
    p{
      width: 86%;
      padding-left: 4%;
      margin: 0 5%;
      font-size: px2rem(30px);
      line-height: 39px;
      color: $color-theme;
      border-bottom: 1px solid $color-theme;
    }
    .words{
      font-size: 0;
      padding: 0 px2rem(30px);
      span{
        display: inline-block;
        width: 20%;
        text-align: center;
        line-height: 40px;
        font-size: px2rem(30px);
      }
    }
  }
  .titleOld{
    height: 0;
    transition: .2s linear;
    bottom: -80px;
  }
  .titleNew{
    height: 80px;
    transition: .2s linear;
    bottom: 297px;
  }
  .pickerDemo{
    width: 100%;
    height: 50%;
    background-color: #eee;
    .showTime{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 2rem;
      .timeDes{
        font-size: 0.4rem;
        color: red;
      }
      .selectTime{
        display: inline-block;
        width: 4rem;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background-color: #ff776d;
        color: #fff;
        font-size: 0.24rem;
        border-radius: 8px;
        margin-top: 1rem;
      }
    }
  }
  .pickerPop{
    /deep/ .mint-datetime{
      font-size: px2rem(32px);
    }
    /deep/ .picker-item{
      color: #cccccc;
      font-size: px2rem(30px);
      margin: 0 22.5%;
      padding: 0;
      width: 55%;
    }
    /deep/ .picker-selected{
      color: #333;
      font-size: px2rem(32px);
      border-bottom: px2rem(2px) solid $color-theme;
    }
    /deep/ .picker{
      position: relative;
      padding:  80px px2rem(30px) 45px px2rem(30px);
      .picker-toolbar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #eee;
        height: 45px;
        .mint-datetime-action{
          color: #999;
          width: px2rem(374.5px);
          line-height: 45px;
        }
        .mint-datetime-confirm{
          color: $color-theme;
          border-left: px2rem(1px) solid #666666;
        }
      }
    }
  }
</style>