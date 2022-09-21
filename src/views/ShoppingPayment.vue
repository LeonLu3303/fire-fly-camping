<template>
  <MainHeader></MainHeader>
    <img src="../assets/images/banner_shop.png" alt="">
    <div class="payment_container">
      <div class="payment_rows_2">
        <div class="wrap_delivery">
          <h3 class="para">配送資訊</h3>
          <h4 class="para">收件人資訊</h4>
          <div class="delivery_info">
            <div class="user_input_box">
              <label for="name"
                >姓名
                <input type="text" id="name" placeholder="營火叢" />
              </label>
              <label for=""
                >電話
                <input type="tel" placeholder="01-123456" />
              </label>
              <label for=""
                >E-mail
                <input type="email" placeholder="123@xxx.com" />
              </label>
            </div>
            <div class="user_input_box">
              <label for=""
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
          </div>
        </div>

        <div class="wrap_payment">
          <h3 class="para">付款資訊</h3>
          <h4 class="para">信用卡資訊</h4>
          <div class="payment_info">
            <div class="user_input_box">
              <label
                >持卡人姓名
                <input type="text" placeholder="營火叢" />
              </label>
              <label
                >信用卡號
                <input type="text" placeholder="1111-1234-1234" />
              </label>
              <div class="credit_box">
                <div class="credit_info">
                  <label
                    >到期日
                    <input type="text" placeholder="08/29" />
                  </label>
                </div>
                <div class="credit_check_no">
                  <label
                    >檢核碼
                    <input type="text" placeholder="888" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="btn_link_group">
            <router-link to="/Shopping"><button class="btn_return">返回購物</button></router-link>
            <router-link to="#" ><button class="btn_purchase">確認結帳</button></router-link>
          </div>
        </div>
      </div>
      <div class="payment_col_1">
        <div class="wrap_cart">
          <div class="amount">
            <h3>結帳金額</h3>
            <h3>$1234</h3>
          </div>
          <hr />
          <div class="cart_payment_info">
            <img src="../assets/images/shopping_prod_6.jpg" alt="" />
            <p>商品</p>
            <p>$1234</p>
          </div>
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

}
</script>
<style lang="scss">
@import "../assets/scss/style.scss";

.payment_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-right: 10%;
  margin-left: 10%;
  padding-top: 150px;
  padding-bottom: 150px;
  input, select {
    border: 1px solid $color-aid-green2;
  width: 100%;
  background-color: #fff;
  padding: 0.5rem 0;
  border-radius: 10px;
  margin: 0.5rem 0;
  }
}

.payment_rows_2 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  padding: 0 3rem;
}

.payment_col_1 {
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 3rem;
  background-color: #f9f9f9;
  border-radius: 5px;
}

.user_input_box {
  padding: 1rem;
  width: 250px;
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
}

.wrap_payment {
  height: 50vh;
}

.cart_payment_info,
.amount {
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
}

.cart_payment_info img {
  width: 80px;
}

.btn_link_group {
  display: flex;
  justify-content: flex-end;
  .btn_purchase{
    margin-left: 1rem;
  }

}

input,
label,
select {
  margin-bottom: 2rem;
}

.para {
  padding: 1rem;
}
</style>
