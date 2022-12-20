<template>
  <div class="peopleadministra">
    <van-nav-bar title="就诊人管理" left-arrow @click-left="onClickLeft6" />
    <div class="title">
      <p>最多可添加5位就诊人</p>
    </div>
    <ul id="example-1">
      <li v-for="(item, index) in persons" :key="index" @click="editpeople">
        <div class="cardleft">
          <p>
            <span>{{ item.name }}</span>
            <span class="people">{{ obj[item.relation] }}</span>
          </p>
          <p class="idcard">{{ item.num }}</p>
        </div>
        <div class="cardright">
          <van-switch v-model="checked" size="13px" />
        </div>
      </li>
    </ul>
    <div class="button">
      <van-button type="info" size="large" to="addpeople"
        >添加就诊人</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      persons: [
        {
          name: "江峰",
          num: "362***********0013",
          relation: 4,
        },
      ],
      checked: true,
    };
  },
  methods: {
    onClickLeft6() {
      this.$router.push({
        path: "/personal",
      });
    },
    editpeople() {},
  },
  computed: {
    obj() {
      // console.log(Object.values({}));
      return this.options.reduce((res, item) => {
        res[item.value] = item.label;
        return res;
      }, {});
    },
  },
  mounted() {
    this.options = [
      {
        label: "本人",
        value: 1,
      },
      {
        label: "夫妻",
        value: 2,
      },
      {
        label: "子女",
        value: 3,
      },
      {
        label: "父母",
        value: 4,
      },
    ];
  },
};
</script>
<style lang="less"></style>

<style lang="less" scoped>
.peopleadministra {
  .button {
    margin: 30px 15px 50px;
  }
  .title {
    background-color: #f1d8c4;
    color: #ff9138;
    font-size: 12px;
    padding: 8px 13px;
    font-weight: 400;
  }
  #example-1 {
    margin: 15px 13px;
    li {
      background-color: rgba(0, 110, 255, 0.067);
      padding: 25px 18px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      .people {
        font-size: 12px;
        background-color: rgba(0, 110, 255, 0.208);
        padding: 3px 10px;
        margin-left: 8px;
        border-radius: 50px;
      }
      .idcard {
        font-size: 14px;
        color: #aaaaaa;
        padding-top: 15px;
      }
    }
  }
}
</style>
