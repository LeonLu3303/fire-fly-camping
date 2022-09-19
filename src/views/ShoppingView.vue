<template>
  <div>
    <div id="view">
      <!-- <div class="banner">
        <img src="../assets/banner_shop.png" alt="" />
      </div> -->
      <div class="container">
        <div class="wrap wrap_product_list">
          <div class="product_list_group">
            <h3>所有商品</h3>
            <hr />
            <ul
              class="product_list"
              v-for="(product_list, index) in product_list"
              :key="index"
            >
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
          <div class="wrap_product">
            <div class="item" v-for="(item, index) in itemList" :key="index">
              <div class="img_box">
                <img :src="item.img" class="product_img" alt="" />
              </div>

              <div class="content">
                <p>{{ item.title }}</p>
                <p>$ {{ item.price }}</p>
                <!-- <button @click="add_cart">❤️收藏</button> -->
              </div>
            </div>
          </div>
        </div>
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
          id: "hat_1",
          img: "./images/prod-hat-1.jpg",
          title: "營火叢不怕風吹帽",
          price: 2680,
          // color: green
        },
        {
          id: "hat_2",
          img: "./images/prod-hat-2.jpg",
          title: "營火叢漁夫帽",
          price: 2680,
          // color: white
        },
        {
          id: "mug_1",
          img: "./images/prod-mug-1.jpg",
          title: "營火叢金勾杯",
          price: 2680,
          // color: white
        },
        {
          id: "bottle_1",
          img: "./images/prod-bottle.jpg",
          title: "營火叢多喝水瓶",
          price: 2680,
          // color: blue
        },
        {
          id: "top_1",
          img: "./images/prod-top-1.jpg",
          title: "營火叢帽t",
          price: 2680,
          // color: white
        },
        {
          id: "top_2",
          img: "./images/prod-top-2.jpg",
          title: "營火叢t-shirt",
          price: 2680,
          // color: black
        },
      ],
    };
  },
  methods: {
    add_cart() {
      this.cart_count = this.cart_count + 1;
    },
  },
  watch: {},
};
</script>
    <style>
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