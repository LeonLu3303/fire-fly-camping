<template>
    <header>
            <nav class="origenal_header_nav">
                <a class="firefly_logo" href="#"><img src="../assets/images/main_logo_row.png" alt="營火叢 Firefly campsite LOGO"></a>
                <ul class="origenal_header">    
                    <li>
                        <a class="reservation_icon" href="#">
                            <div class="reservation_icon_photo">
                                <img src="../assets/images/main_icon_reservation.png" alt="reservation">
                            </div>
                            <div class="reservation_icon_text">營區預訂</div>
                        </a>
                    </li>
                    <li>
                        <a class="account_icon" href="#">
                            <div class="account_icon_photo">
                                <img src="../assets/images/main_icon_account.png" alt="account"> 
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="shoppingbag_icon" href="#">
                            <div class="shoppingbag_icon_photo">
                                <img src="../assets/images/main_icon_shoppingbag.png" alt="shoppingbag">
                            </div>
                        </a>
                    </li>
                    <li>
                        <a @click="toggleHeader" @keypress="toggleHeader" class="hamburger_icon"><span></span></a>
                    </li>
                </ul>
            </nav>

            <nav :class="{'hidden_header': isHeaderToggle}" class="hidden_header_nav">
                <ul class="hidden_header_coutent">
                    <li>
                        <a class="hamburger_menu" href="#">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營區導覽">
                            </div>
                            <p class="hamburger_menu_text">營區導覽</p>
                        </a>
                    </li>
                    <li>
                        <a class="hamburger_menu" href="#">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營區服務">
                            </div>
                            <p class="hamburger_menu_text">營區服務</p>
                        </a>
                    </li>
                    <li>
                        <a class="hamburger_menu" href="#">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營火報告">
                            </div>
                            <p class="hamburger_menu_text">營火報告</p>
                        </a>
                    </li>
                    <li>
                        <a class="hamburger_menu" href="#">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="最新消息">
                            </div>
                            <p class="hamburger_menu_text">最新消息</p>
                        </a>
                    </li>
                    <li>
                        <a class="hamburger_menu" href="#">
                            <div class="hamburger_menu_icon">
                                <img src="#" alt="營火商城">
                            </div>
                            <p class="hamburger_menu_text">營火商城</p>
                        </a>
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

    .origenal_header_nav{
        width: 100%;
        height: 90px;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: space-between;
    }
    .firefly_logo{
        width: 170px;
        height: 60px;
    }
    .origenal_header{
        display: flex;
    }
    .reservation_icon{
        width: 200px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        background-color: #BC6C61;
    }
    .reservation_icon_text{
        padding-left: 10px;
        font-size: 20px;
        font-weight: 600;
    }
    .reservation_icon_photo{
        width: 20%
    }
    .account_icon{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        background-color: #D9D9D9;
    }
    .account_icon_photo{
        width: 40%;
    }
    .shoppingbag_icon{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        background-color: #168D80;
    }
    .shoppingbag_icon_photo{
        width: 55%;
    }
    .hamburger_icon{
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 50px;
        background-color: #168D80;
    }
    .hamburger_icon span::before{
        content: '';
        width: 30px;
        height: 4px;
        position: absolute;
        border-radius: 50px;
        background-color: #FFFFFF;
        transform: translate( -5px, -10px);
        transition: .2s ease-out;
    }
    .hamburger_icon span{
        width: 25px;
        height: 4px;
        position: absolute;
        border-radius: 50px;
        background-color: #FFFFFF;
        transition: .2s ease-out;
    }
    .hamburger_icon span::after{
        content: '';
        width: 20px;
        height: 4px;
        position: absolute;
        border-radius: 50px;
        background-color: #FFFFFF;
        transform: translate(5px, 10px);
        transition: .2s ease-out;
    }
    .hamburger_icon span .active{
        transform: rotate(45deg);
    }
    .hamburger_icon span .active::before{
        width: 35px;
        border-radius: 0 4px 4px 0;
        transform: translate(50%, -18px) rotate(-90deg);
    }
    .hamburger_icon span .active::after{
        width: 35px;
        border-radius: 0 4px 4px 0;
        transform: translate(calc(50%), 18px) rotate(90deg);
    }
    .hidden_header{
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    .hidden_header_nav{
        display: flex;
        flex-direction: row-reverse;
    }
    .hidden_header_coutent{
        width: 50%;
        height: 100vh;
        background-color: #F5F2E9;
    }
    .hidden_header_coutent > li{
        display: flex;
        flex-direction: row-reverse;
    }
    .hamburger_menu{
        display: flex;
    }
    .hamburger_menu_icon{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #168D80;
    }
    .hamburger_menu_text{
        color: #1F4F4F;
    }

</style>