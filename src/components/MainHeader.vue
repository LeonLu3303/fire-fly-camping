<template>
    <header>
            <nav class="origenal_header_nav">
                <router-link to="/" class="firefly_logo"><img src="../assets/images/main_logo_row.png" alt="營火叢LOGO"></router-link>
                <ul class="origenal_header">    
                    <li>
                        <router-link to="/Booking" class="reservation_icon">
                            <div class="reservation_icon_photo">
                                <img src="../assets/images/main_icon_reservation.png" alt="營區預定">
                            </div>
                            <div class="reservation_icon_text">營區預訂</div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Member" class="account_icon">
                            <div class="account_icon_photo">
                                <img src="../assets/images/main_icon_account.png" alt="登入註冊"> 
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Bag" class="shoppingbag_icon">
                            <div class="shoppingbag_icon_photo">
                                <img src="../assets/images/main_icon_shoppingbag.png" alt="購物車">
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <div @click="toggleHeader" @keypress="toggleHeader" class="hamburger_icon"><span></span></div>
                    </li>
                </ul>
            </nav>

            <nav :class="{'hidden_header': isHeaderToggle}" class="hidden_header_nav">
                <ul class="hidden_header_coutent">
                    <li>
                        <router-link to="/Activity" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營區導覽">
                            </div>
                            <p class="hamburger_menu_text">營區導覽</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Service" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營區服務">
                            </div>
                            <p class="hamburger_menu_text">營區服務</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Report" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營火報告">
                            </div>
                            <p class="hamburger_menu_text">營火報告</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/News" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="最新消息">
                            </div>
                            <p class="hamburger_menu_text">最新消息</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Shopping" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營火商城">
                            </div>
                            <p class="hamburger_menu_text">營火商城</p>
                        </router-link>
                    </li>
                </ul>
            </nav>
    </header>
</template>

<script>

export default {
    name: 'MainHeader',
    data() {
        return {
            isHeaderToggle: true,
        };
    },
    methods: {
        toggleHeader() {
            this.isHeaderToggle = !this.isHeaderToggle;
            //console.log(this.isHeaderToggle);
        },
    },
};

</script>

<style lang="scss">
    @import '../assets/scss/base/reset';
    @import '../assets/scss/style.scss';
    @import '../assets/scss/layout/header';
</style>