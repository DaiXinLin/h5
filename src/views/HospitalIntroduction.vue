<template>
  <div class="introduction">
    <van-nav-bar title="医院介绍" left-arrow @click-left="onClickLeft4" />
    <div class="showod"></div>
    <p class="text">
      立异德医院始建于1964年，是一所集医疗、教学、科研、预防、保健、康复于一体的三级甲等综合性医院。现有职工2500人，其中副高职称以上的医（护、药、技）师474人，博士后2人、医学博士16人，硕士349人，硕士研究生导师12人。
    </p>
    <p class="introduce">
      医院分设院本部、东院和南院，编制病床共1949张。全院共开设59个诊疗科目，其中临床类47个，医技类12个。开放病区62个，其中院本部32个、东院13个、南院17个。全院年门诊量110万人次，年住院病人9万人次，年手术3万台次，是中南大学湘雅二医院医疗协作医院、中南大学湘雅医学院临床教学基地，同时还承担着另外12所院校的临床教学工作，是湖南省全科医生转岗培训基地、国家住院医师规范化培训基地、国家药物临床试验机构、卫生部脑卒中筛查与防治基地、国际紧急救援网络医院、外国专家定点医疗机构、全国直升机医疗救援基地。医院先后被评为全国文明单位、全国卫生计生系统先进集体，是湖南省区域性医疗中心之一。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft4() {
      this.$router.push({
        path: "/home",
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
.introduction {
  margin: 0px 13px;
  .showod {
    width: 100%;
    height: 120px;
    background-color: rgba(0, 110, 255, 0.098);
    border-radius: 8px;
    margin: 20px 0px;
  }
  p {
    font-size: 14px;
    line-height: 24px;
    color: #333333;
  }
}
</style>
