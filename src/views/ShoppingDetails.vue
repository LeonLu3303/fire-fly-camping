<template>
<MainHeader></MainHeader>
<div class="banner">
    <img src="@/assets/images/main/banner_shop.png" alt="">
</div>
<section class="section_details">
    <div class="wrap_details">
        <div class="details_item">
            <img class="shopping_badge_img" src="@/assets/images/shop/shopping_badge.png" alt="">
            <div class="details_img_box">
                <img class="details_product_img"
                :src="require(`../assets/images/shop/shopping_prod_${realProduct.id}.jpg`)"
                alt="hello"/>
                <div class="details_link_path">
                    <router-link to="/Shopping">
                    <div class="back_shopping_page">
                        <img class="back_shopping_img" src="@/assets/images/booking/booking_arrow_prev.png" alt="">
                        <h4>繼續購物</h4>
                    </div>
                    </router-link>
                </div>
            </div>
            <div class="details_content">
                <h3>{{realProduct.title}}</h3>
                <p>單價：${{realProduct.price}}</p>
                <div class="details_qty_btn_box">
                    <button @click="reduce_order(realProduct.qty)">
                        <img class="cart_img" src="@/assets/images/shop/shopping_minus.png" alt="">
                    </button>
                    <p class="details_qty">{{realProduct.qty}}</p>
                    <button @click="plus_order(realProduct.qty)">
                        <img class="cart_img" src="@/assets/images/shop/shopping_plus.png" alt="">
                    </button>
                </div>
                <h4>合計：${{realProduct.price * realProduct.qty}}</h4>
                <div class="order_btn_box">
                    <router-link to ="/shoppingPayment"><button class="btn_purchase" @click="addToOrder(realProduct)">直接購買</button></router-link>
                    <button class="btn_return" @click="addToOrder(realProduct)">加入購物車</button>
                </div> 
                <!-- 點擊購物車後的 lightbox 提醒文 -->
                <shoppingDetailsBox v-show="addingBox" :itemSelected="realProduct.title"></shoppingDetailsBox>
            </div>
        </div>
    </div>
    <ShoppingIcon></ShoppingIcon>
</section>
<MainFooter></MainFooter>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
import ShoppingDetailsBox from '@/components/ShoppingDetailsBox.vue';
import ShoppingIcon from '@/components/ShoppingIcon.vue';

export default {
    components:{
    MainHeader,
    MainFooter,
    ShoppingDetailsBox,
    ShoppingIcon,
    },
    data() {
        return {
            realProduct: {}, //當時的商品
            orderList: [], //存入購物車
            addingBox: false //加入購物車後的燈箱提醒文
        };
    },
    methods: {
        reduce_order(qty) {
        if (qty !== 1) {
            this.realProduct.qty -= 1;
        }
        },
        plus_order(qty) {
        if (qty <= 9) {
            this.realProduct.qty += 1;
        }
        },
        addToOrder (realProduct) {
        this.addingBox = true
        setTimeout(() => this.addingBox = false, 3000)
        // 用當前商品名稱比對購物車商品名稱，會返回 index，如商品不在會返回 -1
        const indexProduct = this.orderList.findIndex((item) => item.title === realProduct.title)
        // 判斷商品是否已存在購物車
        if (indexProduct === -1) {
            // 如未存在於購物車，即 push 進去 orderList
            this.orderList.push(realProduct) 
            // orderList 更新至 localStorage
            this.setStorage(this.orderList)
        } 
        else {
            // 如在購物車中，透過 indexProudct 知道是第幾個索引
            // 對 索引中商品 qty 進行 + 動作
            this.orderList[indexProduct].qty += realProduct.qty
            this.setStorage(this.orderList)
        }
        },
        setStorage(realProduct) {
            // 將 realProduct 進行javaScript 字串轉換，存入 localStorage 的cart 中。
            localStorage.setItem('cart', JSON.stringify(realProduct))
        },
        // getStorage - 抓取shoppingView 點擊的商品
        getStorage () {
            const tempProduct = localStorage.getItem('tempStorage')
            // || = or
            // JSON.parse - 將之前 JSON.stringify 轉換成字串的轉換回 javaScript 格式
            if (!tempProduct || tempProduct === 'undefined') return
            this.realProduct = JSON.parse(tempProduct)
        },
        // cart - 抓取購物車的商品
        getCart() {
            const tempProduct = localStorage.getItem('cart')
            if (!tempProduct || tempProduct === 'undefined') return
            this.orderList = JSON.parse(tempProduct)
        }
    },
    created() {
        this.getStorage();
        this.getCart();
    },
    };
</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

    .wrap_details{
        width: 80%;
        display: flex;
        justify-content: center;
        margin-left: 10%;
        margin-right: 10%;
        padding: 150px 0px;
    }
    
    .details_qty_btn_box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid gray;
        box-sizing: border-box;
        width: 8rem;
        .cart_img{
            width: 1rem;
        }
        
        button{
            border: 0;
            background-color: transparent;
            margin: 0.5rem;
        }
        .details_qty{
            font-size: $title_h4;
            text-align: center; 
            padding: 0;      
        }
    }
    .details_img_box{
        width: clamp(200px, calc((100vw - 375px) / 5.325 + 200px), 400px);
        padding: 1rem;
        @include sm(){
            width: 100%;
        }
        .details_product_img{
            box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
            border-radius: 10px;
        }
    }
    .details_item{
        display: flex;
        justify-content: center;
        @include sm(){
            flex-direction: column;
        }
        .shopping_badge_img{
        position: relative;
        width: 130px;
        height: 130px;
        left: 80px;
        top: 0px;
        transform-style: preserve-3d;
        animation: spin 1s .8s linear;
        @include md(){
            width: 90px;
            height: 90px;
        } 
        @include sm(){
            width: 90px;
            height: 90px;
            top: 80px;
            left: 0px;
        }
    }
        @keyframes spin{
            from{transform: rotateY(-87deg)};
            to{transform: rotatey(0deg)};
        }
    }
    .details_content{
        display: grid;
        padding: 4rem;
        box-sizing: border-box;
        align-items: center;
        h3{
        color: $color-str-green;
        }
        
        @include md(){
            h3{
                font-size: 20px;
            }
            h4{
                font-size: 18px;
            }
        }
        @include sm(){
            padding: 2rem;
            justify-content: center;
            h3{
                font-size: 20px;
                text-align: center;
            }
            h4{
                font-size: 18px;
                text-align: center;
            }
        }
        p{
            font-size: 18px;
            @include sm(){
                padding: 0;
                text-align: center;
            }
        }
        }
    .details_qty_btn_box{
        @include md(){
            margin: 1rem;
        }
        @include sm(){
            padding: 0;
            margin: 1rem;
        }
    }
    .details_link_path{
        display: flex;
        justify-content: center;
        p{
            color: #000;
        }
        .back_shopping_page{
            display: flex;
            padding-top: 4rem;
            h4{
                font-size: 25px;
                line-height: 30px;
            }
            .back_shopping_img{
                width: 40px;
                padding-right: 10px;
            }
        }
    }
    
    .order_btn_box button{
        margin: 0.5rem 0;
    }
    
    .btn_submit{
        line-height: 0;
    }
    .order_btn_box{
        @include md(){
            text-align: center;
            padding-top: 1rem;
        }
        @include sm(){
            text-align: center;
            padding-top: 1rem;
        }
    }
    .details_msg_box{
        display: fixed;
        background-color: lightseagreen;
        width: 300px;
        height: 200px;
        top: 0;
        left: 0;
        
    }
</style>