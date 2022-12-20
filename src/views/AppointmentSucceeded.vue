<template>
  <div class="information">
    <van-nav-bar title="预约信息" left-arrow />
    <div class="information_top">
      <img src="../assets/u824.svg" alt="预约成功" />
      <p class="top">预约成功</p>
      <p class="bottom">您已预约成功，请您持本人身份证按时就诊</p>
    </div>
    <van-button type="info" size="large">查看预约详情</van-button>
    <van-button type="primary" size="large" to="home">返回首页</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
.information {
  margin: 0px 12px;
  .information_top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    .top {
      font-size: 17px;
      margin-top: 20px;
    }
    .bottom {
      font-size: 14px;
      color: #aaaaaa;
      margin-top: 10px;
    }
  }
  .van-button--large {
    height: 40px;
  }
  .van-button--primary {
    color: #006eff;
    background-color: #cbd9eb;
    border: 1px solid #cbd9eb;
    margin-top: 15px;
  }
  .van-button--info {
    margin-top: 80px;
  }
}
</style>
