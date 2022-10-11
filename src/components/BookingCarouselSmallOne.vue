<template>
  <a-carousel effect="fade" autoplay>
    <div class="pic_container" v-for="item in pic[wherePick - 1]" :key="item">
      <img :src="require(`@/assets/images/service/${item}`)" alt="" />
    </div>
  </a-carousel>
</template>
<script>
export default {
  props: ['wherePick'],
  data() {
    return {
      pic: [
        [
          'service_feature_1.jpg',
          'service_luxury_1.jpg',
          'service_ordinary_1.jpg',
        ],
        [
          'service_feature_3.jpg',
          'service_luxury_3.jpg',
          'service_ordinary_3.jpg',
        ],
        [
          'service_feature_5.jpg',
          'service_luxury_5.jpg',
          'service_ordinary_5.jpg',
        ],
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 100% !important;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
