<template>
    <section class="wrap_service_tent">
        <div class="tent_container">
            <div class="title_main">
                <h2>營帳介紹</h2>
            </div>

            <div class="row_tent_wrap">
                <!-- 營帳祥細介紹 -->
                <div class="col_tent_swiper">
                    <!-- 特色型 -->
                    <div class="tent_introduce" id="jungle_tab" v-if="activeTab === 'feature'" >
                        <div class="tent_introduce_pic">
                            <img src="@/assets/images/service/service_tent_1.jpg" alt="">
                        </div>
                        <div class="tent_type_text">
                            <h4>特色型 x 二人 x 四人 x 六人</h4>
                            <p>營帳尺寸：W 300  L 300  H 200 / CM<br>
                                房內設備：獨立衛浴、衣櫃、熱水壺、可加床、沐浴用品、插座、冷暖空調</p>
                        </div>
                    </div>
                    <!-- 豪華型 -->    
                    <div class="tent_introduce" id="snow_tab" v-else-if="activeTab === 'luxury'" >
                        <div class="tent_introduce_pic">
                            <img src="@/assets/images/service/service_tent_1.jpg" alt="">
                        </div>
                        <div class="tent_type_text">
                            <h4>豪華型 x 二人 x 四人 x 六人</h4>
                            <p>營帳尺寸：W 300  L 300  H 200 / CM<br>
                                房內設備：獨立衛浴、衣櫃、熱水壺、可加床、沐浴用品、插座、冷暖空調</p>
                        </div>
                    </div>
                    <!-- 普通型 -->
                    <div class="tent_introduce" id="canyon_tab" v-else>
                        <div class="tent_introduce_pic">
                            <img src="@/assets/images/service/service_tent_1.jpg" alt="">
                        </div>
                        <div class="tent_type_text">
                            <h4>普通型 x 二人 x 四人 x 六人</h4>
                            <p>營帳尺寸：W 300  L 300  H 200 / CM<br>
                                房內設備：獨立衛浴、衣櫃、熱水壺、可加床、沐浴用品、插座、冷暖空調</p>
                        </div>
                    </div>
                </div>

                <!-- 營帳 button -->
                <div class="col_tent_tabs">
                    <div class="tent_tab_group" @click="activeTab = 'feature'">
                        <div class="tent_btn_pic">
                            <img src="@/assets/images/service/service_tent_1.jpg" alt="">
                        </div>
                        <div class="tent_btn_text">
                            <h4>特色型 x 二人 x 四人 x 六人</h4>
                            <p>想來點特別的嗎? 不必去尋找，給錢就有囉</p>
                        </div>
                    </div>
                    <div class="tent_tab_group" @click="activeTab = 'luxury'">
                        <div class="tent_btn_pic">
                            <img src="@/assets/images/service/service_tent_1.jpg" alt="">
                        </div>
                        <div class="tent_btn_text">
                            <h4>豪華型 x 二人 x 四人 x 六人</h4>
                            <p>使上超豪華，包準你滿意，不滿意退錢</p>
                        </div>
                    </div>
                    <div class="tent_tab_group" @click="activeTab = 'ordinary'">
                        <div class="tent_btn_pic">
                            <img src="@/assets/images/service/service_tent_1.jpg" alt="">
                        </div>
                        <div class="tent_btn_text">
                            <h4>普通型 x 二人 x 四人 x 六人</h4>
                            <p>普通到爆炸，就跟你一樣很普通</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ServiceFood",
    data() {
        return {
            activeTab:'feature',
            cardJungle: [
                    {
                        id:'tour',
                    },            
                ],
            cardSnow: [
                        {
                            id:'ski',

                        },
                        
                    ],
            cardCanyon: [
                        {
                            id:'balloon',
                            
                        },         
                    ]
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/style.scss';

.wrap_service_tent{
    padding: 150px 0;
}
.tent_container{
    width: 80%;
    margin: 0 auto;
}
.row_tent_wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
//營帳祥細介紹
.col_tent_swiper{
    width: 58%;
}
.tent_introduce{
    padding: 20px;
    margin: 20px 0;
    background: $color-basic-White;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
}
.tent_introduce_pic{
    width: 100%;
    margin: 0 0 20px;
}
.tent_type_text{
    h4{
        margin: 0 0 20px;
    }
}
// 營帳 button
.col_tent_tabs{
    width: 40%;
}
.tent_btn_pic{
    width: 30%;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 10px;
}
.tent_btn_text{
    h4{
        margin-bottom: 10px;
    }
}
.tent_tab_group{
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    margin: 20px 0;
    background: $color-basic-White;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    transform: scale(1,1);transition: all .5s ease-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
}
</style>