<template>
  <div class="container">
    <div class="wrap wrap_product_list">
      <div class="product_list_group">
        <h3>所有商品</h3>
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
      <!-- <div class="breadcrumb">
                    <h3>所有商品 / <span>上著 / 帽款 / 其它</span></h3> 
                    <a href="./camp_cart.html" id="show_cart">
                        <img class="cart" src="https://cdn-icons-png.flaticon.com/128/891/891407.png" alt="">
                    </a> 
                    <p>{{cart_count}}</p>

                </div> -->
      <div class="wrap_product" v-for="(item, index) in itemList"
          :key="index">
        <router-link to="/ShoppingDetails"
          @click="selectToDetails(item)"
          :href="`./camp_prod_info copy.html?id=${item.id}`"
        >
          <div class="item">
            <div class="img_box">
              <img
                :src="require(`../assets/images/shopping_prod_${item.id}.jpg`)"
                alt="hello"
              />
            </div>

            <div class="content">
              <p>{{ item.title }}</p>
              <p>$ {{ item.price }}</p>
              <!-- <button @click="add_cart">❤️收藏</button> -->
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
.container {
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
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
}

.wrap_product_info {
  width: 80%;
}

.img_box {
  /* box-sizing: border-box; */
  margin: 0.5rem;
}

.wrap_product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

ul {
  list-style: none;
}

li,
h3 {
  padding: 0.5rem;
}

.content {
  padding: 1rem;
  background-color: #fff;
}

.item {
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  margin: 1rem;
  width: clamp(180px, calc((100vw - 375px) / 10.65 + 180px), 280px);
  box-sizing: border-box;
}

.product_img {
  width: 100%;
  vertical-align: top;
}
</style>
