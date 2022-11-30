<template>
  <div class="percer">
    <div class="percer_top">
      <span>个人中心</span>
      <div class="percer_top_middle">
        <div class="shawol"></div>
        <div class="wenzi">
          <p>七尾Sam</p>
          <p>159****5665</p>
        </div>
      </div>
    </div>
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
  height: 300px;
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
</style>
