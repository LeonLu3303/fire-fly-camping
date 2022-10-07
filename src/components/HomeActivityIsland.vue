<template>
  <section class="wrap_activityIsland">
    <div class="title_main">
      <h2>營區主題</h2>
    </div>
    <div class="activityIsland_group">
      <div
        class="activityIsland_items"
        v-for="(item, idx) in activityIsland"
        :key="item.id"
        :class="{ reverse: idx % 2 === 0 }"
      >
        <transition appear @enter="enter">
          <div class="island_picture">
            <img
              :src="require(`@/assets/images/activity/activity_${item.id}.png`)"
              alt="小島照片"
            />
          </div>
        </transition>
        <div class="island_text">
          <h3>{{ item.islandTitle }}</h3>
          <h4>{{ item.islandSub }}</h4>
          <p>{{ item.islandText }}</p>
        </div>
      </div>
    </div>
    <div class="btn_more">
      <router-link to="/Activity" class="btn_page_link">了解更多</router-link>
    </div>
    <div class="home_snow_parallex">
      <img
        class="snow_bg_img s_1"
        src="../assets/images/home/home_snow_600_1.png"
        alt=""
      />
      <img
        class="snow_bg_img s_2"
        src="../assets/images/home/home_snow_600_2.png"
        alt=""
      />
      <img
        class="snow_bg_img s_3"
        src="../assets/images/home/home_snow_600_3.png"
        alt=""
      />
      <img
        class="snow_bg_img s_4"
        src="../assets/images/home/home_snow_600_4.png"
        alt=""
      />
    </div>
  </section>
</template>
<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomeActivityIsland',
  data() {
    return {
      activityIsland: [
        {
          id: 'jungle',
          islandPic: '@/assets/images/activity/activity_jungle.png',
          islandTitle: '叢林歷險',
          islandSub: '感受叢林的大自然氣氛',
          islandText:
            '叢林探險地區擁有大面積原生植物，還有許多叢林動物的蹤跡，讓您不用飛到熱帶國家也可以享受到同樣的景致，尤其特別喜歡享受大自然的遊客，千萬不要錯過叢林探險地區。然而，在叢林探險地區冒險，無須擔心安全的問題，並不會受到動物的攻擊，但要小心蚊蟲襲擊，若遇到突發狀況，也可隨時聯繫到工作人員！',
        },
        {
          id: 'snow',
          islandPic: '@/assets/images/activity/activity_snow.png',
          islandTitle: '冰雪奇緣',
          islandSub: '感受大雪紛飛的美景',
          islandText:
            '冰雪奇緣地區為一年四季都為雪季，讓您無需等待到冬天也可以滑雪，並欣賞雪山美景，除了一般雪地活動之外，也可來場雪地健行，享受近距離仔細觀察大自然的樂趣，有膨鬆柔軟的粉雪綿延不絕，且能在導遊允許的範圍內自由玩耍，在飄落新雪的雪地上蹦蹦跳跳、或跟同伴打打雪仗、或用雪橇從小小的雪丘上飛速俯衝而下等，能享受多彩多姿的玩雪樂趣。',
        },
        {
          id: 'canyon',
          islandPic: '@/assets/images/activity/activity_canyon.png',
          islandTitle: '荒野峽谷',
          islandSub: '親身感受壯麗峽谷景色',
          islandText:
            '荒野峽谷地區是由河流向下切蝕形成河谷，但由於河谷兩旁的谷壁易因侵蝕或崩塌，不斷擴大而形成V形橫剖面，不需飛到美國也可以就近體驗峽谷的壯觀景色，如果想在天上目睹峽谷全貌的話，可以乘坐熱氣球，由專人為您導覽解說，讓您可以一邊享受壯麗景觀的同時，也可以更了解峽谷地形的形成演變史。',
        },
      ],
    };
  },
  methods: {
    enter(el) {
      gsap.to(el, {
        duration: 5,
        y: -30,
        opacity: 1,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true,
      });
    },
  },
  mounted() {
    const snow_1 = document.querySelector('.home_snow_parallex img');
    const snow_2 = document.querySelector('.s_2');
    const snow_3 = document.querySelector('.s_3');
    const snow_4 = document.querySelector('.s_4');

    gsap.to(snow_1, {
      y: -60,
      ease: 'Power3.easeIn',
      scrollTrigger: {
        trigger: '.btn_more',
        scrub: true,
        // markers: true,
        // start: 'top bottom+=80%',
        end: 'top+=5% top ',
      },
    });

    gsap.to(snow_2, {
      y: 40,
      ease: 'Power3.easeIn',
      scrollTrigger: {
        trigger: '.btn_more',
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(snow_3, {
      y: 130,
      ease: 'Power3.easeIn',
      scrollTrigger: {
        trigger: '.btn_more',
        scrub: true,
        // markers: true,
      },
    });
    gsap.to(snow_4, {
      y: 220,
      ease: 'Power3.easeIn',
      scrollTrigger: {
        trigger: '.btn_more',
        scrub: true,
        // markers: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.wrap_activityIsland {
  position: relative;
  background: linear-gradient(to bottom, #abcbe9, $color-main-yellow);
  padding-top: 150px;
  padding-bottom: 350px;
  @include lg() {
    padding-bottom: 200px;
  }
  @include md(){
    padding-bottom: 150px;
  }
  @include sm(){
    padding-bottom: 100px;
  }
}
// 首頁下面 snow 的滾動視差動畫
.home_snow_parallex {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  bottom: -45%;
  object-position: 50% 50%;
  overflow: hidden;
  @include sm() {
    display: none;
  }
}
.home_snow_parallex .snow_bg_img {
  position: absolute;
  object-fit: contain;
  @include xl() {
    object-fit: cover;
    object-position: 10% 0;
  }
  @include lg() {
    object-fit: cover;
    object-position: 10% 0;
  }
  @include md() {
    object-position: 30% 0;
  }
  @include sm() {
    // object-position: 30% 0;
  }
}
.home_snow_parallex img:nth-child(1) {
  height: 100%;
  z-index: 11;
  bottom: 1%;
}
.home_snow_parallex img:nth-child(2) {
  height: 100%;
  z-index: 10;
  bottom: 3%;
  @include lg() {
    bottom: 1%;
  }
  @include md() {
    bottom: -3%;
  }
  @include sm() {
    bottom: 20%;
  }
}
.home_snow_parallex img:nth-child(3) {
  height: 100%;
  z-index: 9;
  bottom: 4%;
  @include lg() {
    bottom: 2%;
  }
  @include md() {
    bottom: -4%;
  }
  @include sm() {
    bottom: 20%;
  }
}
.home_snow_parallex img:nth-child(4) {
  height: 100%;
  z-index: 8;
  bottom: 5%;
  @include lg() {
    bottom: 1%;
  }
  @include md() {
    bottom: -7%;
  }
  @include sm() {
    bottom: 50%;
  }
}
.activityIsland_group {
  z-index: 20;
  position: relative;
  width: 80%;
  max-width: 1296px;
  margin: 0 auto;
  padding-bottom: 50px;
  @include tb() {
    width: 90%;
  }
  @include md() {
    width: 95%;
  }
}
.btn_more {
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 20;
}
.activityIsland_items {
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  align-items: center;
  @include md() {
    width: 95%;
    margin: 0 auto;
  }
}
.activityIsland_items .island_picture {
  width: 40%;
  position: relative;
  left: 50px;
  z-index: 1;
  @include tb() {
    width: 50%;
    left: 25px;
  }
  @include md() {
    width: 100%;
    margin: 0 auto;
    left: 0;
    bottom: -50px;
  }
}
.island_text {
  width: 60%;
  padding: 60px;
  border-radius: 20px;
  background-color: #ffff;
  position: relative;
  z-index: 0;
  h4 {
    padding: 10px 0;
  }
  p {
    padding: 10px 0;
    text-align: justify;
    text-indent: 2em;
    line-height: 2em;
  }
  @include tb() {
    width: 50%;
    padding: 30px;
    position: relative;
    z-index: 0;
  }
  @include md() {
    width: 100%;
    padding: 30px;
    padding-top: 55px;
  }
}

.reverse {
  flex-direction: row-reverse;
  .island_picture {
    position: relative;
    left: -30px;
    z-index: 1;
    @include tb() {
      width: 50%;
      left: -20px;
    }
    @include md() {
      width: 100%;
      margin: 0 auto;
      left: 0;
      bottom: -50px;
    }
  }
}
</style>
