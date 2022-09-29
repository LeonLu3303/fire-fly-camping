<template>
    <section class="wrap_card_report">
        <div class="report_container">
            <div class="title_main">
                <h2>報告討論</h2>
            </div>
            <!-- 最新熱門btn -->
            <div class="report_new_hot">
                <form class="new_hot_choose">
                    <button class="btn_report_new" 
                        @click="activeTab = 'new'" 
                        :class="{tab_active:activeTab === 'new'}"
                        >最新報告
                    </button>

                    <button 
                        class="btn_report_new" 
                        @click="activeTab = 'hot'" 
                        :class="{tab_active:activeTab === 'hot'}"
                        >熱門報告
                    </button>
                </form>
                <!-- <select class="new_hot_choose">
                    <option class="btn_report_new" value="1">最新報告</option>
                    <option class="btn_report_new" value="2">熱門報告</option>
                </select> -->
            </div>
            <!-- 報告卡片 -->
            <!-- v-show="setPaginate($index)" -->
            <div class="row_card_report">
                <div class="col_card_report" v-for="item in cardReport" :key="item.id">
                    <div class="report_user">
                        <div class="user_pic">
                            <!-- 因為assets裡面的會被瀏覽器再編譯，所以需要require -->
                            <img :src="require(`@/assets/images/report/report_avatar_${item.id}.png`)" alt="avatar">
                        </div>
                        <div class="user_data">
                            <h4 class="user_name">{{item.userName}}</h4>
                            <p class="release_time">{{item.releaseTime}}</p>
                        </div>
                    </div>
                    <div class="report_content">
                        <h4 class="report_title">{{item.reportTitle}}</h4>
                        <p class="report_txt">{{item.reportTxt}}</p>
                    </div>
                    <div class="report_btn">
                        <ReportLightBox/>
                        <router-link class="message_icon" to="/reportMessage">
                            <img src="@/assets/images/report/report_msge_1.png" alt="report">
                            <p class="message_count">{{item.messageCount}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- 分頁 -->
            <!-- <ReportPaginate/> -->
            <!-- <div id="pagination">
                <button class="btn-default" v-for="page_index in paginate_total" @click.prevent="updateCurrent(page_index + 1)">
                    {{ page_index + 1 }}
                </button>
            </div> -->
            <!-- <div class="pagination">
                <button @click="prevPage"> ＜ </button>
                <button 
                    v-for="(page) in paginate_total" 
                    :class="{
                        'activeBtnStyle': (currentPage === page)
                    }"
                    @click="selectPage(page)" 
                >
                    {{page}}
                </button>
                <button @click="nextPage"> ＞ </button>
            </div> -->
        </div>
    </section>
</template>

<script>
import ReportPaginate from '../components/ReportPaginate.vue';
import ReportLightBox from '../components/ReportLightBox.vue';
// import defineComponent from 'vue';

export default {
    name: "ReportCard",
    components: {
        ReportPaginate,
        ReportLightBox,
        // defineComponent,
    },
    // created() {
    //     this.paginate_total = this.heroes.length/this.paginate;
    // },
    data(){
        return {
            activeTab:'new',
            // current: 1,
            // paginate: 5,
            // paginate_total: 0,
            // search_filter: '',
            // status_filter: '',
            cardReport: [
                {
                    id:1,
                    userPic: '',
                    userName: "是一三",
                    releaseTime: "2022/10/01",
                    reportTitle: "露營景色好美，難怪這麼多人愛露營",
                    reportTxt: "整個露營我覺得是一次很棒的體驗，不管是風景還是氛圍都完全讓人放鬆，感覺像來到世外桃源一樣，也難怪越來越多人喜歡從事露營這個活動！比較麻煩的是要開山路一個多小時左右才會抵達，但肯定是值得的！早上的太陽搭配營區根本是拍照聖地吧～快攜手一起去體驗露營的美好吧！也能享受大自然的風光，短暫逃離都市的喧囂，完全是一個很特別很值得的旅程！",
                    messageCount: 10,
                },
                {
                    id:2,
                    userPic: '',
                    userName: "TK律師",
                    releaseTime: "2022/09/29",
                    reportTitle: "請教神人裝備",
                    reportTxt: "小弟今年想去冰雪奇緣做露營，第一次到雪地活動遊玩，該帶甚麼裝備比較好?",
                    messageCount: 5,
                },
                {
                    id:3,
                    userPic: '@/assets/images/report/report_avatar_3.png',
                    userName: "小羽老師",
                    releaseTime: "2022/08/29",
                    reportTitle: "傍晚的蚊子都怎麼解決？防蚊片有效嗎?",
                    reportTxt: "我一直都是在身上噴防蚊液，但沒噴到的地方都會被偷襲，像是屁股，隔著褲子也要咬我，4點生火的時候都相安無事，到56點的時候開始多很多，一直到10點要收拾的時候蚊子才會少一點。有人有推薦嗎?",
                    messageCount: 20,
                },
                {
                    id:4,
                    userPic: '',
                    userName: "Esther",
                    releaseTime: "2022/08/29",
                    reportTitle: "露營時的菜單有什麼，大家來說說吧",
                    reportTxt: "喜愛露營的朋友，想必每次露營都有一定要端出來的拿手好菜吧，歡迎大家分享自己的拿手菜，我個人一定會準備:奶油、櫛瓜、杏包菇、牛排、鮭魚，牛排和鮭魚基本上只要簡單煎一煎就很好吃了，奶油還可以拿來炒杏包菇，大家快來分享自己的露營菜單吧!",
                    messageCount: 15,
                },
                {
                    id:5,
                    userPic: '',
                    userName: "蕭董",
                    releaseTime: "2022/09/30",
                    reportTitle: "夏天露營不會熱昏，又好玩",
                    reportTxt: "這個夏天和家人一起去叢林歷險露營，是一個景好的地方，有茂密的樹林、美麗的天然瀑布，在露營區同時也可以體驗有趣的活動。玩的最開心的還是尋寶了吧，一步一步的解謎，還有見到奇幻的神祕物種，真是奇特的體驗啊!!",
                    messageCount: 3,
                },
                {
                    id:6,
                    userPic: '',
                    userName: "柏霖老師",
                    releaseTime: "2022/10/04",
                    reportTitle: "太重沒辦法搭熱氣球...",
                    reportTxt: "一直想到荒野峽谷體驗熱氣球活動，結果因為太胖不能搭，有什麼好方法可以減重的嗎，聽說穴道按摩好像蠻有用的",
                    messageCount: 7,
                },
                {
                    id:1,
                    userPic: '',
                    userName: "玻璃心",
                    releaseTime: "2022/08/29",
                    reportTitle: "營火叢太爛了吧",
                    reportTxt: "只是想問一下路怎麼走，服務人員竟然過三秒才回我，服務態度太差了吧，詛咒你們全家都得香港腳。",
                    messageCount: 7,
                },
                {
                    id:5,
                    userPic: '',
                    userName: "女神",
                    releaseTime: "2022/09/11",
                    reportTitle: "要烤肉的時候",
                    reportTxt: "各位哥哥們，我是新手，在烤肉時會使用烤肉爐？還是焚火台加烤肉配件？該不該買起火師？請問有推薦哪幾款烤肉爐/焚火台(有烤肉配件)/起火師/防火毯/防熱手套？",
                    messageCount: 5,
                },
                {
                    id:4,
                    userPic: '@/assets/images/report/report_avatar_3.png',
                    userName: "男神",
                    releaseTime: "2022/08/22",
                    reportTitle: "營火叢哪個地區比較好玩嗎",
                    reportTxt: "想找個時間去營火叢游玩，比較想去住他們的特色帳篷，有什麼要注意和推薦的嗎?",
                    messageCount: 20,
                },
                {
                    id:3,
                    userPic: '',
                    userName: "不可以色色",
                    releaseTime: "2022/08/29",
                    reportTitle: "不可以亂丟垃圾",
                    reportTxt: "美麗的大自然需要你我的愛護，請留下美麗的記憶，帶走隨身的垃圾，台灣的美麗讓我慢慢地來讓你看到.",
                    messageCount: 15,
                },
                {
                    id:2,
                    userPic: '',
                    userName: "黃金開口笑",
                    releaseTime: "2022/08/29",
                    reportTitle: "夏天露營不會熱昏，又好玩",
                    reportTxt: "這個夏天和家人一起去叢林歷險露營，是一個景好的地方，有茂密的樹林、美麗的天然瀑布，在露營區同時也可以體驗有趣的活動。玩的最開心的還是尋寶了吧，一步一步的解謎，還有見到奇幻的神祕物種，真是奇特的體驗啊!!",
                    messageCount: 3,
                },
            ],
        }
    },
    // methods: {
    //     setPaginate: function (i) {
    //         if (this.current == 1) {
    //             return i < this.paginate;
    //         }
    //         else {
    //             return (i >= (this.paginate * (this.current - 1)) && i < (this.current * this.paginate));
    //         }
    //     },
    //     setStatus: function (status) {
    //         this.status_filter = status;
    //         this.$nextTick(function () {
    //             this.updatePaginate();
    //         });
    //     },
    //     updateCurrent: function (i) {
    //         this.current = i;
    //     },
    //     updatePaginate: function () {
    //         this.current = 1;
    //         this.paginate_total = Math.ceil(document.querySelectorAll('').length/this.paginate);
    //     },
        // prevPage(){
        //     //當前頁面是第一頁，不能再往前
        //     if(this.currentPage === 1) return
        //     //this.currentPage = this.currentPage - 1
        //     this.currentPage -= 1
        // },
        // nextPage(){
        //     //當前頁面是最後一頁，不能再往後
        //     if(this.currentPage >= this.paginations) return
        //     //this.currentPage = this.currentPage + 1
        //     this.currentPage += 1
        // },
        // selectPage(val){
        //     this.currentPage = val
        // }
    // }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';


.wrap_card_report{
    padding: 150px 0;
    background: $color-main-yellow;
}
.report_container{
    width: 80%;
    max-width: 1296px;
    margin: 0 auto;
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
        background: $color-str-hov-green;
        color: $color-basic-White;
        border: 2px solid $color-str-hov-green;
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
.report_user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #8a8a8a;
}
.user_pic {
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
        width: 30px;
        margin-right: 5px;
    }
    .message_count{
        color: $color-basic-gray1;
        font-size: 20px;
        font-weight: 500;
    }
}
</style>
