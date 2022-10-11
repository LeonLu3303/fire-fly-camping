<template>
    <MainHeader/>
    <section class="wrap_login">
        <!-- 正常版 -->
        <div class="container" 
             id="login-box"
             :class="{right_panel_active:index === 1}">
            <div class="form-container sign-up-container">
                <form action="">
                    <h2 class="title">註冊</h2>           
                     
                    <div class="txtb"
                         id="register_id_block"
                         :class="{focus:register_id_block ===1}"
                         >
                        <input  type="email" 
                                name="register_id" 
                                id="register_id"
                                v-model="id"
                                maxlength="20"
                                @focus="register_id_block =1"
                                @blur="register_id_block =0"
                                >
                        <label for="register_id">帳號</label>
                        <div id="check_id" class="btn_submit" @click="checkId">
                            檢查帳號
                        </div>
                    </div>
                    <div class="txtb"
                         :class="{focus: register_psw ===2}"
                         >
                        <input  type="password" 
                                name="register_psw" 
                                id="register_psw"
                                v-model="psw"
                                maxlength="20"
                                @focus="register_psw =2"
                                @blur="register_psw =0"
                                >
                        <label for="register_psw">密碼</label>
                    </div>
                    <div class="txtb"
                         :class="{focus: register_check_psw ===3}">
                        <input  type="password" 
                                name="register_check_psw" 
                                id="register_check_psw"
                                v-model="checkpsw"
                                maxlength="20"
                                @focus="register_check_psw =3"
                                @blur="register_check_psw =0"
                                >
                        <label for="register_check_psw">確認密碼</label>
                    </div>            
                    <div class="txtb"
                         :class="{focus: register_mem_email ===4}">
                        <input  type="text" 
                                name="register_mem_email" 
                                id="register_mem_email"
                                v-model="email"
                                maxlength="100"
                                @focus="register_mem_email =4"
                                @blur="register_mem_email =0"
                                >
                        <label for="register_mem_email">信箱</label>
                    </div>            
                    <div class="txtb"
                         :class="{focus: register_mem_name ===5}">
                        <input  type="text" 
                                name="register_mem_name" 
                                id="register_mem_name"
                                v-model="name"
                                maxlength="100"
                                @focus="register_mem_name =5"
                                @blur="register_mem_name =0"
                                >
                        <label for="register_mem_name">姓名</label>
                    </div>            
                    <div class="txtb"
                         :class="{focus: register_nickname ===6}">
                        <input  type="text" 
                                name="register_nickname" 
                                id="register_nickname"
                                v-model="nick_name"
                                maxlength="20"
                                @focus="register_nickname =6"
                                @blur="register_nickname =0"
                                >
                        <label for="register_nickname">暱稱</label>
                    </div>    
                    <div class="txtb"
                         :class="{focus: register_phone ===7}">
                        <input  type="text" 
                                name="register_phone" 
                                id="register_phone"
                                v-model="phone"
                                maxlength="30"
                                @focus="register_phone =7"
                                @blur="register_phone =0"
                                >
                        <label for="register_phone">電話</label>
                    </div>           
                    <div class="txtb" id="city">
                        <div class="register_city_title">
                            居住縣市
                        </div>
                        <select name="register_city" id="register_city" v-model="city">
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
                        <label for="register_city" id="register_city_title_label">居住縣市</label>
                    </div>        
                          
                    <div class="txtb"
                         :class="{focus: register_addr ===8}">
                        <input  type="text" 
                                name="register_addr" 
                                id="register_addr"
                                v-model="addr"
                                maxlength="300"
                                @focus="register_addr =8"
                                @blur="register_addr =0"
                                >
                        <label for="register_addr">地址</label>
                    </div>            
                    <div class="login_btn btn_submit" @click="doRegister">
                            註冊
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
                                v-model="id"
                                @click="login_id =9"
                                @blur="login_id =0"
                                >
                        <label for="login_id">帳號</label>
                    </div>
                    <div class="txtb"
                         :class="{focus: login_psw === 10}">
                        <input  type="password" 
                                name="login_psw" 
                                id="login_psw" 
                                v-model="psw"
                                @focus="login_psw =10"
                                @blur="login_psw =0"
                                >
                        <label for="login_psw">密碼</label>
                    </div>
                    <a href="#" class="forgot_psw" @click="forgotPsw">忘記密碼</a>
                    <div class="login_btn btn_submit"
                         @click="doLogin()">
                            登入
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
        <!-- 手機版 -->
        <div class="container_sm">
            <div class="tabs">
                <div class="tab"
                    @click="activeTab = 'login'"
                    id="login_tab">
                    登入
                </div>
                <div class="tab"
                    @click="activeTab = 'register'"
                    id="register_tab">
                    註冊
                </div>
            </div>
            <div class="content login"
                 v-if="activeTab === 'login'">
                <form action="#">
                    <div class="txtb_sm">
                        <div class="input_title">帳號</div>
                        <input  type="text" 
                                name="login_id_sm" 
                                id="login_id_sm"
                                v-model="id"
                                >
                        
                    </div>
                    <div class="txtb_sm">
                        <div class="input_title">密碼</div>
                        <input  type="password" 
                                name="login_psw_sm" 
                                id="login_psw_sm" 
                                v-model="psw"
                                >
                    </div>
                    <a href="#" class="forgot_psw" @click="forgotPsw">忘記密碼</a>
                    <div class="login_btn btn_submit" 
                            @click="doLogin()"> 
                            登入
                    </div>
                </form>
            </div>
            <div class="content register"
                 v-if="activeTab === 'register'">
                <form>    
                    <div class="txtb_sm"
                         id="register_id_block_sm"
                         >
                         <div class="input_title">
                            帳號
                        </div>
                        <input  type="email" 
                                name="register_id_sm" 
                                id="register_id_sm"
                                v-model="id"
                                maxlength="20">
                        
                        <div id="check_id_sm" class="btn_submit" @click="checkId">
                            檢查帳號
                        </div>
                    </div>
                    <div class="txtb_sm">
                        <div class="input_title">密碼</div>
                        <input  type="password" 
                                name="register_psw_sm" 
                                id="register_psw_sm"
                                v-model="psw"
                                maxlength="20"
                                >
                        
                    </div>
                    <div class="txtb_sm">
                        <div class="input_title">確認密碼</div>
                        <input  type="password" 
                                name="register_check_psw_sm" 
                                id="register_check_psw_sm"
                                v-model="checkpsw"
                                maxlength="20"
                                >
                        
                    </div>            
                    <div class="txtb_sm" id="register_email_block_sm">
                        <div class="input_title">信箱</div>
                        <input  type="text" 
                                name="register_mem_email_sm" 
                                id="register_mem_email_sm"
                                v-model="email"
                                maxlength="100"
                                >
                    </div>            
                    <div class="txtb_sm">
                        <div class="input_title">姓名</div>
                        <input  type="text" 
                                name="register_mem_name_sm" 
                                id="register_mem_name_sm"
                                v-model="name"
                                maxlength="100"
                                >
                        
                    </div>            
                    <div class="txtb_sm">
                        <div class="input_title">暱稱</div>
                        <input  type="text" 
                                name="register_nickname_sm" 
                                id="register_nickname_sm"
                                v-model="nick_name"
                                maxlength="20"
                                >
                        
                    </div>    
                    <div class="txtb_sm">
                        <div class="input_title">電話</div>
                        <input  type="text" 
                                name="register_phone_sm" 
                                id="register_phone_sm"
                                v-model="phone"
                                maxlength="30"
                                >
                        
                    </div>           
                    <div class="txtb_sm" id="city_sm">
                        <div class="register_city_title">
                            居住縣市
                        </div>
                        <select name="register_city_sm" id="register_city_sm" v-model="city">
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
                    </div>        
                          
                    <div class="txtb_sm">
                        <div class="input_title">地址</div>
                        <input  type="text" 
                                name="register_addr_sm" 
                                id="register_addr_sm"
                                v-model="addr"
                                maxlength="300">
                    </div>            
                    <div class="login_btn_sm btn_submit" @click="doRegister">
                            註冊
                    </div>
                </form>
            </div>
        </div>
    </section>
    <MainFooter/>
</template>
<script>
import { watch } from '@vue/runtime-core'

    export default{
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
                id:'',
                psw:'',
                checkpsw:'',
                email:'',
                name:'',
                nick_name:'',
                phone:'',
                addr:'',
                city:'',
                mem_data:[],
                activeTab:'login'
                }
        },
        methods:{
            scrollToTop(){
                window.scrollTo(0,0)
            },
            show_login(index){
                this.index -= 1;
            },
            show_register(index){
                this.index += 1;
            },
            // focus_txtb(focus_index){
                // this.focus_index += 1;
            // },
            // blur_txtb(focus_index){
            //     this.focus_index -= 1;
            //     console.log(focus_index);
            // }
            checkId(){
                var xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        if(xhr.status == 200){
                            if(xhr.responseText == 1){
                                alert("此帳號可以使用");
                            }else if(xhr.responseText == 0){
                                alert("此帳號已存在");
                            }
                        }
                    }
                    xhr.open("POST","http://localhost/phpLab_CGD102/firefly_camping_php/checkId.php", true);


                    let mem_deta = `mem_id=${this.id}&`;
                    let formIdData = new FormData();
                    formIdData.append('mem_id', this.id);
                    xhr.send(formIdData);
            },
            forgotPsw(){
                alert('那我也沒辦法>__<')
            },
            doLogin(){
                var xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    console.log(xhr.responseText);
                    if(xhr.status == 200){
                        if(xhr.responseText != 0){
                            alert("登入成功！");
                            this.session = JSON.parse(xhr.responseText);
                            console.log(this.session)
                            sessionStorage.setItem("member", JSON.stringify(this.session));
                            this.loginStatus = sessionStorage.getItem("member")
                            if (this.loginStatus != '') {
                                location.replace("/Member");
                            // this.$router.push("/Login");
                            }
                        }else if(xhr.responseText == 0){
                            alert("帳號或密碼錯誤");
                        }
                    }
                }
                xhr.open("POST","http://localhost/phpLab_CGD102/firefly_camping_php/doLogin.php", true);

                let mem_deta = `mem_id=${this.id}&mem_psw=${this.psw}`;
                let formData = new FormData();
                formData.append('mem_id', this.id);
                formData.append('mem_psw', this.psw);
                xhr.send(formData);
            },
            getMemberInfo(){
                let xhr = new XMLHttpRequest();
                // xhr.onload = function(){
                //     member = JSON.parse(xhr.responseText);
                //     if(member.mem_id){
                //         $id("memName").innerText = member.memName;
                //         $id("spanLogin").innerText = "登出";          
                //     }
                // }
                xhr.open("get","http://localhost/phpLab/firefly_camping_php/getMemberInfo.php",true);
                xhr.send(null);
            },
            doRegister(){
                var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/ ;
                if (this.checkpsw != this.psw) {
                    alert("密碼與確認密碼不相同");
                    return;
                }else if(this.id=='' || this.psw=='' || this.checkpsw=='' || this.email=='' || this.name=='' || this.nick_name=='' || this.phone=='' || this.addr=='' || this.city==''){
                    alert("有欄位沒有填到喔！");
                    return;
                }
                else if(this.email.search(emailRule) != 0){
                    alert("信箱格式錯誤");
                }
                // else if(this.emailflag){
                else{
                    
                    // fetch("http://localhost:8080/phpLab_CGD102/firefly_camping_php/register.php",{
                    //     body:JSON.stringify({mem_id:this.id,mem_psw:this.psw,mem_name:this.name,mem_nick_name:this.nick_name,mem_email:this.email,mem_city:this.city,mem_addr:this.addr,mem_phone:this.phone}),
                    //     headers: {
                    //         'Content-Type': 'application/json'
                    //     },
                    //     method:'POST',
                    // })
                    // .then((res)=>{
                    //     console.log(res.text())
                    //     return;
                    // })
                    // .then((res)=>{
                    //     console.log("res",res);
                    // })
                    // .catch((error)=>{
                    //     console.log(`Error:${error}`)
                    // })
                    

                    var xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        console.log(xhr.responseText);
                        if(xhr.status == 200){
                            if(xhr.responseText == 1){
                                alert("註冊成功,請重新登入");
                                // location.replace("/Login");
                                // this.$router.push("/Login");
                            }else if(xhr.responseText == 0){
                                alert("此帳號已存在");
                            }
                        }
                    }
                    xhr.open("POST","http://localhost/phpLab_CGD102/firefly_camping_php/register.php", true);


                    let mem_deta = `mem_id=${this.id}&mem_psw=${this.psw}&mem_name=${this.name}&mem_email=${this.email}&mem_nick_name=${this.nick_name}&mem_city=${this.city}&mem_addr=${this.addr}&mem_phone=${this.phone}`;
                    let formData = new FormData();
                    formData.append('mem_id', this.id);
                    formData.append('mem_psw', this.psw);
                    formData.append('mem_name', this.name);
                    formData.append('mem_email', this.email);
                    formData.append('mem_nick_name', this.nick_name);
                    formData.append('mem_city', this.city);
                    formData.append('mem_addr', this.addr);
                    formData.append('mem_phone', this.phone);
                    xhr.send(formData);
                }
            }
        },
        created(){
            this.getMemberInfo();
        },
        mounted(){
        //要用到mounted，不能用在created中，因為Dom元件還沒被掛載，讀不到window
        this.scrollToTop()

        },
        watch:{
            id:{
                handler(newVal){
                    console.log(newVal)
                    if(newVal != 0){
                        return this.register_id_block = 1;
                    };
                    console.log(this.register_id_block)
                    immediate: true;                    
                }
        
            }
        }
    }
    
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base/_reset.scss';
    @import '../assets/scss/style';
    @import '../assets/scss/page/_LoginView.scss';
</style>