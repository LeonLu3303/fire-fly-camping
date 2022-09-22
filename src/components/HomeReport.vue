<template>
    <!-- 報告討論 -->
    <section class="wrap_home_report">
        <div class="report_container">
            <div class="title_main">
                <h2>報告討論</h2>
            </div>
            <!-- 報告卡片 -->
            <div class="home_card_report">
                <ReportCard/>
            </div>
            <div class="btn_report_spacing">
                <router-link to ="/Report" class="btn_page_link">了解更多</router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import ReportCard from '@/components/ReportCard.vue';
    
    export default{
        components: {
            ReportCard,
        },
    }
</script>

<style lang="scss">
    @import '../assets/scss/style.scss';

    .wrap_home_report{
        background: $color-aid-blue2;
        padding: 150px 0;
    }
    .wrap_home_report .report_container .title_main h2{
        color: $color-basic-White;
    }
    .home_card_report{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 0 60px;
    }
    .btn_report_spacing .btn_page_link {
        margin: 0 auto;
    }
</style>