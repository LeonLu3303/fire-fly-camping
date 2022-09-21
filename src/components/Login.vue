<template>
    <section class="wrap_login">
        <div id="app">
        <div class="container" 
             id="login-box"
             :class="{right_panel_active:index === 1}">
            <div class="form-container sign-up-container">
                <form>
                    <h2>註冊</h2>           
                    <div class="check_id">
                        <button id="check_id">
                            檢查帳號
                        </button>
                    </div>
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="email" name="register_id" id="register_id">
                        <span data-placeholder="帳號/信箱"></span>
                    </div>
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="password" name="register_psw" id="register_psw">
                        <span data-placeholder="密碼"></span>
                    </div>
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="password" name="register_check_psw" id="register_check_psw">
                        <span data-placeholder="確認密碼"></span>
                    </div>            
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="text" name="register_nickname" id="register_nickname">
                        <span data-placeholder="暱稱"></span>
                    </div>            
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="text" name="register_phone" id="register_phone">
                        <span data-placeholder="電話"></span>
                    </div>            
                    <button>註冊</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h2>登入</h2>
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="email" name="login_id" id="login_id">
                        <span data-placeholder="帳號/信箱"></span>
                    </div>
                    <div class="txtb"
                        :class="{focus: focus_index ===1}"
                        @focus="focus_txtb(focus_index)"
                        @blur="blur_txtb(focus_index)"
                        >
                        <input type="password" name="login_psw" id="login_psw" >
                        <span data-placeholder="密碼"></span>
                    </div>
                    <a href="#">忘記密碼</a>
                    <button>登入</button>
                </form>
            </div>
        
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h2>已經有帳號了？</h2>
                        <p>那還等什麼？馬上登入吧！</p>
                        <button class="ghost" 
                                id="signIn" 
                                @click="show_login(index)">
                            馬上登入
                        </button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h2>沒有帳號？</h2>
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
    </div>
    </section>
</template>

<style lang="scss">
    @import '../assets/scss/style.scss';
</style>