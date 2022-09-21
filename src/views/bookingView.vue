<template>
  <MainHeader />
  <div class="booking_pages">
    <div class="bk_banner_container">
      <img src="../assets/images/banner_booking.png" alt="banner" />
    </div>
    <div class="bk_process_container">
      <div class="bk_process_where" v-if="step == 1">
        <h2>你要去哪裡露營呢？</h2>
        <div class="bk_where_block_container">
          <div class="bk_where_card" :class="{ onPick: wherePick == '1' }">
            <div>
              <h3>叢林歷險</h3>
              <button class="btn_booking_min" @click="wherePick = '1'">
                預訂
              </button>
            </div>
            <div>
              <p class="hover_show">
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧!
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧！
              </p>
              <p>探索 叢林歷險 體驗不一樣的露營模式</p>
            </div>
          </div>
          <div class="bk_where_card" :class="{ onPick: wherePick == '2' }">
            <div>
              <h3>冰雪奇緣</h3>
              <button class="btn_booking_min" @click="wherePick = '2'">
                預訂
              </button>
            </div>
            <div>
              <p class="hover_show">
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧!
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧！
              </p>
              <p>探索 冰雪奇緣 體驗不一樣的露營模式</p>
            </div>
          </div>
          <div class="bk_where_card" :class="{ onPick: wherePick == '3' }">
            <div>
              <h3>荒野峽谷</h3>
              <button class="btn_booking_min" @click="wherePick = '3'">
                預訂
              </button>
            </div>
            <div>
              <p class="hover_show">
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧!
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧！
              </p>
              <p>探索 荒野峽谷 體驗不一樣的露營模式</p>
            </div>
          </div>
        </div>
        <div class="bk_process_button_container">
          <button class="bk_process_button">
            <img src="../assets/booking_arrow_prev.png" alt="" />上一步
          </button>
          <button class="bk_process_button" @click="step = 2">
            下一步
            <img src="../assets/booking_arrow_next.png" alt="" />
          </button>
        </div>
      </div>
      <div class="bk_process_how_many" v-if="step == 2">
        <div class="bk_process_how_many_container">
          <div class="bk_icon_container">
            <img src="../assets/booking_how_icon.png" alt="" />
          </div>
          <div class="bk_how_content_container">
            <div class="bk_how_content_txt">
              <h2>
                你要幾人的 <br />
                營帳？
              </h2>
              <div class="bk_how_content_choose">
                <div class="bk_how_content_people">
                  <ChoosePeople @update-result="updateHowResult" />
                </div>
                <div class="bk_how_content_campsite">
                  <ChooseCamp @update-result="updateTypeResult" />
                </div>
              </div>
              <div class="bk_how_content_confirm">
                <a class="btn_confirm" href="#">確認房型</a>
              </div>
            </div>
            <div class="bk_how_content_img">
              <div class="bk_how_content_img_two_block">
                <div class="img_two_block top_container">
                  <img src="https://picsum.photos/300/300/?random=10" />
                </div>
                <div class="img_two_block bottom_container">
                  <img src="https://picsum.photos/300/300/?random=11" />
                </div>
              </div>
              <div class="bk_how_content_img_one_block">
                <img src="https://picsum.photos/300/600/?random=12" />
              </div>
            </div>
          </div>
          <div class="bk_process_button_container">
            <button class="bk_process_button" @click="step = 1">
              <img src="../assets/booking_arrow_prev.png" alt="" />上一步
            </button>
            <button class="bk_process_button" @click="step = 3">
              下一步
              <img src="../assets/booking_arrow_next.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_when" v-if="step == 3">
        <div class="bk_process_when_container">
          <div class="bk_icon_container">
            <img src="../assets/booking_how_icon.png" alt="" />
          </div>
          <div class="bk_when_container">
            <div class="bk_when_content_container">
              <h2>
                你要什麼時候
                <br />
                出發？
              </h2>
              <div class="rangeDateShow">
                <p>
                  開始日期 <span>{{ getStart }}</span>
                </p>
                <p>
                  結束日期 <span>{{ getEnd }}</span>
                </p>
              </div>
              <p>你選定的日期現在很熱門，要盡快預訂哦！</p>
              <button class="btn_confirm">提交</button>
            </div>
            <div class="bk_when_calendar_select_container">
              <div class="bk_range_date_picker_controll">
                <DatePicker @update-result="updateWhenResult" />
              </div>
            </div>
          </div>
          <div class="bk_process_button_container">
            <button class="bk_process_button" @click="step = 2">
              <img src="../assets/booking_arrow_prev.png" alt="" />上一步
            </button>
            <button class="bk_process_button" @click="step = 4">
              下一步
              <img src="../assets/booking_arrow_next.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_more_option" v-if="step == 4">
        <div class="bk_process_more_container">
          <div class="bk_icon_container">
            <img src="../assets/booking_how_icon.png" alt="" />
          </div>
          <div class="bk_more_container">
            <div class="bk_more_content_container">
              <h2>
                你要加選更多 <br />
                方案？
              </h2>
              <div class="rangeDateShow">
                <p>
                  主題活動 <span>{{ whichActivityShow }}</span>
                </p>
                <p>
                  其他裝備 <span>{{ whichEquipmentShow }}</span>
                </p>
                <p>
                  食材方案 <span>{{ whichMealShow }}</span>
                </p>
              </div>
              <p>
                生活無力嗎？ <br />
                上班上到厭世嗎？ <br />
                和朋友一起創造美好的回憶吧！
              </p>
              <button class="btn_confirm">提交</button>
            </div>
            <div class="bk_more_selector_container">
              <SelectWhichActivity @update-result="updateWhichResult1" />
              <SelectWhichEquipment @update-result="updateWhichResult2" />
              <SelectWhichMeal @update-result="updateWhichResult3" />
            </div>
          </div>
          <div class="bk_process_button_container">
            <button class="bk_process_button" @click="step = 3">
              <img src="../assets/booking_arrow_prev.png" alt="" />上一步
            </button>
            <button class="bk_process_button" @click="step = 5">
              下一步
              <img src="../assets/booking_arrow_next.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_confirm" v-if="step == 5">
        <div class="bk_process_confirm_container">
          <h2>你要確定欸？</h2>
          <div class="bk_confirm_cards_container">
            <div class="bk_confirm_card_container">
              <h4>出發區域</h4>
              <div class="middle_content">
                <p>不知道拉</p>
              </div>
              <button @click="step = 1" class="btn_booking_min">修改</button>
            </div>
            <div class="bk_confirm_card_container">
              <h4>我的營帳</h4>
              <div class="middle_content">
                <p>{{ howMany }}</p>
                <p>{{ campType }}</p>
              </div>
              <button @click="step = 2" class="btn_booking_min">修改</button>
            </div>
            <div class="bk_confirm_card_container">
              <h4>出發時間</h4>
              <div class="middle_content">
                <p class="bigMonth">{{ getStartMonth }}月</p>
                <p class="bigDate">{{ getStartDate }}</p>
              </div>
              <button @click="step = 3" class="btn_booking_min">修改</button>
            </div>
            <div class="bk_confirm_card_container">
              <h4>我的方案</h4>
              <div class="middle_content">
                <p>{{ whichActivity }}</p>
                <p>{{ whichEquipment }}</p>
                <p>{{ whichMeal }}</p>
              </div>
              <button @click="step = 4" class="btn_booking_min">修改</button>
            </div>
          </div>
          <div class="bk_confirm_payment_container">
            <p>訂單總金額</p>
            <div class="bk_payment_show">
              <p>＄{{ totalPay }}</p>
              <button class="btn_confirm">結帳</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MainFooter />
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import ChoosePeople from '@/components/ChoosePeople.vue';
import ChooseCamp from '@/components/ChooseCamp.vue';
import DatePickerVue from '@/components/DatePicker.vue';
import dayjs, { Dayjs } from 'dayjs';
import DatePicker from '@/components/DatePicker.vue';
import SelectWhichActivity from '@/components/SelectWhichActivity.vue';
import SelectWhichEquipment from '@/components/SelectWhichEquipment.vue';
import SelectWhichMeal from '@/components/SelectWhichMeal.vue';
import MainFooter from '../components/MainFooter.vue';

export default {
  name: 'Booking',
  components: {
    MainHeader,
    ChoosePeople,
    ChooseCamp,
    DatePickerVue,
    DatePicker,
    SelectWhichActivity,
    SelectWhichEquipment,
    SelectWhichMeal,
    MainFooter,
  },
  data() {
    return {
      bookingList: {
        where: null,
        howMany: null,
        campType: null,
        getStartDate: dayjs().format('DD'),
        getStartMonth: dayjs().format('MM'),
        whichActivity: null,
        whichEquipment: null,
        whichMeal: null,
        whichActivityShow: null,
        whichEquipmentShow: null,
        whichMealShow: null,
        paymentTotal: null,
      },
      step: 1,
      wherePick: '1',
      getStart: dayjs().format('YYYY-MM-DD'),
      getEnd: dayjs().format('YYYY-MM-DD'),
      // getDate:,
      howManyDays: null,
    };
  },
  methods: {
    updateTypeResult(e) {
      this.campType = e;
      console.log(e);
    },
    updateHowResult(e) {
      this.howMany = e;

      console.log(e);
    },
    updateWhenResult(e) {
      this.getStart = dayjs(e[0].$d).format('YYYY-MM-DD');
      this.getEnd = dayjs(e[1].$d).format('YYYY-MM-DD');
      this.getStartDate = dayjs(e[0].$d).format('DD');
      this.getStartMonth = dayjs(e[0].$d).format('MM');
      this.howManyDays = parseInt(
        (dayjs(e[1].$d) - dayjs(e[0].$d)) / 3600 / 24 / 1000
      );
      console.log(
        dayjs(e[0].$d).format('YYYY-MM-DD'),
        '+',
        dayjs(e[1].$d).format('YYYY-MM-DD'),
        '+',
        this.howManyDays
      );
    },
    updateWhichResult1(e) {
      this.whichActivity = e;
      console.log(e);
    },
    updateWhichResult2(e) {
      this.whichEquipment = e;
      console.log(e);
    },
    updateWhichResult3(e) {
      this.whichMeal = e;
      console.log(e);
    },
  },
  computed: {
    totalPay() {
      let sum = 0;
      let basic = 6000;
      let howMany = this.bookingList.howMany;
      let campType = this.bookingList.campType;
      let days = this.howManyDays;
      let whichActivity = this.bookingList.whichActivity;
      let whichEquipment = this.bookingList.whichEquipment;
      let whichMeal = this.bookingList.whichMeal;

      switch (howMany) {
        case '2':
          sum = basic;
          break;
        case '4':
          sum = basic + 2000;
          break;
        case '6':
          sum = basic + 4000;
          break;
      }

      switch (campType) {
        case 'a':
          sum = sum * 1;
          break;
        case 'b':
          sum = sum * 1.6;
          break;
        case 'c':
          sum = sum * 1.4;
          break;
      }

      sum = sum * days;

      if (whichActivity != null) {
        sum += 2000;
      }
      if (whichEquipment != null) {
        sum += 2000;
      }
      if (whichMeal == '1' || whichMeal == '2') {
        sum = sum + 1000 * days;
      } else if (whichMeal == '3') {
        sum = sum + 300 * days;
      }

      return sum;
    },
  },
};
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
</style>
