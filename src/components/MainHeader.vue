<template>
    <header>
        <h1 class="sr_only">營火叢｜Ｙ世代最ㄅㄧㄤˋ最HITO的露營選擇</h1>
            <nav class="original_header_nav">
                <router-link to="/HomeView" class="firefly_logo"><img src="../assets/images/main_logo_row.png" alt="營火叢LOGO"></router-link>
                <ul class="original_header">    
                    <li>
                        <router-link to="/Booking" class="reservation_icon">
                            <div class="reservation_icon_photo">
                                <img src="../assets/images/main_icon_reservation.png" alt="營區預定">
                            </div>
                            <h2 class="reservation_icon_text">營區預訂</h2>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Login" class="account_icon">
                            <div class="account_icon_photo">
                                <img src="../assets/images/main_icon_account.png" alt="登入註冊"> 
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" class="shoppingbag_icon">
                            <div class="shoppingbag_icon_photo">
                                <router-link to="/shoppingCart"><img src="../assets/images/main_icon_shoppingbag.png" alt="購物車"></router-link>
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
                                <img src="../assets/images/main_icon_map.png" alt="營區導覽">
                            </div>
                            <h2 class="hamburger_menu_text">營區導覽</h2>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Service" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="../assets/images/main_icon_service.png" alt="營區服務">
                            </div>
                            <h2 class="hamburger_menu_text">營區服務</h2>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Report" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="../assets/images/main_icon_feedback.png" alt="營火報告">
                            </div>
                            <h2 class="hamburger_menu_text">營火報告</h2>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/News" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="../assets/images/main_icon_news.png" alt="最新消息">
                            </div>
                            <h2 class="hamburger_menu_text">最新消息</h2>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Shopping" class="hamburger_menu">
                            <div class="hamburger_menu_icon">
                                <img src="../assets/images/main_icon_store.png" alt="營火商城">
                            </div>
                            <h2 class="hamburger_menu_text">營火商城</h2>
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
    @import '../assets/scss/style.scss';
</style>