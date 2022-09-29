<template>
    <MainHeader/>
    <!-- banner -->
    <div class="banner">
        <img src="@/assets/images/main/banner_report.png" alt="banner">
    </div>
    <!-- 報告留言 -->
    <section class="wrap_report_message">
        <div class="message_container">
            <div class="title_main">
                <h2>報告留言</h2>
            </div>
            <!-- 返回報告 -->
            <router-link class="Report_link_path" to="/Report">
                <div class="back_Report_page">
                    <img class="back_Report_icon" src="@/assets/images/booking/booking_arrow_prev.png" alt="">
                    <span>返回報告</span>
                </div>
            </router-link>
            <!-- 明信片留言 -->
            <ReportDiscuss/>

            <!-- 會員個人留言欄 -->
            <div class="message_member_container">
                <form class="message_personal" action="">
                    <textarea class="personal_write" type="text" maxlength="300" placeholder="請寫入留言(300字以內)"></textarea>
                    <button class="btn_confirm" id="publish_message" href="#">留言</button>
                </form>
            </div>

            <!-- 其他會員留言區 -->
            <div class="other_message_wrap">
                <div class="row_other_member" v-for="item in otherMsg" :key="item.id">
                    <div class="col_other_data">
                        <div class="member_pic">
                            <img :src="require(`@/assets/images/report/report_avatar_${item.id}.png`)" alt="avatar">
                        </div>
                        <h4 class="member_name">{{item.otherMemName}}</h4>
                    </div>
                    <!-- 發佈時間 檢舉 -->
                    <div class="col_other_message">
                        <div class="other_message_content">
                            <p class="other_write">{{item.otherMemTxt}}</p>
                            <div class="message_time_inform">
                                <p class="message_time">{{item.otherMemTime}}</p>
                                <ReportLightBox/>
                            </div>
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
import ReportDiscuss from '../components/ReportDiscuss.vue';
import ReportLightBox from '../components/ReportLightBox.vue';

export default {
    name: "ReportMessage",
    components: {
        MainHeader,
        MainFooter,
        ReportDiscuss,
        ReportLightBox,
    },
    data() {
        return {
            enterTitle : "完蛋了心得",
            enterText : "我完蛋了QQ 我的動畫完蛋了",
            memberName: "小羽",
            otherMsg: [
                    {
                        id:1,
                        otherMemPic: '@/assets/images/report/report_avatar_1.png',
                        otherMemName: "1313",
                        otherMemTime: "2022/09/21",
                        otherMemTxt: "沒關係我也是，沒關係我也是XD沒關係我也是XD沒關係我也是XD沒關係我也是XD沒關係我也是XD沒關係我也是XD沒關係我也是XD沒關係我也是XD"
                    },
                    {
                        id:2,
                        otherMemPic: '@/assets/images/report/report_avatar_2.png',
                        otherMemName: "TK律師",
                        otherMemTime: "2022/09/21",
                        otherMemTxt: "我剛剛好像看到恐龍"
                    },
                    {
                        id:3,
                        otherMemPic: '@/assets/images/report/report_avatar_3.png',
                        otherMemName: "Esther",
                        otherMemTime: "2022/09/21",
                        otherMemTxt: "活動體驗超棒的"
                    },
                ]
        }
    },
    methods:{
        scrollToTop(){
        window.scrollTo(0,0)
        },
    },
    mounted(){
    this.scrollToTop()
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.wrap_report_message{
    padding: 150px 0;
    background: $color-basic-White;
}
.message_container{
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
//返回報告
.Report_link_path{
    padding-bottom: 30px;
}
.back_Report_page{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span{
        color: $color-str-green;
        font-size: $title_h4;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .back_Report_icon{
        width: 40px;
        padding-right: 10px;
    }
}
//會員個人留言欄
.message_member_container{
    width: 70%;
    padding: 20px;
    margin: 0 auto 20px;
    border-radius: 10px;
    background: $color-main-yellow;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    @include lg(){
        width: 80%;
    }
    @include tb(){
        width: 100%;
    }
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
.message_personal{
text-align: end;
}
//其他會員留言
.other_message_wrap{
    width: 70%;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background: $color-main-yellow;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    @include lg(){
        width: 80%;
    }
    @include tb(){
        width: 100%;
    }
}
.row_other_member{
    padding: 16px;
    border-radius: 10px;
    background: $color-basic-White;
    margin: 0 0 20px;
}
.col_other_data{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 14px;
}
.col_other_data .member_pic{
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    margin-right: 10px;
}
.other_message_content .other_write{
    margin-bottom: 20px;
    color: $color-basic-gray1;
    text-align: justify;
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