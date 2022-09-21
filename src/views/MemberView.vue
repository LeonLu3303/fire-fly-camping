<template>
    <MainHeader/>
    <div class="banner">
        <img src="../assets/images/banner_member.png" alt="banner" />
    </div>
    <section class="wrapper">
        <div class="activity_tabs">
        <button
          class="activity_tabs tab_memdata tab_title"
          @click="activeTab = 'jungle'">
          會員資料
        </button>
        <button
          class="activity_tabs tab_snow tab_title"
          @click="activeTab = 'snow'">
          營地預定查詢
        </button>
        <button
          class="activity_tabs tab_canyon tab_title"
          @click="activeTab = 'canyon'">
          商品訂單查詢
        </button>
        <div v-if="activeTab === 'jungle'" class="tabcontent" id="jungletab">
            <div class="tabcontent_group">
                <div class="tabcontent_text">
                    <h3>123</h3>
                    <h4>123</h4>
                    <p>123</p>
                </div>
            </div>
        </div>
            
        <div v-else-if="activeTab === 'snow'" class="tabcontent" id="snowtab">
          <div class="tabcontent_group">
                <div class="tabcontent_text">
                    <h3>123</h3>
                    <h4>123</h4>
                    <p>123</p>
                </div>
            </div>
        </div>
        <div v-else class="tabcontent" id="canyontab">
          <div class="tabcontent_group">
                <div class="tabcontent_text">
                    <h3>123</h3>
                    <h4>123</h4>
                    <p>123</p>
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
export default {
    components:{
        MainHeader,
        MainFooter
    },
    data(){
        return{
            activeTab: '',
        }
    }
    };
    </script>
    <style lang="scss">
       
    </style>