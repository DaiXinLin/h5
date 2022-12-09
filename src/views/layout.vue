<template>
  <div class="tabbar">
    <router-view />
    <van-tabbar route v-model="active">
      <van-tabbar-item replace icon="home-o" to="/home" name="home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace icon="friends-o" to="/personal" name="personal"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style lang="less"></style>
