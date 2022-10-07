<template>
    <div class="mem_content_group">
        <div class="tabcontent_booking_search">
            <input type="text" class="input_box input_spacing"><input type="button" value="搜尋" class="btn_purchase">
        </div>
        <div class="tabcontent_booking_info">
            <ul class="booking_order_title">
                <li>預定編號</li>
                <li>日期</li>
                <li>預定狀態</li>
                <li>&emsp;</li>
            </ul>
        <div class="tabcontent_booking_info_tab" v-for="item in orders" :key="item.id">
            <input type="radio" name="orders" class="booing_input" :id="`${item.id}`">
            <label class="info_tab" :for="`${item.id}`" >
                <ul class="booking_order_info">
                    <li>{{item.no}}</li>
                    <li><span>{{item.checkinDate}}</span>至{{item.checkoutDate}}<span></span></li>
                    <li>{{item.state}}</li>
                </ul>
            </label>
            <div class="info_tab_content">
                <h4>營地預定訂單明細</h4>
                <div class="info_tab_contents">
                    <ul class="info_tab_contents_title">
                        <li>下訂日期</li>
                        <li>預定地區</li>
                        <li>個別營帳編號</li>
                        <li>預訂帳篷類型</li>
                        <li>預訂餐點類型</li>
                        <li>預定裝備類型</li>
                        <li>預訂活動類型</li>
                        <li>訂單總金額</li>
                    </ul>
                    <ul>
                        <li>{{item.orderdate}}</li>
                        <li>{{item.area}}</li>
                        <li>{{item.tentNo}}</li>
                        <li>{{item.tentStyle}}</li>
                        <li>{{item.food}}</li>
                        <li>{{item.equip}}</li>
                        <li>{{item.activity}}</li>
                        <li>&emsp;</li>
                    </ul>
                    <ul class="price">
                        <li><span>{{item.tentprice}}</span>元</li>
                        <li><span>{{item.foodprice}}</span>元</li>
                        <li><span>{{item.equipprice}}</span>元</li>
                        <li><span>{{item.activityprice}}</span>元</li>
                        <li>$<span>{{item.sum}}</span>元</li>
                    </ul>
                </div>
                <div class="cancel_order">
                    <button type="botton" class="btn_submit btn_cancel">取消訂單</button>
                </div>
             </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MemberCampsiteOrder",
        data(){
            return {
                orders: [
                    {
                      id:'booking1',
                      no: '3462889269',
                      checkinDate: '2022-10-07',
                      checkoutDate:'2022-10-10',
                      sum:'24000',
                      state:'未付款',
                      orderdate: '2022-09-28',
                      area: '冰雪奇緣',
                      tentNo:'501',
                      tentStyle:'豪華6人帳篷',
                      food:'奢華海陸套餐',
                      equip:'卡拉ok',
                      activity:'冰上釣魚',
                      tentprice:'5600',
                      foodprice:'3000',
                      equipprice:'3000',
                      activityprice:'5000'

                    },
                    {
                      id:'booking2',
                      no: '3462889270',
                      checkinDate: '2022-05-07',
                      checkoutDate:'2022-05-13',
                      sum:'14000',
                      state:'已付款',
                      orderdate: '2022-05-01',
                      area: '冰雪奇緣',
                      tentNo:'402',
                      tentStyle:'豪華6人帳篷',
                      food:'未填寫',
                      equip:'卡拉ok',
                      activity:'冰上釣魚',
                      tentprice:'5600',
                      foodprice:'0',
                      equipprice:'3000',
                      activityprice:'5000'
                    },
                    {
                      id:'booking3',
                      no: '3462889245',
                      checkinDate: '2022-01-03',
                      checkoutDate:'2022-01-06',
                      sum:'14500',
                      state:'已完成',
                      orderdate: '2022-01-01',
                      area: '荒野峽谷',
                      tentNo:'402',
                      tentStyle:'豪華6人帳篷',
                      food:'未填寫',
                      equip:'未填寫',
                      activity:'熱氣球',
                      tentprice:'5600',
                      foodprice:'0',
                      equipprice:'0',
                      activityprice:'5000'
                    }              
                ], 
            }
        }
    }
</script>

<style  lang="scss" scoped>
@import '@/assets/scss/style.scss';
.mem_content_group{
    padding: 70px 0;
}
.booking_order_title{
    width: 100%;
    display: flex;
    color:$color-basic-gray4 ;
    font-size: 20x;
    font-weight: 700;
    padding: 10px;
    background-color:$color-main-yellow ;
    border-bottom: 2px solid $color-str-hov-green;
    li:nth-child(1){
        width: 32%;
    }
    li:nth-child(2){
        width: 32%;
    }
    li:nth-child(3){
        width: 26%;
    }
    li:nth-child(4){
        width: 10%;
    }
}
.tabcontent_booking_search{
    text-align: end;
    width: 95%;
    margin-bottom: 30px;
    @include md(){
        width: 90%;
        } 
    .input_spacing{
        margin: 0 10px;
    }
    .btn_purchase{
        @include md(){
        width: 80px;
        padding: 5px 0;
        }   
    }
}
.tabcontent_booking_info{
    width: 90%;
    margin: auto;
    border-radius: 3px;
    overflow: hidden;
    border: 2px solid $color-str-hov-green; 
    .info_tab_content{
        border-bottom: 1px solid $color-str-hov-green;
        padding: 10px 0;
        h4{
            color:$color-str-hov-green ;
        }
    }
}
.tabcontent_booking_info_tab{
    width: 100%;
    color: $color-basic-gray3;
    overflow: hidden;
    .info_tab{
        background-color: #ffffff;
        padding: 10px 0;
        cursor: pointer;
        .booking_order_info{
            display: flex;
            padding: 10px;
            &:hover{
                background-color: #e0f1ec;
            }
            &::after {
                content: "\276F";
                width: 16px;
                height: 16px;
                transition: all .35s;
            }
        }
        li:nth-child(1){
            width: 32%;
            @include md(){
                font-size: 14px;
            }
        }
        li:nth-child(2){
            width: 32%;
            @include md(){
                font-size: 14px;
                padding: 0 5px;
            } 
        }
        li:nth-child(3){
            width: 26%;
            @include md(){
                font-size: 14px;
            }
        }
        li:nth-child(4){
            width: 10%;
        }
    }
    .info_tab_content {
        margin: auto;
        max-height: 0;
        padding: 0 16px;
        color: $color-basic-gray3;
        background: white;
        transition: all .35s;
    }
}
.booing_input:checked {
  + .info_tab {
    background-color: $color-main-yellow;
    .booking_order_info{
        background-color: $color-main-yellow;
        &::after {
        transform: rotate(90deg);
        }
    }  
  }
  ~ .info_tab_content {
    max-height: 100vh;
    padding: 1em;
  }
}
.booing_input{
    display: none;
}
.info_tab_contents{
    display: flex;
    text-align: left;
    align-items: flex-end;
    width: 80%;
    margin: auto;
    @include md(){
        width: 100%;
        font-size: 15px;
        }  
    ul{
        padding: 45px 0;
    }
    ul li{
        padding: 6px 15px;
        @include md(){
            padding: 5px 5px;
        }  
    }
    .info_tab_contents_title{
        font-weight: 700;
    }
    .price{
        text-align: right;
    }
}
.cancel_order{
    width: 80%;
    margin: auto;
    text-align: right;
    padding: 0 15px;
    margin-bottom: 20px;
    @include md(){
        width: 0%;   
    }
    .btn_cancel{
        width: 100px;
        font-size: 16px;
        border-radius: 30px;
        border: 2px solid $color-str-green;
        padding: 10px 0;
        @include md(){
            width: 80px;
            padding: 5px 0;
            font-size: 14px;
        }
    }
}
</style>