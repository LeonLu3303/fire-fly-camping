<template>
    <footer>
        <div class="footer_cotainer">
            <div class="row">
                <div class="footer_info">
                    <div class="footer_info_attention">
                        <router-link to="">預訂須知</router-link>｜
                        <router-link to="">使用者條款</router-link>｜
                        <router-link to="">隱私權政策</router-link>
                    </div>
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
</style>