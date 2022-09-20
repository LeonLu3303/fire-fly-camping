<template>
    <footer>
        <div class="footer_cotainer">
            <div class="row">
                <div class="footer_info">
                    <div class="footer_info_attention">
                        <a href="#">預訂須知</a>｜
                        <a href="#">使用者條款</a>｜
                        <a href="#">隱私權政策</a>
                    </div>
                    <div class="footer_info_navigation">
                        <a href="#">營區預訂</a>｜
                        <a href="#">營區導覽</a>｜
                        <a href="#">營區服務</a>｜
                        <a href="#">營火報告</a>
                    </div>    
                    <div class="footer_info_navigation">
                        <a href="#">最新消息</a>｜
                        <a href="#">營火商城</a>｜
                        <a href="#">登入註冊</a>｜
                        <a href="#">會員中心</a>
                    </div>
                    <hr>
                    <div class="footer_info_social_media">
                        <p class="media_title">官方社群</p>
                        <a class="media_photo" href="#"><img src="../assets/images/main_icon_instagram.png" alt="營火叢instagrm"></a>
                        <a class="media_photo" href="#"><img src="../assets/images/main_icon_twitter.png" alt="營火叢twitter"></a>
                        <a class="media_photo" href="#"><img src="../assets/images/main_icon_youtube.png" alt="營火叢youtube"></a>
                        <a class="media_photo" href="#"><img src="../assets/images/main_icon_facebook.png" alt="營火叢facebook"></a>
                    </div>
                </div>
                <div class="footer_about_cotainer">
                    <h2 class="about_title">關於我們</h2>
                    <p class="about_txt">
                    營火叢 FireFly Campsitet 成立於2022年<br>
                    由緯育TibaMe CGD102_G1前端班所建置營運<br>
                    提供三大洲特色虛擬島營區預訂、主題活動規劃等服務<br>
                    營火叢為目前全網最虛擬、最時尚的露營預訂入口網站
                    </p>
                    <div class="footer_logo">
                    <img src="../assets/images/main_logo_gren.png" alt="營火叢 Firefly campsite LOGO">
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>© 2022 Firefly campsite All Rights Reserved.</p>
                <p>本網站僅供專題報告使用，並無實際商業用途，若覺得有侵權疑慮，請聯絡TibaMe，將有專人為您服務！</p>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss">
    @import '../assets/scss/style.scss';

    footer{
        width: 100%;
        background-color: #4D8084;
    }
    .footer_cotainer{
        padding: 60px 10%;
    }
    .row{
        display: flex;
        justify-content: space-between;
    }
    .footer_info{
        margin: auto 0;
    }
    .footer_info_attention, .footer_info_navigation, .footer_info_social_media, .media_photo{
        display: flex;
    }
    .footer_info_attention{
        padding-bottom: 50px;
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
    }
    .footer_info_navigation{
        padding-bottom: 20px;
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
    }
    a{
        color: #FFFFFF;
    }
    .footer_info_social_media{
        padding-top: 20px;
        justify-content: space-between;
        align-items: center;
    }
    .media_photo{
        width: 48px;
        height: 48px;
    }
    .media_title{
        font-size: 24px;
        font-weight: 600;
        color: #FFFFFF;
    }
    .footer_about_cotainer{
        margin: auto 0;
        padding: 50px 30px;
        background-color: #FFFFFF;
        border-radius: 10px;
    }
    .about_title{
        text-align: center;
        color: #4D8084;
    }
    .about_txt{
        padding: 20px 0;
        text-align: center;
        font-size: 13px;
        font-weight: 600;
        color:#454545;
    }
    .footer_logo{
        width: 100px;
        height: 100px;
        margin: 0 auto;
    }
    .copyright{
        padding-top: 50px;
        font-size: 12px;
        text-align: center;
        color: #FFFFFF;
    }
</style>