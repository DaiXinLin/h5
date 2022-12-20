<template>
  <div class="schedule">
    <van-nav-bar title="选择科室" left-arrow />
    <van-tabs v-model="active">
      <van-tab title="湖南院区">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
        />
      </van-tab>
      <van-tab title="东院">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
        />
      </van-tab>
      <van-tab title="北院">
        <van-tree-select
          :items="items"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  methods() {},
};
</script>

<style lang="less" scoped></style>
