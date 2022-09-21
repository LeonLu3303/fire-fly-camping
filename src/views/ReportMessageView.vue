<template>
    <MainHeader/>
    <!-- banner -->
    <div class="banner">
        <img src="../assets/images/banner_report.png" alt="banner">
    </div>
    <!-- 報告留言 -->
    <section class="wrap_report_publish">
        <div class="report_container">
            <div class="title_main">
                <h2>報告留言</h2>
            </div>
            <div class="row_report_write">
                <!-- 明信片 -->
                <div class="col_postcard">
                    <div class="postcard_release">
                        <h3 class="postcard_title_area">{{enterTitle}}</h3>
                        <p class="postcard_text_area">{{enterText}}</p>
                    </div>
                    <div class="postcard_member_data">
                        <div class="postcard_member_pic">
                            <img src="../assets/images/report_avatar_1.png" alt="avatar">
                        </div>
                        <h3 class="postcard_member_name">{{memberName}}</h3>
                    </div>
                </div>
            </div>
        </div>

        <!-- 會員個人留言欄 -->
        <div class="message_member_container">
            <form class="message_personal" action="">
                <textarea class="personal_write" type="text" maxlength="300" placeholder="請寫入留言(300字以內)"></textarea>
                <button class="btn_confirm" id="publish_message" href="#">留言</button>
            </form>
        </div>

        <!-- 其他會員留言 -->
        <div class="other_message_wrap">
            <div class="row_other_member" v-for="item in otherMsg" :key="item.id">
                <div class="col_other_data">
                    <div class="member_pic">
                        <img :src="require(`../assets/images/report_avatar_${item.id}.png`)" alt="avatar">
                    </div>
                    <h4 class="member_name">{{item.otherMemName}}</h4>
                </div>

                <div class="col_other_message">
                    <div class="other_message_content">
                        <div class="other_write">{{item.otherMemTxt}}</div>
                        <div class="message_time_inform">
                            <p class="message_time">{{item.otherMemTime}}</p>
                            <a class="message_inform_icon"><img src="../assets/images/report_inform_1.png" alt="report"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <MainFooter/>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';

export default{
    name: "ReportMessage",
    components: {
        MainHeader,
        MainFooter,
    },
    data() {
        return {
            enterTitle : "完蛋了心得",
            enterText : "我完蛋了QQ 我的動畫完蛋了",
            memberName: "小羽",
            otherMsg: [
                    {
                        id:1,
                        otherMemPic: '../assets/images/report_avatar_1.png',
                        otherMemName: "1313",
                        otherMemTime: "2022/09/21",
                        otherMemTxt: "沒關係我也是XD"
                    },
                    {
                        id:2,
                        otherMemPic: '../assets/images/report_avatar_2.png',
                        otherMemName: "TK律師",
                        otherMemTime: "2022/09/21",
                        otherMemTxt: "我剛剛好像看到恐龍"
                    },
                    {
                        id:3,
                        otherMemPic: '../assets/images/report_avatar_3.png',
                        otherMemName: "Esther",
                        otherMemTime: "2022/09/21",
                        otherMemTxt: "活動體驗超棒的"
                    },
                ]
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
    .wrap_report_publish{
        width: 100%;
        padding: 150px 0;
    }
    .report_container{
        margin: 0 10%;
    }
    .row_report_write{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    //明信片
    .col_postcard{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 65%;
        height: 460px;
        background : url(../assets/images/report_jungle_p.png), $color-main-yellow;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        padding: 30px;
        margin: 0 0 20px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
        @include lg(){
            width: 80%;
            height: 440px;
            margin: 0 0 20px;
        }
        @include tb(){
            width: 100%;
            height: 440px;
        }
        @include md(){
            width: 100%;
            height: 400px;
        }
    }
    //明信片文章區域
    .postcard_release{
        width: 60%;
    }
    .postcard_title_area{
        padding: 0 0 20px;
        color: $color-basic-gray3;
    }
    //明信片會員資料
    .postcard_member_data{
        width: 18%;
        text-align: center;
    }
    .postcard_member_data .postcard_member_name{
        color: $color-basic-gray3;
    }
    //會員個人留言欄
    .message_member_container{
        margin: 0 auto;
        width: 65%;
        background: $color-main-yellow;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        border: 2px solid $color-aid-green1;
    }
    .personal_write{
        width: 100%;
        height: 140px;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid $color-main-green;
        resize: none;
    }
    //其他會員留言
    .other_message_wrap{
        margin: 0 auto;
        width: 65%;
        padding: 20px;
        border-radius: 10px;
        background: $color-main-yellow;
    }
    .row_other_member{
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }
    .col_other_data{
        width: 10%;
        text-align: center;
        margin-right: 50px;
    }
    // .col_other_data .member_name{

    // }
    .col_other_data .member_pic{
        border-radius: 50px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .col_other_message{
        margin: 0 auto;
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        background: $color-basic-White;
    }
    .other_message_content .other_write{
        margin-bottom: 20px;
    }
    .message_time_inform{
        display: flex;
        justify-content: flex-end;
    }
    .message_time{
        padding-right: 20px;
        color: $color-basic-gray1;
    }
    .message_inform_icon{
        width: 28px;

    }
</style>