<template>
  <MainHeader />
  <div class="booking_pages">
    <div class="bk_banner_container">
      <img src="@/assets/images/main/banner_booking.png" alt="banner" />
    </div>
    <div class="bk_process_container">
      <div class="bk_process_where" v-if="step == 1">
        <h2>你要去哪裡露營呢？</h2>
        <div class="bk_where_block_container">
          <div
            class="bk_where_card booking_snow"
            :class="{ onPick: wherePick == 1 }"
          >
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
          <div
            class="bk_where_card booking_j"
            :class="{ onPick: wherePick == 2 }"
          >
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
          <div
            class="bk_where_card booking_v"
            :class="{ onPick: wherePick == 3 }"
          >
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
        <div class="bk_process_button_container" style="width: 80%">
          <button class="bk_process_button">
            <!-- <img
              src="@/assets/images/booking/booking_arrow_prev.png"
              alt=""
            />上一步 -->
          </button>
          <button class="bk_process_button" @click="whereNext">
            挑選房型
            <img src="@/assets/images/booking/booking_arrow_next.png" alt="" />
          </button>
        </div>
      </div>
      <div class="bk_process_how_many" v-if="step == 2">
        <div class="bk_process_how_many_container">
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
            </div>
            <div class="bk_how_content_img">
              <div class="bk_how_content_img_two_block">
                <div class="img_two_block top_container">
                  <BookingCarouselSmallOneVue :wherePick="wherePick" />
                </div>
                <div class="img_two_block bottom_container">
                  <BookingCarouselSmallTwoVue :wherePick="wherePick" />
                </div>
              </div>
              <div class="bk_how_content_img_one_block">
                <BookingCarouselBigVue :wherePick="wherePick" />
              </div>
            </div>
          </div>
          <div class="bk_process_button_container">
            <button class="bk_process_button" @click="step = 1">
              <img
                src="@/assets/images/booking/booking_arrow_prev.png"
                alt=""
              />挑選地區
            </button>
            <button class="bk_process_button" @click="whichNext">
              挑選日期
              <img
                src="@/assets/images/booking/booking_arrow_next.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_when" v-if="step == 3">
        <div class="bk_process_when_container">
          <div class="bk_when_container">
            <div class="bk_when_content_container">
              <h2>你要什麼時候 出發？</h2>
              <DatePicker @update-result="updateWhenResult" />
              <div class="rangeDateShow">
                <p>
                  開始日期 <span>{{ getStart }}</span>
                </p>
                <p>
                  結束日期 <span>{{ getEnd }}</span>
                </p>
              </div>
              <p class="bk_when_content_last">
                你選定的日期現在很熱門，要盡快預訂哦！
              </p>
            </div>
          </div>
          <div class="bk_process_button_container">
            <button class="bk_process_button" @click="step = 2">
              <img
                src="@/assets/images/booking/booking_arrow_prev.png"
                alt=""
              />挑選日期
            </button>
            <button class="bk_process_button" @click="whenNext">
              挑選活動
              <img
                src="@/assets/images/booking/booking_arrow_next.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_more_option" v-if="step == 4">
        <div class="bk_process_more_container">
          <div class="bk_more_container">
            <div class="bk_more_content_container">
              <h2>
                你要加選更多 <br />
                方案？
              </h2>
              <div class="rangeDateShow">
                <p>
                  主題活動
                  <span>{{
                    bookingWhich[wherePick - 1].whichActivityShow[
                      whichActivity - 1
                    ]
                  }}</span>
                </p>
                <p>
                  其他裝備
                  <span>{{
                    bookingWhich[wherePick - 1].whichEquipmentShow[
                      whichEquipment - 1
                    ]
                  }}</span>
                </p>
                <p>
                  食材方案
                  <span>{{
                    bookingWhich[wherePick - 1].whichMealShow[whichMeal - 1]
                  }}</span>
                </p>
              </div>
              <p>
                生活無力嗎？ <br />
                上班上到厭世嗎？ <br />
                和朋友一起創造美好的回憶吧！
              </p>
            </div>
            <div class="bk_more_selector_container">
              <SelectWhichActivity @update-result="updateWhichResult1" />
              <SelectWhichEquipment @update-result="updateWhichResult2" />
              <SelectWhichMeal @update-result="updateWhichResult3" />
            </div>
          </div>
          <div class="bk_process_button_container">
            <button class="bk_process_button" @click="step = 3">
              <img
                src="@/assets/images/booking/booking_arrow_prev.png"
                alt=""
              />挑選日期
            </button>
            <button class="bk_process_button" @click="whichOptionNext">
              選項完成
              <img
                src="@/assets/images/booking/booking_arrow_next.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_confirm" v-if="step == 5">
        <div class="bk_process_confirm_container">
          <h2>你要確定欸？</h2>
          <div class="bk_confirm_cards_container">
            <div class="bk_confirm_card_container">
              <div :class="`bookConfirmImg_${wherePick}`"></div>
              <h4>出發區域</h4>
              <div class="middle_content">
                <p class="where">{{ bookingBlock[wherePick - 1] }}</p>
              </div>
              <button @click="step = 1" class="btn_booking_min">修改</button>
            </div>
            <div class="bk_confirm_card_container">
              <div :class="`bookConfirmImg_${wherePick}`"></div>
              <h4>我的營帳</h4>
              <div class="middle_content">
                <p class="how_many">{{ howMany }}人 <br />營帳</p>
                <p class="which_type">{{ bookingCampType[campType - 1] }}</p>
              </div>
              <button @click="step = 2" class="btn_booking_min">修改</button>
            </div>
            <div class="bk_confirm_card_container">
              <div :class="`bookConfirmImg_${wherePick}`"></div>
              <h4>出發時間</h4>
              <div class="middle_content">
                <p class="bigMonth">{{ getStartMonth }}月</p>
                <p class="bigDate">{{ getStartDate }}</p>
              </div>
              <button @click="step = 3" class="btn_booking_min">修改</button>
            </div>
            <div class="bk_confirm_card_container">
              <div :class="`bookConfirmImg_${wherePick}`"></div>
              <h4>我的方案</h4>
              <div class="middle_content">
                <p class="act">
                  {{
                    bookingWhich[wherePick - 1].whichActivityShow[
                      whichActivity - 1
                    ]
                  }}
                </p>
                <p class="equ">
                  {{
                    bookingWhich[wherePick - 1].whichEquipmentShow[
                      whichEquipment - 1
                    ]
                  }}
                </p>
                <p class="meal">
                  {{ bookingWhich[wherePick - 1].whichMealShow[whichMeal - 1] }}
                </p>
              </div>
              <button @click="step = 4" class="btn_booking_min">修改</button>
            </div>
          </div>
          <div class="bk_confirm_payment_container">
            <p class="bk_payment_total_title">訂單總金額</p>
            <div class="bk_payment_show">
              <p>＄{{ paymentTotal }}</p>
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
import ChoosePeople from '@/components/ChoosePeople.vue';
import ChooseCamp from '@/components/ChooseCamp.vue';
import DatePickerVue from '@/components/DatePicker.vue';
import dayjs, { Dayjs } from 'dayjs';
import DatePicker from '@/components/DatePicker.vue';
import SelectWhichActivity from '@/components/SelectWhichActivity.vue';
import SelectWhichEquipment from '@/components/SelectWhichEquipment.vue';
import SelectWhichMeal from '@/components/SelectWhichMeal.vue';
import BookingCarouselSmallOneVue from '@/components/BookingCarouselSmallOne.vue';
import BookingCarouselSmallTwoVue from '@/components/BookingCarouselSmallTwo.vue';
import BookingCarouselBigVue from '@/components/BookingCarouselBig.vue';

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
    BookingCarouselSmallOneVue,
    BookingCarouselSmallTwoVue,
    BookingCarouselBigVue,
  },
  data() {
    return {
      bookingBlock: ['叢林歷險', '冰雪奇緣', '荒野峽谷'],
      bookingCampType: ['經濟營帳', '豪華營帳', '特色營帳'],
      bookingWhich: [
        {
          block: '叢林歷險',
          whichActivityShow: ['遊覽動物', '寶藏探險'],
          whichEquipmentShow: [
            '懷舊露營燈具',
            '野外廚房套鍋組',
            '生存多功能工具',
            '安全通電延長線',
          ],
          whichMealShow: [
            '肉多多吃到飽',
            '素食養身蔬菜',
            '奢侈海鮮大餐',
            '海陸雙重享受',
          ],
        },
        {
          block: '冰雪奇緣',
          whichActivityShow: ['滑雪體驗', '冰上釣魚'],
          whichEquipmentShow: [
            '懷舊露營燈具',
            '野外廚房套鍋組',
            '生存多功能工具',
            '安全通電延長線',
          ],
          whichMealShow: [
            '肉多多吃到飽',
            '素食養身蔬菜',
            '奢侈海鮮大餐',
            '海陸雙重享受',
          ],
        },
        {
          block: '荒野峽谷',
          whichActivityShow: ['熱氣球遊覽大峽谷', '攀岩體驗'],
          whichEquipmentShow: [
            '懷舊露營燈具',
            '野外廚房套鍋組',
            '生存多功能工具',
            '安全通電延長線',
          ],
          whichMealShow: [
            '肉多多吃到飽',
            '素食養身蔬菜',
            '奢侈海鮮大餐',
            '海陸雙重享受',
          ],
        },
      ],
      bookingList: {
        where: null,
        howMany: null,
        campType: null,
        getStartDate: dayjs().format('DD'),
        getStartMonth: dayjs().format('MM'),
        whichActivity: null,
        whichEquipment: null,
        whichMeal: null,
        paymentTotal: null,
      },
      step: 1,
      wherePick: null,
      getStart: null,
      getEnd: null,
      // getDate:,
      howManyDays: null,
    };
  },
  methods: {
    // 選完區域後下一步功能
    whereNext() {
      if (this.wherePick == null) {
        alert('請選擇要去的地區');
        return;
      } else {
        this.step = 2;
      }
    },
    // 選完人數房型後下一步功能
    whichNext() {
      if (this.howMany == null) {
        alert('請挑選人數');
        return;
      } else if (this.campType == null) {
        alert('請挑選帳篷類型');
        return;
      } else {
        this.step = 3;
      }
    },
    updateTypeResult(e) {
      this.campType = e;
      console.log(e);
    },
    updateHowResult(e) {
      this.howMany = e;
      console.log(e);
    },
    whenNext() {
      if (this.getStart == null) {
        alert('請挑選出發日期');
        return;
      } else {
        this.step = 4;
      }
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
    whichOptionNext() {
      if (this.whichActivity == null) {
        alert('請挑選地區活動');
        return;
      } else if (this.whichEquipment == null) {
        alert('請挑選露營裝備');
        return;
      } else if (this.whichMeal == null) {
        alert('請挑選露營餐點');
        return;
      } else {
        this.step = 5;
      }
      // 並計算預定金額

      let sum = 0;
      let basic = 6000;
      let howMany = this.howMany;
      let campType = this.campType;
      let days = this.howManyDays;
      let whichActivity = this.whichActivity;
      let whichEquipment = this.whichEquipment;
      let whichMeal = this.whichMeal;

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
      this.paymentTotal = sum;
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
    // totalPay() {
    //   let sum = 0;
    //   let basic = 6000;
    //   let howMany = this.howMany;
    //   let campType = this.campType;
    //   let days = this.howManyDays;
    //   let whichActivity = this.whichActivity;
    //   let whichEquipment = this.whichEquipment;
    //   let whichMeal = this.whichMeal;

    //   switch (howMany) {
    //     case '2':
    //       sum = basic;
    //       break;
    //     case '4':
    //       sum = basic + 2000;
    //       break;
    //     case '6':
    //       sum = basic + 4000;
    //       break;
    //   }

    //   switch (campType) {
    //     case 'a':
    //       sum = sum * 1;
    //       break;
    //     case 'b':
    //       sum = sum * 1.6;
    //       break;
    //     case 'c':
    //       sum = sum * 1.4;
    //       break;
    //   }

    //   sum = sum * days;

    //   if (whichActivity != null) {
    //     sum += 2000;
    //   }
    //   if (whichEquipment != null) {
    //     sum += 2000;
    //   }
    //   if (whichMeal == '1' || whichMeal == '2') {
    //     sum = sum + 1000 * days;
    //   } else if (whichMeal == '3') {
    //     sum = sum + 300 * days;
    //   }
    //   this.paymentTotal = sum;
    // },
  },
};
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
@import '../assets/scss/booking.scss';
.booking_snow::before {
  background: url(../assets/images/home/home_jungle_all.png),
    linear-gradient(to bottom, $color-aid-green1, $color-main-yellow);
  background-size: cover;
  background-position: center left;
}
.booking_j::before {
  background: url(../assets/images/home/home_snow_all.png),
    linear-gradient(to bottom, $color-aid-blue1, $color-main-yellow);
  background-size: cover;
  background-position: bottom right;
}
.booking_v::before {
  background: url(../assets/images/home/home_canyon_all.png),
    linear-gradient(to bottom, $color-aid-orange1, $color-main-yellow);
  background-size: cover;
  background-position: bottom right;
}
.bookConfirmImg_1 {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../assets/images/home/home_jungle_all.png),
    linear-gradient(to bottom, $color-aid-green1, $color-main-yellow);
  background-size: cover;
  background-position: center left;
  border-radius: 10px;
  filter: brightness(70%);
}
.bookConfirmImg_2 {
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(../assets/images/home/home_snow_all.png),
    linear-gradient(to bottom, $color-aid-blue1, $color-main-yellow);
  background-size: cover;
  background-position: bottom right;
  border-radius: 10px;
  filter: brightness(70%);
}
.bookConfirmImg_3 {
  border-radius: 10px;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(70%);
  background: url(../assets/images/home/home_canyon_all.png),
    linear-gradient(to bottom, $color-aid-orange1, $color-main-yellow);
  background-size: cover;
  background-position: bottom right;
}
</style>
