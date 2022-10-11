<template>
  <section class="wrap_News">
    <div class="title_main">
        <h2 id="home_news">最新消息</h2>
    </div>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(news,slide) in newsList" :key="news">
        <div class="news_pic">
          <img :src="require(`@/assets/images/news/${news.news_pic}`)" alt="最新消息照片" />
        </div>
        <div class="news_txt">
            <h3>{{news.news_title}}</h3>
            <p class="news_content">{{news.news_content}}</p>
            <p class="news_post_time">{{news.news_post_time}}</p>
        </div>
     </swiper-slide>
      </swiper>

        <div class="btn_spacing">
                <router-link to ="/News" class="btn_page_link news_link">更多消息</router-link>
        </div>
    </section>
    
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,EffectCoverflow, Pagination],
    };
  },
  data() {
    return {
      //用陣列位置的方式紀錄資料
      //reverse:"red bold"
      currentPage: 0,
      clickRight: true,
      clickLeft: false,
      slide: 0,
      newsList: [],
    };
  },
  methods: {
    prevPage() {
      //當前頁面是第一頁，不能再往前
      if (this.currentPage === 0) return;
      this.clickRight = false;
      this.clickLeft = true;

      //this.currentPage = this.currentPage - 1
      this.currentPage -= 1;
      console.log(currentPage);
    },
    nextPage() {
      //當前頁面是最後一頁，不能再往後
      if (this.currentPage >= this.newsList.length - 1) return;
      this.clickRight = true;
      this.clickLeft = false;

      //this.currentPage = this.currentPage + 1
      this.currentPage += 1;
      console.log(currentPage);
    },
    selectPage(val) {
      this.currentPage = val;
      console.log(currentPage);
    },
  },
  created(){
      fetch('http://localhost/phpLab/firefly_camping_php/home_news.php')
      .then((res)=>{
      // this.fetchError = (response.status !== 200)
      return res.json()
      })
      .then((newsContent)=>{
      console.log(newsContent)
      this.newsList=newsContent
      console.log(this.newsList)
      })
  }
};
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
@import '../assets/scss/component/HomeNews';
</style>
