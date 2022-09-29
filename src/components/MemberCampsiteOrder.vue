<template>
    <div class="mem_content_group">
        <div class="tabcontent_booking_search">
            <input type="text" class="input_box input_spacing"><input type="button" value="搜尋" class="btn_purchase">
        </div>
        <div class="tabcontent_booking_info">
            <ul class="booking_order_title">
                <li>預定編號</li>
                <li>日期</li>
                <li>總金額</li>
                <li>預定狀態</li>
                <li></li>
            </ul>
        <div class="tabcontent_booking_info_tab">
            <input type="radio" id="booking1" name="orders" class="booing_input">
            <label class="info_tab" for="booking1">
                <ul class="booking_order_info">
                    <li>{{title}}</li>
                    <li>{{date}}</li>
                    <li>{{sum}}</li>
                    <li>{{state}}</li>
                </ul>
            </label>
            <div class="info_tab_content">
                <h4>營地預定訂單明細</h4>
                <ul>
                    <li>下訂日期</li>
                    <li>預定地區</li>
                    <li>個別營帳編號</li>
                    <li>預訂帳篷類型</li>
                    <li>預訂餐點類型</li>
                    <li>預定裝備類型</li>
                    <li>預訂活動類型</li>
                </ul>
                <ul>
                    <li>{{orderdate}}</li>
                    <li>{{area}}</li>
                    <li>{{tentNo}}</li>
                    <li>{{tentStyle}}</li>
                    <li>{{food}}</li>
                    <li>{{equip}}</li>
                    <li>{{activity}}</li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
        <div class="tabcontent_booking_info_tab">
            <input type="radio" id="booking2" name="orders" class="booing_input">
            <label class="info_tab" for="booking2">
                <ul class="booking_order_info">
                    <li>{{title2}}</li>
                    <li>{{date2}}</li>
                    <li>{{sum2}}</li>
                    <li>{{state2}}</li>
                </ul>
            </label>
            <div class="info_tab_content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores eligendi. Repellendus doloribus voluptatem, incidunt voluptatibus, corrupti veniam, tenetur nemo tempore facere quasi magnam ipsam quaerat quae repudiandae aliquam enim!
            </div>
        </div>
        <div class="tabcontent_booking_info_tab">
            <input type="radio" id="booking3" name="orders" class="booing_input">
            <label class="info_tab" for="booking3">
                <ul class="booking_order_info">
                    <li>{{title3}}</li>
                    <li>{{date3}}</li>
                    <li>{{sum3}}</li>
                    <li>{{state2}}</li>
                </ul>
            </label>
            <div class="info_tab_content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, asperiores eligendi. Repellendus doloribus voluptatem, incidunt voluptatibus, corrupti veniam, tenetur nemo tempore facere quasi magnam ipsam quaerat quae repudiandae aliquam enim!
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
                title:'19203462889269',
                title2:'19203462889270',
                title3:'19203462889245',
                date:'2022-10-07至2022-10-10',
                date2:'2022-05-07至2022-05-13',
                date3:'2022-01-03至2022-01-06',
                sum:'$24000',
                sum2:'$43000',
                sum3:'$20000',
                state:'未付款',
                state2:'已付款',
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
        width: 25%;
    }
    li:nth-child(2){
        width: 35%;
    }
    li:nth-child(3){
        width: 20%;
    }
    li:nth-child(4){
        width: 15%;
    }
    li:nth-child(5){
        width: 5%;
    }   
}
.tabcontent_booking_search{
    text-align: end;
    width: 95%;
    margin-bottom: 30px;
    .input_spacing{
        margin: 0 10px;
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
    }
}
.tabcontent_booking_info_tab{
    width: 100%;
    color: rgb(130, 55, 55);
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
        width: 25%;
        }
        li:nth-child(2){
            width: 35%;
        }
        li:nth-child(3){
            width: 20%;
        }
        li:nth-child(4){
            width: 15%;
        }
        li:nth-child(5){
            width: 5%;
        }    
    }
    .info_tab_content {
        max-height: 0;
        padding: 0 1em;
        color: $color-main-green;
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
</style>