<template>

  <MainHeader></MainHeader>
  <MainFooter></MainFooter>

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
import MainFooter from '../components/MainFooter.vue'


export default{
  components:{
    MainHeader,
    MainFooter,
  },
  
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

}
</script>
