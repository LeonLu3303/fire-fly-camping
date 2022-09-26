<template>
  <MainHeader></MainHeader>
    <div class="banner">
        <img src="../assets/images/main/banner_shop.png" alt="banner">
    </div>
    <div class="payment_container">
      <div class="payment_rows_2">
        <div class="wrap_delivery">
          <h3 class="para">配送資訊</h3>
          <h4 class="para">收件人資訊</h4>
          <div class="delivery_info">
            <div class="user_input_box">
              <label for="name"
                >姓名
                <input type="text" id="name" placeholder="營火叢" required/>
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
            <h3>${{itemTotal}}</h3>
            </div>
          
          <div class="cart_payment_container">
            <table class="cart_payment_info" v-for="(item) in orderList" :key="'item' + item.title">
            <tbody >
              <tr class="table_tr_grid" >
                <td class="payment_item_image"><img :src="require(`../assets/images/shop/shopping_prod_${item.id}.jpg`)" alt="" /></td>
                <td><p>{{item.title}}</p><p>數量:{{item.qty}}</p><p>單價:${{item.price}}</p><p>小計:${{item.qty * item.price}}</p></td>
              </tr>
            </tbody>
          </table>
          </div>
          
        </div>
      </div>
    </div>
<MainFooter></MainFooter>
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
   components:{
    MainHeader,
    MainFooter,
  },
  date(){
    return {
      orderList: [],
      itemTotal: 0,
    }
  },
  methods: {
    getOrderList() {
      const tempOrderList = localStorage.getItem('cart')
      if (!tempOrderList || tempOrderList === 'undefined') return
      this.orderList = JSON.parse(tempOrderList)
    },
    itemSum(){
      this.itemTotal = this.orderList.reduce((acc, obj) => acc + (obj.qty * obj.price), 0)
    }
  },
  created() {
    this.getOrderList()
    this.itemSum()
  }
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
    box-shadow: 4px 5px 10px 0px rgb(59 57 57 / 10%);
    width: 100%;
    background-color: #fff;
    padding: 0.5rem 0.5rem;
    border-radius: 10px;
    margin: 0.5rem 0;
  }
}
.payment_item_image{
  width: 120px;
  margin: 0 20px;
  img{
    width: 120px;
    height: 120px;
  }
}
.payment_rows_2 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding: 0 3rem;
  height: 100vh;
}
.cart_payment_container{
  height: 85vh;
  overflow: scroll;
}
.payment_col_1 {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  padding: 0 2rem;
  background-color: #f9f9f9;
  border-radius: 5px;
  .wrap_cart{
    width: 100%;
    .amount{
      border-bottom: 1px solid gray;
      display: flex;
      height: 15vh;
      justify-content: space-between;
      align-items: center;
      padding: 40px 0;
    }
  }
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

.table_tr_grid{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  td{
    p{
      padding: 0 5px;
    }
  }
}

.btn_link_group {
  display: flex;
  justify-content: flex-end;
  padding-top: 60px;
  .btn_purchase{
    margin-left: 1rem;
  }

}
.para {
  padding: 1rem;
}
</style>
