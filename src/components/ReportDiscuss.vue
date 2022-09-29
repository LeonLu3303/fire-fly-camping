<template>
    <div class="row_report_write">
        <!-- 明信片 -->
        <div class="col_postcard">
            <div class="postcard_group">
                <div class="postcard_release">

                    <h3 class="postcard_title_area">{{enterTitle}}</h3>
                    <p class="postcard_text_area">{{enterText}}</p>

                    <!-- 檢舉 留言 button -->
                    <div class="report_btn">
                        <ReportLightBox/>
                        <div class="message_icon">
                            <img src="@/assets/images/report/report_msge_1.png" alt="report">
                            <p class="message_count">{{messageCount}}</p>
                        </div>
                    </div>

                </div>

                <!-- 頭像 會員 -->
                <div class="postcard_member_data">
                    <div class="member_content">
                        <div class="postcard_member_pic">
                            <img src="@/assets/images/report/report_avatar_1.png" alt="avatar">
                        </div>
                        <div class="postcard_name_time">
                            <h4 class="postcard_member_name">{{memberName}}</h4>
                            <p class="postcard_release_time">{{releaseTime}}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 明信片背景 -->
            <div class="postcard_bg">
                <img :src="require(`@/assets/images/report/report_postcard_${selectBg}.jpg`)" alt="postcard">
            </div>
        </div>
    </div>
</template>

<script>
import ReportLightBox from '../components/ReportLightBox.vue';

export default {
    name: "ReportDiscuss",
    components: {
        ReportLightBox,
    },
    data() {
        return {
            enterTitle: "請輸入標題(15字以內)",
            enterText: "請輸入內文(300字以內)",
            memberPic: '@/assets/images/report/report_avatar_1.png',
            memberName: "會員名稱",
            releaseTime: "2022/09/22",
            messageCount: 7,
            selectBg: '1',
            bgPic: [
                {
                    val: '1',
                    theme:'叢林歷險',
                    bg: '@/assets/images/report/report_postcard_1.jpg'
                },
                {
                    val: '2',
                    theme:'冰雪奇緣',
                    bg: '@/assets/images/report/report_postcard_2.jpg'
                },
                {
                    val: '3',
                    theme:'荒野峽谷',
                    bg: '@/assets/images/report/report_postcard_3.jpg'
                },
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

// .wrap_report_publish{
//     padding: 150px 0;
//     background: $color-basic-White;
// }
// .report_publish_container{
//     width: 80%;
//     max-width: 1296px;
//     margin: 0 auto;
//     @include lg(){
//         width: 90%;
//     }
//     @include md(){
//         width: 95%;
//     }
// }
.row_report_write{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

// 明信片
.col_postcard{
    position: relative;
    width: 70%;
    margin-bottom: 20px;
    @include lg(){
        width: 80%;
    }
    @include tb(){
        width: 100%;
    }
}
.postcard_group{
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    @include md(){
        flex-direction: column-reverse;
    }
}
.postcard_title_area{
    padding: 0 0 20px;
    color: $color-basic-gray3;
}
.postcard_text_area{
    color: $color-basic-gray2;
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
        color: #939393;
        font-size: 20px;
        font-weight: 700;
    }
}
.postcard_bg{
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    overflow: hidden;
    img{
        height: 100%;
        object-fit: cover;
    }
    @include md(){
        height: 600px;
    }
}
//文字
.postcard_release{
    width: 70%;
    padding: 20px;
    @include md(){
        width: 100%;
        height: 80%;
    }
}
// 頭像會員
.postcard_member_data{
    width: 30%;
    text-align: center;
    border-left: 2px solid $color-basic-gray1;
    @include md(){
        width: 100%;
        height: 20%;
        border-left: none;
        border-bottom: 2px solid $color-basic-gray1;
    }
}
.member_content{
    margin: 0 40px;
    @include md(){
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0;
        justify-content: flex-start;
        align-items: center;
    }
}
.postcard_member_pic{
    width: 80%;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 10px;
    @include md(){
        width: 80px;
        height: 80px;
        margin: 0 20px 0 0;
    }
}
//會員名字 時間 0929
.postcard_member_name{
    margin-bottom: 5px;
}
.postcard_release_time{
    color: $color-basic-gray2;
}
</style>