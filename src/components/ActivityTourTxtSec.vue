<template>
            <div class="activity_item_text" v-show="idx==false">
                <span>{{ item.sub  }}</span>
                <p>{{ item.textSen }}</p>
            </div>
</template>

<script>
    export default {
        name: "ActivityTourTxtFirst",
        
        data(){
            return {
                activitySection:[
                    {name:'叢林歷險',
                     id:1,
                     titleFir:'遊覽動物',
                     sub:'叢林歷險',
                     textFir:'當您從台北預訂半日遊時，遠離城市的喧囂，沉浸在美麗的自然風光中。早晨，您可以直接從酒店出發，搭乘舒適的空調客車。您的目的地是東北海岸國家風景區。參觀繁華的港口城市基隆，欣賞其曠陰佛像，繼續前往壯觀的野柳地質公園，以其獨特的岩層而聞名。',
                     titleSen:'寶藏探險',
                     textSen:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
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
                     imgDotSec:require('@/assets/images/activity/activity_10.png'),
                    }
                ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/style.scss';
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

    .activity_items {
      background-color: #ffffff;
      margin-bottom: 20px;
      box-sizing: border-box;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 2px 2px 1px 1px #44726B;
    }

        
    

    </style>
    