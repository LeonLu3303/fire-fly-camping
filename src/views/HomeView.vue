<template>
  <MainHeader />
  <HomeReservation />
  <HomeNews />
  <HomeActivityIsland />
  <HomeReport />
  <HomeProducts />
  <MainFooter />
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';

// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import HomeReservation from '@/components/HomeReservation.vue';
import HomeNews from '@/components/HomeNews.vue';
import HomeActivityIsland from '@/components/HomeActivityIsland.vue';
import HomeReport from '@/components/HomeReport.vue';
import HomeProducts from '@/components/HomeProducts.vue';
import MainFooter from '@/components/MainFooter.vue';

// 之後要作轉場動畫的設定
export default {
  setup() {
    // same as beforeRouteLeave option with no access to `this`
    // onBeforeRouteLeave((to, from) => {
    //   document.getElementById('loading-bar').classList.add('aaa');
    // })
  },
  components: {
    MainHeader,
    HomeReservation,
    HomeNews,
    HomeActivityIsland,
    HomeReport,
    HomeProducts,
    MainFooter,
  },
};
</script>

<style lang="scss"></style>
