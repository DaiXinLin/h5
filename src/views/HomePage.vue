<template>
  <div>
    <van-nav-bar title="首页" />
    <div class="homepage_box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <!-- <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item> -->
      </van-swipe>
      <div class="appointment">
        <p>门诊服务</p>
        <div class="appointment_box" @click="onyuyue">
          <p>在线预约挂号</p>
        </div>
      </div>
      <p>医院服务</p>
      <div class="hospital">
        <div class="hospital_box">
          <div class="img"></div>
          <span>医院介绍</span>
        </div>
        <div class="hospital_box">
          <div class="img"></div>
          <span>医院导航</span>
        </div>
        <div class="hospital_box">
          <div class="img"></div>
          <span>就医指南</span>
        </div>
        <div class="hospital_box">
          <div class="img"></div>
          <span>健康百科</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    onyuyue() {
      this.$router.push({
        path: "/change",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.homepage_box {
  margin: 10px 10px 0px 10px;
}
.my-swipe {
  border-radius: 8px;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
.appointment_box {
  height: 70px;
  width: 50%;
  background-color: rgba(253, 211, 211, 0.988);
  p {
    color: rgba(244, 99, 99, 0.988235294117647);
    text-align: center;
    height: 30px;
    line-height: 60px;
  }
}

.hospital {
  display: flex;
}
.hospital_box {
  height: 80px;
  width: 100px;
  border: 1px solid #eee;

  .img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: rgba(0, 110, 255, 0.9);
    margin: 10px auto 0px;
  }
  span {
    font-size: 13px;
    color: #333333;
    margin-left: 10px;
  }
}
</style>
