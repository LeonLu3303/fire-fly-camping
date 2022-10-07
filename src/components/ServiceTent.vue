<template>
    <section class="wrap_service_tent">
        <div class="tent_container">
            <div class="title_main">
                <h2>營帳介紹</h2>
            </div>

            <!-- 營帳 button -->
            <ul class="row_tent_tabs_wrap">
                <li class="tent_tab_group">
                    <div class="tent_tab_title" @click="activeTab = 'ordinary'"
                    :class="{tab_active:activeTab === 'ordinary'}">
                        經濟型
                    </div>
                </li>
                <li class="tent_tab_group">
                    <div class="tent_tab_title" @click="activeTab = 'luxury'"
                    :class="{tab_active:activeTab === 'luxury'}">
                        豪華型
                    </div>
                </li>
                <li class="tent_tab_group">
                    <div class="tent_tab_title" @click="activeTab = 'feature'"
                    :class="{tab_active:activeTab === 'feature'}">
                        主題型
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
                    <h3>{{ordinaryTitle}} <span>六人 x 四人 x 二人</span> </h3>
                    <h4>設備資訊 : </h4>
                    <p>{{ordinaryEquipment}}</p>
                    <h4>營帳價格 : </h4>
                    <p>{{ordinaryPrice}}</p>
                </div>
            </div>

            <!-- 豪華型 -->
            <div class="row_tent_introduce" v-else-if="activeTab === 'luxury'">
                <div class="col_tent_swiper">
                    <ServiceLuxury/>
                </div>
                <div class="col_tent_text">
                    <div class="tent_type_text">
                        <h3>{{luxuryTitle}} <span>六人 x 四人 x 二人</span> </h3>
                        <h4>設備資訊 : </h4>
                        <p>{{luxuryEquipment}}</p>
                        <h4>營帳價格 : </h4>
                        <p>{{luxuryPrice}}</p>
                    </div>
                </div>
            </div>

            <!-- 主題型 -->
            <div class="row_tent_introduce" v-else>
                <div class="col_tent_swiper">
                    <ServiceFeature/>
                </div>
                <div class="col_tent_text">
                    <div class="tent_type_text">
                        <h3>{{featureTitle}} <span>六人 x 四人 x 二人</span> </h3>
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

<style lang="scss" scoped>
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
    align-items: center;
    margin: 0 auto;
}
.tent_tab_group{
    border: 1px solid $color-str-green;
    overflow: hidden;
    background: $color-str-green;
    &:nth-child(1){
        border-radius: 5px 0 0 5px ;
    }
    &:nth-child(3){
        border-radius: 0 5px 5px 0;
    }
}
.tent_tab_title{
    font-size: $title_h3;
    font-weight: 700;
    letter-spacing: 2px;
    height: 100%;
    margin: 0 auto;
    padding: 15px 50px;
    color: $color-str-green;
    background: $color-basic-White;
    border: none;
    cursor: pointer;
    @include lg(){
        padding: 15px 50px;
    }
    @include tb(){
        padding: 15px 30px;
    }
    @include tb(){
        font-size: $title_h4;
        padding: 15px 20px;
    }
}
.tab_active{
    background: $color-str-green;
    color: $color-basic-White;
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
    span{
        font-size: $txt_p;
    }
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