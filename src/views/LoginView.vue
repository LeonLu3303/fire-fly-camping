<template>
    <MainHeader/>
    <section class="wrap_login">
        <div class="container" 
             id="login-box"
             :class="{right_panel_active:index === 1}">
            <div class="form-container sign-up-container">
                <form>
                    <h2 class="title">註冊</h2>           
                    
                    <div class="txtb" id="register_id_block">
                        <input  type="email" 
                                name="register_id" 
                                id="register_id"
                                :class="{focus: focus_index ===1}"
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)">
                        <span data-placeholder="帳號/信箱"></span>
                        <div id="check_id" class="btn_submit">
                        檢查帳號
                    </div>
                    </div>
                    <div class="txtb">
                        <input  type="password" 
                                name="register_psw" 
                                id="register_psw"
                                :class="{focus: focus_index ===1}"
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)"
                                >
                        <span data-placeholder="密碼"></span>
                    </div>
                    <div class="txtb">
                        <input  type="password" 
                                name="register_check_psw" 
                                id="register_check_psw"
                                :class="{focus: focus_index ===1}"
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)"
                                >
                        <span data-placeholder="確認密碼"></span>
                    </div>            
                    <div class="txtb">
                        <input  type="text" 
                                name="register_nickname" 
                                id="register_nickname"
                                :class="{focus: focus_index ===1}"
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)"
                                >
                        <span data-placeholder="暱稱"></span>
                    </div>            
                    <div class="txtb">
                        <input  type="text" 
                                name="register_phone" 
                                id="register_phone"
                                :class="{focus: focus_index ===1}"
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)">
                        <span data-placeholder="電話"></span>
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
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input  type="email" 
                                name="login_id" 
                                id="login_id"
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)"
                                :class="{focus: focus_index ===1}">
                        <span data-placeholder="帳號/信箱"></span>
                    </div>
                    <div class="txtb">
                        <input  type="password" 
                                name="login_psw" 
                                id="login_psw" 
                                @focus="focus_txtb(focus_index)"
                                @blur="blur_txtb(focus_index)"
                                :class="{focus: focus_index ===1}">
                        <span data-placeholder="密碼"></span>
                    </div>
                    <a href="#">忘記密碼</a>
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
                        <button class="ghost" 
                                id="signIn" 
                                @click="show_login(index)">
                            馬上登入
                        </button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h2 class="title">沒有帳號？</h2>
                        <p>立即註冊加入我們，和我們一起體驗露營吧！</p>
                        <button class="ghost" 
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
                focus_index:0
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
                    this.focus_index += 1;
                    console.log(focus_index);
                },
                blur_txtb(focus_index){
                    this.focus_index -= 1;
                    console.log(focus_index);
                }
            }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/base/_reset.scss';
    @import '../assets/scss/style';
    @import '../assets/scss/page/_LoginView.scss';
</style>