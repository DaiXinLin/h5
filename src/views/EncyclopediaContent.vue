<template>
  <div class="content">
    <van-nav-bar title="文章详情" left-arrow @click-left="onClickLeft1" />
    <p class="test1">
      <span>利用分餐制 可有效避免感染</span>
    </p>
    <p class="test2">
      <span class="left">王敏</span>
      <span class="right">2022/09/09</span>
    </p>
    <div class="img"></div>
    <p class="test3">
      <span
        >患者若发现感染HP之后，原则上建议是“一经发现，赶尽杀绝”，
        但仍要按照患者具体情况具体分析。患者根据自身情况按时间规范使用药物，
        足量足疗程。需要额外提醒的是，患者在进行规范根除治疗之后，要注意停药时间充足后再做复查，
        不然可能会出现假阳性或假阴性的结果。
      </span>
    </p>
    <p class="test4">
      <span
        >患者若发现感染HP之后，原则上建议是“一经发现，赶尽杀绝”，但仍要按照患者具体情况具体分析。患者根据自身情况按时间规范使用药物，
        足量足疗程。需要额外提醒的是，患者在进行规范根除治疗之后，要注意停药时间充足后再做复查，不然可能会出现假阳性或假阴性的结果。</span
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft1() {
      this.$router.push({
        path: "/encyclopediahealth",
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
.content {
  margin: 0px 15px;
  .test1 {
    margin: 10px 0px;
    font-size: 17px;
    color: #555555;
  }
  .test2 {
    margin-bottom: 15px;
    font-size: 12px;
    color: #aaaaaa;
    .left {
      margin-right: 12px;
    }
  }
  .img {
    width: 100%;
    height: 100px;
    background-color: rgba(0, 110, 255, 0.0980392156862745);
    border-radius: 5px;
  }
  .test3 {
    margin: 15px 0px 20px;
    color: #555555;
    font-size: 14px;
    line-height: 24px;
    font-weight: 200;
  }
  .test4 {
    margin: 15px 0px 80px;
    color: #555555;
    font-size: 14px;
    line-height: 24px;
    font-weight: 200;
  }
}
</style>
