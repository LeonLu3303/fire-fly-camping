<template>
    <div class="page_banner">
        <h1 class="banner_title">{{pageTitle}}</h1>
    </div>
</template>

<script>
    export default {
        name: "PageBanner",
        data() {
            return {
                pageTitle:"營火報告"
            }
        }
    }
</script>

<style long="scss">
    /* @import '../assets/scss/style.scss'; */
    .page_banner{
        width: 100%;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: url(../assets/images/page_banner_lg.jpg) no-repeat center bottom;
        background-size: cover;
    }
</style>