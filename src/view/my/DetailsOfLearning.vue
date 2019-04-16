<template>
  <div class="DetailsOfLearning">
    <details-of-learning-header></details-of-learning-header>
    <div class="Details-top-box clearFix">
      <div class="Details-photo-box flowLeft">
        <img src="../../assets/images/photo.png" class="Details-photo" alt="">
      </div>
      <div class="Details-word flowLeft">
        <p class="word-name">佩奇</p>
        <p class="word-class">附属一中七年级一班</p>
      </div>
    </div>
    <div class="Details-nav-box">
      <span @click="checkedDate(1)" class="nav-left" :class="{Check:showDateInfor==1}">昨日</span>
      <span @click="checkedDate(7)" class="nav-right" :class="{Check:showDateInfor==7}">7日</span>
    </div>
    <div class="Details-Statistics-box">
      <div class="Statistics">
        <div class="Statistic Statistic1">
          <p class="Statistic-title">看完课程</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.class.complete:SevendaysData.part1.class.complete}}</p>
        </div>
        <div class="Statistic Statistic2">
          <p class="Statistic-title">未完课程</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.class.uncomplete:SevendaysData.part1.class.uncomplete}}</p>
        </div>
        <div class="Statistic Statistic3">
          <p class="Statistic-title">课程比例</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.class.proportion:SevendaysData.part1.class.proportion}}</p>
        </div>
      </div>
      <div class="Statistics">
        <div class="Statistic Statistic1">
          <p class="Statistic-title">看完例题</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.example.complete:SevendaysData.part1.example.complete}}</p>
        </div>
        <div class="Statistic Statistic2">
          <p class="Statistic-title">未完例题</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.example.uncomplete:SevendaysData.part1.example.uncomplete}}</p>
        </div>
        <div class="Statistic Statistic3">
          <p class="Statistic-title">例题比例</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.example.proportion:SevendaysData.part1.example.proportion}}</p>
        </div>
      </div>
      <div class="Statistics">
        <div class="Statistic Statistic1">
          <p class="Statistic-title">正确题数</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.accuracy.correct:SevendaysData.part1.accuracy.correct}}</p>
        </div>
        <div class="Statistic Statistic2">
          <p class="Statistic-title">错误题数</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.accuracy.error:SevendaysData.part1.accuracy.error}}</p>
        </div>
        <div class="Statistic Statistic3">
          <p class="Statistic-title">正确比例</p>
          <p class="Statistic-num">{{showDateInfor==1?YesterdayData.part1.accuracy.proportion:SevendaysData.part1.accuracy.proportion}}</p>
        </div>
      </div>
    </div>
    <div class="Statistical-chart-box">
      <div class="Statistical-chart">
        <div class="h-box clearFix">
          <h3 class="flowLeft">观看课程</h3>
          <span class="flowRight">{{showDateInfor==1?YesterdayData.part2.time:SevendaysData.part2.time}}</span>
        </div>
        <div class="chart-box">
          <div id="myChart1" :style="{height: '240px',width: '92%',margin: '0 auto'}"></div>
        </div>
      </div>
      <div class="Statistical-chart">
        <div class="h-box clearFix">
          <h3 class="flowLeft">例题解析</h3>
          <span class="flowRight">{{showDateInfor==1?YesterdayData.part2.time:SevendaysData.part2.time}}</span>
        </div>
        <div class="chart-box">
          <div id="myChart2" :style="{height: '240px',width: '92%',margin: '0 auto'}"></div>
        </div>
      </div>
      <div class="Statistical-chart">
        <div class="h-box clearFix">
          <h3 class="flowLeft">习题练习</h3>
          <span class="flowRight">{{showDateInfor==1?YesterdayData.part2.time:SevendaysData.part2.time}}</span>
        </div>
        <div class="chart-box">
          <div id="myChart3" :style="{height: '240px',width: '92%',margin: '0 auto'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailsOfLearningHeader from '../../components/common/header/Header'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legend');
// 引入柱状图组件
require('echarts/lib/chart/bar')
export default {
  name: 'DetailsOfLearning',
  components: {
    DetailsOfLearningHeader
  },
  data() {
    return {
      showDateInfor: 1,
      drawLineData: {},
      YesterdayData: {
        part1: {
          class: {
            proportion: '65%',
            complete: '13',
            uncomplete: '7'
          },
          example: {
            proportion: '75%',
            complete: '15',
            uncomplete: '5'
          },
          accuracy: {
            proportion: '87%',
            correct: 13,
            error: 2
          }
        },
        part2: {
          time: '2019/01/09',
          datas: {
            class: {
              max: 100,
              TotalDuration: [80, 60, 52, 38, 72],
              ViewingDuration: [80, 42, 37, 27, 60]
            },
            example: {
              max: 40,
              TotalDuration: [19, 10, 22, 28, 12],
              ViewingDuration: [11, 20, 18, 2, 18]
            },
            accuracy: {
              max: 30,
              correct: [9, 15, 10, 4, 21],
              error: [21, 15, 20, 26, 9]
            }
          }
        }
      },
      SevendaysData: {
        part1: {
          class: {
            proportion: '86%',
            complete: '120',
            uncomplete: '20'
          },
          example: {
            proportion: '93%',
            complete: '130',
            uncomplete: '10'
          },
          accuracy: {
            proportion: '76%',
            correct: 80,
            error: 25
          }
        },
        part2: {
          time: '2019/01/02-2019/01/09',
          datas: {
            class: {
              max: 700,
              TotalDuration: [500, 600, 500, 700, 600],
              ViewingDuration: [480, 442, 337, 427, 460]
            },
            example: {
              max: 80,
              TotalDuration: [60, 76, 55, 70, 42],
              ViewingDuration: [20, 4, 25, 10, 38]
            },
            accuracy: {
              max: 300,
              correct: [100, 150, 202, 250, 210],
              error: [110, 60, 8, 40, 90]
            }
          }
        }
      }
    }
  },
  mounted() {
    this.drawLineData = this.YesterdayData;
    this.drawLine(this.drawLineData);
  },
  methods: {
    checkedDate(val) {
      this.showDateInfor = val;
      if (this.showDateInfor == 1) {
        this.drawLineData = this.YesterdayData;
      } else if (this.showDateInfor == 7) {
        this.drawLineData = this.SevendaysData;
      }
      this.drawLine(this.drawLineData);
    },
    drawLine(val) {
      let data = val.part2.datas;
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = echarts.init(document.getElementById('myChart1'));
      let myChart2 = echarts.init(document.getElementById('myChart2'));
      let myChart3 = echarts.init(document.getElementById('myChart3'));
      // 绘制图表
      myChart1.setOption({
        grid: {
          top: '16%',
          left: '3%',
          right: '16%', // 距离右侧边距
          bottom: '5%',
          show: false,
          containLabel: true
        },
        legend: [
          {
            type: 'plain',
            left: '50%', // 图例的位置，可以用像素，可以用百分比，也可以用center，right等
            top: '4%', // 图例的位置
            itemWidth: 20, // 图例图标的宽
            itemHeight: 4, // 图例图标的高
            tooltip: { // 图例提示框，默认不显示
              show: true
            },
            data: [ // ----图例内容
              {
                name: '课程总时长',
                icon: 'rect', // ----图例的外框样式
                textStyle: {
                  fontSise: '10px',
                  color: '#666666'
                }
              }
            ]
          },
          {
            type: 'plain',
            left: '50%', // 图例的位置，可以用像素，可以用百分比，也可以用center，right等
            top: '9%', // 图例的位置
            itemWidth: 20, // 图例图标的宽
            itemHeight: 4, // 图例图标的高
            tooltip: { // 图例提示框，默认不显示
              show: true
            },
            data: [
              {
                name: '观看时间',
                icon: 'rect', // ----图例的外框样式
                textStyle: {
                  fontSise: '10px',
                  color: '#666666'
                }
              }
            ]
          }
        ],
        xAxis: {// x轴
          max: 4,
          type: 'category',
          data: ['物理力学', '物理元素', '物理金属', '化学空气', '化学元素'],
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
              width: 1,
              type: 'solid',
              fontSize: '10px'
            }
          },
          axisTick: { // 刻度
            show: false // 不显示刻度线
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#555555']
            }
          },
          nameGap: 10,
          name: '视频名称',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#666666',
            fontSize: '10px'
          },
          axisLabel: {
            showMaxLabel: true,
            interval: 0,
            rotate: -15,
            textStyle: {
              color: '#555555', // 坐标值得具体的颜色
              fontSize: '10px'
            }
          }
        },
        yAxis: {
          max: data.class.max,
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: { // 刻度
            show: false // 不显示刻度线
          },
          name: '课程时间（min）',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#666666',
            fontSize: '10px'
          },
          axisLabel: {
            textStyle: {
              color: '#555555', // 坐标值得具体的颜色
              fontSize: '10px'
            }
          },
          minInterval: 20,
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#cccccc']
            }
          }
        },
        series: [
          {
            name: '课程总时长',
            data: data.class.TotalDuration,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#3C9DF7'
                // 具体数值
                // label: {
                //   show: true,
                //   position: 'top',
                //   textStyle: {
                //     color: '#FD6B71'
                //   }
                // }
              }
            },
            barWidth: 12.5
          },
          {
            name: '观看时间',
            type: 'bar',
            barGap: 0,
            barCategoryGap: 22.5,
            data: data.class.ViewingDuration,
            itemStyle: {
              normal: {
                color: '#e5e5e5'
              }
            },
            barWidth: 12.5
          }
        ]
      })
      myChart2.setOption({
        grid: {
          top: '16%',
          left: '3%',
          right: '16%', // 距离右侧边距
          bottom: '5%',
          show: false,
          containLabel: true
        },
        legend: [
          {
            type: 'plain',
            left: '50%', // 图例的位置，可以用像素，可以用百分比，也可以用center，right等
            top: '4%', // 图例的位置
            itemWidth: 20, // 图例图标的宽
            itemHeight: 4, // 图例图标的高
            tooltip: { // 图例提示框，默认不显示
              show: true
            },
            data: [ // ----图例内容
              {
                name: '例题总时长',
                icon: 'rect', // ----图例的外框样式
                textStyle: {
                  fontSise: '10px',
                  color: '#666666'
                }
              }
            ]
          },
          {
            type: 'plain',
            left: '50%', // 图例的位置，可以用像素，可以用百分比，也可以用center，right等
            top: '9%', // 图例的位置
            itemWidth: 20, // 图例图标的宽
            itemHeight: 4, // 图例图标的高
            tooltip: { // 图例提示框，默认不显示
              show: true
            },
            data: [
              {
                name: '观看时间',
                icon: 'rect', // ----图例的外框样式
                textStyle: {
                  fontSise: '10px',
                  color: '#666666'
                }
              }
            ]
          }
        ],
        xAxis: {// x轴
          max: 4,
          type: 'category',
          data: ['物理力学', '物理元素', '物理金属', '化学空气', '化学元素'],
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
              width: 1,
              type: 'solid',
              fontSize: '10px'
            }
          },
          axisTick: { // 刻度
            show: false // 不显示刻度线
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#555555']
            }
          },
          nameGap: 10,
          name: '例题课程',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#666666',
            fontSize: '10px'
          },
          axisLabel: {
            showMaxLabel: true,
            interval: 0,
            rotate: -15,
            textStyle: {
              color: '#555555', // 坐标值得具体的颜色
              fontSize: '10px'
            }
          }
        },
        yAxis: {
          max: data.example.max,
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: { // 刻度
            show: false // 不显示刻度线
          },
          name: '例题时间（min）',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#666666',
            fontSize: '10px'
          },
          axisLabel: {
            textStyle: {
              color: '#555555', // 坐标值得具体的颜色
              fontSize: '10px'
            }
          },
          minInterval: 5,
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#cccccc']
            }
          }
        },
        series: [
          {
            name: '例题总时长',
            data: data.example.TotalDuration,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#3C9DF7'
                // 具体数值
                // label: {
                //   show: true,
                //   position: 'top',
                //   textStyle: {
                //     color: '#FD6B71'
                //   }
                // }
              }
            },
            barWidth: 12.5
          },
          {
            name: '观看时间',
            type: 'bar',
            barGap: 0,
            barCategoryGap: 22.5,
            data: data.example.ViewingDuration,
            itemStyle: {
              normal: {
                color: '#e5e5e5'
              }
            },
            barWidth: 12.5
          }
        ]
      })
      myChart3.setOption({
        grid: {
          top: '16%',
          left: '3%',
          right: '16%', // 距离右侧边距
          bottom: '5%',
          show: false,
          containLabel: true
        },
        legend: [
          {
            type: 'plain',
            left: '50%', // 图例的位置，可以用像素，可以用百分比，也可以用center，right等
            top: '4%', // 图例的位置
            itemWidth: 20, // 图例图标的宽
            itemHeight: 4, // 图例图标的高
            tooltip: { // 图例提示框，默认不显示
              show: true
            },
            data: [ // ----图例内容
              {
                name: '正确题数',
                icon: 'rect', // ----图例的外框样式
                textStyle: {
                  fontSise: '10px',
                  color: '#666666'
                }
              }
            ]
          },
          {
            type: 'plain',
            left: '50%', // 图例的位置，可以用像素，可以用百分比，也可以用center，right等
            top: '9%', // 图例的位置
            itemWidth: 20, // 图例图标的宽
            itemHeight: 4, // 图例图标的高
            tooltip: { // 图例提示框，默认不显示
              show: true
            },
            data: [
              {
                name: '错误题数',
                icon: 'rect', // ----图例的外框样式
                textStyle: {
                  fontSise: '10px',
                  color: '#666666'
                }
              }
            ]
          }
        ],
        xAxis: {// x轴
          max: 4,
          type: 'category',
          data: ['物理力学', '物理元素', '物理金属', '化学空气', '化学元素'],
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
              width: 1,
              type: 'solid',
              fontSize: '10px'
            }
          },
          axisTick: { // 刻度
            show: false // 不显示刻度线
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#555555']
            }
          },
          nameGap: 10,
          name: '试题名称',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#666666',
            fontSize: '10px'
          },
          axisLabel: {
            showMaxLabel: true,
            interval: 0,
            rotate: -15,
            textStyle: {
              color: '#555555', // 坐标值得具体的颜色
              fontSize: '10px'
            }
          }
        },
        yAxis: {
          max: data.accuracy.max,
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#eeeeee',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: { // 刻度
            show: false // 不显示刻度线
          },
          name: '习题数量（题）',
          nameLocation: 'end',
          nameTextStyle: {
            color: '#666666',
            fontSize: '10px'
          },
          axisLabel: {
            textStyle: {
              color: '#555555', // 坐标值得具体的颜色
              fontSize: '10px'
            }
          },
          minInterval: 5,
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#cccccc']
            }
          }
        },
        series: [
          {
            name: '正确题数',
            data: data.accuracy.correct,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#3C9DF7'
                // 具体数值
                // label: {
                //   show: true,
                //   position: 'top',
                //   textStyle: {
                //     color: '#FD6B71'
                //   }
                // }
              }
            },
            barWidth: 12.5
          },
          {
            name: '错误题数',
            type: 'bar',
            barGap: 0,
            barCategoryGap: 22.5,
            data: data.accuracy.error,
            itemStyle: {
              normal: {
                color: '#e5e5e5'
              }
            },
            barWidth: 12.5
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  $Details-photo-box_height: percentage(40/345);
  .DetailsOfLearning{
    .Details-top-box{
      padding: px2rem(30px) px2rem(30px);
      border-bottom: px2rem(2px) solid #eeeeee;
      .Details-photo-box{
        width: px2rem(80px);
        margin-right: px2rem(30px);
        height: 0;
        padding-bottom: $Details-photo-box_height;
        overflow: hidden;
        .Details-photo{
          width: 100%;
        }
      }
      .Details-word{
        .word-name{
          font-size: px2rem(30px);
          line-height: px2rem(50px);
        }
        .word-class{
          font-size: px2rem(22px);
          line-height: px2rem(30px);
          color: #999999;
        }
      }
    }
    .Details-nav-box{
      margin-top: px2rem(30px);
      text-align: center;
      font-size: 0;
      span{
        display: inline-block;
        width: px2rem(150px);
        line-height: px2rem(40px);
        border: 1px solid #eeeeee;
        font-size: px2rem(26px);
        color: #999999;
        background-color: #eeeeee;
      }
      .nav-left{
        border-right: none;
        border-radius: px2rem(4px) 0 0 px2rem(4px);
      }
      .nav-right{
        border-radius: 0 px2rem(4px) px2rem(4px) 0;
      }
      .Check{
        background-color: #ffffff;
      }
    }
    .Details-Statistics-box{
      padding: 0 px2rem(30px);
      margin: 0 px2rem(30px);
      border-bottom: px2rem(2px) solid #eeeeee;
      .Statistics{
        display: flex;
        .Statistic{
          text-align: center;
          p{
            color: #666666;
          }
          .Statistic-title{
            font-size: px2rem(24px);
            margin-top: px2rem(50px);
            margin-bottom: px2rem(20px);
          }
          .Statistic-num{
            font-size: px2rem(30px);
            margin-bottom: px2rem(50px);
            font-weight: bolder;
          }
        }
        .Statistic1,.Statistic3{
          width: px2rem(110px);
        }
        .Statistic2{
          flex: 1;
        }
      }
    }
    .Statistical-chart-box{
      margin-bottom: px2rem(80px);
      .Statistical-chart{
        .h-box{
          background-color: #eeeeee;
          padding: px2rem(25px) px2rem(30px);
          h3{
            font-weight: bolder;
            font-size: px2rem(28px);
            line-height: px2rem(30px);
            padding-left: px2rem(10px);
            border-left: px2rem(8px) solid $color-theme;
          }
          span{
            display: inline-block;
            line-height: px2rem(30px);
            font-size: px2rem(22px);
            color: #999999;
          }
        }
      }
      .chart-box{
        margin-bottom: px2rem(30px);
      }
    }
  }

</style>