<template>
    <section class="wrap_report_publish">
        <div class="report_publish_container">
            <div class="title_main">
                <h2>發佈報告</h2>
            </div>
            <div class="row_report_write">

                <div class="col_postcard">
                    <div class="postcard_release">
                        <h3 class="postcard_title_area">{{enterTitle}}</h3>
                        <p class="postcard_text_area">{{enterText}}</p>
                    </div>
                    <div class="postcard_member_data">
                        <div class="postcard_member_pic">
                            <img src="../assets/images/report_avatar_1.png" alt="avatar">
                        </div>
                        <h4 class="postcard_member_name">{{memberName}}</h4>
                        <div class="release_time">
                            <p>{{releaseTime}}</p>
                        </div>
                    </div>
                    <div class="bg_postcard">
                        <!-- <img src="@/assets/images" alt=""> -->
                    </div>
                </div>
                
                <!-- <div class="col_postcard">
                    <div class="postcard_release">
                        <h3 class="postcard_title_area">{{enterTitle}}</h3>
                        <p class="postcard_text_area">{{enterText}}</p>
                    </div>
                    <div class="postcard_member_data">
                        <div class="postcard_member_pic">
                            <img src="../assets/images/report_avatar_1.png" alt="avatar">
                        </div>
                        <h4 class="postcard_member_name">{{memberName}}</h4>
                        <div class="release_time">
                            <p>{{releaseTime}}</p>
                        </div>
                    </div>
                </div> -->

                <form class="col_write_text">
                    <input class="enter_title" id="enter_title" type="text" maxlength="15" v-model="enterTitle">
                    <textarea class="enter_text" id="enter_text" name="enter_text" type="text" maxlength="300" v-model="enterText"></textarea>
                    <div class="confirm_choose_contain">
                        <button class="btn_confirm" id="publish_report" href="#">發佈報告</button>
                        <select class="btn_bg_choose" name="bg_select" id="bg_select">
                            <option class="bg_choose" value="1">背景選擇</option>
                            <option class="bg_choose" value="2">叢林歷險</option>
                            <option class="bg_choose" value="3">冰雪奇緣</option>
                            <option class="bg_choose" value="4">荒野峽谷</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ReportPublish",
    data() {
        return {
            enterTitle: "請輸入標題(15字以內)",
            enterText: "請輸入內文(300字以內)",
            memberName: "會員名稱",
            releaseTime: "2022/09/22",
        }
    }
}

</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
    
    .wrap_report_publish{
        padding: 150px 0;
        background: $color-basic-White;
    }
    .report_publish_container{
        margin: 0 10%;
        @include lg(){
            margin: 0 5%;
        }
        @include tb(){
            margin: 0 5%;
        }
        @include md(){
            margin: 0 2%;
        }
    }
    .row_report_write{
        display: flex;
        flex-wrap: wrap;
    }
    .row_report_write .col_postcard{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 72%;
        height: 540px;
        // background : url(../assets/images/report_jungle_p.png), $color-main-yellow;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
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
    .postcard_title_area{
        padding: 0 0 20px;
        color: $color-basic-gray3;
    }
    .postcard_release{
        width: 60%;
    }
    .postcard_member_data{
        width: 18%;
        text-align: center;
    }
    .postcard_member_data .postcard_member_name{
        color: $color-basic-gray3;
    }
    .col_write_text{
        width: 24%;
        // height: 100%;
        @include lg(){
            width: 80%;
        }
        @include tb(){
            width: 100%;
        }
        @include md(){
            width: 100%;
        }
    }
    .postcard_member_pic{
        width: 80%;
        border-radius: 100%;
        overflow: hidden;
        margin: 0 auto 10px;
    }
    .enter_title{
        width: 100%;
        height: 50px;
        letter-spacing: 1px;
        border-radius: 5px;
        padding: 5px 10px;
        margin-bottom: 20px;
        border: 1px solid $color-main-green;
    }
    .enter_text{
        width: 100%;
        height: 70%;
        letter-spacing: 1px;
        border-radius: 5px;
        padding: 10px 10px;
        margin-bottom: 20px;
        border: 1px solid $color-main-green;
        resize: none;
    }
    .confirm_choose_contain{
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
    .confirm_choose_contain .btn_confirm{
        margin-right: 20px;
    }
    .btn_bg_choose{
        font-size: $txt_btn;
        font-weight: 700;
        letter-spacing: 1px;
        border-radius: 5px;
        padding: 5px 10px;
        border: 2px solid $color-str-green;
        color: $color-str-green;
        background: $color-basic-White;
    }
</style>