<template>
    <section class="wrap_service_tent">
        <div class="tent_container">
            <div class="title_main">
                <h2>營帳介紹</h2>
            </div>

            <!-- 營帳 button -->
            <ul class="row_tent_tabs_wrap">
                <li class="tent_tab_group">
                    <div class="tent_tab_title" @click="activeTab = 'ordinary'">
                        <h3>經濟型</h3>
                    </div>
                </li>
                <li class="tent_tab_group">
                    <div class="tent_tab_title" @click="activeTab = 'luxury'">
                        <h3>豪華型</h3>
                    </div>
                </li>
                <li class="tent_tab_group">
                    <div class="tent_tab_title" @click="activeTab = 'feature'">
                        <h3>主題型</h3>
                    </div>
                </li>
            </ul>

            <!-- 營帳祥細介紹 -->
            <!-- 經濟型 -->
            <div class="row_tent_introduce" v-if="activeTab === 'ordinary'">
                <div class="col_tent_swiper">
                    <ServiceOrdinary/>
                </div>
                <div class="col_tent_text">
                    <h3>{{ordinaryTitle}} x 六人 x 四人 x 二人</h3>
                    <h4>設備資訊 : </h4>
                    <p>{{ordinaryEquipment}}</p>
                    <h4>營帳價格 : </h4>
                    <p>{{ordinaryPrice}}</p>
                </div>
            </div>

            <!-- 豪華型 -->
            <div class="row_tent_introduce" v-if="activeTab === 'luxury'">
                <div class="col_tent_swiper">
                    <ServiceLuxury/>
                </div>
                <div class="col_tent_text">
                    <div class="tent_type_text">
                        <h3>{{luxuryTitle}} x 六人 x 四人 x 二人</h3>
                        <h4>設備資訊 : </h4>
                        <p>{{luxuryEquipment}}</p>
                        <h4>營帳價格 : </h4>
                        <p>{{luxuryPrice}}</p>
                    </div>
                </div>
            </div>

            <!-- 主題型 -->
            <div class="row_tent_introduce" v-if="activeTab === 'feature'">
                <div class="col_tent_swiper">
                    <ServiceFeature/>
                </div>
                <div class="col_tent_text">
                    <div class="tent_type_text">
                        <h3>{{featureTitle}} x 六人 x 四人 x 二人</h3>
                        <h4>設備資訊 : </h4>
                        <p>{{featureEquipment}}</p>
                        <h4>營帳價格 : </h4>
                        <p>{{featurePrice}}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import ServiceOrdinary from './ServiceOrdinary.vue';
import ServiceLuxury from './ServiceLuxury.vue';
import ServiceFeature from './ServiceFeature.vue';
export default {
    name: "ServiceFood",
    components: {
        ServiceOrdinary,
        ServiceLuxury,
        ServiceFeature,
    },
    data() {
        return {
            activeTab:'ordinary',
            ordinaryTitle: '經濟型',
            ordinaryEquipment: '充氣床墊、枕被、營燈、電蚊拍、冷暖氣、 熱水壺、炊事工具、防疫保健工具、沐浴用品、插座、共用衛浴',
            ordinaryPrice: '六人 NT$13,200 / 四人 NT$9,200 / 二人 NT$5,200',
            luxuryTitle: '豪華型',
            luxuryEquipment: 'TPU床墊、枕被、營燈、電蚊拍、循環扇、冷暖氣、桌椅、 熱水壺、炊事工具、防疫保健工具、沐浴用品、插座、獨立衛浴',
            luxuryPrice: '六人 NT$19,300 / 四人 NT$12,300 / 二人 NT$8,300',
            featureTitle: '主題型',
            featureEquipment: 'TPU床墊、枕被、營燈、電蚊拍、冷暖氣、桌椅、 熱水壺炊事工具、防疫保健工具、沐浴用品、插座、共用衛浴',
            featurePrice: '六人 NT$21,300 / 四人 NT$13,700 / 二人 NT$9,100',
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/style.scss';

.wrap_service_tent{
    padding: 150px 0;
    background: $color-main-yellow;
}
.tent_container{
    width: 80%;
    max-width: 1296px;
    margin: 0 auto;
    @include lg(){
        width: 90%;
    }
    @include md(){
        width: 95%;
    }
}
.row_tent_wrap{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

// 營帳 button
.row_tent_tabs_wrap{
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
.tent_tab_group{
    padding: 15px;
}
.tent_tab_title{
    margin: 0 auto;
    padding: 10px;
    background: $color-basic-White;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    transform: scale(1,1);transition: all .5s ease-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
}
.tent_tab_title h3{
    color: $color-str-green;
}
//營帳祥細介紹
.row_tent_introduce{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    margin: 20px 0;
    background: $color-basic-White;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
}
.col_tent_swiper{
    width: 50%;
    padding: 20px;
    @include lg(){
        width: 50%;
    }
    @include tb(){
        width: 100%;
    }
}
.col_tent_text{
    width: 50%;
    padding: 20px;
    @include lg(){
        width: 50%;
    }
    @include tb(){
        width: 100%;
    }
}
.col_tent_text h3{
    color: $color-str-green;
    padding: 0 0 20px;
    border-bottom: 1px solid $color-basic-gray1;
}
.col_tent_text h4:nth-child(2){
    color: $color-basic-gray2;
    font-size: $txt_p;
    padding: 20px 0 10px;
}
.col_tent_text p:nth-child(3){
    padding: 0 0 30px;
    border-bottom: 1px solid $color-basic-gray1;
}
.col_tent_text h4:nth-child(4){
    color: $color-basic-gray2;
    font-size: $txt_p;
    padding: 20px 0 10px;
}
.col_tent_text p:nth-child(5){
    color: $color-basic-gray3;
    font-size: $title_h4;
    font-weight: 700;
}
</style>