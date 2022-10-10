<template>
    <footer class="footer_about">
        <div class="footer_cotainer">
            <div class="footer_row">
                <div class="footer_info">
                    <div class="footer_info_navigation">
                        <router-link to="/booking">營區預訂</router-link>｜
                        <router-link to="/Activity">營區導覽</router-link>｜
                        <router-link to="/">營區服務</router-link>｜
                        <router-link to="/report">營火報告</router-link>
                    </div>    
                    <div class="footer_info_navigation">
                        <router-link to="/">最新消息</router-link>｜
                        <router-link to="/Shopping">營火商城</router-link>｜
                        <router-link to="/">登入註冊</router-link>｜
                        <router-link to="/Member">會員中心</router-link>
                    </div>
                    <hr>
                    <div class="footer_info_social_media">
                        <p class="media_title">官方社群</p>
                        <a class="media_photo" href="#"><img src="@/assets/images/main/main_icon_instagram.png" alt="營火叢instagrm"></a>
                        <a class="media_photo" href="#"><img src="@/assets/images/main/main_icon_twitter.png" alt="營火叢twitter"></a>
                        <a class="media_photo" href="#"><img src="@/assets/images/main/main_icon_youtube.png" alt="營火叢youtube"></a>
                        <a class="media_photo" href="#"><img src="@/assets/images/main/main_icon_facebook.png" alt="營火叢facebook"></a>
                    </div>
                </div>
                <div class="footer_about_cotainer">
                    <h2 class="about_title">關於我們</h2>
                    <p class="about_txt">
                    營火叢 FireFly Campsite 成立於2022年<br>
                    由緯育TibaMe CGD102_G1前端班所建置營運<br>
                    提供三大洲特色虛擬島營區預訂、主題活動規劃等服務<br>
                    營火叢為目前全網最虛擬、最時尚的露營預訂入口網站
                    </p>
                    <div class="footer_logo">
                    <img src="@/assets/images/main/main_logo_green.png" alt="營火叢 Firefly campsite LOGO">
                    </div>
                </div>
            </div>
            <div class="copyright_group">
                <p class="copyright">© 2022 Firefly campsite All Rights Reserved.</p>
                <hr>
                <p class="statement">
                本網站為緯育TibaMe_前端設計工程師班第77期學員專題成果作品，本平台僅供學習、展示之用。<br>
                若有抵觸有關著作權，或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。<br>
                若有侵權疑慮，您可以私訊<a href="https://www.facebook.com/TibaMe/">［緯育TibaMe］</a>，後續會由專人協助處理。</p>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
</style>