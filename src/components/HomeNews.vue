<template>
    <section class="wrap_News">
        <div class="title_main" >
            <h2 id="home_news">最新消息</h2>
        </div>
        <div class="news_container">
            <div class="news_box" 
                v-for="(news,index) in newsList"
                :class="{
                    'mid':currentPage === index,
                    'left':currentPage === index-1,
                    'right':currentPage === index+1,
                }"
                :key="news"
                @click="selectPage(index)">
                <div class="news_pic">
                    <img :src="require(`../assets/images/news_${index}.jpg`)" alt="最新消息照片">
                </div>
                <div class="news_txt">
                    <h3>{{news.title}}</h3>
                    <p class="news_content">{{news.content}}</p>
                    <p class="news_post_time">{{news.news_post_time}}</p>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
    export default{
        data(){
            return{//用陣列位置的方式紀錄資料
                //reverse:"red bold"
                currentPage:1,
                newsList:[
                    {
                        title:"慟！暴風雪來臨，冰雪奇緣區域關閉一週",
                        content:"氣象局預警，下周冰雪奇緣地區將有暴風雪來臨，該區將暫時關閉一週，以防發生危險，此次關閉期間為2022年9月13日至2022年9月19日，造成不便敬請見諒。",
                        news_post_time:"2022/09/10 12:39:56",
                        news_pic:"../assets/images/news-1.jpg"
                    },
                    {
                        title:"熱浪來襲，小心中暑",
                        content:"氣象局發布高溫警報，請峽谷地區的遊客特別注意防曬及補水，儘可能待在陰涼處，並多補充水分，以免中暑造成身體不適。",
                        news_post_time:"2022/09/10 12:39:56",
                        news_pic:"../assets/images/news-2.jpg"
                    },
                    {
                        title:"神秘力量壟罩，叢林探險區域暫時關閉",
                        content:"近期有未知神秘力量壟罩著叢林探險區域，暫停叢林探險區域暫停開放，以防發生危險，待力量散去時將再度開放叢林探險區域，造成不便敬請見諒。",
                        news_post_time:"2022/09/10 12:39:56",
                        news_pic:"../assets/images/news-3.jpg"
                    }
                ]
            }
        },  
        methods:{
            selectPage(val){
                this.currentPage = val
            }
        }
    }
</script>
<style lang="scss">
    @import '../assets/scss/style.scss';
    @import '../assets/scss/page/NewsView';
</style>