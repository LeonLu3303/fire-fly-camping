<template>
<MainHeader></MainHeader>
<div class="banner">
    <img src="../assets/images/banner_shop.png" alt="">
</div>
<div class="container_details">
    <div class="wrap_details">
        <div class="details_item">
            <div class="details_img_box">
                <img class="details_product_img"
                :src="require(`../assets/images/shopping_prod_${realProduct.id}.jpg`)"
                alt="hello"/>
                <div class="details_link_path">
                    <router-link to="/Shopping">
                    <div class="back_shopping_page">
                        <img class="back_shopping_img" src="../assets/booking_arrow_prev.png" alt="">
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
                        <img src="../assets/images/shopping_minus.png" alt="">
                    </button>
                    <p class="details_qty">{{realProduct.qty}}</p>
                    <button @click="plus_order(realProduct.qty)">
                        <img src="../assets/images/shopping_plus.png" alt="">
                    </button>
                </div>
                <h4>合計：${{realProduct.price * realProduct.qty}}</h4>
                <div class="order_btn_box">
                    <router-link to ="/shoppingPayment"><button class="btn_purchase">直接購買</button></router-link>
                    <button class="btn_return" @click="addToOrder(realProduct)">加入購物車</button>
                </div> 
            </div>
        </div>
    </div>
</div>
<MainFooter></MainFooter>
</template>
<script>
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'

export default {
    components:{
    MainHeader,
    MainFooter,
    },
    data() {
        return {
            realProduct: {}, //當時的商品
            orderList: [], //存入購物車
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
<style lang="scss">
@import "../assets/scss/style.scss";


    .container_details{
        margin-left: 10%;
        margin-right: 10%;
        padding: 150px 0px;
    }
    .wrap_details{
        width: 100%;
        display: flex;
        justify-content: center;
        // background-color: #fff;
    }
    .details_qty_btn_box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid gray;
        box-sizing: border-box;
        width: 8rem;
        
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
        img{
            width: 1rem;
        }
    }
    .details_img_box{
        width: clamp(200px, calc((100vw - 375px) / 5.325 + 200px), 400px);
        padding: 1rem;
        .details_product_img{
            box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
            border-radius: 10px;
        }
    }
    .details_item{
        display: flex;
        justify-content: center;
    }
    .details_content{
        display: grid;
        padding: 4rem;
        box-sizing: border-box;
        align-items: center;
        p{
            padding-right: 1rem;
        }
        }
    .details_link_path{
        display: flex;
        justify-content: center;
        p{
            color: #000;
        }
    }
    .back_shopping_page{
            display: flex;
            padding-top: 4rem;
            .back_shopping_img{
                width: 35px;
                padding-right: 10px;
            }
        }
    // .back_shopping_img:hover{
    //     animation: moving 0.5s infinite;
    //     }
                
    // @keyframes moving{
    //     0%{transform: left(0%)}
    //     100%{transform: left(10%)}
    // }
    .order_btn_box button{
        margin: 0.5rem 0;
    }
   
    .btn_submit{
        line-height: 0;
    }
    
</style>