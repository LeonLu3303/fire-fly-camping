<template>
<MainHeader></MainHeader>
<img src="../assets/images/banner_shop.png" alt="">
<div class="container_details">
    <div class="wrap_details">
        <div class="details_item">
            <div class="details_img_box">
                <img class="details_product_img"
                :src="require(`../assets/images/shopping_prod_${tempProduct.id}.jpg`)"
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
                <h3>{{tempProduct.title}}</h3>
                <p>單價：${{tempProduct.price}}</p>
                <div class="details_qty_btn_box">
                    <button @click="reduce_order(tempProduct.qty)">
                        <img src="../assets/images/shopping_minus.png" alt="">
                    </button>
                    <p class="details_qty">{{tempProduct.qty}}</p>
                    <button @click="add_order(tempProduct.qty)">
                        <img src="../assets/images/shopping_plus.png" alt="">
                    </button>
                </div>
                <h4>合計：${{tempProduct.price * tempProduct.qty}}</h4>
                <div class="order_btn_box">
                    <router-link to ="/shoppingPayment"><button class="btn_purchase">直接購買</button></router-link>
                    <button class="btn_return" @click="addToOrder(tempProduct)">加入購物車</button>
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
            tempProduct: {},
            orderList: [],
        };
    },
    computed: {
        // shoppingCart: function () {
        // return JSON.parse(JSON.stringify(this.orderList));
        // console.log(orderList);
        // },
        // total() {
        // const sum = 0;
        //因前面的toFixed()會將值轉為字串 所以後面的currentValue前面加+符號  將值轉為數值
        //reduce將orderList陣列裡面的值相加，最後輸出總金額(totalPrice)
        //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%E6%8F%8F%E8%BF%B0
        // return (this.order_list.reduce((previousValue, currentValue) => previousValue + +currentValue.total,
        //     sum)).toFixed(2);
        // return this.count * this.products[0].price;
        // },
        // itemSelected() {
        // return this.cart.find((item) => item.id == this.itemSelectId) ?? {};
        // },
    },
    methods: {
        reduce_order(qty) {
        if (qty !== 1) {
            this.tempProduct.qty -= 1;
        }
        },
        add_order() {
        this.tempProduct.qty += 1;
        },
        addToOrder (product) {
        const indexProduct = this.orderList.findIndex((item) => item.title === product.title)
        if (indexProduct === -1) {
            this.orderList.push({ ...product })
            this.setStorage(this.orderList)
        } 
        else {
            console.log(product.qty)
            this.orderList[indexProduct].qty += product.qty
            this.setStorage(this.orderList)
        }
        },
        setStorage(product) {
            const cart = JSON.stringify(product)
            localStorage.setItem('cart', cart)
        },
        online() {
            // 拿商品list 的資料
            // stocks 是將shoppingCart 的陣列資料傳stocks
            // let stocks = localStorage.getItem("stock");
            // if (!stocks) return;
            // this.cart = JSON.parse(stocks)
            this.cart = this.itemList;

            let product_details = localStorage.getItem("detail");
            if (!product_details) return;
            this.detail = JSON.parse(product_details);
        },
        // tempProduct(變數名只存在這個函式) - 為了讀取 tempStock 的東西
        getStorage () {
            const tempProduct = localStorage.getItem('tempStock')
            if (!tempProduct || tempProduct === 'undefined') return
            this.tempProduct = JSON.parse(tempProduct)
        },
        // cart - 購物車 點擊的商品會存於購物車裡面
        getCart() {
            const tempProduct = localStorage.getItem('cart')
            if (!tempProduct || tempProduct === 'undefined') return
            this.orderList = JSON.parse(tempProduct)
        }
    },
    created() {
        this.online();
        console.log(this.cart);
        this.itemSelectId = window.location.search.split("id=")[1];
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