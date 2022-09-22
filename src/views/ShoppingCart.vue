<template>
<MainHeader></MainHeader>
<div class="banner">
    <img src="../assets/images/banner_shop.png" alt="">
</div>
<div class="cart_container">
        <div class="cart_wrap">
                <table class="cart_info">
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
                        <tr>
                            <td><img class="cart_image" :src="require(`../assets/images/shopping_prod_${item.id}.jpg`)" alt="" ></td>
                            <td>{{item.title}}</td>
                            <td>${{item.price}}</td>
                            <!-- <td>{{item.color}}</td> -->
                            <td>
                                <div class="cart_btn_box">
                                    <button @click="reduce_order(key)">-</button>
                                    <div class="cart_qty_box">
                                        <p>{{item.qty}}</p>
                                    </div>
                                    <button @click="add_order(key)">+</button>
                                </div>
                            </td>
                            <td>${{item.price * item.qty}}</td>
                            <td><a href="#" @click="del_order(key)"><img class="cart_trash_icon" src="../assets/images/shopping-trash-can.png" alt=""
                                        width="30"></a>
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
<style lang="scss">
@import "../assets/scss/style.scss";

    .cart_container {
        width: 80%;
        margin: 0 10%;
        padding: 150px 0;
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

    .cart_wrap {
        /* border-radius: 10px; */
        padding: 1rem;
        background-color: #fff;
        overflow: scroll;
        display: grid;
        max-height: 1000px;
        grid-template-rows: repeat(7, 1fr);
        text-align: center;
        border-radius: 10px;
        box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
    }

    .cart_table_btn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100px;
        .btn_purchase{
            margin-left: 1rem;
        }

    }
    .cart_info {
        th{
        font-size: $title_h4;
        padding: 1rem;
    }
    thead{
        border-bottom: 1px solid gray;
        
    }
    }
    .cart_trash_icon{
        width: 30px;
    }
    .cart_image{
        width: 150px;
    }
</style>