<template>
    <section class="wrap_service_equipment">
        <div class="equipment_container">
            <div class="title_main">
                <h2>裝備方案</h2>
            </div>
            <ul class="row_equipment_group">
                <li class="col_card_equipment" v-for="item in cardEquipment" :key="item.id">
                    <div class="equipment_content">
                        <div class="equipment_pic">
                            <img :src="require(`@/assets/images/service/service_equipment_${item.id}.jpg`)" alt="equipment">
                        </div>
                        <div class="equipment_txt">
                            <h4>{{item.equipmentTitle}}</h4>
                            <p>{{item.equipmentTxt}}</p>
                            <h4>NT${{item.equipmentPrice}}</h4>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "ServiceEquipment",
    data() {
        return {
            cardEquipment: [
                    {
                        id: 1,
                        equipmentPic: '@/assets/images/service/service_equipment_1.jpg',
                        equipmentTitle: '懷舊露營燈具', 
                        equipmentTxt: '金屬質感懷舊風，防風防雪防水，最高亮度可持續時間4小時。',
                        equipmentPrice: "2780",
                    },
                    {
                        id: 2,
                        equipmentTitle: '@/assets/images/service/service_equipment_2.jpg',
                        equipmentTitle: '野外廚房套鍋組', 
                        equipmentTxt: '無毒優質生活，一次滿足所有烹飪需求，增加容量卻又不增加體積。',
                        equipmentPrice: "1320",
                    }, 
                    {
                        id: 3,
                        equipmentTitle: '@/assets/images/service/service_equipment_3.jpg',
                        equipmentTitle: '生存多功能工具', 
                        equipmentTxt: '內含16種工具節省裝備空間，操作輕鬆，工具主刀皆有安全鎖固定。',
                        equipmentPrice: "2690",
                    },
                    {
                        id: 4,
                        equipmentTitle: '@/assets/images/service/service_equipment_4.jpg',
                        equipmentTitle: '安全通電延長線', 
                        equipmentTxt: '電源線雙層絕緣，通過安全保證，搭載超過電量負荷立刻斷電。',
                        equipmentPrice: "1080",
                    },              
                ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/style.scss';

    .wrap_service_equipment{
        padding: 150PX 0;
        background: $color-main-yellow;
    }
    .equipment_container{
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
    .row_equipment_group{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .col_card_equipment{
        width: 25%;
        padding: 10px;
        @include lg(){
            width: 25%;
        }
        @include tb(){
            width: 47%;
            padding: 5px;
        }
    }
    .equipment_content{
        padding: 10px;
        border-radius: 5px;
        background: $color-basic-White;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, .2);
    }
    .equipment_pic{
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        margin: 0 0 10px;
    }
    .equipment_txt h4:nth-child(1){
        color: $color-str-green;
        padding-bottom: 10px;
        @include md(){
            font-size: $txt_btn;
        }
    }
    .equipment_txt p{
        color: $color-basic-gray2;
        padding-bottom: 10px;
        @include md(){
            display: none;
        }
    }
    .equipment_txt p + h4{
        font-size: $txt_btn;
        color: $color-basic-gray3;
    }
</style>