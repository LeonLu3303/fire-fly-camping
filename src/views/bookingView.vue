<template>
  <div class="booking_pages">
    <div class="bk_banner_container">
      <img src="../assets/images/banner_booking.png" alt="banner" />
    </div>
    <div class="bk_process_container">
      <div class="bk_process_where">
        <div class="decoration_where">
          <h2>你要去哪裡露營呢？</h2>
        </div>
        <div class="bk_where_block_container">
          <div class="bk_where_card">
            <div>
              <h3>叢林歷險</h3>
              <a class="btn_booking_min" href="#">預訂</a>
            </div>
            <div>
              <p class="hover_show">
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧!
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧！
              </p>
              <p>探索 叢林歷險 體驗不一樣的露營模式</p>
            </div>
          </div>
          <div class="bk_where_card">
            <div>
              <h3>冰雪奇緣</h3>
              <a class="btn_booking_min" href="#">預訂</a>
            </div>
            <div>
              <p class="hover_show">
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧!
                大自然是我們的好朋友，快來一起體驗以前農村生活的小玩意吧！
              </p>
              <p>探索 冰雪奇緣 體驗不一樣的露營模式</p>
            </div>
          </div>
          <div class="bk_where_card">
            <div>
              <h3>荒野峽谷</h3>
              <a class="btn_booking_min" href="#">預訂</a>
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
          <button class="bk_process_button where_prev">
            <img src="../assets/booking_arrow_prev.png" alt="" />上一步
          </button>
          <button class="bk_process_button where_next">
            下一步
            <img src="../assets/booking_arrow_next.png" alt="" />
          </button>
        </div>
      </div>
      <div class="bk_process_how_many">
        <div class="bk_process_how_many_container">
          <div class="bk_how_icon_container">
            <img src="../assets/booking_how_icon.png" alt="" />
          </div>
          <div class="bk_how_content_container">
            <div class="bk_how_content_txt">
              <h2>
                你要幾人的 <br />
                營帳？
              </h2>
              <div class="bk_how_content_choose">
                <div class="bk_how_content_people"><ChoosePeople /></div>
                <div class="bk_how_content_campsite">
                  <ChooseCamp />
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
            <button class="bk_process_button where_prev">
              <img src="../assets/booking_arrow_prev.png" alt="" />上一步
            </button>
            <button class="bk_process_button where_next">
              下一步
              <img src="../assets/booking_arrow_next.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="bk_process_when"></div>
    </div>
  </div>
</template>

<script>
import ChoosePeople from '@/components/ChoosePeople.vue';
import ChooseCamp from '@/components/ChooseCamp.vue';
export default {
  name: 'booking',
  components: {
    ChoosePeople,
    ChooseCamp,
  },
};
</script>
<style lang="scss">
@import '../assets/scss/style.scss';
</style>
