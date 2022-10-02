<template>
    <div class="mem_content_group">
        <div class="tabcontent_product_search">
            <input type="text" class="input_box input_spacing"><input type="button" value="搜尋" class="btn_purchase">
        </div>
        <div class="tabcontent_product_info">
            <ul class="product_order_title">
                <li>訂單編號</li>
                <li>下單時間</li>
                <li>付款狀態</li>
                <li>&emsp;</li>
            </ul>
        <div class="tabcontent_product_info_tab" v-for="item in orders" :key="item.id">
            <input type="radio" name="orders" class="product_input" :id="`${item.id}`">
            <label class="info_tab" :for="`${item.id}`" >
                <ul class="product_order_info">
                    <li>{{item.no}}</li>
                    <li>{{item.date}}</li>
                    <li>{{item.payment}}</li>
                </ul>
            </label>
            <div class="info_tab_content">
                <h4>商品訂單明細</h4>
                <div class="info_tab_contents">
                    <ul class="info_tab_contents_title">
                        <li>商品名稱</li>
                        <li>數量</li>
                        <li>金額</li>
                    </ul>
                    <ul>
                        <li>{{item.name[0]}}</li>
                        <li>{{item.qty[0]}}</li>
                        <li>{{item.price[0]}}</li>
                    </ul>
                    <ul>
                        <li>{{item.name[1]}}</li>
                        <li>{{item.qty[1]}}</li>
                        <li>{{item.price[1]}}</li>
                    </ul> 
                    <ul class="info_tab_contents_sum">
                        <li>&emsp;</li>
                        <li>總金額</li>
                        <li>$<span>{{item.sum}}</span>元</li>
                    </ul> 
                    <p class="delivery_location">配送地點: <span>{{item.place}}</span></p>
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
                      id:'product1',
                      no: '3462889269',
                      date: '2022-10-07 19:23',
                      sum:'13400',
                      payment:'未付款',
                      name:['營火叢多喝水瓶','營火叢不怕風吹帽'],
                      qty:['1','4'],
                      price:['2680','2680'],
                      place:'桃園市中壢區復興路46號9樓'
                    },
                    {
                      id:'product2',
                      no: '3462889459',
                      date: '2022-09-07 08:23',
                      sum:'10720',
                      payment:'已付款',
                      name:['營火叢金勾杯','營火叢T-SHIRT'],
                      qty:['2','2'],
                      price:['2680','2680'],
                      place:'桃園市中壢區復興路46號9樓'
                      
                    },
                    {
                      id:'product3',
                      no: '3462889249',
                      date: '2022-05-07 04:23',
                      sum:'5360',
                      payment:'已付款',
                      name:['營火叢漁夫帽','營火叢帽T'],
                      qty:['1','1'],
                      price:['2680','2680'],
                      place:'桃園市中壢區復興路46號9樓'
                      
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
.product_order_title{
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
.tabcontent_product_search{
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
.tabcontent_product_info{
    width: 90%;
    margin: auto;
    border-radius: 3px;
    overflow: hidden;
    border: 2px solid $color-str-hov-green;
    .info_tab_content{
        border-bottom: 1px solid $color-str-hov-green;
        padding: 10px 0;
    }
}
.tabcontent_product_info_tab{
    width: 100%;
    color:$color-basic-gray3;
    overflow: hidden;
    .info_tab{
        background-color: #ffffff;
        padding: 10px 0;
        cursor: pointer;
        .product_order_info{
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
        max-height: 0;
        padding: 0 16px;
        color: $color-basic-gray3;
        background: white;
        transition: all .35s;
        h4{
            color:$color-str-hov-green ;
        }
    }
}
.product_input:checked {
  + .info_tab {
    background-color: $color-main-yellow;
    .product_order_info{
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
.product_input{
    display: none;
}
.info_tab_contents{
    width: 80%;
    margin: auto;
    padding: 40px 0;
    @include md(){
        width: 100%;
        font-size: 15px;
        }  
    ul{
        display: flex;
        padding: 10px 0;
        li:nth-child(1){
            width: 50%;
        }
        li:nth-child(2){
            width: 20%;
        }
        li:nth-child(3){
            width: 30%;
        }
    } 
    .info_tab_contents_title, .info_tab_contents_sum{
        border-top: 1px solid $color-str-hov-green;
        border-bottom: 1px solid $color-str-hov-green;
        color: $color-basic-gray3;
        font-weight: 600;
    }
    .delivery_location{
        text-align: left;
        padding: 10px 0;
        @include md(){
        font-size: 15px;
        } 
    }        
}
</style>