<template>
  <MainHeader/>
  <div class="banner">
    <img src="@/assets/images/main/banner_activity.png" alt="banner" />
  </div>
  <ActivityTour/>
  <ActivityInfo/>
  <MainFooter/>  
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import ActivityTour from '@/components/ActivityTour.vue'
import ActivityInfo from '@/components/ActivityInfo.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
  components:{
    MainHeader,
    ActivityTour,
    ActivityInfo,
    MainFooter
    },
      methods:{
        scrollToTop(){
          window.scrollTo(0,0)
        }
      },
      mounted(){
        //要用到mounted，不能用在created中，因為Dom元件還沒被掛載，讀不到window
        this.scrollToTop()
      }
    }
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';
</style>
