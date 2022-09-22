<template>
<MainHeader></MainHeader>
  <img src="../assets/images/banner_shop.png" alt="">
  <div class="shop_container">
    <div class="wrap wrap_product_list">
      <div class="product_list_group">
        <h3>所有商品</h3>
        <hr />
        <ul class="product_list">
          <li class="product_list_item">T恤</li>
          <li class="product_list_item">帽T</li>
          <li class="product_list_item">漁夫帽</li>
          <li class="product_list_item">杯子</li>
          <li class="product_list_item">水瓶</li>
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
              <h3>{{ item.title }}</h3>
              <h4>$ {{ item.price }}</h4>
            </div>
          </div>
        </router-link>
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
          title: "營火叢帽Ｔ",
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
    //tempStock - 當商品頁被點擊時，會先暫存
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

.shop_container {
    padding: 150px 0px;
    display: flex;
    flex-wrap: wrap;
    margin-right: 10%;
    margin-left: 10%;
    box-sizing: border-box;
  }
  
  .wrap_product_list {
    width: 20%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  
  .product_list_group {
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
  }
  
  .wrap_product_info {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .img_box {
    padding: 0.5rem;
    // width: clamp(160px, calc((100vw - 375px) / 10.65 + 160px), 260px);
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
  
  .product_list{
    list-style: none;
    .product_list_item{
      padding: 0.5rem;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
  
  .shop_product_content {
    padding: 1rem;
    background-color: #fff;
    p{
        color: #000;
    }
}

  .wrap_product_item {
    box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
    margin: 1rem;
    width: clamp(180px, calc((100vw - 375px) / 10.65 + 180px), 280px);
    box-sizing: border-box;
    // &:hover{
    //   transform: scale(1.1);
    //   transition: .5s ease-in;
    }
  
</style>
