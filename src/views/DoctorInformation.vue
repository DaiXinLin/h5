<template>
  <div class="doctorinformation">
    <van-nav-bar title="医生信息" left-arrow />
    <div class="doctorcard">
      <p>
        <span class="name">{{ useinform.name }}</span>
      </p>
      <p>
        <span class="doctor">{{ useinform.doctor }}</span>
      </p>
      <p>
        <span class="introduction">{{ useinform.introduction }}</span>
      </p>
      <p class="arr">
        <span>{{ useinform.arr[0] }}</span>
        <span>{{ useinform.arr[1] }}</span>
        <span>{{ useinform.arr[2] }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useinform: {
        name: "赵马",
        doctor: "主治医生",
        introduction:
          "医生简介：消化系统的疾病的治疗，擅长肝胆疾病的治疗；消化系统的疾病的治疗，擅长肝胆疾病的治疗",
        arr: ["糖尿病", "尿毒症", "肾病"],
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.doctorcard {
  margin: 12px 16px;
  border: 1px solid #eee;
  padding: 10px;
  .arr {
    :nth-of-type(1) {
      color: #2ed477;
      background-color: #bffad8;
      border-radius: 40px;
    }
    :nth-of-type(2) {
      color: #ff9138;
      background-color: #f5c59e;
      border-radius: 40px;
    }
    :nth-of-type(3) {
      color: rgba(244, 99, 99, 0.9);
      background-color: rgba(246, 164, 164, 0.9);
      border-radius: 40px;
    }
    span {
      font-size: 12px;
      padding: 5px 10px;
      margin-right: 8px;
    }
  }
  p {
    .name {
      font-size: 15px;
    }
    .doctor {
      font-size: 12px;
      color: #aaaaaa;
      display: block;
      margin-top: 5px;
    }
    .introduction {
      font-size: 12px;
      color: #7f7f7f;
      display: block;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
