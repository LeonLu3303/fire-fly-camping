<template>
    <div class="col_card_report" v-for="item in cardReport" :key="item.id">
        <div class="report_user">
            <div class="user_pic">
                <!-- <img :src="item.userPic" alt="avatar"> -->
                <!-- <img :src={{item.userPic}} alt=""> -->
                <img src="../assets/images/report/avatar_1.png" alt="">
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
            <div class="inform_icon"><img src="../assets/images/report/report_1.png" alt="report"></div>
            <div class="message_icon"><img src="../assets/images/report/message_1.png" alt="report"></div>
            <h4 class="message_count">{{messageCount}}</h4>
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
                        userPic: '../../src/assets/images/report/avatar_1.png',
                        userName: "1313",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                    {
                        id:2,
                        userPic: '../assets/images/report/avatar_2.png',
                        userName: "TK律師",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                    {
                        id:3,
                        userPic: '../assets/images/report/avatar_3.png',
                        userName: "小羽",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!啊~看錯惹，是你媽媽經過啦:P啊~看錯惹，是你媽媽經過啦:P"
                    },
                    {
                        id:4,
                        userPic: '../assets/images/report/avatar_4.png',
                        userName: "Esthermaru",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                    {
                        id:5,
                        userPic: '../assets/images/report/avatar_5.png',
                        userName: "蕭董",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                    {
                        id:6,
                        userPic: '../assets/images/report/avatar_6.png',
                        userName: "柏霖老師",
                        releaseTime: "2022/08/29",
                        reportTitle: "我剛剛好像看到恐龍",
                        reportTxt: "啊~看錯惹，是你媽媽經過啦:P，不得不說營火叢是露營的最佳選擇。活動體驗真的讚，設備齊全，場地優質!CP值超高!!"
                    },
                ],
                messageCount: 5
            }
        }
    }
</script>

<style  lang="scss">
    @import '../assets/scss/style.scss';
    .col_card_report{
        display: flex;
        flex-direction: column;
        width: 30%;
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
        padding-bottom: 10px;
    }
    .report_txt{
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
        width: 30px;
        margin: 0 8px;
    }
</style>