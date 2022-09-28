<template>
    <MainHeader/>
    <!-- banner -->
    <div class="banner">
        <img src="@/assets/images/main/banner_report.png" alt="banner">
    </div>
    <!-- 發布報告 -->
    <ReportPublish/>
    <!-- 報告討論 -->
    <ReportCard/>
    <ReportLightBox/>
    <MainFooter/>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import ReportPublish from '@/components/ReportPublish.vue';
import ReportCard from '@/components/ReportCard.vue';
import ReportLightBox from '@/components/ReportLightBox.vue';

export default {
    components: {
        MainHeader,
        MainFooter,
        ReportPublish,
        ReportCard,
        ReportLightBox
    },
}
</script>



<style lang="scss" scoped>
    @import '../assets/scss/style.scss';
</style>