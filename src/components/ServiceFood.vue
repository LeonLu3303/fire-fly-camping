<template>
    <section class="wrap_service_food">
        <div class="food_container">
            <div class="title_main">
                <h2>食材介紹</h2>
            </div>
            <ul class="row_food_group">
                <li class="col_card_food" v-for="item in cardFood" :key="item.id">
                    <div class="food_content">
                        <div class="food_pic">
                            <img :src="require(`@/assets/images/service/service_food_${item.id}.jpg`)" alt="avatar">
                        </div>
                        <div class="food_txt">
                            <h4>{{item.foodTitle}}</h4>
                            <h4>食材品項 : </h4>
                            <p>{{item.foodTxt}}</p>
                            <h4>NT${{item.foodPrice}}</h4>
                        </div>
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
                        foodTitle: '肉多多吃到飽', 
                        foodTxt: '日本A5極品雪花和牛、美國安格斯極上牛小排、美國安格斯霜降牛、澳洲和牛極上牛舌、西班牙伊比利雪花豬梅花、西班牙伊比利松阪豚、無骨雞腿肉、醃漬雞翅',
                        foodPrice: "4280",
                    },
                    {
                        id: 2,
                        foodTitle: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '素食養身蔬菜', 
                        foodTxt: '養身山藥、香甜大玉米、青椒、甜椒、洋蔥、玉米筍、杏包菇、奶油香菇、胡椒金針菇、花椰菜、筊白筍、茄子、百頁豆腐、豆干、醬油豆皮、烤年糕',
                        foodPrice: "1690",
                    }, 
                    {
                        id: 3,
                        foodTitle: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '奢侈海鮮大餐', 
                        foodTxt: '焗烤海大蝦、龍膽石斑、海大蝦、北極圓鱈、嚴選黑潮軟絲、日本大扇貝、北海道干貝、特選焗烤大草蝦、挪威鹽漬鯖魚、北海道嚴選巨干貝、特選大草蝦',
                        foodPrice: "3680",
                    },
                    {
                        id: 4,
                        foodTitle: '@/assets/images/service/service_food_1.jpg',
                        foodTitle: '海陸雙重享受', 
                        foodTxt: '美國安格斯牛小排、澳洲牛舌、西班牙伊比利松阪豚、無骨雞腿肉、醃漬雞翅、大草蝦、北極圓鱈、嚴選黑潮軟絲、日本大扇貝、北海道干貝、挪威鹽漬鯖魚',
                        foodPrice: "3460",
                    },              
                ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/style.scss';

    .wrap_service_food{
        padding: 150PX 0;
        background: $color-basic-White;
    }
    .food_container{
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
    .row_food_group{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .col_card_food{
        display: flex;
        width: 50%;
        padding: 15px;
        @include lg(){
            width: 50%;
        }
        @include md(){
            width: 100%;
        }
    }
    .food_content{
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 5px;
        background: $color-main-yellow;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, .2);
    }
    .food_pic{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        margin: 0 0 10px;
    }
    .food_txt{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .food_txt h4:nth-child(1){
        color: $color-str-green;
        padding-bottom: 15px;
    }
    .food_txt h4:nth-child(2){
        color: $color-basic-gray2;
        font-size: $txt_p;
        padding-bottom: 5px;
    }
    .food_txt p{
        color: $color-basic-gray2;
        padding-bottom: 10px;
        flex-grow: 1;
    }
    .food_txt p + h4{
        font-size: $txt_btn;
        color: $color-basic-gray3;
    }
</style>