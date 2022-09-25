<template>
    <section class="loadingpage">
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>

        <div class="cursor"></div>

        <div class="loading_container">
            <div class="photo"><img src="@/assets/images/main/main_logo_white.png" alt="營火叢LOGO"></div>
            <div class="entrance">
                <router-link to="/HomeView">
                    <div class="circle ">
                        <p class="front">前台</p>
                    </div>
                </router-link>
                <router-link to="/HomeView">
                    <div class="circle ">
                        <p class="back">後台</p>
                    </div>
                </router-link>
            </div>
            <div class="copyright">
                本網站為緯育TibaMe_前端設計工程師班第77期學員專題成果作品，本平台僅供學習、展示之用。<br>
                若有抵觸有關著作權，或有第三人主張侵害智慧財產權等情事，均由學員負法律上責任，緯育公司概不負責。<br>
                若有侵權疑慮，您可以私訊［緯育TibaMe］，後續會由專人協助處理。
            </div>
       </div>
    </section>
</template>

<script>

    export default {
        mounted() {
            const cursor = document.querySelector(".cursor");
            var timeout;

            //follow cursor on mousemove
            document.addEventListener("mousemove", (e) => {
                let x = e.pageX;
                let y = e.pageY;

                cursor.style.top = y + "px";
                cursor.style.left = x + "px";
                cursor.style.display = "block";

                //cursor effects when mouse stopped
                function mouseStopped() {
                    cursor.style.display = "none";
                }
                clearTimeout(timeout);
                timeout = setTimeout(mouseStopped, 1000);
            });

            //cursor effects when mouseout
            document.addEventListener("mouseout", () => {
                cursor.style.display = "none";
            });
        },
    }

    
</script>

<style lang="scss" scoped>
    @import '../assets/scss/style.scss';
    @import '../assets/scss/component/LoadingPage';
</style>