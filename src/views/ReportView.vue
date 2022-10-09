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
    <MainFooter/>
</template>

<script>
import ReportPublish from '@/components/ReportPublish.vue';
import ReportCard from '@/components/ReportCard.vue';
import ReportLightBox from '@/components/ReportLightBox.vue';

export default {
    components: {
        ReportPublish,
        ReportCard,
        ReportLightBox,
    },
    methods:{
        scrollToTop(){
        window.scrollTo(0,0)
        },
    },
    mounted(){
    this.scrollToTop()
    }
}
</script>



<style lang="scss" scoped>
    @import '../assets/scss/style.scss';
</style>