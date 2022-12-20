<template>
  <div class="notice">
    <van-nav-bar title="预约须知" left-arrow />
    <p class="notice_title1">预约挂号须知</p>
    <p class="notice_title test2">
      我院门诊严格执行非急诊全面预约挂号就诊制度和分时段报到、错峰就诊制度。候诊时段前半小时允许患者持纸质版或电子版预约凭证进院，候诊时段前半小时可以在自助机报到。
    </p>
    <p class="notice_title test3">
      根据北京市疫情防控要求：体温≥37.3℃，请至发热门诊筛查；国内中高风险地区（根据国家相关部门发布的信息）和国（境）外归（返）京人员，请您持7天内新冠肺炎核酸检测阴性结果报告来院就诊。若无检测报告请您在就诊前进行核酸检测，以免影响您就诊。不满足条件者，无法进入院区，请退号或改约。
    </p>
    <p class="notice_title test4">
      挂号成功以北京协和医院成功挂号记录为准。参照APP中挂号状态（查看方式：【我】-【挂号记录】-【状态：已挂号】）
    </p>
    <p class="notice_title test5">号源更新时间：每日下午16时</p>
    <p class="notice_title test5">
      预约挂号成功后48小时之内且同时要在就诊日前一天中午12:00前可退号
    </p>
    <p class="notice_title test5">
      若退号时间超过预约就诊日期的工作开始时间，一律不退号
    </p>
    <p class="notice_title test5">
      挂号成功后，请详细阅读电子挂号单上的就诊提示和温馨提示
    </p>
    <van-button type="info" size="large" to="confirmappointment"
      >确认</van-button
    >
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
.notice {
  margin: 0px 13px;
  .notice_title1 {
    font-size: 17px;
    margin: 15px 0px 25px;
  }
  .notice_title {
    font-size: 14px;
    line-height: 25px;
    font-weight: 100;
    text-indent: 24px;
  }
  .test5 {
    text-indent: 0px;
  }
  .van-button--info {
    height: 40px;
    margin: 25px 0px;
  }
}
</style>
