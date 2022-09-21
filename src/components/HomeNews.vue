<template>
    <div class="news_title">
        最新消息
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
                <img :src="news.news_pic" alt="">
            </div>
            <div class="news_txt">
                <h3>{{news.title}}</h3>
                <p class="news_content">{{news.content}}</p>
                <p class="news_post_time">{{news.news_post_time}}</p>
            </div>
        </div>
    </div>
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
<style>
    .news_container{
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        position: relative;
        align-items: flex-end;
    }
    .news_box{
        width: 40%;
        height: 300px;
        display:flex;
        background-color: #f3f6fd;
        margin:auto;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
    }
    .mid{
        width: 50%;
        height: 400px;
        position: absolute;
        left:0;
        right:0;
        z-index: 2;
        transition: 1s;
    }
    .mid .news_pic{
        opacity: 1;
    }
    .mid .news_pic::before{
        content: '';
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent,rgb(0, 0, 0));
        position: absolute;
        z-index: 2;
    }
    .left{
        transition: 1s;
    }
    .right{
        transition: 1s;
    }
    .news_pic{
        height: 100%;
        overflow: hidden;
        position: absolute;
        z-index: -0;
        opacity: 0.5;
    }
    .news_pic img{
        width: 100%;
    }
    .news_txt{
        display: none;
    }
    .news_txt h3{
        color: transparent;
    }
    .mid .news_txt{
        display: flex;
        flex-direction: column;
        justify-content: end;
        padding: 10px;
        word-wrap: break-word;
        word-break: break-all;
        color: #ffffff;
        z-index: 3;
    }
    .mid .news_txt h3{
        color: #ffffff;
    }
</style>