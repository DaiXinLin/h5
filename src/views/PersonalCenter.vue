<template>
  <div class="percer">
    <div class="percer_top">
      <span>个人中心</span>
      <div class="percer_top_middle">
        <div class="shawol"></div>
        <div class="wenzi">
          <p>七尾Sam</p>
          <p class="xia">159****5665</p>
        </div>
      </div>
    </div>
    <ul class="percer_bottom">
      <li>
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
  data() {},
  methods: {},
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.percer span {
  display: block;
  padding-top: 20px;
  text-align: center;
  font-size: 17px;
  color: #ffffff;
}
.percer .percer_top {
  height: 160px;
  width: 100%;
  background-color: rgba(52, 120, 247, 1);
}
.percer_top_middle {
  font-size: 17px;
  color: #ffffff;
  margin: 20px;
  display: flex;
}
.percer_top_middle .shawol {
  width: 50px;
  height: 50px;
  background-color: #eee;
  border-radius: 40px;
}
.percer_top_middle .wenzi {
  margin-left: 20px;
}
.percer_top_middle .wenzi .xia {
  margin-top: 8px;
}
.percer_bottom {
  margin: 30px 20px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.percer_bottom li {
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  height: 55px;
  line-height: 45px;
}
.percer_bottom .yingzi {
  height: 40px;
  width: 40px;
  background-color: rgba(0, 110, 255, 0.0980392156862745);
  border-radius: 40px;
}
.percer_bottom li p {
  padding-left: 10px;
}
</style>
