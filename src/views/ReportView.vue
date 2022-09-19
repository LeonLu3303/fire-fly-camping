<template>
    <PageBanner/>
    <ReportPublish/>
    <section class="wrap_card_report">
        <div class="container">
            <div class="title_main">
                <h2>{{titleMain}}</h2>
            </div>
            <div class="row_card_report">
                <ReportCard/>
            </div>
        </div>
    </section>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';
import ReportPublish from '@/components/ReportPublish.vue';
import ReportCard from '@/components/ReportCard.vue';
export default {
    components: {
        PageBanner,
        ReportPublish,
        ReportCard,
    },
    data(){
        return{
            titleMain: "報告討論"
        }
    }
}
</script>

<style lang="scss">
    // @import '../assets/scss/style.scss';
    section.wrap_card_report{
        margin: auto;
    }
    .container{
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