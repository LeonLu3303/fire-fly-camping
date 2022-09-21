<template>
    <MainHeader/>
    <div class="banner">
        <img src="../assets/images/banner_member.png" alt="banner" />
    </div>
    <section class="member_wrapper">
        <div class="member_tabs member_group">
        <button
          class="member_tabs mem_button"
          @click="activeTab = 'memdata'" >
          會員資料
        </button>
        <button
          class="member_tabs mem_button"
          @click="activeTab = 'booking'">
          營地預定查詢
        </button>
        <button
          class="member_tabs mem_button"
          @click="activeTab = 'product'">
          商品訂單查詢
        </button>
        <div v-if="activeTab === 'memdata'" class="tabcontent mem_content">
            <div class="tabcontent_group">
                <form class="mem_form" action="">
                    <div class="tabcontent_txt_group">
                        <ul class="tabcontent_txt">
                            <li><label for="" class="tab_label">暱稱</label>  </li>                    
                            <li><label for="" class="tab_label">E-mail</label></li>
                            <li><span class="mem_psw" >密碼</span></li>
                            <li><label for="" class="tab_label">電話</label>  </li> 
                        </ul>
                        <ul class="tabcontent_txt">
                            <li><input class="tab_input" type="text" placeholder="營火叢" /></li>
                            <li><input class="tab_input" type="email" placeholder="123@xxx.com" /></li>
                            <li><router-link to="#">重設密碼</router-link></li>
                            <li><input class="tab_input" type="tel" placeholder="01-123456" /></li>
                        </ul>
                        <ul class="tabcontent_txt">
                            <li><label class="tab_label" for="">縣市</label></li>
                            <li><label for="">鄉鎮市區</label></li>
                            <li><label for="">詳細地址</label></li>
                        </ul>
                        <ul class="tabcontent_txt">
                            <li><select  class="tab_select" name="" id=""><option value="">桃園市</option></select></li>
                            <li><select class="tab_select" name="" id=""><option value="">中壢市</option></select></li>
                            <li><input  class="tab_input" type="text" placeholder="桃園市中壢市46號9樓" /></li>
                        </ul>
                    </div>
                    <ul class="tabcontent_img">
                        <li>選取大頭貼</li>
                        <li><img src="../assets/images/report_avatar_1.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_2.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_3.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_4.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_5.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_6.png" alt=""></li>
                    </ul>
                    <button class="btn_confirm" type="submit" value="Submit">儲存</button>
                </form>
                
            </div>
        </div>
            
        <div v-else-if="activeTab === 'booking'" class="tabcontent mem_content">
          <div class="tabcontent_group">
                <div class="tabcontent_txt">
                    <h3>456</h3>
                    <h4>123</h4>
                    <p>123</p>
                </div>
            </div>
        </div>
        <div v-else class="tabcontent mem_content">
          <div class="tabcontent_group">
                <div class="tabcontent_txt">
                    <h3>789</h3>
                    <h4>123</h4>
                    <p>123</p>
                </div>
            </div>
        </div>
      </div> 
    </section>
    <MainFooter/>
</template>
<script>
import MainHeader from '../components/MainHeader.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
    components:{
        MainHeader,
        MainFooter
    },
    data(){
        return{
            activeTab: 'memdata',
        }
    }
    };
    </script>
<style lang="scss">
    @import '../assets/scss/style.scss';
    .member_wrapper{
        width: 100%;
        padding: 150px 0;
    }
    .member_group{
        max-width: 1296px;
        margin: auto;
    }
    .member_tabs{
        color: #168D80;
        text-align: center;
        &:focus{
        background-color: $color-str-green ;
        color: #ffff;
        }
    }
    
    .mem_button{
        background-color: #ffff;
        border: none;
        padding: 20px 30px;
        cursor: pointer;
        border: 1px solid $color-str-green;
        margin-bottom: 30px ;
        font-size: $title_h3;
        font-weight: 600;
        &:nth-child(1){
            border-radius: 5px 0 0 5px ;
        }
        &:nth-child(3){
            border-radius: 0 5px 5px 0;
        }
        
    }
    .mem_content{
        background-color: #ffff;
        border-radius:10px;
        box-shadow: 0px 0px 4px 3px rgba($color:$color-basic-gray1, $alpha: .3);
    }
    .tabcontent_txt{
        color: #168D80;
        text-align: start;
        li a{
            color: #168D80;
        }
        li .tab_label,li .tab_input, li .tab_select{
            margin-bottom:0; 
        }
        
    }
    .mem_form{
        width: 100%;
        .tabcontent_txt_group{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            margin-bottom: 20px; 
            .tabcontent_txt li{
                padding: 10px 0;
            }
        }
        .tabcontent_img{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 20px; 
        }
        .tabcontent_img li{
            width: 100px;
            margin:10px ;
        }
    }
</style>