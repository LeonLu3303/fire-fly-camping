<template>
    <section v-for="(item,index) in activitySection" :key="item.id" class="activity_wrapper" :class="bgColor[index]">
        <div class="wrapper">
            <div class="title_main">
                <h2>{{ item.name }}</h2>
            </div>
            <div class="activity_group" :class="{reverse: index%2 === 0}" >
                <!-- 小島圖片區 -->
                <div class="activity_picture">
                  <div class="dot_positin" :class="dotPosition[index]">
                    <!-- 點按錨點要打開文字內容跟換圖片 -->
                    <div class="dot_positin_first" @click="dotHander(index, 1)" >
                      <transition name="fade" mode="out-in" class="test">
                        <img v-if="openCollapse[index] == 1" class="dot_first" :src="item.imgDotFirL" alt="錨點">
                        <img v-else class="dot_first" :src="item.imgDotFir" alt="錨點"> 
                      </transition>
                    </div>
                    <div class="dot_positin_second" @click="dotHander(index, 0)" >
                      <transition name="fade" mode="out-in">
                        <img v-if="openCollapse[index] == 0" class="dot_second" :src="item.imgDotSecL" alt="錨點">
                        <img v-else class="dot_second" :src="item.imgDotSec" alt="錨點">
                      </transition>
                    </div>
                  </div>
                  <img class="island" :src="item.imgUrl" alt="小島"/>
                  <img :src="item.imgShadow" class="shadow" alt="小島陰影"/>
                </div>
                <div class="activity_item_group" >
                    <div class="activity_items">
                        <div class="activity_item_title">
                        <!-- (第一個)點按標題 -->
                            <h3 class="click_title" @click="openCollapse[index] = 0">
                              {{ item.titleFir }}
                            </h3>
                        </div> 
                        <!-- 秀出內容 -->
                        <div class="activity_item_text" 
                             v-show="openCollapse[index] == 0"
                             >
                            <span>{{ item.sub }}</span>
                            <p>{{ item.textFir }}</p>
                        </div>
                    </div>
                    <div class="activity_items" >
                        <div class="activity_item_title">
                          <!-- (第二個)點按標題 -->
                            <h3 class="click_title" @click="openCollapse[index] = 1">{{ item.titleSen }}</h3>
                        </div> 
                        <!-- 秀出內容 -->
                        <transition name="fade-down" mode="out-in">
                        <div class="activity_item_text" 
                             v-show="openCollapse[index] == 1">
                            <span>{{ item.sub  }}</span>
                            <p>{{ item.textSen }}</p>
                        </div>
                        </transition>
                    </div>
                </div>
            </div>
            <!-- 地區介紹 -->
            <div class="activity_group_introduction"  :class="{reverse: index%2 === 0}">
                <div class="activity_carousel">
                  <!-- activity_block 要和子元素 props 內的變數名稱相同 -->
                    <ActivityCarousel :activity_block="item.name"/> 
                </div>
                <div class="activity_introduction_text" >
                    <h4>{{item.infoSub}}</h4>
                    <p>{{ item.infoText }}</p>
                    <div class="activity_introduction_text_pic" :class="{reverse_pic: index%2 === 1}">
                        <img :src="item.imgAnimal" class="animal_img" >
                    </div>
                </div>
            </div>
        </div>
    </section>   
</template>

<script>
import { init } from 'events';
import {gsap} from 'gsap'
import ActivityCarousel from './ActivityCarousel.vue'

export default {
  components:{
    ActivityCarousel,
    },
  data(){
    return {
      activitySection:[
          {name:'叢林歷險',
            id:"jungle",
            titleFir:'遊覽動物',
            sub:'叢林歷險',
            textFir:'當您在叢林歷險露營時，遊覽動物活動是您最佳的選擇之一，可以遠離城市的喧囂，沉浸在美麗的自然風光中，還有各種不同的動物治癒人心，但請勿隨意觸摸動物。',
            titleSen:'寶藏探險',
            textSen:'寶藏探險是考驗玩家取捨的策略遊戲，會有島上的尋寶地圖，在叢林尋覓寶藏，其中會有小遊戲關卡供玩家破關，每破一個關卡就可以得到一個提示！',
            infoSub:'感受叢林的大自然氣氛',
            infoText:'叢林探險地區擁有大面積原生植物，還有許多叢林動物的蹤跡，讓您不用飛到熱帶國家也可以享受到同樣的景致，尤其特別喜歡享受大自然的遊客，千萬不要錯過叢林探險地區。然而，在叢林探險地區冒險，無須擔心安全的問題，並不會受到動物的攻擊，但要小心蚊蟲襲擊，若遇到突發狀況，也可隨時聯繫到工作人員！',
            imgUrl:require('@/assets/images/activity/activity_1.png'),
            imgShadow:require('@/assets/images/activity/activity_2.png'),
            imgInfo:require('@/assets/images/activity/activity_23.jpg'),
            imgAnimal:require('@/assets/images/activity/activity_20.png'),
            imgDotFir:require('@/assets/images/activity/activity_5.png'),
            imgDotFirL:require('@/assets/images/activity/activity_27.png'),
            imgDotSec:require('@/assets/images/activity/activity_6.png'),
            imgDotSecL:require('@/assets/images/activity/activity_26.png')
          },
          {name:'冰雪奇緣',
            id:"snow",
            titleFir:'滑雪體驗',
            sub:'冰雪奇緣',
            textFir:'一年四季都可以享受到滑雪活動，場內設備非常安全，滑雪體驗一定會伴隨教練，所以教練的互動也是很重要的一環，進階課程將會藉著人工冰攀場來練習基礎的冰攀技巧，以因應實際演練中許多複雜混合的地形。',
            titleSen:'冰上釣魚',
            textSen:'冰上釣魚活動，露營期間您可在厚達40公分以上的冰層找個好位置，將釣竿放進冰釣窟窿，享受冰上垂釣的樂趣！當山川魚上鉤後，您還可以在現場的燒烤區、活動區品嚐雪地魚鮮美的滋味，除了冰上釣魚體驗，現場也能玩雪盆、雪橇！',
            infoSub:'美麗的雪景，使人的心靈變得一樣美麗純潔',
            infoText:'冰雪奇緣地區為一年四季都為雪季，讓您無需等待到冬天也可以滑雪，並欣賞雪山美景，除了一般雪地活動之外，也可來場雪地健行，享受近距離仔細觀察大自然的樂趣，有膨鬆柔軟的粉雪綿延不絕，且能在導遊允許的範圍內自由玩耍，在飄落新雪的雪地上蹦蹦跳跳、或跟同伴打打雪仗、或用雪橇從小小的雪丘上飛速俯衝而下等，能享受多彩多姿的玩雪樂趣。',
            imgUrl:require('@/assets/images/activity/activity_12.png'),
            imgShadow:require('@/assets/images/activity/activity_2.png'),
            imgInfo:require('@/assets/images/activity/activity_24.jpg'),
            imgAnimal:require('@/assets/images/activity/activity_13.png'),
            imgDotFir:require('@/assets/images/activity/activity_11.png'),
            imgDotFirL:require('@/assets/images/activity/activity_28.png'),
            imgDotSec:require('@/assets/images/activity/activity_10.png'),
            imgDotSecL:require('@/assets/images/activity/activity_29.png'),
          },
          {name:'荒野峽谷',
            id:"canyon",
            titleFir:'熱氣球遊覽大峽谷',
            sub:'荒野峽谷',
            textFir:'看著來自各國的專業飛行員駕駛碩大的夢幻熱氣球，滿載觀眾們的興奮期盼漫天飄遠，徜徉在縱谷間的大峽谷之中，是這裡不可錯過的一大美景。熱氣球自由飛空中遊覽，除了現場體驗升空的感動，還有視覺及聽覺浪漫激盪的精采饗宴。',
            titleSen:'攀岩體驗',
            textSen:'峽谷運動攀登將先鋒攀登保護支點都已經事先用錨栓打好的路線，該些錨栓在路線上的距離配置均勻，不會讓攀登者的墜落距離過長。錨栓通常都是路線開發者從路線上方垂降下來時打進岩壁的。天然岩場用錨栓架設的路線，以及人工岩場中可供先鋒的路線，都是屬於運動攀登路線。',
            infoText:'荒野峽谷地區是由河流向下切蝕形成河谷，但由於河谷兩旁的谷壁易因侵蝕或崩塌，不斷擴大而形成V形橫剖面，不需飛到美國也可以就近體驗峽谷的壯觀景色，如果想在天上目睹峽谷全貌的話，可以乘坐熱氣球，由專人為您導覽解說，讓您可以一邊享受壯麗景觀的同時，也可以更了解峽谷地形的形成演變史。',
            imgUrl:require('@/assets/images/activity/activity_18.png'),
            imgShadow:require('@/assets/images/activity/activity_2.png'),
            imgInfo:require('@/assets/images/activity/activity_25.jpg'),
            imgAnimal:require('@/assets/images/activity/activity_19.png'),
            imgDotFirL:require('@/assets/images/activity/activity_30.png'),
            imgDotFir:require('@/assets/images/activity/activity_16.png'),
            imgDotSec:require('@/assets/images/activity/activity_17.png'),
            imgDotSecL:require('@/assets/images/activity/activity_31.png'),
          }
      ],
      bgColor:[
          "activity_jungle",
          "activity_ice",
          "activity_canyon"
      ],
      dotPosition:[
          "dot_jungle",
          "dot_ice",
          "dot_canyon"
      ],
      openCollapse: [0, 0 ,0],
  }
},
  methods:{
    // isShow(idx){
    //   console.log(idx)
    //   this.idx =!this.idx
    // },
    dotHander(index, num) {
      this.openCollapse[index] = num;
    },
  },
  mounted() {
    const island = document.querySelectorAll(".island");
    gsap.to(island,{
      duration:5,
      y:-30,
      repeat:-1,
      ease: "power1.inOut",
      yoyo:true
    })

    const shadow = document.querySelectorAll(".shadow");
    gsap.to(shadow,{
      autoAlpha:.3,
      duration:5,
      scale:.5,
      ease: "power1.inOut",
      repeat:-1,
      yoyo:true
    }); 
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.activity_wrapper {
  width: 100%;
  padding: 150px 0;
}
.wrapper {
    width: 80%;
    margin: auto;
    @include lg(){
      width: 95%;
    }
    @include tb(){
      width: 95%;
    }
    @include md(){
      width: 95%;
    }
}
//主題標題
.title_main{
  padding-bottom:80px ;
}
//漸層背景色
.activity_jungle {
  background: linear-gradient(to bottom, $color-main-yellow,$color-aid-green1);
}
.activity_ice {
  background: linear-gradient(to bottom, $color-main-yellow, $color-aid-blue1);
}
.activity_canyon {
  background: linear-gradient(to bottom, $color-main-yellow, $color-aid-orange1);
}
//反轉
.reverse{
    flex-direction: row-reverse;
}
.activity_group {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 50px;
  margin-bottom: 100px;
  @include xl(){
    min-height: 600px;
  }
  @include lg(){
    margin-bottom: 50px;
  }
  @include tb(){
    margin-bottom: 0px;
  }
  @include md(){
    margin-bottom: 0px;
  }
}
.activity_item_group {
  width: 35%;
  @include tb(){
    width: 90%;
  }
  @include md(){
    width: 95%;
  }
}
.activity_item_text{
  span{
    font-weight: 600;
    display: inline-block;
    padding: 10px 0;
  }
  p{
    padding: 15px 0;
    text-indent:2em;
    text-align: justify;
    line-height: 2em;
  }
}
//圖片區
.activity_picture {
  width: 55%;
  position: relative;
  @include tb(){
    width: 100%;
  }
  @include md(){
    width: 100%;
  }
  .island {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    @include tb(){
        width: 90%;
        position: relative;
        left: 0;
        right: 0;
        margin: auto;
        padding-bottom: 50px;
      }
      @include md(){
        width: 100%;
      }
    }
  .shadow{
    width: 50%;
    margin: auto;
    position: relative;
    left: 0;
    right: 0;
    top: 420px;
    z-index: 1;
    @include xl(){
      top: 500px;
      }
    @include tb(){
        position: absolute;
        width: 70%;
        top: 63%;
        margin: auto;
      }
    @include md(){
        width: 70%;
        top: 60%;
      }
    }
//叢林小島錨點定位
  .dot_jungle{
    .dot_first, .dot_second{
      width: 55px;
      cursor: pointer;
    }
    .dot_first{
      position: absolute;
      left: 30%;
      top: -30px;
      z-index: 3;
      @include lg(){
        top: -25px;
      }
      @include tb(){
        top: -26px;
      }
      @include md(){
        width: 35px;
        left: 26%;
        top: -15px;
      }
    }    
    .dot_second{
      position: absolute;
      left:70%;
      top:250px;
      z-index: 3;
      @include lg(){
        top:190px;
      }
      @include tb(){
        top:220px;
      }
      @include md(){
        width: 35px;
        left: 65%;
        top:110px;
      }
    }          
  }  
//雪地錨點定位
  .dot_ice{
    .dot_first, .dot_second{
      width: 55px;
      cursor: pointer;
      }
    .dot_first{
      position: absolute;
      left: 55%;
      top: -60px;
      z-index:3;
      @include lg(){
        left: 52%;
        top: -45px;
      }
      @include tb(){
        left: 50%;
        top: -50px;
      }
      @include md(){
        width: 35px;
        left: 55%;
        top: -35px;
      }
    }
    .dot_second{
      position: absolute;
      left: 73%;
      top:220px;
      z-index: 3;
      @include lg(){
        left: 73%;
        top:190px;
      }
      @include tb(){
        left: 70%;
        top:230px;
      }
      @include md(){
        width: 35px;
        left: 70%;
        top:100px;
      }
    }
  }
  //峽谷定位錨點
  .dot_canyon{
    .dot_first, .dot_second{
      width: 55px;
      cursor: pointer;
    }
    .dot_first{
      position: absolute;
      left: 25%;
      top: 0px;
      z-index: 3;
      @include lg(){
        top: -10px;
      }
      @include md(){
        width: 35px;
        top: -25px;
      }
    }
    .dot_second{
      position: absolute;
      right: 10%;
      top: 40px;
      z-index:3;
      @include lg(){
        right: 8%;
        top:20px;
      }
      @include tb(){
        right: 14%;
        top: 35px;
      }
      @include md(){
        width: 35px;
        right: 8%;
        top: 5px;
      }
    }
  }
}
.activity_items {
  background-color: #ffffff;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 1px 1px #44726B;
  @include md(){
    padding: 20px;
  }
}
.activity_group_introduction {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 50px;
  justify-content: center;
  @include lg(){
    width: 95%;
    margin:0 auto;
    }
  .activity_carousel {
    width: 45%;
    @include lg(){
      width: 50%;
    }
    @include tb(){
      width: 90%;
    }
    @include md(){
      width: 95%;
    }
    .ant-carousel {
              height: 100%;
              .slick-slider {
                height: 100%;
                .slick-list {
                  height: 100%;
                  .slick-track {
                    height: 100%;
                  }
                }
              }
            }
    }
  .activity_introduction_text {
    width: 45%;
    background-color: #ffffff;
    position: relative;
    padding: 35px;
    @include lg(){
      width: 50%;
      padding: 15px;
    }
    @include tb(){
      width: 90%;
    }
    @include md(){
      width: 95%;
      padding: 25px;
    }
    h4{
      padding:10px 0;
      color:$color-basic-gray2 ;
    }
    p{
      text-align: justify;
      text-indent:2em;
      line-height: 2em;
    }
  }
}
.activity_introduction_text_pic{
  width: 120px;
  position: absolute;
  right: 92%;;
  bottom:-50px;
  @include lg(){
    display: none;
  }
}
.reverse_pic{
  position: absolute;
  right: -12%;  
  bottom:-50px;  
}
.click_title{
cursor: pointer;
}
.fade-down-enter-active, .fade-down-leave-active {
  transition: all .3s;
}
.fade-down-enter-from, .fade-down-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
    