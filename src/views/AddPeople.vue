<template>
  <div class="peopleadministra">
    <van-nav-bar title="添加就诊人" left-arrow @click-left="onClickLeft7" />
    <van-field
      v-model="text"
      type="text"
      label="姓名"
      placeholder="请输入姓名"
    />
    <van-field
      v-model="tel"
      type="tel"
      label="证件号码"
      placeholder="请输入证件号码"
    />
    <van-field
      v-model="number1"
      type="number"
      label="就诊卡号"
      placeholder="请输入就诊卡号"
    />
    <van-field
      v-model="number2"
      type="number"
      label="手机号码"
      placeholder="请输入手机号码"
    />
    <van-field
      v-model="address"
      type="text"
      label="就诊人地址"
      placeholder="选填"
    />
    <van-cell is-link title="关系" @click="show = true" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [{ name: "选" }, { name: "选项二" }, { name: "选项三" }],
    };
  },
  methods: {
    onClickLeft7() {
      this.$router.push({
        path: "/peopleadministra",
      });
    },
    // onSelect(item) {
    //   // 默认情况下点击选项时不会自动收起
    //   // 可以通过 close-on-click-action 属性开启自动收起
    //   this.show = false;
    //   //   Toast(item.name);
    // },
  },
};
</script>
<style lang="less"></style>

<style lang="less" scoped></style>
