<template>
  <div class='three-level-address' id='three_level_address'>
    <mt-popup v-model='regionVisible' id='three_level_address' v-if="regionVisible" position='bottom' class='region-popup'>
      <div class="clR pop-btn clearFix">
        <p @click="cancle" class="btn flowLeft btn-cancle">取消</p>
        <p @click="sureMap" class="btn flowRight btn-sure">确定</p>
      </div>
      <mt-picker :slots='myAddressSlots' valueKey='name' :visibleItemCount="7" @change='addressChange'></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
import threeLevelAddress from '../../../../static/mock/city.json';
import Bus from '../../../assets/javascripts/eventBus'
export default {
  data() {
    return {
      region: '', // 三级地址
      province: '', // 省
      city: '', // 市
      county: '', // 县
      provinceCode: '', // 省级代码
      cityCode: '', // 市级代码
      countyCode: '', // 县级代码
      regionVisible: false,
      regionInit: true, // 禁止地区选择器自动初始化，picker组件会默认进行初始化，导致一进入页面就会默认选中一个初始3级地址
      // picker组件插槽
      myAddressSlots: [
        // 省
        {
          flex: 1,
          values: this.getProvinceArr(), // 省份数组
          className: 'slot1',
          textAlign: 'center'
        },
        // 分隔符
        {
          divider: true,
          content: ':',
          className: 'slot2'
        },
        // 市
        {
          flex: 1,
          values: this.getCityArr('北京市'),
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: ':',
          className: 'slot4'
        },
        // 县
        {
          flex: 1,
          values: this.getCountyArr('北京市', '市辖区'),
          className: 'slot5',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    sureMap() {
      let data = {'name': this.province + ' ' + this.city + ' ' + this.county, 'code': this.countyCode};
      Bus.$emit('adressData', data);
      this.regionVisible = false;
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    },
    cancle() {
      this.regionVisible = false;
      document.getElementsByTagName('html')[0].style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    },
    // picker组件的change事件，进行取值赋值
    addressChange(picker, values) {
      // 取值并赋值
      this.region = values[0]['name'] + values[1]['name'] + values[2]['name'];
      this.province = values[0]['name'];
      this.city = values[1]['name'];
      this.county = values[2]['name'];
      this.provinceCode = values[0]['code'];
      this.cityCode = values[1]['code'];
      this.countyCode = values[2]['code'];
      // 给市、县赋值
      picker.setSlotValues(1, this.getCityArr(values[0]['name']));
      picker.setSlotValues(2, this.getCountyArr(values[0]['name'], values[1]['name']));
    },
    // 遍历json，返回省级对象数组
    getProvinceArr() {
      let provinceArr = [];
      threeLevelAddress.forEach(function (item) {
        let obj = {};
        obj.name = item.name;
        obj.code = item.code;
        provinceArr.push(obj);
      });
      return provinceArr;
    },
    // 遍历json，返回市级对象数组
    getCityArr(province) {
      let cityArr = [];
      threeLevelAddress.forEach(function (item) {
        if (item.name === province) {
          item.children.forEach(function (args) {
            let obj = {};
            obj.name = args.name;
            obj.code = args.code;
            cityArr.push(obj);
          });
        }
      });
      return cityArr;
    },
    // 遍历json，返回县级对象数组
    getCountyArr(province, city) {
      let countyArr = [];
      threeLevelAddress.forEach(function(item) {
        if (item.name === province) {
          item.children.forEach(function (args) {
            if (args.name === city) {
              args.children.forEach(function (param) {
                let obj = {};
                obj.name = param.name;
                obj.code = param.code;
                countyArr.push(obj);
              })
            }
          });
        }
      });
      return countyArr;
    }
  },
  mounted() {
    if (this.regionVisible == true) {
      // 初始化设备高度为设备高度height 100%
      let orderHeight = window.innerHeight;
      document.getElementById('three_level_address').style.height = orderHeight + 'px';
    }
    Bus.$on('showAdressPicker', (ref) => {
      this.regionVisible = ref;
    });
    Bus.$on('showPicker', (ref) => {
      this.regionVisible = ref;
    })
  }
}
</script>
<style scoped lang='scss' type='text/scss'>
  @import '~scss/variable.scss';
  .three-level-address{
    width: 100%;
    text-align: left;
    color: #ffffff;
  }
  .three-level-address /deep/ .picker-item{
    font-size: px2rem(32px);
  }
  .pop-btn{
    border: 1px solid $color-border;
    display: flex;
    .btn{
      flex: 1;
      height: px2rem(70px);
      line-height: px2rem(70px);
      font-size: $font-size-small;
      text-align: center;
      color: $color-text;
      margin: px2rem(8px) px2rem(80px);
      background: $color-theme;
      border-radius: px2rem(8px);
    }
  }
  .region-div{
    width: 100%;
    padding-top: 1rem;
  }
  .input-icon{
    display: inline-block;
    vertical-align: middle;
  }
  .input-icon i{
    font-size: 2rem;
  }
  .region-div input{
    width: 70%;
    font-size: 1rem;
    line-height: 2rem;
    border-radius: 5px;
    outline: none;
    text-align: right;
    color: black;
  }
  .region-popup{
    width: 100%;
  }
  .data-show-div{
    margin-top: 1rem;
    margin-left: 1rem;
    color: #45C473;
  }
  .data-show-div span{
    color: #ffffff;
    font-size: 0.8rem;
  }
</style>
