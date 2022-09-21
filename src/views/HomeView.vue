<template>

<<<<<<< HEAD
<MainHeader></MainHeader>
<ActivityIsland/>
<!-- <MainFooter></MainFooter> -->
=======
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
>>>>>>> 2ea817a8bae769b98b55ff9f5320bb4107c65cfe

</template>

<script>
// @ is an alias to /src
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'
import ActivityIsland from "@/components/ActivityIsland.vue";


export default{
  components:{
    MainHeader,
    MainFooter,
<<<<<<< HEAD
    ActivityIsland
  }
=======
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

>>>>>>> 2ea817a8bae769b98b55ff9f5320bb4107c65cfe
}
</script>
