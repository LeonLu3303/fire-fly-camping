<template>
  <MainHeader />
  <!-- <div class="calender_container">
    <div class="calender_pos">
      <button id="closeCalendar">
        <span></span>
        <span></span>
      </button>
      <HomeCalender />
    </div>
  </div> -->
  <HomeReservation />
  <HomeNews />
  <HomeActivityIsland />
  <HomeReport />
  <HomeProducts />
  <MainFooter />
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router';

// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import HomeReservation from '@/components/HomeReservation.vue';
import HomeNews from '@/components/HomeNews.vue';
import HomeActivityIsland from '@/components/HomeActivityIsland.vue';
import HomeReport from '@/components/HomeReport.vue';
import HomeProducts from '@/components/HomeProducts.vue';
import MainFooter from '@/components/MainFooter.vue';
import HomeCalender from '@/components/HomeCalendar.vue';

// 之後要作轉場動畫的設定
export default {
  setup() {
    // same as beforeRouteLeave option with no access to `this`
    // onBeforeRouteLeave((to, from) => {
    //   document.getElementById('loading-bar').classList.add('aaa');
    // })
  },
  components: {
    MainHeader,
    HomeReservation,
    HomeNews,
    HomeCalender,
    HomeActivityIsland,
    HomeReport,
    HomeProducts,
    MainFooter,
  },
};
</script>

<style lang="scss">
.calender_container {
  position: absolute;
  margin: auto;
  min-width: 80vw;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  .calender_pos {
    position: absolute;
    width: 100%;
    #closeCalendar {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      right: 10px;
      top: 10px;
      background-color: #168d80;
      border: none;
      cursor: pointer;
      span {
        height: 2px;
        width: 20px;
        background-color: #fff;
        display: block;
        position: absolute;
        &:nth-child(1) {
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }
        &:nth-child(2) {
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);
        }
      }
    }
    .ant-picker-calendar {
      background-color: #f5f2e9;

      .calendar_header {
        font-size: 28px;
        color: #168d80;
      }
      .ant-picker-panel {
        background-color: #f5f2e9;
        color: #8dccb9;
        .ant-picker-cell {
          pointer-events: none;
        }
      }
      .ant-picker-calendar-header {
        .ant-radio-group {
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }
}
</style>
