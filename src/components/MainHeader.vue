<template>
    <header>
    <h1 class="sr_only">{{pageTitle}}</h1>
        <nav class="nav_bar">
            <h2 scope class="sr_only">{{navTitle}}</h2>
            <div class="nav_bar_l">
                <router-link to="/HomeView" class="firefly_logo">
                    <img src="@/assets/images/main/main_logo_row.png" alt="營火叢 Firefly Camping">
                </router-link>
            </div>
            <div class="nav_bar_r">    
                <router-link to="/Booking" class="reservation_icon">
                    <div class="reservation_icon_photo">
                        <img src="@/assets/images/main/main_icon_reservation.png" alt="營區預訂">
                    </div>
                    <p class="icon_text">{{iconName}}</p>
                </router-link>
                <div @click="toggleHeader" @keypress="toggleHeader" class="hb_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="nav_bar_list">
                    <li><router-link to="#"><img alt="營區導覽"></router-link></li>
                    <li><router-link to="#"><img alt="營區導覽"></router-link></li>
                    <li><router-link to="#"><img alt="營區導覽"></router-link></li>
                    <li><router-link to="#"><img alt="營區導覽"></router-link></li>
                    <li><router-link to="#"><img alt="營區導覽"></router-link></li>
                </ul>
            </div>
        </nav>
    </header>   
</template>

<script>

export default {
    name: 'MainHeader',
    data() {
        return {
            pageTile: '營火叢｜Ｙ世代最ㄅㄧㄤˋ最HITO的露營選擇',
            navTitle: '營火叢導覽列',
            iconNAme: '營區預訂',
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