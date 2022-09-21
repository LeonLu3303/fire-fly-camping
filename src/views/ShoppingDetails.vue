<template>
<MainHeader></MainHeader>
<div class="container">
    <div class="wrap_details">
        <div class="details_item">
            <div class="details_img_box">
                <img
                :src="require(`../assets/images/shopping_prod_${tempProduct.id}.jpg`)"
                alt="hello"/>
                <div class="details_link_path">
                    <router-link to="/Shopping">
                    <div class="back_shopping_page">
                        <img src="../assets/booking_arrow_prev.png" alt="">
                        <p>繼續購物</p>
                    </div>
                    </router-link>
                </div>
            </div>
            <div class="details_content">
                <p>{{tempProduct.title}}</p>
                <p>單價：${{tempProduct.price}}</p>
                <div class="details_add_reduce_btn_box">
                    <button @click="reduce_order(tempProduct.qty)">-</button>
                    <p>{{tempProduct.qty}}</p>
                    <button @click="add_order(tempProduct.qty)">+</button>
                </div>
                <p>合計：${{tempProduct.price * tempProduct.qty}}</p>
                <div class="order_btn_box">
                    <router-link to ="/shoppingPayment"><button class="btn_purchase">直接購買</button></router-link>
                    <button class="btn_submit">加入購物車</button>
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
        };
    },
    computed: {
        shoppingCart: function () {
        return JSON.parse(JSON.stringify(this.orderList));
        console.log(orderList);
        },
        total() {
        const sum = 0;
        //因前面的toFixed()會將值轉為字串 所以後面的currentValue前面加+符號  將值轉為數值
        //reduce將orderList陣列裡面的值相加，最後輸出總金額(totalPrice)
        //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#%E6%8F%8F%E8%BF%B0
        // return (this.order_list.reduce((previousValue, currentValue) => previousValue + +currentValue.total,
        //     sum)).toFixed(2);
        return this.count * this.products[0].price;
        },
        itemSelected() {
        return this.cart.find((item) => item.id == this.itemSelectId) ?? {};
        },
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
        addToOrder() {
        // check current cart from localStorage
        const cartStr = localStorage.getItem("cart");
        let cart = [];

        // update cart
        if (cartStr) {
            cart = JSON.parse(cartStr);
        }
        const index = cart.findIndex((item) => item.id == this.itemSelectId);
        if (index > -1) {
            cart[index].qty = this.qty;
        } else {
            cart.push({
            ...this.itemSelected,
            qty: this.qty,
            });
        }

        // set cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
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
        getStorage () {
            const tempProduct = localStorage.getItem('tempStock')
            if (!tempProduct || tempProduct === 'undefined') return
            this.tempProduct = JSON.parse(tempProduct)
        },
    },
    created() {
        this.online();
        console.log(this.cart);
        this.itemSelectId = window.location.search.split("id=")[1];
        this.getStorage();
    },
    };
</script>
<style lang="scss">
@import "../assets/scss/style.scss";

    .container{
        margin-left: 10%;
        margin-right: 10%;
    }
    .wrap_details{
        width: 100%;
        display: flex;
        justify-content: center;
        // background-color: #fff;
    }
    .details_add_reduce_btn_box{
        display: flex;
        justify-content: space-evenly;
    }
    .details_item{
        display: flex;
        justify-content: center;
    }
    .details_content{
        display: grid;
        padding: 1rem;
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
            img{
                width: 35px;
                padding-right: 10px;
            }
        }
    .order_btn_box button{
        padding: 5px;
    }
    
    .btn_submit{
        line-height: 0;
    }
    
</style>