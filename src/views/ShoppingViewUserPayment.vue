<template>
  <div>
    <div class="container_shop_user_info">
      <div class="rows_2">
        <div class="wrap_deliver">
          <p class="para">配送資訊</p>
          <p class="para">收件人資訊</p>
          <div class="delivery_info">
            <div class="user_input_box">
              <label for=""
                >姓名
                <input type="text" placeholder="營火叢" />
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
          <p class="para">付款資訊</p>
          <p class="para">信用卡資訊</p>
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
            <a href="#">返回購物</a>
            <a href="#">前往結帳</a>
          </div>
        </div>
      </div>
      <div class="col_1">
        <div class="wrap_cart">
          <div class="amount">
            <p>結帳金額</p>
            <p>$1234</p>
          </div>
          <hr />
          <div class="cart_payment_info">
            <img src="./images/prod-bottle.jpg" alt="" />
            <p>商品</p>
            <p>$1234</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}

.container_shop_user_info {
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  height: 100vh;
}

.rows_2 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: 100%;
  padding: 0 3rem;
}

.col_1 {
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 3rem;
  background-color: #f9f9f9;
}

.container_shop_user_info input,
.container_shop_user_info select {
  border: none;
  border-bottom: 1px solid #000;
  width: 100%;
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

.wrap_deliver {
  /* background-color: #fa0; */
  height: 50vh;
}

.delivery_info {
  display: flex;
}

.wrap_payment {
  /* background-color: blanchedalmond; */
  height: 50vh;
}

.wrap_cart {
  /* background-color: gray; */
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
  text-align: end;
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
