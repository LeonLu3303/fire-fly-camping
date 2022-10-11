<template>
  <MainHeader></MainHeader>
  <div class="banner">
    <img src="@/assets/images/main/banner_shop.png" alt="banner" />
  </div>
  <section class="section_payment">
    <div class="payment_container">
      <div class="rwd_payment_col_1">
        <div class="wrap_cart">
          <div class="rwd_amount">
            <h3 class="rwd_amount_title">結帳金額</h3>
            <h3 class="rwd_amount_title">${{ itemTotal }}</h3>
            <!-- <div class="drop_down">
              <img 
                class="drop_down_img"
                src="../assets/images/shop/shopping_down.png"
                alt="查看更多"
              />
            </div> -->
          </div>

          <div class="cart_payment_container">
            <table
              class="cart_payment_info"
              v-for="item in orderList"
              :key="'item' + item.product_name"
            >
              <tbody>
                <tr class="table_tr_grid">
                  <td class="payment_item_image">
                    <img
                      class="cart_prod_image"
                      :src="
                        require(`@/assets/images/shop/shopping_prod_${item.product_pic}`)
                      "
                      alt=""
                    />
                  </td>
                  <td>
                    <p>{{ item.product_name }}</p>
                    <p>數量:{{ item.product_qty }}</p>
                    <p>單價:${{ item.product_price }}</p>
                    <p>小計:${{ item.product_qty * item.product_price }}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="payment_rows_2">
        <div class="wrap_delivery">
          <h3 class="para">配送資訊</h3>
          <h4 class="para">收件人資訊</h4>
          <form class="delivery_info">
            <div class="user_input_box">
              <label for="name"
                >姓名
                <input type="text" id="name" placeholder="營火叢" required />
              </label>
              <label for="tel"
                >電話
                <input type="tel" placeholder="01-123456" required />
              </label>
              <label for="email"
                >E-mail
                <input type="email" placeholder="123@xxx.com" required />
              </label>
            </div>
            <div class="user_input_box">
              <label for="city"
                >縣市
                <select name="" id="">
                  <option value="">桃園市</option>
                </select>
              </label>
              <label for=""
                >鄉鎮市區
                <select name="" id="">
                  <option value="">中壢市</option>
                </select>
              </label>
              <label for=""
                >詳細地址
                <input type="text" placeholder="桃園市中壢市復興市46號9樓" />
              </label>
            </div>
          </form>
        </div>

        <div class="wrap_payment">
          <h3 class="para">付款資訊</h3>
          <h4 class="para">信用卡資訊</h4>
          <form class="payment_info">
            <div class="user_input_box">
              <label
                >持卡人姓名
                <input type="text" placeholder="營火叢" required />
              </label>
              <label
                >信用卡號
                <input type="text" placeholder="1111-1234-1234" required />
              </label>
              <div class="credit_box">
                <div class="credit_info">
                  <label
                    >到期日
                    <input type="text" placeholder="08/29" required />
                  </label>
                </div>
                <div class="credit_check_no">
                  <label
                    >檢核碼
                    <input type="text" placeholder="888" required />
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div class="btn_link_group">
            <router-link to="/Shopping"
              ><button class="btn_return">返回購物</button></router-link
            >
            <button class="btn_purchase" @click="checkOut">確認結帳</button>
          </div>
        </div>
      </div>
      <div class="payment_col_1">
        <div class="wrap_cart">
          <div class="amount">
            <h3>結帳金額</h3>
            <h3>${{ itemTotal }}</h3>
          </div>

          <div class="cart_payment_container">
            <table
              class="cart_payment_info"
              v-for="item in orderList"
              :key="'item' + item.product_name"
            >
              <tbody>
                <tr class="table_tr_grid">
                  <td class="payment_item_image">
                    <img
                      class="details_product_img"
                      :src="
                        require(`../assets/images/shop/shopping_prod_${item.product_pic}`)
                      "
                      alt="hello"
                    />
                  </td>
                  <td>
                    <p>{{ item.product_name }}</p>
                    <p>數量:{{ item.product_qty }}</p>
                    <p>單價:${{ item.product_price }}</p>
                    <p>小計:${{ item.product_qty * item.product_price }}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ShopOrderConfirm v-if="confirmBox" @cancelBox="closeBox"></ShopOrderConfirm>
  <MainFooter></MainFooter>
</template>
<script>
import ShopOrderConfirm from "@/components/ShopOrderConfirm.vue";

export default {
  components: {
    ShopOrderConfirm
  },
  data() {
    return {
      orderList: [],
      itemTotal: 0,
      confirmBox: false,
    };
  },
  methods: {
    // 從 shopOrderConfirm 的component $emit 調資料過來
    closeBox(closeBox) {
      this.confirmBox = closeBox
    },
    checkOut() {
      this.confirmBox = true
    },
    getOrderList() {
      const tempOrderList = localStorage.getItem("cart");
      if (!tempOrderList || tempOrderList === "undefined") return;
      this.orderList = JSON.parse(tempOrderList);
    },
    itemSum() {
      this.itemTotal = this.orderList.reduce(
        (acc, obj) => acc + obj.product_qty * obj.product_price,
        0
      );
    },
  },
  created() {
    this.getOrderList();
    this.itemSum();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.section_payment {
  background-color: $color-main-yellow;
}
.payment_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-right: 10%;
  margin-left: 10%;
  padding: 150px 0;
  @include tb() {
    padding: 50px 0;
    height: 100%;
    display: block;
  }
  input,
  select {
    border: 1px solid $color-aid-green2;
    width: 100%;
    background-color: #fff;
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
    margin: 0.5rem 0;
  }
}
.payment_item_image {
  width: 120px;
  margin: 0 20px;
  img {
    width: 120px;
    height: 120px;
  }
}
.payment_rows_2 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding: 0 1.5rem;
  // height: 100vh;
  @include tb() {
    height: 100%;
    padding: 0;
  }
}

.rwd_payment_col_1 {
  display: none;
  @include tb() {
    display: block;
    height: 100%;
    background-color: #f9f9f9;
    box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
    padding: 0 1rem;
    border-radius: 5px;
  }
  .cart_payment_container {
    height: 100%;
  }
  .rwd_amount {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    .rwd_amount_title {
      font-size: 20px;
    }
  }
}
.payment_col_1 {
  display: grid;
  // height: 100vh;
  grid-template-columns: 1fr;
  padding: 0 2rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
  @include tb() {
    display: none;
  }
  .wrap_cart {
    width: 100%;
    .amount {
      border-bottom: 1px solid gray;
      display: flex;
      height: 15vh;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;
    }
  }
}
.drop_down_img {
  width: 40px;
  display: none;
  @include tb() {
    display: block;
  }
}

.user_input_box .credit_box {
  display: flex;
}

.credit_check_no {
  padding-left: 1rem;
}

.wrap_delivery {
  height: 50vh;
}

.delivery_info {
  display: flex;
  @include tb() {
    display: block;
  }
}

.wrap_payment {
  // height: 30vh;
  @include tb() {
    margin: 50px 0;
    height: 100%;
  }
}
.user_input_box {
  padding: 1rem;
  width: 280px;
  @include tb() {
    width: 100%;
    display: block;
  }
}
.table_tr_grid {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  p {
    padding: 0 5px;
  }
}
.btn_link_group {
  display: flex;
  justify-content: center;
  padding: 40px 0;
  @include tb() {
    padding-top: 40px;
  }
  // @include md(){
  //   padding-top: 40px;
  // }
  .btn_purchase {
    margin-left: 1rem;
  }
}
.para {
  padding: 1rem;
}
</style>
