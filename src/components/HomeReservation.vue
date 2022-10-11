<template>
  <section class="reservation_camp">
    <div class="home_parallex">
      <img
        class="jungle_bg_img j_1"
        src="@/assets/images/home/home_jungle_600_1.png"
        alt=""
      />
      <img
        class="jungle_bg_img j_2"
        src="@/assets/images/home/home_jungle_600_2.png"
        alt=""
      />
      <img
        class="jungle_bg_img j_3"
        src="@/assets/images/home/home_jungle_600_3.png"
        alt=""
      />
      <img
        class="jungle_bg_img j_4"
        src="@/assets/images/home/home_jungle_600_4.png"
        alt=""
      />
    </div>
    <div class="calender_container">
      <div class="calender_pos"><HomeCalendar /></div>
    </div>
    <!-- 搜尋區 -->
    <div class="reservation_cotainer">
      <div class="search_zone">
        <h2 class="search_zone_title">{{ sectionTitle }}</h2>
        <div class="search_zone_option">
          <div class="theme_tent_group">
            <div class="option_theme">
              <select v-model="whichArea" class="menu_choose">
                <option value="null">主題區域</option>
                <option value="1">叢林歷險</option>
                <option value="2">冰雪奇緣</option>
                <option value="3">荒野峽谷</option>
              </select>
            </div>
            <div class="option_tent">
              <select v-model="whichType" class="menu_choose">
                <option value="null">營帳類型</option>
                <option value="1">經濟營帳</option>
                <option value="2">豪華營帳</option>
                <option value="3">主題營帳</option>
              </select>
            </div>
          </div>
          <div class="option_month">
            <select v-model="howMany" class="menu_choose">
              <option value="null">幾人帳篷？</option>
              <option value="2">二人營帳</option>
              <option value="4">四人營帳</option>
              <option value="6">六人營帳</option>
            </select>
          </div>
        </div>
        <button class="btn_search" @click="showCalendar">
          {{ btnTitle }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export default {
  props: ['openCalendar'],
  data() {
    return {
      sectionTitle: '你要去哪裡露營呢？',
      btnTitle: '搜尋',
      whichArea: null,
      howMany: null,
      whichType: null,
      booked: [],
    };
  },
  methods: {
    showCalendar() {
      // this.openCalendar = true;
      this.$emit('abc', true);
    },
    updateResult() {
      this.$emit('update-result', {
        whichArea: this.whichArea,
        howMany: this.howMany,
        whichType: this.whichType,
      });
    },
  },
  watch: {
    whichArea(nVal) {
      this.updateResult();
    },
    howMany(nVal) {
      this.updateResult();
    },
    whichType(nVal) {
      this.updateResult();
    },
  },
  mounted() {
    const jungle_1 = document.querySelector('.home_parallex img');
    const jungle_2 = document.querySelector('.j_2');
    const jungle_3 = document.querySelector('.j_3');
    const jungle_4 = document.querySelector('.j_4');
    gsap.registerPlugin(ScrollTrigger);
    let speed = 100;

    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: '.home_parallex img',
      start: 'top top',
      end: '45% 100%',
      scrub: 3,
    });
    let tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });

    tl.to(jungle_1, {
      y: 0,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'ScrollTrigger',
        scrub: true,
        duration: 1,
        // markers: true,
        // start: 'top botton-=20%',
        // end: 'top-=20% center ',
      },
    });

    tl.to(jungle_2, {
      y: 600,
      ease: 'power1.out',
      scrollTrigger: {
        duration: 2,
        trigger: 'ScrollTrigger',
        scrub: true,
        // markers: true,
      },
    });
    tl.to(jungle_3, {
      y: 800,
      ease: 'power1.out',
      scrollTrigger: {
        duration: 3,
        trigger: 'ScrollTrigger',
        scrub: true,
        // markers: true,
      },
    });
    tl.to(jungle_4, {
      y: 600,
      ease: 'power4.out',
      scrollTrigger: {
        duration: 3,
        trigger: 'ScrollTrigger',
        scrub: true,
        // markers: true,
      },
    });
  },
};
</script>

<style lang="scss">
@import '../assets/scss/style.scss';
@import '../assets/scss/component/_HomeReservation.scss';
</style>
