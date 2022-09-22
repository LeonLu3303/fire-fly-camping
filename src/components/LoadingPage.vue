<template>
    <section>
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