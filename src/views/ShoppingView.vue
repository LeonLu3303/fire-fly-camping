<template>
  <MainHeader></MainHeader>
  <div class="banner">
    <img src="../assets/images/main/banner_shop.png" alt="" />
  </div>
  <section class="shop_section">
    <div class="shop_container">
      <div class="wrap_product_list">
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
        <!-- 第二步 v-for 渲染這個清單 :key 在程式碼必須是唯一值 (類似身份證)-->
        <div
          class="wrap_product"
          v-for="(item, index) in itemList"
          :key="'item' + index" 
        >
          <router-link
            to="/ShoppingDetails"
            @click="selectToDetails(item)"
            :href="`./camp_prod_info copy.html?id=${item.id}`"
          >
            <div class="product_card_item">
              <div class="product_img_box">
                <img class="details_product_img"
                  :src="
                    require(`../assets/images/shop/shopping_prod_${item.id}.jpg`)
                  "
                  alt="hello"
                />
              </div>

              <div class="product_content">
                <h3>{{ item.title }}</h3>
                <h4>$ {{ item.price }}</h4>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <MainFooter></MainFooter>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
  },
  data() {
    return {
      cart_count: 0,
      itemList: [
        // {} 包住的為 object
        {
          id: '1',
          img: '../assets/images/shop/shopping_prod_1.jpg',
          title: '營火叢多喝水瓶',
          price: 2680,
          qty: 1,
        },
        {
          id: '2',
          img: '../assets/images/shop/shopping_prod_2.jpg',
          title: '營火叢不怕風吹帽',
          price: 2680,
          qty: 1,
        },
        {
          id: '3',
          img: '../assets/images/shop/shopping_prod_3.jpg',
          title: '營火叢漁夫帽',
          price: 2680,
          qty: 1,
        },
        {
          id: '4',
          img: '../assets/images/shop/shopping_prod_4.jpg',
          title: '營火叢帽Ｔ',
          price: 2680,
          qty: 1,
        },
        {
          id: '5',
          img: '../assets/images/shop/shopping_prod_5.jpg',
          title: '營火叢金勾杯',
          price: 2680,
          qty: 1,
        },
        {
          id: '6',
          img: '../assets/images/shop/shopping_prod_6.jpg',
          title: '營火叢T-Shirt',
          price: 2680,
          qty: 1,
        },
      ],
    };
  },
  methods: {
    //119 的tempStock - 當html 的商品 selectToDetails 被點擊時，會先暫存到tempStock
    selectToDetails(tempStock) {
      //tempStorage - 是 localStorage 裡面存放的變數名稱
      //JSON - 將點擊的資料轉成JSON 的字串格式轉換，因 javascript 陣列或物件無法直接存入localStorage
      //localStorage.setItem 是內建的函式
      localStorage.setItem('tempStorage', JSON.stringify(tempStock));
    },
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/style.scss';
@import '@/assets/scss/shopping.scss';


</style>
