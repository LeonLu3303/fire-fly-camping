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
          'service_feature_2.jpg',
          'service_luxury_2.jpg',
          'service_ordinary_2.jpg',
        ],
        [
          'service_feature_4.jpg',
          'service_luxury_4.jpg',
          'service_ordinary_4.jpg',
        ],
        [
          'service_feature_6.jpg',
          'service_luxury_6.jpg',
          'service_ordinary_6.jpg',
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
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
