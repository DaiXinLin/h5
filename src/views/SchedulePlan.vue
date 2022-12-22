<template>
  <div class="scheduleplan">
    <van-nav-bar title="选择科室" left-arrow @click-left="onClickLeft10" />
    <div class="selecttime">
      <van-field
        readonly
        clickable
        label="日期"
        :value="date"
        placeholder="选择时间"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-datetime-picker
          :value="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </van-popup>
    </div>
    <div class="title">
      <p>坐诊医生</p>
    </div>
    <ul class="doctorcard">
      <li v-for="(item, index) in doctors" :key="index" @click="handledoctor">
        <div class="doctorcard_top">
          <span class="left1">{{ item.name }}</span>
          <span class="right1">{{ item.doctor }}</span>
          <p>{{ item.introduction }}</p>
        </div>
        <div class="doctorcard_bottom">
          <div class="doctorcard_numbal">
            <span class="left2">{{ item.money }}</span>
            <span class="right2" @click="handleClick">{{
              item.remainingnumber
            }}</span>
          </div>
        </div>
      </li>
    </ul>
    <van-action-sheet v-model="show" title="选择预约时间段"> </van-action-sheet>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    console.log(new Date(dayjs().startOf("day").valueOf() + 24 * 3600 * 1000));
    return {
      value: "",
      showPicker: false,
      show: false,
      minDate: new Date(+dayjs().startOf("day").valueOf() + 24 * 3600 * 1000),
      maxDate: new Date(dayjs().startOf("day") + 7 * 24 * 3600 * 1000),
      currentDate: new Date(
        dayjs().startOf("day").valueOf() + 24 * 3600 * 1000
      ),
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
    handleClick() {
      this.show = true;
    },
    handleCancel() {
      this.showPicker = false;
    },
    handleConfirm(value) {
      this.currentDate = value;
      // to do 请求医生当前时间的排班列表
      this.showPicker = false;
    },
    onClickLeft10() {
      this.$router.push({
        path: "/schedule",
      });
    },
    handledoctor() {
      this.$router.push({
        path: "/doctorinformation",
      });
    },
  },
  computed: {
    date() {
      return dayjs(this.currentDate).format("YYYY-MM-DD");
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  margin: 20px 16px;
  p {
    font-size: 15px;
  }
}
.doctorcard {
  li {
    border: 2px solid rgb(235, 235, 235);
    margin: 5px 16px;
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
