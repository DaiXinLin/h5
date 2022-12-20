<template>
  <div class="health">
    <van-nav-bar title="医院介绍" left-arrow @click-left="onClickLeft3" />
    <div class="health_box" @click="content">
      <div class="img"></div>
      <div class="box_content">
        <p class="top">
          <span> 利用分餐制 可有效避免幽门螺旋杆菌感染 </span>
        </p>
        <p class="bottom">
          <span class="left">王敏</span>
          <span class="right">2022/09/08</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft3() {
      this.$router.push({
        path: "/home",
      });
    },
    content() {
      this.$router.push({
        path: "/encyclopediacontent",
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
.health {
  margin: 0px 15px;
  .health_box {
    margin-top: 20px;
    padding: 12px 10px;
    border: 1px solid #eee;
    display: flex;
    .img {
      width: 109px;
      height: 80px;
      background-color: rgba(0, 110, 255, 0.0980392156862745);
      border-radius: 5px;
    }
    .box_content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 8px;
      .top {
        font-size: 14px;
      }
      .bottom {
        font-size: 12px;
        color: #aaaaaa;
        .right {
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
