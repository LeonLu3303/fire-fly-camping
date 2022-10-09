<template>
    <MainHeader/>
    <div class="banner">
        <img src="@/assets/images/main/banner_member.png" alt="banner" />
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
            <router-link to ="/HomeView" class="mem_signout">登出</router-link>
        </button>
        <!-- 會員資料修改專區 -->
        <div v-if="activeTab === 'memdata'" class="mem_content">
            <MemberModify/>
        </div>
        <!-- 營地預定訂單查詢     -->
        <div v-else-if="activeTab === 'booking'" class="mem_content">
            <MemberCampsiteOrder/>          
        </div>
        <!-- 商品訂單查詢 -->
        <div v-else class="mem_content">
            <MemberProductOrder/>          
        </div>     
      </div> 
    </section>
    <MainFooter/>
</template>
<script>
import MemberModify from '@/components/MemberModify.vue'
import MemberCampsiteOrder from '@/components/MemberCampsiteOrder.vue'
import MemberProductOrder from '@/components/MemberProductOrder.vue'
export default {
    components:{
        MemberModify,
        MemberCampsiteOrder,
        MemberProductOrder,
    },
    data(){
        return{
            activeTab: 'memdata',
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.member_wrapper{
    width: 100%;
    padding: 150px 0;
    background-color:$color-main-yellow ;
}
.member_group{
    width: 80%;
    margin: auto;
    @include tb(){
      width: 90%;
    }
    @include md(){
      width: 95%;
    }
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
    @include md(){
        padding:10px 5px;
        font-size: 16px;
    } 
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
        @include md(){
        padding:10px 5px;
        font-size: 16px;
        } 
    }   
}
.mem_content_group{
    padding: 70px 0;
}
.mem_content{
    background-color: $color-basic-White;
    border-radius:10px;
    box-shadow: 0px 0px 4px 3px rgba($color:$color-basic-gray1, $alpha: .3);
}
.mem_search{
    width: 200px;
    border-radius: 10px;
    padding: 5px;
    border: 1px solid #4D8084;
    }
.mem_btn_active{
    background-color: #168D80;
    color: #ffff;
}
</style>