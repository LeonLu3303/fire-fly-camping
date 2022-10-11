<template>
  <header class="he">
    <h1 class="sr_only">{{ pageTitle }}</h1>
    <nav class="nav_bar">
      <h2 scope class="sr_only">{{ navTitle }}</h2>
      <div class="nav_bar_l">
        <router-link to="/" class="firefly_logo">
          <img
            class="logo_lg"
            src="@/assets/images/main/main_logo_row.png"
            alt="營火叢 Firefly Camping"
          />
          <img
            class="logo_sm"
            src="@/assets/images/main/main_logo_col.png"
            alt="營火叢 Firefly Camping"
          />
        </router-link>
      </div>
      <div class="nav_bar_r">
        <router-link to="/Booking" class="reservation_icon">
          <div class="reservation_icon_photo">
            <img
              src="@/assets/images/main/main_icon_reservation.png"
              alt="營區預訂"
            />
          </div>
          <p class="icon_text">{{ iconName }}</p>
        </router-link>
        <router-link to="/Member" class="member_icon" v-if="member != null">
          <div class="login_icon_photo">
            <img
              :src="
                require(`@/assets/images/report/report_avatar_${member.mem_pic}.png`)
              "
              alt="會員頭貼"
            />
          </div>
        </router-link>
        <div class="links">
          <a class="hb_icon" @click="isShow = 'openClose'">
            <div class="line"></div>
          </a>
          <ul class="nav_bar_ul" :class="{ nav_tab: isShow === 'openClose' }">
            <li class="nav_close">
              <img
                @click.self="toggleModal"
                src="@/assets/images/main/main_icon_closure.png"
                alt="nva_closure"
              />
            </li>
            <li class="nav_bar_li">
              <router-link
                v-for="item in routes"
                :key="item.path"
                :to="item.path"
                :class="{ item_list: itemList == i }"
              >
                <div class="list_photo">
                  <img
                    :src="
                      require(`@/assets/images/main/main_icon_${item.id}.png`)
                    "
                    alt="營火叢導覽列"
                  />
                </div>
                <p class="item_name">{{ item.name }}</p>
              </router-link>
              <router-link class="item_list" v-if="member == null" to="/Login">
                <div class="list_photo">
                  <img
                    :src="require(`@/assets/images/main/main_icon_account.png`)"
                    alt="營火叢導覽列"
                  />
                </div>
                <p class="item_name">登入註冊</p>
              </router-link>
              <router-link class="item_list" v-if="member != null" to="/Member">
                <div class="list_photo">
                  <img
                    :src="require(`@/assets/images/main/main_icon_account.png`)"
                    alt="營火叢導覽列"
                  />
                </div>
                <p class="item_name">會員中心</p>
              </router-link>
              <div class="item_list" v-if="member !=null " to="/" @click="logout">
                <p class="item_name">登出</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { routes } from '@/router/index.js';

export default {
    created(){
        let checkLogin = sessionStorage.getItem('member');
        if(checkLogin == null){
            return
        }
        this.getMemData()
    },
    data() {
        return {
            isShow: '',
            pageTitle: '營火叢｜Ｙ世代最ㄅㄧㄤˋ最HITO的露營選擇',
            navTitle: '營火叢導覽列',
            logoURL: '@/assets/images/main/main_logo_row.png',
            iconName: '營區預訂',
            routes:[
                {
                    id:'map',
                    imgURL:'@/assets/images/main/main_icon_map.png',
                    path: '/Activity',
                    name: '營區導覽',
                },
                {
                    id:'service',
                    imgURL:'@/assets/images/main/main_icon_service.png',
                    path: '/Service',
                    name: '營區服務',
                },
                {
                    id:'feedback',
                    imgURL:'@/assets/images/main/main_icon_feedback.png',
                    path: '/Report',
                    name: '營火報告',
                },
                {
                    id:'news',
                    imgURL:'@/assets/images/main/main_icon_news.png',
                    path: '/News',
                    name: '最新消息',
                },
                {
                    id:'store',
                    imgURL:'@/assets/images/main/main_icon_store.png',
                    path: '/Shopping',
                    name: '營火商城',
                },
            ],
        }
    },
    methods: {
        toggleModal() { 
            console.log('click')
            this.isShow = !this.isShow;
        },
        getMemData(){
            this.member = JSON.parse(sessionStorage.getItem('member'));
            this.memId = this.member.mem_id;
            console.log(this.member)  
        },
        logout(){
            // fetch("http://localhost/phpLab/firefly_camping_php/logout.php",{method:'GET'})
            // .then((res)=>{location.replace("/")})
            // .then()
            let xhr = new XMLHttpRequest();
            xhr.open("get", "http://localhost/phpLab/firefly_camping_php/logout.php",true);
            xhr.send(null);
            sessionStorage.removeItem("member", JSON.stringify(this.session));
            alert("已登出");
            location.replace("/");
            // session()->forget('mem_id');
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/Scss/Style.scss';
</style>
