<template>
    <div class="col_card_report" v-for="item in cardReport" :key="item.id">
        <div class="report_user">
            <div class="user_pic">
                <!-- 因為assets裡面的會被瀏覽器再編譯，所以需要require -->
                <img :src="require(`../assets/images/report_avatar_${item.id}.png`)" alt="avatar">
            </div>
            <div class="user_data">
                <h4 class="user_name">{{item.userName}}</h4>
                <p class="release_time">{{item.releaseTime}}</p>
            </div>
        </div>
        <div class="report_content">
            <h3 class="report_title">{{item.reportTitle}}</h3>
            <p class="report_txt">{{item.reportTxt}}</p>
        </div>
        <div class="report_btn">
            <a class="inform_icon"><img src="../assets/images/report_inform_1.png" alt="report"></a>
            <router-link to="/reportMessage" class="message_icon">
                <img src="../assets/images/report_msge_1.png" alt="report">
                <span class="message_count">{{messageCount}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReportCard",
        data(){
            return {
                cardReport: [
                    {
                        id:1,
                        userPic: '../assets/images/report_avatar_1.png',
                        userName: "1313",
                        releaseTime: "2022/08/29",
                        reportTitle: "露營景色還是好美，難怪這麼多人愛露營",
                        reportTxt: "第一次露營最大的心得感想就是好忙，一到營區把東西從車子拿出來擺定位、接著準備午餐、吃午餐、洗碗整理、休息、小孩放電、準備晚餐食材、煮晚餐、吃晚餐、洗碗整理、洗澡、準備睡覺，起床後準備早餐、吃早餐、洗碗整理、準備午餐、吃午餐、洗碗整理、收裝備、塞裝備、然後離開，一整個好忙好忙，時間一下子就過去了，回家還要繼續曬帳，跟想像中會無聊、時間多到可以放空的露營怎麼不太一樣，但是營區的景色還是好美，難怪這麼多人愛露營。"
                    },
                    {
                        id:2,
                        userPic: '../assets/images/report_avatar_1.png',
                        userName: "TK律師",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P"
                    },
                    {
                        id:3,
                        userPic: '../assets/images/report_avatar_3.png',
                        userName: "小羽",
                        releaseTime: "2022/08/29",
                        reportTitle: "完蛋了心得",
                        reportTxt: "我完蛋了QQ 我的動畫完蛋了"
                    },
                    {
                        id:4,
                        userPic: '../assets/images/report_avatar_4.png',
                        userName: "Esther",
                        releaseTime: "2022/08/29",
                        reportTitle: "活動體驗超棒的",
                        reportTxt: "不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                    {
                        id:5,
                        userPic: '../assets/images/report_avatar_5.png',
                        userName: "蕭董",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                    {
                        id:6,
                        userPic: '../assets/images/report_avatar_6.png',
                        userName: "柏霖老師",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                ],
                messageCount: 5
            }
        },
    }
</script>

<style  lang="scss">
    @import '../assets/scss/style.scss';
    
    .col_card_report{
        display: flex;
        flex-direction: column;
        width: 31%;
        height: 480px;
        margin: 10px;
        padding: 30px;
        border-radius: 10px;
        background: #fff;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .2);
        @include lg(){
            width: 45%;
        }
        @include md(){
            width: 100%;
        }
    }
    .report_user{
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #8A8A8A;
    }
    .user_pic{
        width: 80px;
        border-radius: 50px;
        overflow: hidden;
        margin-right: 20px;
    }
    .report_content{
        flex-grow: 1;
        padding: 20px 0;
    }
    .report_title{
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-align: justify;
    }
    .report_txt{
        color: $color-basic-gray2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        text-align: justify;
    }
    .report_btn{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .inform_icon,
    .message_icon{
        display: inline-block;
        width: 30px;
        margin: 0 8px;
    }
    .message_icon{
        display: flex;
    }
    .message_icon span{
        padding-left: 5px;
        color: #939393;
        font-size: 20px;
        font-weight: 700;
        vertical-align: middle;
    }
</style>