<template>


<MainHeader></MainHeader>
<HomeNews/>
<HomeActivityIsland/>
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
import HomeNews from '../components/HomeNews.vue'
import MainFooter from '../components/MainFooter.vue'
import HomeActivityIsland from '../components/HomeActivityIsland.vue'

export default{
  components:{
    MainHeader,
    HomeActivityIsland,
    HomeNews,
    MainFooter
  }
}
</script>
