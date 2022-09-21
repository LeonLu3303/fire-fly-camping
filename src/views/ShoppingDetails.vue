<template>
<div class="container">
    <div class="wrap">
        <div class="item">
            <div class="img_box">
                <img
                :src="require(`../assets/images/shopping_prod_${tempProduct.id}.jpg`)"
                alt="hello"/>
            </div>
            <div class="shopping_content">
                <h1>{{tempProduct.title}}</h1>
                <p>單價：${{tempProduct.price}}</p>
                <div class="btn_box">
                    <button @click="reduce_order(tempProduct.qty)">-</button>
                    <p>{{tempProduct.qty}}</p>
                    <button @click="add_order(tempProduct.qty)">+</button>
                </div>
                <div class="order_btn_box">
                    <button>直接購買</button>
                    <button>加入購物車</button>
                </div>
                <h3>合計：${{tempProduct.price * tempProduct.qty}}</h3>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
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