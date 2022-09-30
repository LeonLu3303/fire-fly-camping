<template>
  <section class="wrap_activityIsland">
    <div class="title_main">
        <h2>營區主題</h2>
    </div>
    <div class="activityIsland_group">
        <div class="activityIsland_items"
                  v-for="(item, idx) in activityIsland" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <transition appear @enter="enter">
                  <div class="island_picture">
                      <img :src="require(`@/assets/images/activity/activity_${item.id}.png`)" alt="小島照片">
                  </div>
                </transition>
                <div class="island_text">
                    <h3>{{item.islandTitle}}</h3>
                    <h4>{{item.islandSub}}</h4>
                    <p>{{item.islandText}}</p>
                </div>
        </div>
        
    </div>
    <div class="btn_more">
            <router-link to ="/Activity" class="btn_page_link">了解更多</router-link>
        </div>
  </section>
</template>
<script>
import gsap from 'gsap'
export default {
  name: "HomeActivityIsland",
  data(){
    return{
      activityIsland: [
                    {
                        id:'jungle',
                        islandPic: '@/assets/images/activity/activity_jungle.png',
                        islandTitle: '叢林歷險',
                        islandSub: '感受叢林的大自然氣氛',
                        islandText: "樹頂探險 是全程在樹上探險的一個過程，可以欣賞茂密的森林、眺望大山與河谷平原的景色，有可能看見猴子、松鼠與老鷹，我們跟猴子一樣在樹上飛躍與闖關，享受與大自然融為一體的樂趣。 森林裡的索道路線錯綜複雜分不清方向，所以必須由指導員來指引。我們採用最高標準的 “saferoller” 連續式安全確保系統 照顧您的每一步，這意味著一旦進入我們的第一個關卡，就不能後悔必須走完，幸好指導員安定人心的行前說明及適時的出現，協助完成探險經歷，現在就來安排您的假期吧!"
                    },
                    {
                        id:'snow',
                        islandPic: '@/assets/images/activity/activity_snow.png',
                        islandTitle: '冰雪奇緣',
                        islandSub: '感受大雪紛飛的美景',
                        islandText: "冬天除了一般的滑雪玩法之外，還有另一種滿足大人雪上駕馭樂趣的冬季限定活動—北海道冰上釣魚！每年到了一、二月份，就是在日本釣魚的最佳季節，在札幌冬天結凍的河川，開一個圓圓的洞，垂下釣繩，就可釣冰下的西太公魚，而且不用準備任何釣魚用具之外，還會有日本冰釣達人指導您，就算是釣魚新手也沒不用怕！"
                    },
                    {
                        id:'canyon',
                        islandPic: '@/assets/images/activity/activity_canyon.png',
                        islandTitle: '荒野峽谷',
                        islandSub: '親身感受壯麗峽谷景色',
                        islandText: "臺灣大部分的峽谷是發育在河床兩旁的兩岸的峽谷，最有名的可能就像太魯閣峽谷，但是我們這個大安溪峽谷是發育在比較平坦的河床，河床上面突然抬高以後，然後下切，發育在沉積岩上。臺灣的地震頻繁造成多變的地形、湍急的河水，因此形成了不少峽谷地形；不像其他國家的峽谷，需要經過長年累月才能形成磅礡的氣勢，臺灣的峽谷在短短幾年間就能形成，峽谷的壯觀景色，大自然的鬼斧神工，令人嘖嘖稱奇。"
                    }              
                ]
    }
  },methods:{
       enter(el){
           gsap.to(el,{
             duration:5,
             y:-30,
             opacity:1,
             repeat:-1,
             ease: "power1.inOut",
             yoyo:true
           });
         }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.wrap_activityIsland{
    background:url(@/assets/images/home/home_snow_all.png) $color-main-yellow ;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding-top: 150px;
    padding-bottom: 400px;

}
.activityIsland_group{
    width: 80%;
    max-width: 1296px;
    margin:0 auto;
    padding-bottom: 50px;
    @include tb(){
        width: 90%;
    }
    @include md(){
        width: 95%;
    }
}
.btn_more{
        display: flex;
        justify-content: center;
    }
.activityIsland_items{
  display: flex;
  flex-wrap: wrap;
  padding:30px 0;
  align-items: center;
  @include md(){
        width: 95%;
        margin: 0 auto;
    }
  
  }
  .activityIsland_items .island_picture{
    width: 40%;
    position: relative;
    left: 50px;
    z-index: 1;
    @include tb(){
      width: 50%;
      left: 25px;
    }
    @include md(){
      width: 100%;
        margin: 0 auto;
        left: 0;
        bottom: -50px;
    }
  }
  .island_text{
    width: 60%;
    padding:60px;
    border-radius: 20px ;
    background-color: #ffff;
    position: relative;
    z-index: 0;
    h4{
      padding:10px 0;
    }
    p{
      padding:10px 0;
      text-align: justify;
      text-indent:2em;
      line-height: 2em;
    }
    @include tb(){
      width: 50%;
      padding:30px;
      position: relative;
      z-index: 0;
    }
    @include md(){
      width: 100%;
      padding:30px;
      padding-top:55px ;
    }
  }

.reverse{
   flex-direction: row-reverse;
   .island_picture{
    position: relative;
    left: -30px;
    z-index: 1;
    @include tb(){
      width: 50%;
      left: -20px;
    }
    @include md(){
      width: 100%;
      margin: 0 auto;
      left: 0;
      bottom: -50px;
    }
   }
  }


</style>