<template>
    <a-carousel arrows autoplay>
        <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
        </div>
        </template>
        <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
        </div>
        </template>
        <!-- [activity_block] - 依據不同區塊區分圖片 -->
        <div v-for="(item) in carousel[activity_block]" :key="item + 'id'">
            <img :src="item" alt="">
        </div>
        
    </a-carousel>
</template>
<script>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        // 將父層資料傳到子元件，接收到父層的 item.name
        activity_block: String
    },
    data(){
        return{
            carousel: {
                //叢林
                '叢林歷險': [
                    require('@/assets/images/activity/activity_23.jpg'),
                    require('@/assets/images/activity/activity_adv.jpg'),
                    require('@/assets/images/activity/activity_tour.jpg')
                ],
                //冰島
                '冰雪奇緣': [
                    require('@/assets/images/activity/activity_24.jpg'),
                    require('@/assets/images/activity/activity_ski.jpg'),
                    require('@/assets/images/activity/activity_fish.jpg')
                ],
                //峽谷
                '荒野峽谷': [
                    require('@/assets/images/activity/activity_25.jpg'),
                    require('@/assets/images/activity/activity_rock.jpg'),
                    require('@/assets/images/activity/activity_balloon.jpg')
                ],
            }
        }
    },
    components: {
        LeftCircleOutlined,
        RightCircleOutlined,
    },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    /* height: 160px; */
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}

</style>