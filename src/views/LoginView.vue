<template>
    <MainHeader/>
    <section class="wrap_login">
        <div class="container" 
             id="login-box"
             :class="{right_panel_active:index === 1}">
            <div class="form-container sign-up-container">
                <form>
                    <h2 class="title">註冊</h2>           
                    
                    <div class="txtb" 
                         id="register_id_block"
                         :class="{focus:register_id_block ===1}"
                         >
                        <input  type="email" 
                                name="register_id" 
                                id="register_id"
                                @focus="register_id_block =1">
                        <label for="register_id">帳號</label>
                        <div id="check_id" class="btn_submit">
                            檢查帳號
                        </div>
                    </div>
                    <div class="txtb"
                         :class="{focus: register_psw ===2}"
                         >
                        <input  type="password" 
                                name="register_psw" 
                                id="register_psw"
                                @focus="register_psw =2"
                                >
                        <label for="register_psw">密碼</label>
                    </div>
                    <div class="txtb"
                         :class="{focus: register_check_psw ===3}">
                        <input  type="password" 
                                name="register_check_psw" 
                                id="register_check_psw"
                                @focus="register_check_psw =3"
                                >
                        <label for="register_check_psw">確認密碼</label>
                    </div>            
                    <div class="txtb"
                         :class="{focus: register_mem_email ===4}">
                        <input  type="text" 
                                name="register_mem_email" 
                                id="register_mem_email"
                                @focus="register_mem_email =4"
                                >
                        <label for="register_mem_email">信箱</label>
                        <div id="check_email" class="btn_submit">
                            檢查信箱
                        </div>
                    </div>            
                    <div class="txtb"
                         :class="{focus: register_mem_name ===5}">
                        <input  type="text" 
                                name="register_mem_name" 
                                id="register_mem_name"
                                @focus="register_mem_name =5"
                                >
                        <label for="register_mem_name">姓名</label>
                    </div>            
                    <div class="txtb"
                         :class="{focus: register_nickname ===6}">
                        <input  type="text" 
                                name="register_nickname" 
                                id="register_nickname"
                                @focus="register_nickname =6"
                                >
                        <label for="register_nickname">暱稱</label>
                    </div>    
                    <div class="txtb"
                         :class="{focus: register_phone ===7}">
                        <input  type="text" 
                                name="register_phone" 
                                id="register_phone"
                                @focus="register_phone =7">
                        <label for="register_phone">電話</label>
                    </div>           
                    <div class="txtb" id="city">
                        <select name="register_city" id="register_city">
                            <option value="">請選擇居住縣市</option>
                            <option value="基隆市">基隆市</option>
                            <option value="台北市">台北市</option>
                            <option value="新北市">新北市</option>
                            <option value="桃園市">桃園市</option>
                            <option value="新竹縣">新竹縣</option>
                            <option value="新竹市">新竹市</option>
                            <option value="苗栗縣">苗栗縣</option>
                            <option value="台中市">台中市</option>
                            <option value="彰化縣">彰化縣</option>
                            <option value="雲林縣">雲林縣</option>
                            <option value="嘉義縣">嘉義縣</option>
                            <option value="嘉義市">嘉義市</option>
                            <option value="台南市">台南市</option>
                            <option value="高雄市">高雄市</option>
                            <option value="屏東縣">屏東縣</option>
                            <option value="宜蘭縣">宜蘭縣</option>
                            <option value="花蓮縣">花蓮縣</option>
                            <option value="台東縣">台東縣</option>
                            <option value="澎湖縣">澎湖縣</option>
                            <option value="連江縣">連江縣</option>
                            <option value="金門縣">金門縣</option>
                        </select>
                        <label for="register_city">居住縣市</label>
                    </div>        
                          
                    <div class="txtb"
                         :class="{focus: register_addr ===8}">
                        <input  type="text" 
                                name="register_addr" 
                                id="register_addr"
                                @focus="register_addr =8"
                                >
                        <label for="register_addr">地址</label>
                    </div>            
                    <div class="login_btn">
                        <router-link to ="/Member" class="btn_submit">
                            註冊
                        </router-link>
                    </div>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h2 class="title">登入</h2>
                    <div class="txtb"
                         :class="{focus: login_id === 9}">
                        <input  type="text" 
                                name="login_id" 
                                id="login_id"
                                @click="login_id =9"
                                >
                        <label for="login_id">帳號</label>
                    </div>
                    <div class="txtb"
                         :class="{focus: login_psw === 10}">
                        <input  type="password" 
                                name="login_psw" 
                                id="login_psw" 
                                @focus="login_psw =10"
                                >
                        <label for="login_psw">密碼</label>
                    </div>
                    <a href="#" id="forgot_psw">忘記密碼</a>
                    <div class="login_btn">
                        <router-link to ="/Member" class="btn_submit">
                            登入
                        </router-link>
                    </div>
                </form>
            </div>
        
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h2 class="title">已經有帳號了？</h2>
                        <p>那還等什麼？馬上登入吧！</p>
                        <button class="btn_login_register" 
                                id="signIn" 
                                @click="show_login(index)">
                            馬上登入
                        </button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h2 class="title">沒有帳號？</h2>
                        <p>立即註冊加入我們，和我們一起體驗露營吧！</p>
                        <button class="btn_login_register" 
                                id="signUp"
                                @click="show_register(index)">
                            立即註冊
                        </button>
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

    export default{
        components:{
            MainHeader,
            MainFooter
        },
        data(){
                return{
                index:0,
                focus_index:0,
                register_id_block:0,
                register_psw:0,
                register_check_psw:0,
                register_mem_email:0,
                register_mem_name:0,
                register_nickname:0,
                register_phone:0,
                register_addr:0,
                login_id:0,
                login_psw:0,
                // focus_index:{
                //     register_id_block: 0,
                //     input1: 0,
                //     input1: 0,
                //     input1: 0,
                //     input1: 0,
                // }
                }
            },
            methods:{
                show_login(index){
                    this.index -= 1;
                    console.log(index);
                },
                show_register(index){
                    this.index += 1;
                    console.log(index);
                },
                focus_txtb(focus_index){
                    // this.focus_index += 1;
                    console.log(focus_index);
                },
                // blur_txtb(focus_index){
                //     this.focus_index -= 1;
                //     console.log(focus_index);
                // }
            }
    }
    
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base/_reset.scss';
    @import '../assets/scss/style';
    @import '../assets/scss/page/_LoginView.scss';
</style>