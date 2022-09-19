<template>
    <!-- banner -->
    <div class="banner">
        <img src="../assets/images/banner_report.png" alt="banner">
    </div>
    <!-- 發布報告 -->
    <ReportPublish/>
    <section class="wrap_card_report">
        <div class="report_container">
            <div class="title_main">
                <h2>報告討論</h2>
            </div>
            <div class="row_card_report">
                <ReportCard/>
            </div>
        </div>
    </section>
</template>

<script>
import ReportPublish from '@/components/ReportPublish.vue';
import ReportCard from '@/components/ReportCard.vue';
export default {
    components: {
        ReportPublish,
        ReportCard,
    },
}
</script>

<style lang="scss">
    // @import '../assets/scss/style.scss';
    section.wrap_card_report{
        margin: auto;
    }
    .report_container{
        margin: 0 10%;
    }
    .title_main{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title_main span{
        width: 40px;
        margin: 0 20px;
    }
    .row_card_report{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>