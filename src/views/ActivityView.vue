<template>
  <MainHeader/>
  <div class="banner">
    <img src="@/assets/images/main/banner_activity.png" alt="banner" />
  </div>
  <ActivityTour 
  :XMLHttpError="fetchError"
  :userAllData="fetchAllData"/>
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
import MainHeader from '@/components/MainHeader.vue'
import ActivityTour from '@/components/ActivityTour.vue'
import ActivityInfo from '@/components/ActivityInfo.vue'
import MainFooter from '@/components/MainFooter.vue'
import {gsap} from 'gsap'
import ActivityCarousel from '@/components/ActivityCarousel.vue'
import ScrollDrop from '@/components/ScrollDrop.vue'
export default {
  components:{
    MainHeader,
    ActivityTour,
    ActivityInfo,
    ActivityCarousel,
    ScrollDrop,
    MainFooter,
},
data(){
  return{
    fetchError: false,
    fetchAllData: [],
  }
},
methods:{
  FetchAPIFunc(){
      fetch('http://localhost/CGD102G1/back_end/test.php').then((response) => {
        this.fetchError = (response.status !== 200)
        //json(): 返回 Promise，resolves 是 JSON 物件
        return response.json()
      }).then(responseText => {
        console.log("------",responseText)
        const useData = responseText

        this.userAllData = useData
        console.log(this.userAllData);
      }).catch((err) => {
        this.userAllData = true
      });
    },

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
