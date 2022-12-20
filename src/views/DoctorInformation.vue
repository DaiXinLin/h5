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
    <div class="doctorplan">
      <span class="title">医生全部排班</span>
      <div class="doctorplan_box">
        <p class="area">{{ area.yuan }}</p>
        <ul class="doctorplan_list">
          <li v-for="(item, index) in doctorsplan" :key="index">
            <div class="doctorplan_list_left">
              <p class="top">
                <span class="time">{{ item.time }}</span>
                <span class="day">{{ item.day }}</span>
                <span class="daylater">{{ item.daylater }}</span>
              </p>
              <p class="bottom">
                <span class="yuan">{{ item.yuan }}</span>
              </p>
            </div>
            <div class="doctorplan_list_right">
              <span class="surplus">{{ item.surplus }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="departmentdoctor">
      <span class="titletwo">更多同科室医生</span>
      <ul class="departmentdoctor_list">
        <li v-for="(item, index) in departmentdoctors" :key="index">
          <div class="departmentdoctor_list_left">
            <p class="top">
              <span class="name">{{ item.name }}</span>
              <span class="doctor">{{ item.doctor }}</span>
            </p>
            <p class="bottom">
              <span class="yuan">{{ item.information }}</span>
            </p>
          </div>
        </li>
      </ul>
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
      area: {
        yuan: "东院",
      },
      doctorsplan: [
        {
          time: "2020-12-30",
          day: "周一",
          daylater: "2天后",
          yuan: "￥60",
          surplus: "剩余30",
        },
        {
          time: "2020-12-30",
          day: "周一",
          daylater: "2天后",
          yuan: "￥60",
          surplus: "剩余30",
        },
      ],
      departmentdoctors: [
        {
          name: "刘萌萌",
          doctor: "主治医师",
          information: "消化系统的疾病的治疗，擅长肝胆疾病的治疗",
        },
        {
          name: "刘萌萌",
          doctor: "主治医师",
          information: "消化系统的疾病的治疗，擅长肝胆疾病的治疗",
        },
      ],
    };
  },
  methods: {},
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
.doctorinformation {
  margin: 0px 16px;
  .doctorcard {
    border: 1px solid #eee;
    padding: 13px;
    margin-bottom: 20px;
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
  .doctorplan {
    .title {
      font-size: 15px;
    }
    .doctorplan_box {
      margin: 10px 0px;
      border: 1px solid #eee;
      .area {
        font-size: 14px;
        padding: 15px 12px;
      }
      .doctorplan_list {
        background-color: rgb(244, 241, 241);
        li {
          display: flex;
          justify-content: space-between;
          border: 1px solid rgb(245, 245, 245);
          padding: 15px 12px;
          font-size: 13px;
          .doctorplan_list_left {
            .top {
              .day {
                padding: 0px 5px;
              }
              .daylater {
                padding: 2px 10px;
                background-color: rgb(188, 188, 236);
                color: #006eff;
                border-radius: 40px;
              }
            }
            .bottom {
              padding-top: 5px;
              color: rgba(244, 99, 99, 0.988235294117647);
            }
          }
          .doctorplan_list_right {
            color: #ffffff;
            background-color: rgb(94, 94, 247);
            padding: 3px 15px;
            height: 25px;
            line-height: 18px;
            border-radius: 8px;
          }
        }
      }
    }
  }
  .departmentdoctor {
    .titletwo {
      font-size: 15px;
    }
    .departmentdoctor_list {
      margin: 10px 0px;
      li {
        border: 1px solid #eee;
        padding: 15px 12px;
        margin: 8px 0px;
        .departmentdoctor_list_left {
          .top {
            .doctor {
              font-size: 12px;
              padding-left: 5px;
            }
          }
          .bottom {
            padding-top: 10px;
            font-size: 12px;
            color: #7f7f7f;
          }
        }
      }
    }
  }
}
</style>
