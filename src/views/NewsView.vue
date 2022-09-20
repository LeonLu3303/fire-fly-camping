<template>
    <div id="app">
        <div class="banner">
            <img src="../assets/images/banner_news.png" alt="" />
        </div>
        <div class="container">
            <div class="box" 
                v-for="(news,index) in newsList"
                :class="{reverse: index % 2 === 0}"
                :key="news">
                <div class="pic">
                    <img :src="news.news_pic" alt="">
                </div>
                <div class="txt">
                    <h2>{{news.title}}</h2>
                    <p class="content">{{news.content}}</p>
                    <p class="post_time">{{news.news_post_time}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
      return{//用陣列位置的方式紀錄資料
          //reverse:"red bold"
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
    }
} 
</script>
<style>
    .banner{
        width: 100%;
    }
    .container{
        max-width: 1200px;
        margin-right: auto;
        margin-left: auto;
        box-sizing: border-box;
    }
    .box{
        width: 100%;
        height: 300px;
        display:flex;
        background-color: #f3f6fd;
        margin:auto;
        margin-bottom: 10px;
    }
    .pic{
        width: 60%;
        overflow: hidden;
    }
    .pic img{
        width: 100%;
    }
    .txt{
        width: 40%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        word-wrap: break-word;
        word-break: break-all;
    }
    .content{
        flex-grow:1 ;
    }
    .bold {
        font-weight: bold;
    }
    .reverse{
        flex-direction: row-reverse;
    }
</style>