<template>
  <div class="confirmappointment">
    <van-nav-bar title="确认预约信息" left-arrow />
    <div class="confirmappointment_box">
      <div class="confirmappointment_box_top">
        <div class="img"></div>
        <span class="name">{{ confirmappointment.name }}</span>
        <span class="doctor">{{ confirmappointment.doctor }}</span>
      </div>
      <ul class="confirmappointment_list">
        <li>
          <span class="left">就诊医院</span>
          <span class="right">{{ confirmappointment.hospital }}</span>
        </li>
        <li>
          <span class="left">医院地址</span>
          <span class="right">{{ confirmappointment.adress }}</span>
        </li>
        <li>
          <span class="left">就诊科室</span>
          <span class="right">{{ confirmappointment.department }}</span>
        </li>
        <li>
          <span class="left">门诊时间</span>
          <span class="right">{{ confirmappointment.outpatienttime1 }}</span>
          <span class="right">{{ confirmappointment.outpatienttime2 }}</span>
          <span class="right">{{ confirmappointment.outpatienttime3 }}</span>
        </li>
        <li>
          <span class="left">候诊时候</span>
          <span class="right">{{ confirmappointment.waitingtime }}</span>
        </li>
        <li>
          <span class="left">就诊费用</span>
          <span class="right">{{ confirmappointment.moeny }}</span>
          <span>(就诊时支付)</span>
        </li>
        <li>
          <span class="left">预约时间</span>
          <span class="right">{{ confirmappointment.confirmtime }}</span>
        </li>
      </ul>
    </div>
    <div class="box">
      <ul class="list">
        <li>
          <span class="left">就诊人</span>
          <span class="right">{{ confirmappointment.people }}</span>
        </li>
        <li>
          <span class="left">身份证号</span>
          <span class="right">{{ confirmappointment.postcard }}</span>
        </li>
      </ul>
    </div>
    <p>
      <span class="left1">挂号前仔细阅读</span>
      <span class="right1" @click="notice">《挂号须知》</span>
    </p>
    <van-button type="info" size="large" to="appointmentsucceeded"
      >确认预约</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmappointment: {
        name: "赵马",
        doctor: "主任医师",
        hospital: "北京市第一人民医院",
        adress: "北京市666号",
        department: "消化内科",
        outpatienttime1: "2022年12月30日",
        outpatienttime2: "周一",
        outpatienttime3: "上午",
        waitingtime: "9:30",
        moeny: "￥60",
        confirmtime: "2022年12月12号",
        people: "牛伟",
        postcard: "610************0989",
      },
    };
  },
  methods: {
    notice() {
      this.$router.push({
        path: "/appointmentnotice",
      });
    },
  },
};
</script>

<style lang="less">
.van-nav-bar__content {
  .van-nav-bar__left {
    padding: 0;
  }
}
</style>

<style lang="less" scoped>
.confirmappointment {
  margin: 0px 12px 15px 12px;
  .confirmappointment_box {
    border: 1px solid #eee;
    padding: 15px 12px 0px 12px;
    .confirmappointment_box_top {
      padding-bottom: 13px;
      display: flex;
      align-items: center;
      .img {
        height: 40px;
        width: 40px;
        background-color: rgba(0, 110, 255, 0.0980392156862745);
        border-radius: 8px;
      }
      .name {
        padding-left: 15px;
        font-size: 15px;
      }
      .doctor {
        font-size: 12px;
        color: #555555;
        padding-left: 8px;
      }
    }
    .confirmappointment_list {
      li {
        padding: 18px 0px;
        border-top: 1px solid #eee;
        .left {
          font-size: 14px;
          color: #aaaaaa;
        }
        .right {
          font-size: 14px;
          color: #333333;
          padding-left: 13px;
        }
      }
    }
  }
  .box {
    border: 1px solid #eee;
    padding: 0px 15px;
    margin: 15px 0px 35px 0px;
    li:nth-of-type(1) {
      border-bottom: 1px solid #eee;
    }
    li {
      padding: 18px 0px;
      .left {
        font-size: 14px;
        color: #aaaaaa;
      }
      .right {
        font-size: 14px;
        color: #333333;
        padding-left: 13px;
      }
    }
  }
  p {
    margin-bottom: 15px;
    .left1 {
      color: rgba(127, 127, 127, 0.556862745098039);
      font-size: 12px;
    }
    .right1 {
      font-size: 12px;
      color: #006eff;
    }
  }
}
</style>
