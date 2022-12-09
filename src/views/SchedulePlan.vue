<template>
  <div class="scheduleplan">
    <div class="selecttime">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="selectdoctor"
      />
    </div>
    <div class="title">
      <p>坐诊医生</p>
    </div>
    <ul class="doctorcard">
      <li v-for="(item, index) in doctors" :key="index">
        <div class="doctorcard_top">
          <span class="left1">{{ item.name }}</span>
          <span class="right1">{{ item.doctor }}</span>
          <p>{{ item.introduction }}</p>
        </div>
        <div class="doctorcard_bottom">
          <div class="doctorcard_numbal">
            <span class="left2">{{ item.money }}</span>
            <span class="right2">{{ item.remainingnumber }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(2021, 0, 1),
      doctors: [
        {
          name: "赵马",
          doctor: "主治医师",
          introduction: "消化系统的治疗，擅长肝胆疾病的治疗",
          money: "￥60",
          remainingnumber: "剩余30",
        },
      ],
    };
  },
  methods: {
    selectdoctor() {
      console.log("ssss");
    },
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.title {
  margin: 20px 30px;
  p {
    font-size: 15px;
  }
}
.doctorcard {
  li {
    border: 2px solid rgb(235, 235, 235);
    margin: 5px 30px;
  }
  .doctorcard_top {
    margin: 10px;
    border-bottom: 2px solid rgb(235, 235, 235);
    padding-bottom: 10px;
    .left1 {
      font-size: 15px;
    }
    .right1 {
      font-size: 12px;
      margin-left: 5px;
    }
    p {
      font-size: 12px;
      color: #7f7f7f;
      padding-top: 5px;
    }
  }
  .doctorcard_bottom {
    display: flex;
    margin: 10px;
    justify-content: flex-end;
    .doctorcard_numbal {
      .left2 {
        color: rgba(244, 99, 99, 0.988235294117647);
        font-size: 14px;
      }
      .right2 {
        background-color: rgba(0, 110, 255, 1);
        color: #ffffff;
        margin-left: 10px;
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 5px;
      }
    }
  }
}
</style>
