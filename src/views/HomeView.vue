<template>
<h1 class="sr_only">營火叢｜Ｙ世代最ㄅㄧㄤˋ最HITO的露營選擇</h1>

<MainHeader/>
<HomeReservation/>
<ActivityIsland/>
<HomeNews/>
<MainFooter/>

  <!-- loadingPage 建議寫法-->

  <!-- <section v-show="isLoading">
    <LoadingPage></LoadingPage>
  </section> -->

  
  <!-- <div v-show="!isLoading">
    <MainHeader></MainHeader>
    <MainFooter></MainFooter>
  </div> -->

</template>

<script>
// @ is an alias to /src
import MainHeader from '../components/MainHeader.vue'
import HomeReservation from '../components/HomeReservation.vue'
import HomeNews from '../components/HomeNews.vue'
import HomeActivityIsland from '../components/HomeActivityIsland.vue'
import MainFooter from '../components/MainFooter.vue'


export default{
  components:{
    MainHeader,
    HomeReservation,
    HomeNews,
    HomeActivityIsland,
    MainFooter
  }
}

  //loadingPage 建議寫法

  // data() {
  //   return {
  //     isLoading: true,
  //   }
  // },
  // methods: {
  //   setFirstLoad() {
  //     let firstLoad = localStorage.getItem('is-loading');
  //     if (firstLoad) {
  //       this.isLoading = false;
  //     } else {
  //   setTimeout(() => {
  //     localStorage.setItem('is-loading', 123);
  //     this.isLoading = false;
  //   }, 3000)
  //     }
  
  //   },
  // },
  // mounted() {
  //   this.setFirstLoad();
  // },

</script>

<style lang="scss">
  .sr_only{
    width: 1px;
    position: absolute;
    overflow: hidden;
  }
</style>
