<template>
  <div class="booking_pages">
    <div class="bk_banner_container">
      <img src="../assets/images/booking/booking_banner.jpg" alt="banner" />
    </div>
    <div class="bk_process_container">
      <div class="bk_process_where">
        <div class="decoration_where">
          <h2>你要去哪裡露營呢？</h2>
        </div>
        <div class="bk_where_block_container">
          <div class="bk_where_card">
            <h3>叢林歷險</h3>
            <button>預定</button>
          </div>
          <div class="bk_where_card">
            <h3>冰雪奇緣</h3>
            <button>預定</button>
          </div>
          <div class="bk_where_card">
            <h3>荒野峽谷</h3>
            <button>預定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'booking',
  components: {},
};
</script>
<style lang="scss">
  @import '../assets/scss/style.scss';
</style>
