<template>
    <MainHeader/>
    <!-- banner -->
    <div class="banner">
        <img src="@/assets/images/main/banner_report.png" alt="banner">
    </div>
    <LoginLightBox/>
    <!-- 發布報告 -->
    <ReportPublish/>
    <!-- 報告討論 -->
    <ReportCard/>
    <MainFooter/>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainFooter from '../components/MainFooter.vue';
import ReportPublish from '@/components/ReportPublish.vue';
import ReportCard from '@/components/ReportCard.vue';
import ReportLightBox from '@/components/ReportLightBox.vue';
import LoginLightBox from '@/components/LoginLightBox.vue';
import ReportPaginate from '@/components/ReportPaginate.vue';

export default {
    components: {
        MainHeader,
        MainFooter,
        ReportPublish,
        ReportCard,
        ReportLightBox,
        LoginLightBox,
        ReportPaginate,
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