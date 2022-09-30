<template>
    <section v-for="(item,index) in activitySection" :key="item.id" class="activity_wrapper" :class="bgColor[index]">
        <div class="wrapper">
            <div class="title_main">
                <h2>{{ item.name }}</h2>
            </div>
            <div class="activity_group" :class="{reverse: index%2 === 0}" >
                <div class="activity_item_group" >
                    <div class="activity_items">
                        <div class="activity_item_title">
                            <h3 class="test" @click="isShow(idx)">{{ item.titleFir }}</h3>
                        </div> 
                        <div class="activity_item_text" v-show="idx == true">
                            <span>{{ item.sub }}</span>
                            <p>{{ item.textFir }}</p>
                        </div>
                         <!-- <ActivityTourTxtFirst/> -->
  
                        <!-- <div class="activity_item_title">
                            <h3 @click.prevent="current = 'ActivityTourTxtFirst'">{{ item.titleFir }}</h3>
                        </div>  -->
                        <!-- <div class="activity_item_text" v-show="idx == true">
                            <span>{{ item.sub }}</span>
                            <p>{{ item.textFir }}</p>
                        </div> -->
                        <!-- <ActivityTourTxtFirst/> -->
                        <component :is='current'> </component>
                    </div>
                    <div class="activity_items" >
                        <div class="activity_item_title">
                            <h3 class="test" @click="isShow(idx)">{{ item.titleSen }}</h3>
                        </div> 
                        <div class="activity_item_text" v-show="idx == false">
                            <span>{{ item.sub  }}</span>
                            <p>{{ item.textSen }}</p>
                        </div>
                    </div>
                </div>
                <!-- 小島圖片區 -->
                <div class="activity_picture" >
                  <div class="dot_positin" :class="dotPosition[index]">
                    <div class="dot_positin_first" @click="dotFristOpe" >
                      <!-- <img class="dot_first" :src="item.imgDotFirL" alt="錨點"> -->
                      <img class="dot_first" :src="item.imgDotFir" alt="錨點"> 
                    </div>
                    <div class="dot_positin_second" @click="dotSecondOpen" >
                      <!-- <img class="dot_second" :src="item.imgDotSecL" alt="錨點"> -->
                      <img class="dot_second" :src="item.imgDotSec" alt="錨點">
                    </div>
                </div>
                <transition appear @enter="enter">
                  <img
                    class="island"
                    :src="item.imgUrl"
                    alt="小島"
                />
                </transition> 
                <transition appear @enter="enter">
                  <img :src="item.imgShadow" class="shadow" alt="小島陰影" />
                </transition>
                  
                
                </div>
            </div>
            <!-- 地區介紹 -->
            <div class="activity_group_introduction"  :class="{reverse: index%2 === 0}">
                <div class="activity_carousel">
                  <!-- activity_block 要和子元素 props 內的變數名稱相同 -->
                    <ActivityCarousel :activity_block="item.name"/> 
                </div>
                <div class="activity_introduction_text" >
                    <h3>{{ item.name }}</h3>
                    <h4>{{item.infoSub}}</h4>
                    <p>{{ item.infoText }}</p>
                    <div class="activity_introduction_text_pic" :class="{reverse_pic: index%2 === 1}">
                        <img :src="item.imgAnimal" class="animal_img" >
                    </div>
                </div>
            </div>
        </div>
    </section> 
    <keep-alive>
      <component :is='content'></component>
    </keep-alive>
</template>

<script>
  import ActivityTourTxtFirst from '@/components/ActivityTourTxtFirst.vue'
  import gsap from 'gsap'
import ActivityCarousel from './ActivityCarousel.vue'
    export default {
      components:{
        ActivityTourTxtFirst,
            ActivityCarousel
        },
        data(){
            return {
                current:"",
                activitySection:[
                    {name:'叢林歷險',
                     id:1,
                     titleFir:'遊覽動物',
                     sub:'叢林歷險',
                     textFir:'當您從台北預訂半日遊時，遠離城市的喧囂，沉浸在美麗的自然風光中。早晨，您可以直接從酒店出發參觀繁華的港口城市基隆，欣賞其曠陰佛像，繼續前往壯觀的野柳地質公園，以其獨特的岩層而聞名。',
                     titleSen:'寶藏探險',
                     textSen:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
                     infoSub:'感受叢林的大自然氣氛',
                     infoText:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
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
                     id:2,
                     titleFir:'滑雪體驗',
                     sub:'冰雪奇緣',
                     textFir:'台灣滑雪場大致可以分為三種，一是真的須穿雪衣雪褲全套體驗的零下雪場，二為滑雪訓練機，以及搭配 VR 畫面的滑雪模擬機。各滑雪學校除了設備種類不同之外，準備的備品也大不相同；但設備使用一定會伴隨教練，所以教練的互動也是很重要的一環。',
                     titleSen:'冰上釣魚',
                     textSen:'冬天除了玩冰魚節慶典，韓國擁有許多優質的滑雪場，不但設備完整，也依不同滑雪程度的人設計了陂度不同的滑道，可挑戰不同層級，一展您的滑雪長才，讓您嘗試前所未有的滑雪樂，或在雪地裡和三五好友打雪仗，享受在雪地裡自由玩樂的感覺，這絕對是在台灣體驗不到的哦。',
                     infoSub:'感受雪地的大自然氣氛',
                     infoText:'冬天除了一般的滑雪玩法之外，還有另一種滿足大人雪上駕馭樂趣的冬季限定活動—北海道冰上釣魚！每年到了一、二月份，就是在日本釣魚的最佳季節，在札幌冬天結凍的河川，開一個圓圓的洞，垂下釣繩，就可釣冰下的西太公魚，而且不用準備任何釣魚用具之外，還會有日本冰釣達人指導您，就算是釣魚新手也沒不用怕！',
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
                     id:3,
                     titleFir:'熱氣球遊覽大峽谷',
                     sub:'叢林歷險',
                     textFir:'看著來自各國的專業飛行員駕駛碩大的夢幻熱氣球，滿載觀眾們的興奮期盼漫天飄遠，徜徉在縱谷間的藍天綠山之中，是臺東夏季不可錯過的一大美景。臺灣國際熱氣球嘉年華，包含熱氣球自由飛行表演、熱氣球繫留體驗、熱氣球自由飛空中遊覽、光雕音樂會、熱氣球夏令營，除了現場體驗升空的感動，還有視覺及聽覺浪漫激盪的精采饗宴。',
                     titleSen:'攀岩體驗',
                     textSen:'運動攀登意指先鋒攀登保護支點都已經事先用錨栓打好的路線，該些錨栓在路線上的距離配置均勻，不會讓攀登者的墜落距離過長。錨栓通常都是路線開發者從路線上方垂降下來時打進岩壁的。天然岩場用錨栓架設的路線，以及人工岩場中可供先鋒的路線，都是屬於運動攀登路線。',
                     infoSub:'感受峽谷的大自然氣氛',
                     infoText:'臺灣大部分的峽谷是發育在河床兩旁的兩岸的峽谷，大安溪峽谷是發育在比較平坦的河床，河床上面突然抬高以後，然後下切，發育在沉積岩上。臺灣的地震頻繁造成多變的地形、湍急的河水，因此形成了不少峽谷地形；不像其他國家的峽谷，需要經過長年累月才能形成磅礡的氣勢，峽谷的壯觀景色，大自然的鬼斧神工，令人嘖嘖稱奇！',
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
                idx:true,
                dotFirst:true,
                dotSecond:false,
        }
    },
    methods:{
      isShow(idx){
        console.log(idx)
        this.idx =!this.idx
      },

      dotFristOpen(){
        if(this.dotFirst == true){
          return
        }else{
          this.dotSecond = true
          this.dotFirst = false
        }
      },
      // dotSecondOpen(){
      // }
    // goOpen(){
    //   const dotImg = document.querySelector('.dot_first')
    //   console.log(dotImg)
    // },
    
          },
  
    mounted() {
      const island =document.getElementsByClassName("island");
      gsap.to(island,{
        duration:5,
        y:-30,
        repeat:-1,
        ease: "power1.inOut",
        yoyo:true
      });
      const shadow =document.getElementsByClassName("shadow");
      gsap.to(shadow,{
        duration:7,
        scale:.9,
        repeat:-1,
        ease: "power1.inOut",
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
    }
    .activity_jungle {
      background: linear-gradient(to bottom, $color-main-yellow,$color-aid-green1);
    }
    .activity_ice {
      background: linear-gradient(to bottom, $color-main-yellow, $color-aid-blue1);
    }
    .activity_canyon {
      background: linear-gradient(to bottom, $color-main-yellow, $color-aid-orange1);
    }
    .reverse{
        flex-direction: row-reverse;
    }
    .activity_group {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-bottom: 50px;
    }
    .activity_item_group {
      width: 35%;
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
    .activity_picture {
      width: 55%;
      .island {
        position: relative;
        top: 60px;
        z-index: 1;
       }
      .dot_jungle{
        .dot_first, .dot_second{
        width: 50px;
      }
      .dot_first{
        position: relative;
        transform: translateX(-50%);
        left: 33%;
        bottom: -200px;
        z-index: 2;
      }
      .dot_second{
        position: relative;
        transform: translateX(-50%);
        left:77%;
        bottom: -400px;
        z-index: 2;
      }
      }
      .dot_ice{
        .dot_first, .dot_second{
        width: 50px;
        }
        .dot_first{
          position: relative;
          transform: translateX(-50%);
          left: 57%;
          bottom: -170px;
          z-index: 2;
        }
        .dot_second{
          position: relative;
          transform: translateX(-50%);
          left: 77%;
          bottom: -390px;
          z-index: 2;
        }
      }
      .dot_canyon{
        .dot_first, .dot_second{
        width: 50px;
        }
        .dot_first{
          position: relative;
          transform: translateX(-50%);
          left: 25%;
          bottom: -230px;
          z-index: 2;
        }
        .dot_second{
          position: relative;
          transform: translateX(-50%);
          left: 86%;
          bottom: -180px;
          z-index: 2;
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
    }
    .activity_group_introduction {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 50px;
      justify-content: center;
      .activity_carousel {
        width: 45%;
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

    }
    .reverse_pic{
        position: absolute;
        right: -12%;  
        bottom:-50px;  
    }
    .test{
      cursor: pointer;
    }
        
    

    </style>
    