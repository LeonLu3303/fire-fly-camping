<template>
  <MainHeader/>
  <div class="banner">
    <img src="@/assets/images/main/banner_activity.png" alt="banner" />
  </div>
  <ActivityTour/>
  <ActivityInfo/>
  <!-- <div class="carousel_jungle">
    <ActivityCarousel/>
  </div> -->
  <div class="box">
      <ScrollDrop/> 
    </div>
  <MainFooter/>  
</template>

<script>
import ActivityTour from '@/components/ActivityTour.vue'
import ActivityInfo from '@/components/ActivityInfo.vue'
import {gsap} from 'gsap'
import ActivityCarousel from '@/components/ActivityCarousel.vue'
import ScrollDrop from '@/components/ScrollDrop.vue'
export default {
  components:{
    ActivityTour,
    ActivityInfo,
    ActivityCarousel,
    ScrollDrop,
},
      methods:{
        scrollToTop(){
          window.scrollTo(0,0)
        },
      },
      mounted(){
        //要用到mounted，不能用在created中，因為Dom元件還沒被掛載，讀不到window
        this.scrollToTop()

      }
    }
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.carousel_jungle{
  height: 300px;
  .ant-carousel {
                  height: 100%;
                  .slick-slider {
                    height: 100%;
                    .slick-list {
                      height: 100%;
                      .slick-track {
                        height: 100%;
                      }
                    }
                  }
                }
}
.box{
  position: fixed;
  bottom:0;
  left: 0;
 
  @include tb(){
    display: none;
  }

}

</style>
