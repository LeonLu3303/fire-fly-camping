<template>
    <section class="wrap_service_equipment">
        <div class="equipment_container">
            <div class="title_main">
                <h2>裝備介紹</h2>
            </div>
            <ul class="row_equipment_group">
                <li class="col_card_equipment" v-for="item in cardEquipment" :key="item.id">
                    <div class="equipment_pic">
                        <img src="../assets/images/service_equipment_1.jpg" alt="">
                    </div>
                    <div class="equipment_txt">
                        <h4>{{item.foodTitle}}</h4>
                        <p>{{item.foodTxt}}</p>
                        <h4>{{item.foodPrice}}</h4>
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
                        foodPic: '../assets/images/service_equipment_1.jpg',
                        foodTitle: '漂亮燈燈阿~', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    },
                    {
                        id: 2,
                        foodTitle: '../assets/images/service_equipment_.jpg',
                        foodTitle: '豪華燈飾', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    }, 
                    {
                        id: 3,
                        foodTitle: '../assets/images/service_equipment_1.jpg',
                        foodTitle: '鍋碗瓢盆你需要嗎', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    },
                    {
                        id: 4,
                        foodTitle: '../assets/images/service_equipment_1.jpg',
                        foodTitle: '特色裝備', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    },              
                ]
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/style.scss';

.wrap_service_equipment{
    padding: 150PX 0;
    background: $color-main-yellow;
}
.equipment_container{
    width: 80%;
    margin: 0 auto;
}
.row_equipment_group{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.col_card_equipment{
    width: 23%;
    padding: 16px;
    margin: 10px;
    background: $color-basic-White;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
}
.equipment_pic{
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 0 10px;
}
.equipment_txt{
    h4{
        padding: 0 0 5px;
    }
    p{
        padding: 0 0 10px;
    }
}
</style>