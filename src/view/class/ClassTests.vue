<template>
  <div class="ClassTests">
    <class-tests-heaader></class-tests-heaader>
    <div class="test-box">
      <h4>一、单选题</h4>
      <div class="full1"></div>
      <div class="subject-box" v-for="item in singleChoiceQuestion" :key="item.problemId">
        <p class="title">{{item.problemId}}.{{item.problem}}</p>
        <p class="answer" :class="{lastColor:index==item.option.length-1}" v-for="(childItem,index) in item.option" :key="childItem.id">{{childItem.id}}、{{childItem.words}}</p>
        <div class="option-box">
          <label class="option" :class="{checkedColor:item.answer==childItem.id}" v-for="childItem in item.option" :key="childItem.id">
            <input type="radio" v-model="item.answer" :value="childItem.id">
            {{childItem.id}}
          </label>
        </div>
        <div class="full1"></div>
      </div>
    </div>
    <div class="full2"></div>
    <div class="test-box">
      <h4>二、多选题</h4>
      <div class="full"></div>
      <div class="subject-box" v-for="item in multipleChoiceQuestion" :key="item.problemId">
        <p class="title">{{item.problemId}}.{{item.problem}}</p>
        <p class="answer" :class="{lastColor:index==item.option.length-1}" v-for="(childItem,index) in item.option" :key="childItem.id">{{childItem.id}}、{{childItem.words}}</p>
        <div class="option-box">
          <label class="option" ref="checkBox" :class="{checkedColor:childItem.answer==true}" v-for="childItem in item.option" :key="childItem.id">
            <input type="checkbox" @click="checkboxClick(childItem.id,item.problemId)" v-model="childItem.answer" :value="childItem.id">
            {{childItem.id}}
          </label>
        </div>
      </div>
    </div>
    <div class="full2"></div>
    <div class="test-box">
      <h4>三、判断题</h4>
      <div class="full"></div>
      <div class="subject-box" v-for="item in JudgementQuestion" :key="item.problemId">
        <p class="title">{{item.problemId}}.{{item.problem}}</p>
        <div class="option-box">
          <label class="option" :class="item.answer==item.option[0].id?'trueCheck2':'trueCheck1'">
            <input type="radio" v-model="item.answer" :value="item.option[0].id">
          </label>
          <label class="option" :class="item.answer==item.option[1].id?'falseCheck2':'falseCheck1'">
            <input type="radio" v-model="item.answer" :value="item.option[1].id">
          </label>
        </div>
      </div>
    </div>
    <div class="full3"></div>
    <div class="btn" @click="btnClick">
      <span>提交</span>
    </div>
  </div>
</template>

<script>
import ClassTestsHeaader from '../../components/common/header/Header'
import {MessageBox, Toast} from 'mint-ui';
export default {
  name: 'ClassTests',
  components: {
    ClassTestsHeaader
  },
  data() {
    return {
      singleChoiceQuestion: [
        {
          'problemId': '1',
          'problem': '人们常说的“铁比木头重”，其实际含义是指?',
          'option': [
            {'id': 'A', 'words': '铁的质量比木头大'},
            {'id': 'B', 'words': '铁的重力比木头大'},
            {'id': 'C', 'words': '铁的密度比木头大'},
            {'id': 'D', 'words': '木头的体积比铁大'}
          ],
          answer: ''
        },
        {
          'problemId': '2',
          'problem': '学生使用的橡皮，用过一段时间后，没有发生变化的是?',
          'option': [
            {'id': 'A', 'words': '形状'},
            {'id': 'B', 'words': '密度'},
            {'id': 'C', 'words': '质量'},
            {'id': 'D', 'words': '体积'}
          ],
          answer: ''
        },
        {
          'problemId': '3',
          'problem': '甲，乙两物体的质量之比为2:3，，体积之比为1:3，，那么它们的密度之比为?',
          'option': [
            {'id': 'A', 'words': '1:2'},
            {'id': 'B', 'words': '2:1'},
            {'id': 'C', 'words': '2:9'}
          ],
          answer: ''
        }
      ],
      multipleChoiceQuestion: [
        {
          'problemId': '1',
          'problem': '关于金属导体的以下说法中正确的是?',
          'option': [
            {'id': 'A', 'words': '金属中有大量的多余的电子', 'answer': false},
            {'id': 'B', 'words': '金属原子对最外围电子的束缚能力较差，所以金属中有大量可以自由运动的电子', 'answer': false},
            {'id': 'C', 'words': '没有外加电压时，金属中的自由电子不运动', 'answer': false},
            {'id': 'D', 'words': '没有外加电压时，金属中的自由电子的无规则运动不能形成电流', 'answer': false}
          ],
          answer: []
        },
        {
          'problemId': '2',
          'problem': '两个带等量异种电荷的验电器甲带正电,乙带负电,用带绝缘柄的金属棒将两个金属球连接,则金属箔的张角变为零,这种现象说明?',
          'option': [
            {'id': 'A', 'words': '正电荷从甲转移到乙', 'answer': false},
            {'id': 'B', 'words': '负电荷从乙转移到甲', 'answer': false},
            {'id': 'C', 'words': '正、负电荷抵消了', 'answer': false},
            {'id': 'D', 'words': '正、负电荷发生了中和现象', 'answer': false}
          ],
          answer: []
        }
      ],
      JudgementQuestion: [
        {
          'problemId': '1',
          'problem': '光的干涉和衍射不仅说明了光具有波动性，还说明了光是横波。',
          'option': [
            {'id': 'true'},
            {'id': 'false'}
          ],
          answer: ''
        },
        {
          'problemId': '2',
          'problem': '拍摄玻璃橱窗内的物品时，往往在镜头前加一个偏振片以增加透射光的强度。',
          'option': [
            {'id': 'true'},
            {'id': 'false'}
          ],
          answer: ''
        },
        {
          'problemId': '3',
          'problem': '一种元素的同位素具有相同的质子数和不同的中子数。',
          'option': [
            {'id': 'true'},
            {'id': 'false'}
          ],
          answer: ''
        },
        {
          'problemId': '4',
          'problem': '紫光光子的能量比红光光子的能量大。',
          'option': [
            {'id': 'true'},
            {'id': 'false'}
          ],
          answer: ''
        }
      ]
    }
  },
  methods: {
    checkboxClick(id, Id) {
      this.multipleChoiceQuestion.forEach((item) => {
        if (item.problemId == Id) {
          item.option.forEach((items) => {
            if (items.id == id) {
              if (items.answer == false) {
                if (item.answer.indexOf(id) == -1) {
                  item.answer.push(id)
                }
              } else {
                let index = item.answer.indexOf(id);
                if (index >= 0) {
                  item.answer.splice(index, 1)
                }
              }
            }
          })
        }
      })
    },
    btnClick() {
      for (let i = 0; i < this.singleChoiceQuestion.length; i++) {
        const item = this.singleChoiceQuestion[i];
        if (item.answer == '') {
          MessageBox.alert('单选题第' + item.problemId + '题还未作答,请作答。').then(action => {});
          return false;
        }
      }
      for (let i = 0; i < this.multipleChoiceQuestion.length; i++) {
        const item = this.multipleChoiceQuestion[i];
        if (item.answer.length == 0) {
          MessageBox.alert('多选题第' + item.problemId + '题还未作答,请作答。').then(action => {});
          return false;
        }
      }
      for (let i = 0; i < this.JudgementQuestion.length; i++) {
        const item = this.JudgementQuestion[i];
        if (item.answer == '') {
          MessageBox.alert('判断题第' + item.problemId + '题还未作答,请作答。').then(action => {});
          return false;
        }
      }
      Toast('答案提交完毕，请稍后查看成绩。');
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  @import "~scss/variable";
  @import "~iconsScss/sprite";
  .test-box{
    h4{
      font-size: px2rem(28px);
      padding: 0 px2rem(30px);
      line-height: px2rem(90px);
    }
    .full1{
      height: px2rem(2px);
      background-color: #f3f3f3;
    }
    .subject-box{
      .title{
        padding: px2rem(35px) px2rem(30px) px2rem(30px) px2rem(30px);
        font-size: px2rem(28px);
        line-height: px2rem(34px);
        color: #555555;
      }
      .answer{
        padding: 0  0 px2rem(25px) 0;
        line-height: px2rem(34px);
        margin-left: px2rem(30px);
        margin-right: px2rem(30px);
        font-size: px2rem(28px);
        color: #666666;
      }
      .lastColor{
        border-bottom: 1px solid #f3f3f3;
      }
      .option-box{
        text-align: right;
        .option{
          width: px2rem(120px);
          height: px2rem(28px);
          line-height: px2rem(28px);
          padding: px2rem(14px) 0;
          border: 1px solid $color-theme;
          display: inline-block;
          font-size: px2rem(28px);
          color: $color-theme;
          text-align: center;
          border-radius: px2rem(4px);
          margin-right: px2rem(30px);
          margin-bottom: px2rem(25px);
          margin-top: px2rem(25px);
          input{
            width: 0;
            height: 0;
            opacity: 1;
          }
        }
        .checkedColor{
          background-color: $color-theme;
          color: white;
        }
        .trueCheck1{
         background: url("../../assets/images/ico-correct1.png")no-repeat center center;
          background-size: 35% 60%;
        }
        .trueCheck2{
          background: $color-theme url("../../assets/images/ico-correct2.png")no-repeat center center;
          background-size: 35% 60%;
        }
        .falseCheck1{
          background: url("../../assets/images/ico-error1.png")no-repeat center center;
          background-size: 35% 60%;
        }
        .falseCheck2{
          background: $color-theme url("../../assets/images/ico-error2.png")no-repeat center center;
          background-size: 35% 60%;
        }
      }
    }
  }
  .full2{
    height: px2rem(20px);
    background-color: #f3f3f3;
  }
  .full3{
    height: px2rem(80px);
    background-color: #f3f3f3;
  }
  .btn{
    background-color: $color-theme;
    text-align: center;
    span{
      display: inline-block;
      line-height: px2rem(90px);
      font-size: px2rem(32px);
      color: white;
    }

  }

</style>