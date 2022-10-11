<template>
    <section class="wrap_card_report">
        <div class="report_container">
            <div class="title_main">
                <h2>報告討論</h2>
            </div>
            <!-- 最新熱門btn -->
            <div class="report_new_hot">
                <form class="new_hot_choose">
                    <button class="btn_report_new" type="button"
                        @click="activeBtn = 'timeDate'" 
                        :class="{btn_active:activeBtn === 'timeDate'}"
                        >最新報告
                    </button>
                    <button class="btn_report_new" type="button"
                        @click="activeBtn = 'hotData'" 
                        :class="{btn_active:activeBtn === 'hotData'}"
                        >熱門報告
                    </button>
                </form>
            </div>
            <!-- 報告卡片 -->
            <div id="discussCard">
                <div class="row_card_report">
                    <div class="col_card_report" v-for="item in filterData" :key="item.discuss_no">
                        <div class="report_mem">
                            <div class="mem_pic">
                                <!-- <img :src="require(`${item.memPic}`)" alt="avatar"> -->
                                <img :src="require(`@/assets/images/report/report_avatar_${item.mem_pic}.png`)" alt="avatar">
                            </div>
                            <div class="mem_data">
                                <h4 class="mem_name">{{item.mem_nick_name}}</h4>
                                <p class="release_time">{{formatDate(item.discuss_post_time)}}</p>
                            </div>
                        </div>
                        <div class="report_content">
                            <h4 class="report_title">{{item.discuss_title}}</h4>
                            <p class="report_txt">{{item.discuss_content}}</p>
                        </div>
                        <div class="report_btn">
                            <ReportLightBox/>
                            <!-- 連結使用抓取報告的id，discuss_no，使用query傳遞資料，?no=1-->
                            <!-- <router-link class="message_icon" :to="`/reportMessage?discuss_no=${item.discuss_no}`"> -->
                            <router-link 
                                class="message_icon" 
                                :to="{
                                    name:'ReportMessage',
                                    query: {
                                        'discuss_no': item.discuss_no
                                    }
                                }"
                            >
                                <img src="@/assets/images/report/report_msg_1.png" alt="report">
                                <p class="message_count">{{item.comment_count}}</p>
                            </router-link>
                            <!-- 做click事件 -->
                        </div>
                    </div>
                </div>
                <!-- 分頁 -->
                <div class="btnContainer">
                    <button @click="prevPage" type="button"> ＜ </button>
                    <button 
                        v-for="page in paginateTotal" 
                        :key="page"
                        :class="{'activeBtnStyle': (current === page)}"
                        @click="current = page"  
                        type="button"
                    >
                        {{page}}
                    </button>
                    <button @click="nextPage" type="button"> ＞ </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ReportLightBox from '../components/ReportLightBox.vue';

export default {
    name: "ReportCard",
    el: '#discussCard',
    components: {
        ReportLightBox,
    },
    data(){
        return {
            activeBtn:'timeDate',
            current: 1,
            paginate: 6,
            // 原始資料
            discussCard: [],
        }
    },
    computed: {
        paginateTotal() {
            //卡片長度 除以 一頁可顯示的數量，會有小數點所以要用Math無條件進位
            return Math.ceil(this.discussCard.length / this.paginate)
        },
        //因為直接在computed做計算，資料是彈性的，做熱門和時間判斷
        //key值要抓報告編號，只有編號都會是不樣的
        filterData() {
            //一頁有幾筆數目，透過slice做計算，所以不能寫discussCard原始資料
            //array.slice((page_number - 1) * page_size, page_number * page_size);
            let arr = this.activeBtn == 'timeDate' ? this.timeDate : this.hotData;
            return arr.slice((this.current - 1) * this.paginate , this.current * this.paginate);
        },
        hotData() {
            //根據留言數做比較排序
            // console.log(this.discussCard.comment_count);
            return [...this.discussCard].sort( function(a,b) {
                return b.comment_count - a.comment_count;
            });
        },
        timeDate() {
            return [...this.discussCard].sort( function(a,b) {
                return Date.parse(b.discuss_post_time) - Date.parse(a.discuss_post_time);
                //將時間轉換成秒數
            });
        }
    },
    methods: {
        prevPage(){
            //當前頁面是第一頁，不能再往前
            if(this.current === 1) return
            this.current -= 1
        },
        nextPage(){
            //當前頁面是最後一頁，不能再往後
            if(this.current >= this.paginateTotal) return
            this.current += 1
        },
        selectPage(val){
            this.current = val
        },
        // 把留言寫入資料庫
        FetchAPIDiscuss(){
            // https://tibamef2e.com/cgd102/g1/firefly_camp_php/discuss_card.php
            // http://localhost/phpLab_CGD102/firefly_camp_php/discuss_card.php
            fetch('http://localhost/phpLab_CGD102/firefly_camping_php/discuss_card.php').then((response) => {
                this.fetchError = (response.status !== 200)
                //json(): 返回 Promise，resolves 是 JSON 物件
                return response.json()
            }).then(responseText => {
                const discussData = responseText
                this.discussCard = discussData;
                console.log(this.discussCard);
            }).catch((err) => {
                this.discussCard = true
            })
        },
        //把資料庫撈出來的時間，在做轉換喧染
        formatDate(date) {
            const myDate = new Date(date); 
            return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}` 
        }, 
    },
    created() {
        this.FetchAPIDiscuss();
    },
    watch: {
        // 做監聽，不管在最新和最熱都要回第一頁
        activeBtn(){
            this.current = 1
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

// 分頁 按紐
.btnContainer{
    display: flex;
    justify-content: center;
    button{
        cursor: pointer;
        border: none;
        width: 35px;
        height: 35px;
        padding: 10px;
        margin: 0 10px;
        border-radius: 50%;
        color: $color-basic-White;
        background: $color-aid-green1;
        text-align: center;
        font-weight: 700px;
    }
    .activeBtnStyle{
        background: $color-str-green;
        color: $color-basic-White;
        border: none;
    }
}

.wrap_card_report{
    padding: 150px 0;
    background: $color-main-yellow;
}
.report_container{
    width: 80%;
    max-width: 1296px;
    margin: 0 auto;
    @include lg(){
        width: 90%;
    }
    @include md(){
        width: 95%;
    }
}

//最新 熱門 btn
.report_new_hot {
    display: flex;
    justify-content: flex-end;
    padding: 0 30px 30px;
}
.btn_report_new {
    font-size: $txt_btn;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 8px 10px;
    margin-left: 15px;
    border: 2px solid $color-str-green;
    color: $color-str-green;
    background: $color-basic-White;
    cursor: pointer;
    &:hover{
        background: $color-str-green;
        color: $color-basic-White;
        border: 2px solid $color-str-green;
    }
}
.btn_active{
    background: $color-str-green;
    color: $color-basic-White;
    border: 2px solid $color-str-green;
}
//卡片
.row_card_report {
    display: flex;
    // justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 0 60px;
}
.col_card_report {
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 480px;
    margin: 10px;
    padding: 30px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    @include lg() {
        width: 45%;
    }
    @include md() {
        width: 100%;
    }
}
.report_mem {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #8a8a8a;
}
.mem_pic {
    width: 80px;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 20px;
}
.report_content {
    flex-grow: 1;
    padding: 20px 0;
}
.report_title {
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: justify;
}
.report_txt {
    color: $color-basic-gray2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    text-align: justify;
}
//檢舉 留言 button
.report_btn{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    vertical-align:middle;
}
.message_icon{
    display: flex;
    margin-left: 20px;
    img{
        width: 26px;
        margin-right: 5px;
    }
    .message_count{
        color: $color-basic-gray1;
        font-size: 20px;
        font-weight: 500;
    }
}
</style>
