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
                :src="require(`../assets/images/shop/shopping_prod_${realProduct.product_pic}`)"
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
                <h3 class="d_content_spc_tb">{{realProduct.product_name}}</h3>
                <p class="d_content_spc_tb">單價：${{realProduct.product_price}}</p>
                <div class="details_qty_btn_box">
                    <button @click="reduce_order(realProduct.product_qty)">
                        <img class="cart_img" src="@/assets/images/shop/shopping_minus.png" alt="">
                    </button>
                    <p class="details_qty">{{realProduct.product_qty}}</p>
                    <button @click="plus_order(realProduct.product_qty)">
                        <img class="cart_img" src="@/assets/images/shop/shopping_plus.png" alt="">
                    </button>
                </div>
                <h4>合計：${{realProduct.product_price * realProduct.product_qty}}</h4>
                <div class="order_btn_box">
                    <button class="btn_purchase" @click="popUpLogin(realProduct)">直接購買</button>
                    <button class="btn_return" @click="popUpBox(realProduct)">加入購物車</button>
                </div> 
                <!-- 點擊直接購買後 跳出請先登入 提醒 -->
                <!-- @close 是component $emit 那邊的命名 -->
                <ShopLoginBox @close="loginBox" v-if="login"></ShopLoginBox>
                <!-- 點擊購物車後的 lightbox 提醒文 -->
                <ShoppingDetailsBox v-show="addingBox" :itemSelected="realProduct.product_name"></ShoppingDetailsBox>
            </div>
        </div>
    </div>
    <ShoppingIcon></ShoppingIcon>
</section>
<MainFooter></MainFooter>
</template>
<script>
import ShoppingDetailsBox from '@/components/ShoppingDetailsBox.vue';
import ShoppingIcon from '@/components/ShoppingIcon.vue';
import ShopLoginBox from '@/components/ShopLoginBox.vue';

export default {
    components:{
    ShoppingDetailsBox,
    ShoppingIcon,
    ShopLoginBox,
    },
    data() {
        return {
            realProduct: {}, //當時的商品
            orderList: [], //存入購物車
            addingBox: false, //加入購物車前燈箱隱藏 ->false 
            login: false //請先登入
        };
    },
    methods: {
        loginBox (response) {
            this.login = response
        },
        reduce_order(product_qty) {
        if (product_qty !== 1) {
            this.realProduct.product_qty -= 1;
        }
        },
        plus_order(product_qty) {
        if (product_qty <= 9) {
            this.realProduct.product_qty += 1;
        }
        },
        popUpBox (realProduct) {
            // 判斷如果product.qty = 0, 即不會執行下列動作
            if(realProduct.product_qty){
                // 點擊加入購物車按鈕變 true 即顯示->已加入購物車
                this.addingBox = true
                // setTimeout 非同步執行，三秒後false = 隱藏
                setTimeout(() => this.addingBox = false, 3000)
                this.addToOrder(realProduct)
            }
        },
        popUpLogin (realProduct) {
            if(realProduct.product_qty){
                this.addToOrder(realProduct)
                // 點擊直接購買 - 請先登入提示，如 session 已登入即會跳轉付款連結
                if(!sessionStorage.getItem('member')) {
                    this.login = true
                } else {
                    // 跳轉連結 this.$router.push
                    this.$router.push("/ShoppingPayment")
                }
            }
        },
        // addToOrder - 加入購物車
        addToOrder (realProduct) {
        // 用當前商品名稱比對購物車商品名稱，會返回 index，如商品不在會返回 -1
        const indexProduct = this.orderList.findIndex((item) => item.product_name === realProduct.product_name)
        // 判斷商品是否已存在購物車
        if (indexProduct === -1) {
            // 如未存在於購物車，即 push 進去 orderList
            this.orderList.push({...realProduct}) 
            // 加入購物車後，將 product.qty 歸 0 
            realProduct.product_qty = 0
            // orderList 更新至 localStorage
            this.setStorage(this.orderList)
        } 
        else {
            // 如在購物車中，透過 indexProudct 知道是第幾個索引
            // 對 索引中商品 qty 進行 + 動作
            this.orderList[indexProduct].product_qty += realProduct.product_qty
            // 加入購物車後，將 product.qty 歸 0 
            realProduct.product_qty = 0
            this.setStorage(this.orderList)
        }
        },
        setStorage(realProduct) {
            // 將 realProduct 進行javaScript 字串轉換，存入 localStorage 的cart(自定義的物件名稱) 中。
            localStorage.setItem('cart', JSON.stringify(realProduct))
        },
        // getStorage - 抓取shoppingView 點擊的商品
        getStorage () {
            const tempProduct = localStorage.getItem('tempStorage')
            // || = or
            // JSON.parse - 將之前 JSON.stringify 轉換成字串的轉換回 javaScript 格式
            if (!tempProduct || tempProduct === 'undefined') return
            this.realProduct = JSON.parse(tempProduct)
            this.realProduct.product_qty = 1;
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
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid gray;
        box-sizing: border-box;
        width: 8rem;
        .cart_img{
            width: 1rem;
            cursor: pointer;
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
        width: 100%;
        // padding: 1rem;

        .details_product_img{
            box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
            border-radius: 10px;
        }
    }
    .details_item{
        display: flex;
        justify-content: center;
        @include tb(){
        flex-direction: column; 
        }  
        .shopping_badge_img{
        position: relative;
        width: 120px;
        height: 120px;
        left: 60px;
        top: -30px;
        transform-style: preserve-3d;
        animation: spin 1s .8s linear;
        @include tb(){
            top: 60px;
            left: -40px;
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
        width: 100%;
        box-sizing: border-box;
        align-items: center;
        h3{
        color: $color-str-green;
        }
        .d_content_spc_tb{
            padding: 0.5rem 0;
        @include tb(){
            text-align: center;
        }
        }
        @include tb(){
            // padding: 1rem;
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
                // text-align: center;
            }
        }
        }
    .details_qty_btn_box{
        @include tb(){
            margin: 1rem auto;
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
        padding-top: 1rem;
        @include tb(){
            text-align: center;
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