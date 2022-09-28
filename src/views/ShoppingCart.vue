<template>
<MainHeader></MainHeader>
<div class="banner">
    <img src="../assets/images/main/banner_shop.png" alt="">
</div>
<section class="cart_section">
    <div class="cart_container">
        <h3 class="msg_empty_cart" v-if="cart.length === 0">疑，還沒選商品嗎? 趕快去逛逛吧</h3>
        <div class="details_link_path" v-if="cart.length === 0">
                    <router-link to="/Shopping">
                    <div class="back_shopping_page">
                        <img class="back_shopping_img" src="../assets/images/booking/booking_arrow_prev.png" alt="">
                        <h4>繼續購物</h4>
                    </div>
                    </router-link>
                </div>
        <div class="cart_info_wrap" v-if="cart.length !== 0">
                <table class="cart_rwd_table">
                    <thead>
                        <tr>
                            <th>圖片</th>
                            <th>名稱</th>
                            <th>單價</th>
                            <th>數量</th>
                            <th>小計</th>
                            <th>刪除</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item, key) in cart" :key="'product' + item">
                        <tr class="cart_rwd_table_tr">
                            <td data-th="圖片" class="cart_col_item"><img class="cart_prod_image" :src="require(`../assets/images/shop/shopping_prod_${item.id}.jpg`)" alt="" ></td>
                            <td data-th="名稱">{{item.title}}</td>
                            <td data-th="單價">${{item.price}}</td>
                            <td data-th="數量">
                                <div class="cart_btn_box">
                                    <button @click="reduce_order(key)">-</button>
                                    <div class="cart_qty_box">
                                        <p>{{item.qty}}</p>
                                    </div>
                                    <button @click="add_order(key)">+</button>
                                </div>
                            </td>
                            <td data-th="小計" class="cart_col_item_font">${{item.price * item.qty}}</td>
                            <td data-th="刪除" class="cart_col_item"><a href="#" @click="del_order(key)"><img class="cart_trash_icon" src="../assets/images/shop/shopping-trash-can.png" alt=""></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="cart_table_btn">
                    <router-link to="/Shopping"><button class="btn_return">返回購物</button></router-link>
                    <router-link to="/ShoppingPayment"><button class="btn_purchase">前往結帳</button></router-link>
                </div>
        </div>
</div>
</section>

<MainFooter></MainFooter>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {

    components:{
    MainHeader,
    MainFooter,
    },
    data() {
                return {
                    itemSelect: {},
                    products: [],
                    cart: []
                }
            },
            methods: {
                reduce_order(index) {
                    if (this.cart[index]["qty"] === 1) {
                        return;
                    } else {
                        this.cart[index]["qty"] -= 1
                    }
                    this.updateCart();
                },
                add_order(index) {
                    this.cart[index]["qty"] += 1
                    this.updateCart();
                },
                del_order(index) {
                    this.cart.splice(index, 1);
                    this.updateCart();

                },
                updateCart() {
                    localStorage.setItem('cart', JSON.stringify(this.cart));
                },
                getCart(){
                    const tempCart = localStorage.getItem('cart')
                    if (!tempCart || tempCart === 'undefined') return
                    this.cart = JSON.parse(tempCart)
                },

            },
            created() {
                // check current cart from localStorage
                const cartStr = localStorage.getItem('cart');
                console.log(cartStr)
                if (cartStr) {
                    this.products = JSON.parse(cartStr)
                    console.log(JSON.parse(cartStr))
                }
                this.getCart()
                console.log(this.cart)
            }

}

</script>
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
    .cart_section{
        box-sizing: border-box;
        background-color: $color-main-yellow;
        .cart_container {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        padding: 150px 0;
        @include tb(){
            width: 100%;
            // margin: 0 5%;
        }
        .msg_empty_cart{
            text-align: center;
        }
    }
    }

    .cart_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cart_btn_box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        border: 1px solid gray;
        button{
        background-color: #fff;
        border: 0;
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
    .cart_info_wrap {
        padding: 1rem;
        background-color: #fff;
        height: 100vh;
        text-align: center;
        border-radius: 10px;
        box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
        @include tb(){
            padding: 0.5rem;
        }
    }
    .cart_rwd_table{
        overflow: scroll;
        height: 80%;
        width: 100%;
        @include tb(){
            border-collapse:collapse;
            display: flex;
            flex-direction: column;
            align-content: space-between;
        }
        thead{
        border-bottom: 1px solid gray;
        @include tb(){
        display: none;
        }
        }
        th{
        font-size: $title_h4;
        padding: 1rem;
        @include tb(){
        display: none;
        }
        }
        tbody{
        @include tb(){
        padding: 15px 0px;
        display: flex;
        flex-direction: column;
        }
        }
        td{
        padding: 1rem;
        @include tb(){
        display: flex;
        width: 100%;
        justify-content: flex-start;
        padding: 10px 0;
        }   
        }
        td:before{
        @include tb(){
        content:attr(data-th);
        width: 30%;
        margin-right: 10px;
        }
        }
    }
    .cart_col_item{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .cart_table_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        .btn_purchase{
            margin-left: 1rem;
        }

    }
    .cart_trash_icon{
        width: 30px;
        @include sm(){
            width: 20px;
        }
    }
    .cart_prod_image{
        width: 150px;
        display: flex;
        justify-content: center;
    }

</style>