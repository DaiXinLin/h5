<template>
  <div class="form-wrapper">
    <van-form size="middle" @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="btn-wrapper">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
      <div class="register">
        <span>创建账号</span>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "LoginFormView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style lang="less" scoped>
.form-wrapper {
  // background: #efefef;
  box-sizing: border-box;
  padding-top: 30px;
}
.btn-wrapper {
  margin: 25px 16px 10px 16px;
  // height: 100vh;
}
.register span {
  margin-left: 230px;
  font-size: 15px;
}
</style>
