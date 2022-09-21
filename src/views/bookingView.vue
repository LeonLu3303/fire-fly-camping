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
                  開始日期 <span>{{ dateStart }}</span>
                </p>
                <p>
                  結束日期 <span>{{ dateEnd }}</span>
                </p>
              </div>
              <p>你選定的日期現在很熱門，要盡快預訂哦！</p>
              <button class="btn_confirm">提交</button>
            </div>
            <div class="bk_when_calendar_select_container">
              <div class="bk_range_date_picker_controll">
                <a-range-picker
                  v-model:value="value1"
                  :open="true"
                  :ranges="ranges"
                />
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
    </div>
  </div>
</template>

<script>
import ChoosePeople from '@/components/ChoosePeople.vue';
import ChooseCamp from '@/components/ChooseCamp.vue';
import DatePickerVue from '@/components/DatePicker.vue';

export default {
  name: 'Booking',
  components: {
    ChoosePeople,
    ChooseCamp,
    DatePickerVue,
  },
  data() {
    return {
      step: 3,
      wherePick: '1',
    };
  },
  methods: {
    updateTypeResult(e) {
      console.log(e);
    },
    updateHowResult(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
</style>
