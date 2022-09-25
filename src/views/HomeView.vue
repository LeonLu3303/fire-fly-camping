<template>

<MainHeader/>
<HomeReservation/>
<HomeNews/>
<HomeActivityIsland/>
<HomeReport/>
<HomeProducts/>
<MainFooter/>

</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import HomeReservation from '@/components/HomeReservation.vue'
import HomeNews from '@/components/HomeNews.vue'
import HomeActivityIsland from '@/components/HomeActivityIsland.vue'
import HomeReport from '@/components/HomeReport.vue'
import HomeProducts from '@/components/HomeProducts.vue'
import MainFooter from '@/components/MainFooter.vue'


export default {
  components:{
    MainHeader,
    HomeReservation,
    HomeNews,
    HomeActivityIsland,
    HomeReport,
    HomeProducts,
    MainFooter
  },
}

</script>

<style lang="scss">

</style>
