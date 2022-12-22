<template>
  <div class="schedule">
    <van-nav-bar title="选择科室" left-arrow @click-left="onClickLeft9" />
    <van-tabs v-model="active">
      <van-tab v-for="(item, i) in tabs" :key="i" :title="item.title">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="handleclick"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "湖南院区",
        },
        {
          title: "湖南院区",
        },
        {
          title: "湖南院区",
        },
      ],
      active: 0,
      items: [
        {
          text: "浙江",
          className: "my-class",
          children: [
            {
              text: "温州",
              id: 1,
            },
            {
              text: "杭州",
              id: 2,
            },
          ],
        },
        {
          text: "浙江1",
          className: "my-class",
          children: [
            {
              text: "温州1",
              id: 1,
            },
            {
              text: "杭州1",
              id: 2,
            },
          ],
        },
      ],
      activeId: 1,
      activeIndex: 0,
    };
  },
  methods: {
    handleclick() {
      this.$router.push({
        path: "/scheduleplan",
      });
    },
    onClickLeft9() {
      this.$router.push({
        path: "/change",
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
