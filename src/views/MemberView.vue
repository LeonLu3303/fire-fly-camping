<template>
    <MainHeader/>
    <div class="banner">
        <img src="../assets/images/banner_member.png" alt="banner" />
    </div>
    <section class="member_wrapper">
        <div class="member_tabs member_group">
        <button class="member_tabs mem_button" @click="activeTab = 'memdata'" 
                :class="{mem_btn_active:activeTab === 'memdata'}">會員資料</button>
        <button class="member_tabs mem_button" @click="activeTab = 'booking'"
                :class="{mem_btn_active:activeTab === 'booking'}">營地預定查詢</button>
        <button class="member_tabs mem_button" @click="activeTab = 'product'"
                :class="{mem_btn_active:activeTab === 'product'}">商品訂單查詢</button>
        <button class="member_tabs mem_button" @click="activeTab = 'signout'">
            <router-link to ="/" class="mem_signout">登出</router-link>
        </button>

        <div v-if="activeTab === 'memdata'" class="mem_content">
            <div class="mem_content_group">
                <h3>編輯會員資料</h3>
                <form class="mem_form" action="">
                    <div class="tabcontent_text_group">
                        <div class="tabcontent_txt_group">
                        <ul class="tabcontent_txt">
                            <li><label for="" class="tab_label"><p>會員姓名</p></label></li>                    
                            <li><label for="" class="tab_label"><p>暱稱</p></label></li>
                            <li><label for="" class="tab_label"><p>E-mail</p></label></li>
                            <li><label for="" class="tab_label"><p>電話</p></label>  </li> 
                        </ul>
                        <ul class="tabcontent_txt">
                            <li><input class="tab_input" type="text" placeholder="營火叢" /></li>
                            <li><input class="tab_input" type="text" placeholder="123@xxx.com" /></li>
                            <li><input class="tab_input" type="email" placeholder="123@xxx.com" /></li>
                            <li><input class="tab_input" type="tel" placeholder="01-123456" /></li>
                        </ul>
                    </div>
                    <div class="tabcontent_txt_group">
                        <ul class="tabcontent_txt">
                            <li><label class="tab_label" for=""><p>縣市</p></label></li>
                            <li><label class="tab_label" for=""><p>鄉鎮市區</p></label></li>
                            <li><label class="tab_label" for=""><p>詳細地址</p></label></li>
                        </ul>
                        <ul class="tabcontent_txt">
                            <li><select  class="tab_select" name="" id=""><option value="">桃園市</option></select></li>
                            <li><select class="tab_select" name="" id=""><option value="">中壢市</option></select></li>
                            <li><input  class="tab_input" type="text" placeholder="桃園市中壢市46號9樓" /></li>
                        </ul>
                    </div>
                    </div>
                    <p>選取大頭貼</p>
                    <!-- <ul class="tabcontent_img">
                        <li><img src="../assets/images/report_avatar_1.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_2.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_3.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_4.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_5.png" alt=""></li>
                        <li><img src="../assets/images/report_avatar_6.png" alt=""></li>
                    </ul> -->
                    <ul class="tabcontent_img">
                        <li>
                            <label for="a"><img src="../assets/images/report_avatar_1.png" alt=""></label>
                            <input type="radio" id="a">
                        </li>
                        <li>
                            <label for="b"><img src="../assets/images/report_avatar_2.png" alt=""></label>
                        <input type="radio" id="b">
                        </li>
                        <li>
                            <label for="c"><img src="../assets/images/report_avatar_3.png" alt=""></label>
                        <input type="radio" id="c">
                        </li>
                        <li>
                            <label for="d"><img src="../assets/images/report_avatar_4.png" alt=""></label>
                        <input type="radio" id="d">
                        </li>
                        <li>
                            <label for="e"><img src="../assets/images/report_avatar_5.png" alt=""></label>
                        <input type="radio" id="e">
                        </li>
                        <li>
                            <label for="g"><img src="../assets/images/report_avatar_6.png" alt=""></label>
                        <input type="radio" id="g">
                        </li>
                        
                        
                        
                        
                    </ul>
                    <button class="btn_confirm" type="submit" value="Submit">儲存</button>
                </form>
            </div>
        </div>
            
        <div v-else-if="activeTab === 'booking'" class="mem_content">
          <div class="mem_content_group">
                <div class="tabcontent_booking_search">
                    <input type="text" class="mem_search"><input type="button" value="搜尋" class="btn_purchase">
                </div>
                <div class="tabcontent_booking_info">
                    
                </div>
            </div>
        </div>

        <div v-else class="mem_content">
          <div class="mem_content_group">
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
        width: 80%;
        margin: auto;
    }
    .member_tabs{
        color: #168D80;
        text-align: center;
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
        &:nth-child(4){
            border-radius: 0 5px 5px 0;
            padding: 0;
        }
        .mem_signout{
            color:$color-str-green;
            display: inline-block;
            padding: 20px 30px;
        }
        
    }
    .mem_content_group{
        padding: 70px 0;
        h3{
            color:$color-str-green;
            margin-bottom: 20px;
        }
    }
    .mem_content{
        background-color: $color-basic-White;
        border-radius:10px;
        box-shadow: 0px 0px 4px 3px rgba($color:$color-basic-gray1, $alpha: .3);
    }
     .tabcontent_txt{
         color: $color-str-green;
     }
    .mem_search{
        width: 200px;
        border-radius: 10px;
        padding: 5px;
        border: 1px solid #4D8084;
        }
    .mem_form{
        width: 100%;
        .tabcontent_text_group{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            .tabcontent_txt_group{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;
            .tabcontent_txt{
                padding: 0 10px;
                text-align: start;
                li{
                padding: 8px 0;
                }
            }   
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
            margin:15px ;
        }
    }
    .btn_confirm{
        cursor: pointer;
    }
    .mem_btn_active{
        background-color: #168D80;
        color: #ffff;
    }
    .tab_label{
        p{
            font-weight: 600;
        }
    }
</style>