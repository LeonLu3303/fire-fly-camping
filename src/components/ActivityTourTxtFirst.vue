<template>
        <div class="activity_item_text" v-for="item in activity" :key="item.name">
            <span>{{ item.sub }}</span>
            <p>{{ item.textFir }}</p>
        </div>
</template>

<script>
    export default {
        name: "ActivityTourTxtFirst",
        
        data(){
            return {
                activity:[
                    {name:'jungle',
                     id:1,
                     sub:'叢林歷險',
                     textFir:'當您從台北預訂半日遊時，遠離城市的喧囂，沉浸在美麗的自然風光中。早晨，您可以直接從酒店出發，搭乘舒適的空調客車。您的目的地是東北海岸國家風景區。參觀繁華的港口城市基隆，欣賞其曠陰佛像，繼續前往壯觀的野柳地質公園，以其獨特的岩層而聞名。',
                    },
                    {name:'ice',
                     id:2,
                     sub:'冰雪奇緣',
                     textFir:'台灣滑雪場大致可以分為三種，一是真的須穿雪衣雪褲全套體驗的零下雪場，二為滑雪訓練機，以及搭配 VR 畫面的滑雪模擬機。各滑雪學校除了設備種類不同之外，準備的備品也大不相同；但設備使用一定會伴隨教練，所以教練的互動也是很重要的一環。',
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
  
    </style>
    