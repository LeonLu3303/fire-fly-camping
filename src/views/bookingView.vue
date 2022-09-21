<template>
  <div class="booking_pages">
    <div class="bk_banner_container">
      <img src="../assets/images/banner_booking.png" alt="banner" />
    </div>
    <div class="bk_process_container">
      <div class="bk_process_where" v-if="step == 1">
        <div class="decoration_where">
          <h2>你要去哪裡露營呢？</h2>
        </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChoosePeople from '@/components/ChoosePeople.vue';
import ChooseCamp from '@/components/ChooseCamp.vue';
import DatePickerVue from '@/components/DatePicker.vue';
import dayjs, { Dayjs } from 'dayjs';
import DatePicker from '@/components/DatePicker.vue';
import SelectWhichActivity from '@/components/SelectWhichActivity.vue';
import SelectWhichEquipment from '@/components/SelectWhichEquipment.vue';
import SelectWhichMeal from '@/components/SelectWhichMeal.vue';

export default {
  name: 'Booking',
  components: {
    ChoosePeople,
    ChooseCamp,
    DatePickerVue,
    DatePicker,
    SelectWhichActivity,
    SelectWhichEquipment,
    SelectWhichMeal,
  },
  data() {
    return {
      bookingList: {
        where: null,
        howMany: null,
        campType: null,
        getGoingDate: null,
        getLeaveDate: null,
        whichActivity: null,
        whichEquipment: null,
        whichMeal: null,
        whichActivityShow: null,
        whichEquipmentShow: null,
        whichMealShow: null,
      },
      step: 4,
      wherePick: '1',
      getStart: dayjs().format('YYYY-MM-DD'),
      getEnd: dayjs().format('YYYY-MM-DD'),
      // getDate:,
    };
  },
  methods: {
    updateTypeResult(e) {
      console.log(e);
    },
    updateHowResult(e) {
      console.log(e);
    },
    updateWhenResult(e) {
      this.getStart = dayjs(e[0].$d).format('YYYY-MM-DD');
      this.getEnd = dayjs(e[1].$d).format('YYYY-MM-DD');
      console.log(
        dayjs(e[0].$d).format('YYYY-MM-DD'),
        '+',
        dayjs(e[1].$d).format('YYYY-MM-DD')
      );
    },
    updateWhichResult1(e) {
      this.whichActivity = e;
      this.whichActivityShow = e.label;
      console.log(e);
    },
    updateWhichResult2(e) {
      this.whichEquipment = e;
      this.whichEquipmentShow = e.label;
      console.log(e);
    },
    updateWhichResult3(e) {
      this.whichMeal = e;
      this.whichMealShow = e.label;
      console.log(e);
    },
  },
};
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
</style>
