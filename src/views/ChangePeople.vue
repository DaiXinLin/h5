<template>
  <div class="changepeople">
    <van-nav-bar title="选择就诊人" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <span>请选择就诊人</span>
    </div>
    <ul id="example-1">
      <li v-for="(item, index) in persons" :key="index" @click="changepeople">
        <div class="cardleft">
          <p>
            <span>{{ item.name }}</span>
            <span class="people">{{ obj[item.relation] }}</span>
          </p>
          <p class="idcard">{{ item.num }}</p>
        </div>
        <div class="cardright"></div>
      </li>
    </ul>
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
    };
  },
  methods: {
    changepeople() {
      this.$router.push({
        path: "/schedule",
      });
    },
  },
  computed: {
    obj() {
      console.log(Object.values({}));
      return this.options.reduce((res, item) => {
        res[item.value] = item.label;
        return res;
      }, {});
    },
  },
  mounted() {
    setTimeout(() => {
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
    }, 30);
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 10px 15px;
}
#example-1 {
  margin: 10px 15px;
  li {
    background-color: rgba(0, 110, 255, 0.067);
    padding: 1px 18px;
    border-radius: 12px;
    .people {
      font-size: 12px;
      background-color: rgba(0, 110, 255, 0.208);
      padding: 5px 10px;
      margin-left: 8px;
      border-radius: 40px;
    }
    .idcard {
      font-size: 14px;
      color: #aaaaaa;
    }
  }
}
</style>
