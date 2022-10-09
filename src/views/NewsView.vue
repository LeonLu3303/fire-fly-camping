<template>
<MainHeader/>
<section class="wrap_news">
    <div id="app">
        <div class="banner">
            <img src="@/assets/images/main/banner_news.png" alt="" />
        </div>
        <div class="news_v_container">
            <div class="news_v_box" 
                v-for="(news,index) in newsList"
                :class="{news_v_reverse: index % 2 === 0}"
                :key="news">
                <div class="news_v_pic">
                    <img :src="require(`@/assets/images/news/${news.news_pic}`)" alt="最新消息照片">
                </div>
                <div class="news_v_txt">
                    <h3>{{news.news_title}}</h3>
                    <p class="news_v_content">{{news.news_content}}</p>
                    <p class="news_v_post_time">{{news.news_post_time}}</p>
                </div>
            </div>
            <div class="news_v_box md sm" 
                v-for="(news,index) in newsList"
                :key="news">
                <div class="news_v_pic">
                    <img :src="require(`@/assets/images/news/${news.news_pic}`)" alt="最新消息照片">
                </div>
                <div class="news_v_txt">
                    <h3>{{news.news_title}}</h3>
                    <p class="news_v_content">{{news.news_content}}</p>
                    <p class="news_v_post_time">{{news.news_post_time}}</p>
                </div>
            </div>
        </div>
    </div>
</section>
<MainFooter/>
</template>

<script>
export default{
    data(){
    return{
      newsList:[],
    }
    },
    created(){
        fetch('http://localhost/phpLab/firefly_camping_php/news.php')
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
} 
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
@import '../assets/scss/page/NewsView';
</style>