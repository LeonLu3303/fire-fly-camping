<template>
    <section v-for="(item,index) in activitySection" :key="item.name" class="activity_wrapper" :class="bgColor[index]">
        <div class="wrapper">
            <div class="title_main">
                <h2>{{ item.name }}</h2>
            </div>
            <div class="activity_group" :class="{reverse: index%2 === 0}" >
                <div class="activity_item_group">
                    <div class="activity_items">
                        <div class="activity_item_title">
                            <h3>{{ item.titleFir }}</h3>
                        </div> 
                        <div class="activity_item_text">
                            <span>{{ item.sub }}</span>
                            <p>{{ item.textFir }}</p>
                        </div>
                    </div>
                    <div class="activity_items" >
                        <div class="activity_item_title">
                            <h3>{{ item.titleSen }}</h3>
                        </div> 
                        <div class="activity_item_text">
                            <span>{{ item.sub  }}</span>
                            <p>{{ item.textSen }}</p>
                        </div>
                    </div>
                </div>
                <div class="activity_picture">
                <img
                    class="island"
                    :src="item.imgUrl"
                    alt="小島"
                />
                <img :src="item.imgShadow" alt="小島陰影" />
                </div>
            </div>
            <div class="activity_group_introduction" :class="{reverse: index%2 === 0}">
                <div class="activity_carousel">
                    <img :src="item.imgInfo" alt="叢林照片" />
                </div>
                <div class="activity_introduction_text" >
                    <h3>{{ item.name }}</h3>
                    <h4>{{item.infoSub}}</h4>
                    <p>{{ item.infoText }}</p>
                    <div class="activity_introduction_text_pic" >
                        <img :src="item.imgAnimal" class="animal_img" >
                    </div>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
    export default {
        name: "ActivityTourTest",
        data(){
            return {
                activitySection:[
                    
                    {name:'叢林歷險',
                     titleFir:'遊覽動物',
                     sub:'叢林歷險',
                     textFir:'當您從台北預訂半日遊時，遠離城市的喧囂，沉浸在美麗的自然風光中。早晨，您可以直接從酒店出發，搭乘舒適的空調客車。您的目的地是東北海岸國家風景區。參觀繁華的港口城市基隆，欣賞其曠陰佛像，繼續前往壯觀的野柳地質公園，以其獨特的岩層而聞名。',
                     titleSen:'寶藏探險',
                     textSen:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
                     infoSub:'感受叢林的大自然氣氛',
                     infoText:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
                     imgUrl:require('@/assets/images/activity/activity_1.png'),
                     imgShadow:require('@/assets/images/activity/activity_2.png'),
                     imgInfo:require('@/assets/images/activity/activity_23.jpg'),
                     imgAnimal:require('@/assets/images/activity/activity_20.png')
                    },
                    {name:'冰雪奇緣',
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
                     imgAnimal:require('@/assets/images/activity/activity_13.png')
                    },
                    {name:'荒野峽谷',
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
                     imgAnimal:require('@/assets/images/activity/activity_19.png')
                    }
                ],
                bgColor:[
                    "activity_jungle",
                    "activity_ice",
                    "activity_canyon"
                ]
        }
    }
}
</script>

<style lang="scss">
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
        animation-name: move;
        animation-duration: 2s;
        // animation-delay: .5s;
        animation-direction:alternate-reverse;
        animation-iteration-count: infinite;
      }
      @keyframes move {
      0%   {transform: translateY(0px);}
      100% {transform: translateY(50px);}
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
    .animal_img{
        width: 20%;
        position: absolute;
        left: -50px;
        bottom:-50px;

    }
    .reversepic{
        position: absolute;
        right: 0px;  
        
    }
        
    

    </style>
    