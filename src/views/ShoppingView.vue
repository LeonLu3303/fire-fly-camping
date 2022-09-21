<template>
  <img src="../assets/images/banner_shop.png" alt="">
  <div class="container">
    <div class="wrap wrap_product_list">
      <div class="product_list_group">
        <p>所有商品</p>
        <hr />
        <ul class="product_list">
          <li>T恤</li>
          <li>帽T</li>
          <li>漁夫帽</li>
          <li>杯子</li>
          <li>水瓶</li>
        </ul>
      </div>
    </div>

    <div class="wrap_product_info">
      
      <div class="wrap_product" v-for="(item, index) in itemList"
          :key="index">
        <router-link to="/ShoppingDetails"
          @click="selectToDetails(item)"
          :href="`./camp_prod_info copy.html?id=${item.id}`"
        >
          <div class="wrap_product_item">
            <div class="img_box">
              <img
                :src="require(`../assets/images/shopping_prod_${item.id}.jpg`)"
                alt="hello"
              />
            </div>

            <div class="shop_product_content">
              <p>{{ item.title }}</p>
              <p>$ {{ item.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      cart_count: 0,
      itemList: [
        {
          id: "1",
          img: "../assets/images/shopping_prod_1.jpg",
          title: "營火叢多喝水瓶",
          price: 2680,
          qty: 1
        },
        {
          id: "2",
          img: "../assets/images/shopping_prod_2.jpg",
          title: "營火叢不怕風吹帽",
          price: 2680,
          qty: 1
        },
        {
          id: "3",
          img: "../assets/images/shopping_prod_3.jpg",
          title: "營火叢漁夫帽",
          price: 2680,
          qty: 1
        },
        {
          id: "4",
          img: "../assets/images/shopping_prod_4.jpg",
          title: "營火叢帽t",
          price: 2680,
          qty: 1
        },
        {
          id: "5",
          img: "../assets/images/shopping_prod_5.jpg",
          title: "營火叢金勾杯",
          price: 2680,
          qty: 1
        },
        {
          id: "6",
          img: "../assets/images/shopping_prod_6.jpg",
          title: "營火叢T-Shirt",
          price: 2680,
          qty: 1
        },
      ],
    };
  },
  methods: {
    // add_cart() {
    //     this.cart_count = this.cart_count + 1;
    // },
    addToCart(item, id) {
      let index = this.itemList.findIndex((item) => item.id === id);

      let count = this.detail.find((detail) => detail.id === item.id);
      console.log(count);

      if (!count) {
        this.detail.push({
          id: this.itemList[index].id,
          img: this.itemList[index].img,
          title: this.itemList[index].title,
        });
      } else {
        alert("no");
      }

      this.setStorage();
    },
    setStorage() {
      // 將 shoppingCart 透過參數的方式傳過來

      localStorage.setItem("stock", JSON.stringify(this.itemList));
      // localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
      // localStorage.setItem("detail", JSON.stringify(this.detail));
    },
    selectToDetails(tempStock) {
      localStorage.setItem("tempStock", JSON.stringify(tempStock));
    },

    clear() {
      // this.detail.splice(0, 1);
      // console.log(this.detail)
    },
  },
  created() {
    // this.online()
    this.clear();
  },
};
</script>
<style lang="scss">
@import "../assets/scss/style.scss";

</style>
