<template>
    <section class="wrap_service_food">
        <div class="food_container">
            <div class="title_main">
                <h2>食材介紹</h2>
            </div>
            <ul class="row_food_group">
                <li class="col_card_food" v-for="item in cardFood" :key="item.id">
                    <div class="food_pic">
                        <img :src="require(`@/assets/images/service/service_food_${item.id}.jpg`)" alt="avatar">
                    </div>
                    <div class="food_txt">
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
    name: "ServiceFood",
    data() {
        return {
            cardFood: [
                    {
                        id: 1,
                        foodPic: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '陸地肉肉吃到爽', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    },
                    {
                        id: 2,
                        foodTitle: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '健康蔬食素食最愛', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    }, 
                    {
                        id: 3,
                        foodTitle: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '海鮮吃到痛風', 
                        foodTxt: '陸地肉肉吃到爽，食材擁有日本A5和牛、牛五花肉片、骰子牛排、豬五花肉、豬梅花肉片、台灣香腸、醃漬雞肉、雞腿排、棒棒腿',
                        foodPrice: "$1000",
                    },
                    {
                        id: 4,
                        foodTitle: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '小孩才選擇我都要', 
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

.wrap_service_food{
    padding: 150PX 0;
    background: $color-basic-White;
}
.food_container{
    width: 80%;
    margin: 0 auto;
}
.row_food_group{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.col_card_food{
    width: 23%;
    padding: 16px;
    margin: 10px;
    background: $color-main-yellow;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
}
.food_pic{
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 0 10px;
}
.food_txt{
    h4{
        padding: 0 0 5px;
    }
    p{
        padding: 0 0 10px;
    }
}
</style>