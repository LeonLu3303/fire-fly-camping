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
            <div id="cardReports">
                <div class="row_card_report">
                    <div class="col_card_report" v-for="item in filterData" :key="item.id">
                        <div class="report_mem">
                            <div class="mem_pic">
                                <!-- <img :src="require(`${item.memPic}`)" alt="avatar"> -->
                                <img :src="require(`@/assets/images/report/report_avatar_${item.memPic}.png`)" alt="avatar">
                            </div>
                            <div class="mem_data">
                                <h4 class="mem_name">{{item.memName}}</h4>
                                <p class="release_time">{{item.reaTime}}</p>
                            </div>
                        </div>
                        <div class="report_content">
                            <h4 class="report_title">{{item.portTitle}}</h4>
                            <p class="report_txt">{{item.portTxt}}</p>
                        </div>
                        <p @click="FetchAPICard">test</p>
                        <div class="report_btn">
                            <ReportLightBox/>
                            <router-link class="message_icon" to="/reportMessage">
                                <img src="@/assets/images/report/report_msg_1.png" alt="report">
                                <p class="message_count">{{item.msgCount}}</p>
                            </router-link>
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
    el: '#cardReports',
    components: {
        ReportLightBox,
    },
    data(){
        return {
            activeBtn:'timeDate',
            current: 1,
            paginate: 6,
            cardReports: [
                {
                    id:1,
                    memPic: 1,
                    memName: "是一三",
                    reaTime: "2022/10/01",
                    portTitle: "露營景色好美，難怪這麼多人愛露營",
                    portTxt: "整個露營我覺得是一次很棒的體驗，不管是風景還是氛圍都完全讓人放鬆，感覺像來到世外桃源一樣，也難怪越來越多人喜歡從事露營這個活動！比較麻煩的是要開山路一個多小時左右才會抵達，但肯定是值得的！早上的太陽搭配營區根本是拍照聖地吧～快攜手一起去體驗露營的美好吧！也能享受大自然的風光，短暫逃離都市的喧囂，完全是一個很特別很值得的旅程！",
                    msgCount: 10,
                },
                {
                    id:2,
                    memPic: 2,
                    memName: "TK律師",
                    reaTime: "2022/09/29",
                    portTitle: "請教神人裝備",
                    portTxt: "小弟今年想去冰雪奇緣做露營，第一次到雪地活動遊玩，該帶甚麼裝備比較好?",
                    msgCount: 5,
                },
                {
                    id:3,
                    memPic: 3,
                    memName: "小羽老師",
                    reaTime: "2022/08/29",
                    portTitle: "傍晚的蚊子都怎麼解決？防蚊片有效嗎?",
                    portTxt: "我一直都是在身上噴防蚊液，但沒噴到的地方都會被偷襲，像是屁股，隔著褲子也要咬我，4點生火的時候都相安無事，到56點的時候開始多很多，一直到10點要收拾的時候蚊子才會少一點。有人有推薦嗎?",
                    msgCount: 20,
                },
                {
                    id:4,
                    memPic: 4,
                    memName: "Esther",
                    reaTime: "2022/08/29",
                    portTitle: "露營時的菜單有什麼，大家來說說吧",
                    portTxt: "喜愛露營的朋友，想必每次露營都有一定要端出來的拿手好菜吧，歡迎大家分享自己的拿手菜，我個人一定會準備:奶油、櫛瓜、杏包菇、牛排、鮭魚，牛排和鮭魚基本上只要簡單煎一煎就很好吃了，奶油還可以拿來炒杏包菇，大家快來分享自己的露營菜單吧!",
                    msgCount: 15,
                },
                {
                    id:5,
                    memPic: 5,
                    memName: "蕭董",
                    reaTime: "2022/09/30",
                    portTitle: "夏天露營不會熱昏，又好玩",
                    portTxt: "這個夏天和家人一起去叢林歷險露營，是一個景好的地方，有茂密的樹林、美麗的天然瀑布，在露營區同時也可以體驗有趣的活動。玩的最開心的還是尋寶了吧，一步一步的解謎，還有見到奇幻的神祕物種，真是奇特的體驗啊!!",
                    msgCount: 3,
                },
                {
                    id:6,
                    memPic: 6,
                    memName: "柏霖老師",
                    reaTime: "2022/10/04",
                    portTitle: "太重沒辦法搭熱氣球...",
                    portTxt: "一直想到荒野峽谷體驗熱氣球活動，結果因為太胖不能搭，有什麼好方法可以減重的嗎，聽說穴道按摩好像蠻有用的",
                    msgCount: 7,
                },
                {
                    id:7,
                    memPic: 1,
                    memName: "玻璃心",
                    reaTime: "2022/08/29",
                    portTitle: "營火叢太爛了吧",
                    portTxt: "只是想問一下路怎麼走，服務人員竟然過三秒才回我，服務態度太差了吧，詛咒你們全家都得香港腳。",
                    msgCount: 7,
                },
                {
                    id:8,
                    memPic: 5,
                    memName: "女神",
                    reaTime: "2022/09/11",
                    portTitle: "要烤肉的時候",
                    portTxt: "各位哥哥們，我是新手，在烤肉時會使用烤肉爐？還是焚火台加烤肉配件？該不該買起火師？請問有推薦哪幾款烤肉爐/焚火台(有烤肉配件)/起火師/防火毯/防熱手套？",
                    msgCount: 5,
                },
                {
                    id:9,
                    memPic: 4,
                    memName: "男神",
                    reaTime: "2022/08/22",
                    portTitle: "營火叢哪個地區比較好玩嗎",
                    portTxt: "想找個時間去營火叢游玩，比較想去住他們的特色帳篷，有什麼要注意和推薦的嗎?",
                    msgCount: 20,
                },
                {
                    id:10,
                    memPic: 3,
                    memName: "不可以色色",
                    reaTime: "2022/08/29",
                    portTitle: "不可以亂丟垃圾",
                    portTxt: "美麗的大自然需要你我的愛護，請留下美麗的記憶，帶走隨身的垃圾，台灣的美麗讓我慢慢地來讓你看到.",
                    msgCount: 15,
                },
                {
                    id:11,
                    memPic: 2,
                    memName: "黃金開口笑",
                    reaTime: "2022/08/29",
                    portTitle: "夏天露營不會熱昏，又好玩",
                    portTxt: "這個夏天和家人一起去叢林歷險露營，是一個景好的地方，有茂密的樹林、美麗的天然瀑布，在露營區同時也可以體驗有趣的活動。玩的最開心的還是尋寶了吧，一步一步的解謎，還有見到奇幻的神祕物種，真是奇特的體驗啊!!",
                    msgCount: 3,
                },
            ],
            cardTest:null,
        }
    },
    computed: {
        paginateTotal() {
            //卡片長度 除以 一頁可顯示的數量，會有小數點所以要用Math無條件進位
            return Math.ceil(this.cardReports.length / this.paginate)
        },
        filterData() {
            //一頁有幾筆數目，透過slice做計算
            //array.slice((page_number - 1) * page_size, page_number * page_size);
            let arr = this.activeBtn == 'timeDate' ? this.timeDate : this.hotData;
            return arr.slice((this.current - 1) * this.paginate , this.current * this.paginate);
        },
        hotData() {
            return [...this.cardReports].sort( function(a,b) {
                return b.msgCount - a.msgCount;
            });
        },
        timeDate() {
            return [...this.cardReports].sort( function(a,b) {
                return Date.parse(b.reaTime) - Date.parse(a.reaTime);
                //其轉換成秒數
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
        FetchAPICard(){
            fetch('http://localhost/phpLab_CGD102/back_end/discuss.php').then((response) => {
                this.fetchError = (response.status !== 200)
                //json(): 返回 Promise，resolves 是 JSON 物件
                return response.json()
            }).then(responseText => {
                const useData = responseText
                this.userAllData = useData
                console.log(this.userAllData);
            }).catch((err) => {
                this.userAllData = true
            })
        },
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
