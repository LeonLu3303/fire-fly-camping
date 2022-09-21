<template>
<div class="cart_container">
            <div class="cart_wrap">
                <div class="cart_title">
                    <h1>購物車</h1>
                    <!-- <h2>品項:{{item.count}}</h2> -->
                </div>

                <table class="cart_info">
                    <thead>
                        <tr>
                            <th>圖片</th>
                            <th>名稱</th>
                            <th>單價</th>
                            <!-- <th>顏色</th> -->
                            <th>數量</th>
                            <th>小計</th>
                            <th>刪除</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in products" :key="'product' + item">
                            <a href="#"></a>
                            <td><img :src="item.img" alt="" width="200"></td>
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
                            <td><a href="#" @click="del_order(index)"><img src="../assets/images/shopping-trash-can.png" alt=""
                                        width="30"></a>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <div class="cart_table_btn">
                    <button class="back_btn">返回購物</button>
                    <router-link to="/ShoppingPayment"><button class="check_out_btn">前往結帳</button></router-link>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
                return {
                    itemSelect: {},
                    products: [],
                }
            },
            methods: {
                reduce_order(index) {
                    if (this.products[index]["qty"] === 1) {
                        return;
                    } else {
                        this.products[index]["qty"] -= 1
                    }
                    this.updateCart();
                },
                add_order(index) {
                    this.products[index]["qty"] += 1
                    this.updateCart();
                },
                del_order(index) {
                    this.products.splice(index, 1);
                    this.updateCart();

                },
                updateCart() {
                    localStorage.setItem('cart', JSON.stringify(this.products));
                }

            },
            created() {
                // check current cart from localStorage
                const cartStr = localStorage.getItem('cart');
                console.log(cartStr)
                if (cartStr) {
                    this.products = JSON.parse(cartStr)
                    console.log(JSON.parse(cartStr))
                }
            }

}
</script>
<style lang="scss">
  .cart_container {
        position: fixed;
        width: 100%;
        height: 100%;
        /* z-index: -1; */
        /* opacity: 0; */
        display: flex;
        justify-content: center;
        align-items: center;
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
        width: 1000px;
        height: 100vh;
        background-color: #fff;
        /* overflow: scroll; */
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        text-align: center;
        overflow: scroll;
        border-bottom: 1px solid gray;
    }

    .cart_table_btn {
        text-align: right;
    }
</style>