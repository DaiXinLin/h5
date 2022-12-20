<template>
  <div class="percer">
    <van-nav-bar title="个人中心" />
    <div class="percer_top">
      <div class="percer_top_middle">
        <div class="shawol"></div>
        <div class="wenzi">
          <p>七尾Sam</p>
          <p class="xia">159****5665</p>
        </div>
      </div>
    </div>
    <ul class="percer_bottom">
      <li @click="peopleAdministra">
        <div class="yingzi"></div>
        <p>就诊人管理</p>
      </li>
      <li>
        <div class="yingzi"></div>
        <p>预约挂号记录</p>
      </li>
      <li>
        <div class="yingzi"></div>
        <p>问体反馈</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    peopleAdministra() {
      this.$router.push({
        path: "/peopleadministra",
      });
    },
  },
};
</script>
<style lang="less">
.percer {
  .van-nav-bar__content {
    background-color: rgba(52, 120, 247, 1);
    .van-nav-bar__title {
      color: #eee;
      font-weight: 540;
    }
  }
  .van-hairline--bottom::after {
    border-bottom-width: 0px;
  }
}
</style>

<style lang="less" scoped>
.percer span {
  display: block;
  padding-top: 20px;
  text-align: center;
  font-size: 17px;
  color: #ffffff;
}
.percer .percer_top {
  height: 100px;
  width: 100%;
  background-color: rgba(52, 120, 247, 1);
}
.percer_top_middle {
  font-size: 17px;
  color: #ffffff;
  padding: 10px 15px;
  display: flex;

  .shawol {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 40px;
  }

  .wenzi {
    margin-left: 20px;
    margin-top: 5px;
    .xia {
      margin-top: 8px;
    }
  }
}
.percer_bottom {
  margin: 30px 20px;
  border: 1px solid #eee;
  border-radius: 5px;

  li {
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    height: 55px;
    line-height: 45px;

    p {
      padding-left: 10px;
      margin-top: 11px;
    }
  }
  .yingzi {
    height: 40px;
    width: 40px;
    background-color: rgba(0, 110, 255, 0.0980392156862745);
    border-radius: 40px;
  }
}
</style>
