<template>
    <section class="activity_overview activity_wrapper">
    <div class="wrapper">
      <div class="title_main">
        <h2>{{ activityTitle }}</h2>
      </div>
      <div class="activity_tabs">
        <ul class="activity_tabs_all">
          <li class="activity_tabs tab_jungle tab_title"
              @click="activeTab = 'jungle'">{{ jungleTitle }}</li>
          <li class="activity_tabs tab_snow tab_title"
              @click="activeTab = 'snow'">{{ iceTitle }}</li>
          <li class="activity_tabs tab_canyon tab_title"
              @click="activeTab = 'canyon'">{{ canyonTitle }}</li>
        </ul>
        <div v-if="activeTab === 'jungle'" class="tabcontent" id="jungletab">
            <div class="tabcontent_group"
                  v-for="(item, idx) in activitydata[0]" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <div class="tabcontent_picture">
                    <img :src="require(`@/assets/images/activity/${item.activity_pic}`)" alt="叢林照片">
                </div>
                <div class="tabcontent_text">
                    <h3>{{item.activity_name}}</h3>
                    <h4>{{item.activity_subtitle}}</h4>
                    <p>{{item.activity_info}}</p>
                </div>
                <ul class="tabcontent_notice">
                    <li><span>開放時間:</span>每日08:30-17:30</li>
                    <li><span>體驗價格:</span>{{item.activity_price}}元</li>
                    <li><span>適合族群:</span>{{item.activity_suitable_guest}}</li>
                    <li><span>注意事項:</span><p>{{item.activity_note}}</p></li>
                </ul>
            </div>
        </div>
            
        <div v-else-if="activeTab === 'snow'" class="tabcontent" id="snowtab">
          <div class="tabcontent_group"
          v-for="(item, idx) in activitydata[1]" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <div class="tabcontent_picture">
                    <img :src="require(`@/assets/images/activity/${item.activity_pic}`)" alt="雪地照片">
                </div>
                <div class="tabcontent_text">
                    <h3>{{item.activity_name}}</h3>
                    <h4>{{item.activity_subtitle}}</h4>
                    <p>{{item.activity_info}}</p>
                </div>
                <ul class="tabcontent_notice">
                    <li><span>開放時間:</span>每日08:30-17:30</li>
                    <li><span>體驗價格:</span>{{item.activity_price}}元</li>
                    <li><span>適合族群:</span>{{item.activity_suitable_guest}}</li>
                    <li><span>注意事項:</span><p>{{item.activity_note}}</p></li>
                </ul>
            </div>
        </div>
        <div v-else class="tabcontent" id="canyontab">
          <div class="tabcontent_group"
          v-for="(item,idx) in activitydata[2]" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <div class="tabcontent_picture">
                    <img :src="require(`@/assets/images/activity/${item.activity_pic}`)" alt="峽谷照片">
                </div>
                <div class="tabcontent_text">
                    <h3>{{item.activity_name}}</h3>
                    <h4>{{item.activity_subtitle}}</h4>
                    <p>{{item.activity_info}}</p>
                </div>
                <ul class="tabcontent_notice">
                    <li><span>開放時間:</span>每日08:30-17:30</li>
                    <li><span>體驗價格:</span>{{item.activity_price}}元</li>
                    <li><span>適合族群:</span>{{item.activity_suitable_guest}}</li>
                    <li><span>注意事項:</span><p>{{item.activity_note}}</p></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
  export default {
    name: "ActivityInfo",
    beforeMount(){
      this.FetchAPIFunc()
    },
    data(){
        return {
            activityTitle: '活動介紹',
            jungleTitle: '叢林歷險',
            iceTitle: '冰雪奇緣',
            canyonTitle: '荒野峽谷',
            activeTab: 'jungle',
            // cardJungle: [
            //     {
            //       id:'tour',
            //       junglePic: '@/ass',
            //       jungleTitle: '遊覽動物',
            //       jungleSub: '在叢林中遊覽各種動物的英姿',
            //       jungleText: "樹頂探險 是全程在樹上探險的一個過程，可以欣賞茂密的森林、眺望大山與河谷平原的景色，有可能看見猴子、松鼠與老鷹，我們跟猴子一樣在樹上飛躍與闖關，享受與大自然融為一體的樂趣。 森林裡的索道路線錯綜複雜分不清方向，所以必須由指導員來指引。我們採用最高標準的 “saferoller” 連續式安全確保系統 照顧您的每一步，這意味著一旦進入我們的第一個關卡，就不能後悔必須走完，幸好指導員安定人心的行前說明及適時的出現，協助完成探險經歷，現在就來安排您的假期吧!",
            //       openTime:'每日08:30~17:30',
            //       price:'每人3,500元',
            //       people:'全年齡喜歡刺激的人',
            //       notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
            //     },
            //     {
            //       id:'adv',
            //       junglePic: '@/assets/images/activity/activity_tour.jpg',
            //       jungleTitle: "寶藏探險",
            //       jungleSub: "快來叢林尋找大秘寶",
            //       jungleText: "葡國裔西班牙探險家在1519年率領船隊首次環航地球，因金主西班牙政府財力不濟，航海計劃唯有靠Moncada家族出資成行，而環航主要目的是尋找價值不斐的黃金寶藏。 1521年後麥哲倫死於與菲律賓當地部族的衝突中，船長與船員找到了寶物後卻秘而不宣，傳說這批黃金被藏在西班牙某處。幾百年來探險家冒險犯難，黃金仍未被尋獲，最後主角憑藉失散多年親兄遺下的綫索，和尋寶獵人合作，就種種謎團抽絲剝繭，尋找寶藏。",
            //       openTime:'每日08:30~17:30',
            //       price:'每人3,500元',
            //       people:'全年齡喜歡刺激的人',
            //       notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
            //     }              
            // ],
            // cardSnow: [
            //     {
            //       id:'ski',
            //       snowPic: '@/assets/images/activity/activity_tour.jpg',
            //       snowTitle: '滑雪體驗',
            //       snowSub: '超大滑雪場等你來體驗',
            //       snowText: "噴雪機是直噴式的，也就是說不需要的有壓縮空氣的幫助。這就好像我們澆花用的噴壺一樣，當水通過噴嘴後由於霧化作用，形成細微的液滴，然後由風扇鼓吹到空中。好處是噴雪機不需要配備有麻煩的空氣壓縮裝置，而只需有供水和動力裝置就可以了。水由液態凝結成固態的過程會比較困難，需要大的過冷度和好的形核條件以釋放水的凝固熱，這對自然條件的要求就比較苛刻。因此噴雪機通常都會有專門的冷卻部分，當外界條件差一點不能滿足造雪條件時，會促進水的凝固過程，在到達地面前能夠進行充分的冷卻、能模擬出自然降雪的情況唷。",
            //       openTime:'每日08:30~17:30',
            //       price:'每人3,500元',
            //       people:'全年齡喜歡刺激的人',
            //       notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
            //     },
            //     {
            //       id:'fish',
            //       snowPic: '@/assets/images/activity/activity_tour.jpg',
            //       snowTitle: "冰上釣魚",
            //       snowSub: "享受冰上釣魚樂趣",
            //       snowText: "山川魚慶典將舉行，慶典期間您可在厚達40公分以上的冰層找個好位置，將釣竿放進冰釣窟窿，享受冰上垂釣的樂趣！當山川魚上鉤後，您還可以在現場的燒烤區、活動區品嚐山川魚鮮美的滋味，除了冰上釣魚體驗，現場也能玩雪盆、雪橇，還有「赤手捕魚」活動，挑戰從裝滿山川魚的大型水池，徒手抓起山川魚！冬天除了玩冰魚節慶典，韓國擁有許多優質的滑雪場，不但設備完整，也依不同滑雪程度的人設計了陂度不同的滑道，可挑戰不同層級，一展您的滑雪長才，讓您嘗試前所未有的滑雪樂，或在雪地裡和三五好友打雪仗，享受在雪地裡自由玩樂的感覺，這絕對是在台灣體驗不到的哦。",
            //       openTime:'每日08:30~17:30',
            //       price:'每人3,500元',
            //       people:'全年齡喜歡刺激的人',
            //       notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
            //     }              
            // ],
            // cardCanyon: [
            //     {
            //       id:'balloon',
            //       canyonPic: '@/assets/images/activity/activity_tour.jpg',
            //       canyonTitle: '熱氣球遊覽大峽谷',
            //       canyonSub: '空中遨遊欣賞峽谷美景',
            //       canyonText: "熱氣球點火，準備就緒，緩緩地迎著朝陽飛向天空，緩慢飛升的過程，從高處鳥瞰，愛河風光盡收眼底，這樣的美讓人更愛高雄，用不同的視角看，有一種想要跟高雄說早安的感覺很美。」起了一早，民眾幸運地搭上熱氣球，彌補前一天氣球沒能升空的遺憾，沒能搭上氣球的，從旁捕捉美景打卡，同樣覺得幸福，民眾說：「期待很久了，去年沒有辦，所以今年特別期待，因為已經可以看到這個高雄愛河這個場域，是非常適合飛熱氣球的。」接下來天候因素許可，仍會有熱氣球升空，歡迎大家來愛河體驗浪漫，享受美食。",
            //       openTime:'每日08:30~17:30',
            //       price:'每人3,500元',
            //       people:'全年齡喜歡刺激的人',
            //       notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
            //     },
            //     {
            //       id:'rock',
            //       canyonPic: '@/assets/images/activity/activity_tour.jpg',
            //       canyonTitle: "攀岩體驗",
            //       canyonSub: "挑戰大峽谷攀岩",
            //       canyonText: "頂繩攀登是一堂適合入門新手的訓練，課程中除了繩結、基礎攀岩技巧、確保技術之外，還有攀岩安全口號等課程內容，在課程結束後能有能力參與安檢卡的考試，以及能自己與同伴一起攀岩。先鋒攀登是Top Rope之後的進階課程，主要為教導先鋒攀登的技能，讓你能與繩伴先鋒一條路線攀岩。課程內容將包含：進階攀岩技巧、先鋒確保、進階攀岩技術、掛快扣以及掛繩等技術",
            //       openTime:'每日08:30~17:30',
            //       price:'每人3,500元',
            //       people:'全年齡喜歡刺激的人',
            //       notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
            //     }              
            // ],
            activitydata:[]    
        }
    },methods:{
      FetchAPIFunc(){
        fetch('http://localhost/CGD102G1/back_end/activity.php').then((response) => {
        this.fetchError = (response.status !== 200)
        //json(): 返回 Promise，resolves 是 JSON 物件
        return response.json()
      }).then(responseText => {
      console.log("------",responseText)
      const useData = responseText
      this.activitydata = useData
      console.log(this.activitydata);
    }).catch((err) => {
      this.activitydata = true
    });
  },
},
  mounted() {
    console.log(this.activitydata);
  }
}
</script>

<style  lang="scss" scoped>
@import '@/assets/scss/style.scss';
.activity_wrapper {
  width: 100%;
  padding: 150px 0;
} 
.activity_overview {
  background-color: $color-main-yellow;
}
.wrapper {
  width: 80%;
  margin:auto;
  @include md(){
    width: 95%;
  } 
}
.activity_tabs_all{
  display: flex;
}
.tab_jungle {
  background-color:#abe8d6;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  border-radius:10px 0 0 0;
  @include md(){
    padding: 20px 15px;
  } 
}
.tab_snow {
  background-color: #abcbe9;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  @include md(){
    padding: 20px 15px;
  } 
}
.tab_canyon {
  background-color:#e1bb9e;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  border-radius:0 10px 0 0;
  @include md(){
    padding: 20px 15px;
  } 
}
.tab_title {
  color: #537979;
  font-weight: 700;
  font-size: $title_h4;
  letter-spacing: 1px;
  &:hover {
    color: #ffffff;
  }
}
.tabcontent {
  height: 100%;
}
#jungletab {
  background: url(@/assets/images/activity/activity_jungle_p.png),
    linear-gradient(to bottom, #abe8d6, $color-main-yellow);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  border-radius:0 10px 10px 10px;
  @include md(){
    border-radius:0 0 10px 10px;
  } 
}
#snowtab {
  background: url(@/assets/images/activity/activity_snow_p.png),
    linear-gradient(to bottom, #abcbe9, $color-main-yellow);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  border-radius:0 10px 10px 10px;
  @include md(){
    border-radius:0 0 10px 10px;
  }
}
#canyontab {
  background: url(@/assets/images/activity/activity_canyon_p.png),
    linear-gradient(to bottom, #e1bb9e, $color-main-yellow);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
    border-radius:0 10px 10px 10px;
    @include md(){
      border-radius:0 0 10px 10px;
  }
}
.tabcontent_group{
  display: flex;
  flex-wrap: wrap;
  padding:80px 50px;
  @include lg(){
    padding:50px 35px;
  } 
  @include tb(){
    width: 100%;
    padding:50px 30px;
  } 
  @include md(){
    padding:30px 20px;
  } 
  .tabcontent_picture{
    width: 50%;
    @include lg(){
      width: 85%;
      margin: auto;
      margin-bottom: 20px;
    }
    @include tb(){
      width: 100%;
    } 
    @include md(){
      width: 100%;
    } 
  }
  .tabcontent_text{
    width: 50%;
    padding: 0 20px;
    @include lg(){
      width: 85%;
      margin: auto;
      padding: 0;
      margin-bottom: 20px;
    }
    @include tb(){
      width: 100%;
      padding: 0px;
      padding-top:20px ;
    } 
    @include md(){
      width: 100%;
      padding: 0px;
      padding-top:20px ;
    } 
    h3{
      color:$color-basic-gray3 ;
      @include md(){
        font-size: 22px;
      } 
    }
    h4{
      margin-bottom: 20px;
      color:$color-basic-gray1 ;
      @include md(){
        font-size: 18px;
        padding:0;
        padding-bottom: 15px;
      } 
    }
    p{
      text-align: justify;
      color:$color-basic-gray2 ;
      text-indent:2em;
      line-height: 2em;
      @include md(){
        line-height: 28px;
      } 
    }
  }
  .tabcontent_notice{
    width: 100%;
    background-color: rgba($color: #ffff, $alpha: .6);
    padding: 20px;
    margin-top: 50px;
    @include lg(){
      width: 85%;
      margin: auto;
    }
    @include tb(){
      width: 100%;
    }
    @include md(){
      width: 100%;
    }
    li{
      padding:8px;
      p{
        text-align: justify;
        padding-top:10px ;
      }
    }
    span{
      font-weight: 600;
      padding-right:10px ;
    }
  } 
}
.reverse{
  flex-direction: row-reverse;
}
</style>