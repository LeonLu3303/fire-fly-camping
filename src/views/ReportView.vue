<template>
    <!-- banner -->
    <div class="banner">
        <img src="../assets/images/banner_report.png" alt="banner">
    </div>
    <!-- 發布報告 -->
    <ReportPublish/>
    <!-- 報告討論 -->
    <section class="wrap_card_report">
        <div class="report_container">
            <div class="title_main">
                <h2>報告討論</h2>
            </div>
            <!-- 最新熱門btn -->
            <div class="report_new_hot">
                <select class="new_hot_choose">
                    <option class="btn_report_new" value="1">最新報告</option>
                    <option class="btn_report_new" value="2">熱門報告</option>
                </select>
            </div>
            <!-- 報告卡片 -->
            <div class="row_card_report">
                <ReportCard/>
                <div class="report_pagination">
                    <a-pagination v-model:current="current" :total="100" />
                </div>
                <!-- <ReportLightBox/> -->
            </div>
        </div>
    </section>
</template>

<script>
import ReportPublish from '@/components/ReportPublish.vue';
import ReportCard from '@/components/ReportCard.vue';
// import ReportLightBox from '@/components/ReportLightBox.vue';

export default{
    components: {
        ReportPublish,
        ReportCard,
        // ReportLightBox
    },
}
</script>



<style lang="scss">
    @import '../assets/scss/style.scss';

    .wrap_card_report{
        margin: auto;
        padding: 150px 0;
        background: $color-main-yellow;
    }
    .report_container{
        margin: 0 10%;
    }

    //最新 熱門 btn
    .report_new_hot{
        display: flex;
        justify-content: flex-end;
        padding: 0 30px 30px;
    }
    .new_hot_choose{
        width: 120px;
        height: 40px;
        font-size: $txt_btn;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 40px;
        text-align: center;
        vertical-align: middle;
        border-radius: 10px;
        color: $color-str-green;
        background: $color-basic-White;
        border: 2px solid $color-str-green;
    }
    //卡片
    .row_card_report{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>