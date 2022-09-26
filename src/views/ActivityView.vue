<template>
  <MainHeader/>
  <div class="banner">
    <img src="@/assets/images/main/banner_activity.png" alt="banner" />
  </div>
  <section class="activity_jungle activity_wrapper">
    <div class="wrapper">
        <div class="title_main">
           <h2>{{ jungleTitle }}</h2>
        </div>
      <div class="activity_group">
        <div class="activity_item_group">
          <div class="activity_item_tour activity_items">
            <div class="activity_item_tour_title" @click="show = !show">
              <h3>{{ tourTitle }}</h3>
            </div> 
            <div class="activity_item_text" v-show="show" >
              <!-- <h3>{{ tourTitle }}</h3> -->
              <span>{{ jungleSub }}</span>
              <p>{{ tourText }}</p>
            </div>
          </div>
          <div class="activity_item_adventure activity_items">
            <div class="activity_item_adventure_title" :class="btnOptions">{{ advTitle }}</div> 
            <div class="activity_item_text">
              <h3>{{ advTitle }}</h3>
              <span>{{ jungleSub }}</span>
              <p>{{ advText }}</p>
            </div>
          </div>
        </div>
        <div class="activity_picture">
          <img
            class="island"
            src="@/assets/images/activity/activity_1.png"
            alt="叢林小島"
          />
          <img src="@/assets/images/activity/activity_2.png" alt="小島陰影" />
        </div>
      </div>
      <div class="activity_group_introduction">
        <div class="activity_carousel">
          <img src="@/assets/images/activity/activity_23.jpg" alt="叢林照片" />
        </div>
        <div class="activity_introduction_text activity_jungle_text">
          <h3>{{ jungleSub }}</h3>
          <h4>感受叢林的大自然氣氛</h4>
          <p>{{ jungleText }}</p>
          <div class="jungle_pic"></div>
        </div>
      </div>
    </div>
  </section>
  <section class="activity_ice activity_wrapper">
    <div class="wrapper">
      <div class="title_main">
        <h2>{{ iceTitle }}</h2>
      </div>
      <div class="activity_group">
        <div class="activity_picture">
          <img
            class="island"
            src="@/assets/images/activity/activity_12.png"
            alt="冰雪小島"
          />
          <img src="@/assets/images/activity/activity_2.png" alt="小島陰影" />
        </div>
        <div class="activity_item_group">
          <div class="activity_item_ski activity_items">
            <!-- <div class="activity_item_ski_title">{{ skiTitle }}</div> -->
            <div class="activity_item_text">
              <h3>{{ skiTitle }}</h3>
              <span>{{ iceSub }}</span>
              <p>{{ skiText }}</p>
            </div>
          </div>
          <div class="activity_item_fish activity_items">
            <!-- <div class="activity_item_fish_title">{{ fishTitle }}</div> -->
            <div class="activity_item_text">
              <h3>{{ fishTitle }}</h3>
              <span>{{ iceSub }}</span>
              <p>{{ fishText }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="activity_group_introduction">
        <div class="activity_introduction_text activity_snow_text">
          <h3>{{ iceSub }}</h3>
          <h4>感受大雪紛飛的美景</h4>
          <p>{{ snowText }}</p>
        </div>
        <div class="activity_carousel">
          <img src="@/assets/images/activity/activity_24.jpg" alt="雪地照片" />
        </div>
      </div>
    </div>
  </section>
  <section class="activity_canyon activity_wrapper">
    <div class="wrapper">
      <div class="title_main">
        <h2>{{ canyonTitle }}</h2>
      </div>
      <div class="activity_group">
        <div class="activity_item_group">
          <div class="activity_item_ballon activity_items">
            <!-- <div class="activity_item_ballon_title">{{ balloonTitle }}</div> -->
            <div class="activity_item_text">
              <h3>{{ balloonTitle }}</h3>
              <span>{{ canyonSub }}</span>
              <p>{{ balloonText }}</p>
            </div>
          </div>
          <div class="activity_item_rock activity_items">
            <!-- <div class="activity_item_rock_title">{{ rockTitle }}</div> -->
            <div class="activity_item_text">
              <h3>{{ rockTitle }}</h3>
              <span>{{ canyonSub }}</span>
              <p>{{ rockText }}</p>
            </div>
          </div>
        </div>
        <div class="activity_picture">
          <img
            class="island"
            src="@/assets/images/activity/activity_18.png"
            alt="峽谷小島"
          />
          <img src="@/assets/images/activity/activity_2.png" alt="小島陰影" />
        </div>
      </div>
      <div class="activity_group_introduction">
        <div class="activity_carousel">
          <img src="@/assets/images/activity/activity_25.jpg" alt="峽谷照片" />
        </div>
        <div class="activity_introduction_text activity_canyon_text">
          <h3>{{ canyonSub }}</h3>
          <h4>親身感受壯麗峽谷景色</h4>
          <p>{{ canyonText }}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="activity_overview activity_wrapper">
    <div class="wrapper">
      <div class="title_main">
        <h2>{{ activityTitle }}</h2>
      </div>
      <div class="activity_tabs">
        <button
          class="activity_tabs tab_jungle tab_title"
          @click="activeTab = 'jungle'">
          {{ jungleTitle }}
        </button>
        <button
          class="activity_tabs tab_snow tab_title"
          @click="activeTab = 'snow'">
          {{ iceTitle }}
        </button>
        <button
          class="activity_tabs tab_canyon tab_title"
          @click="activeTab = 'canyon'">
          {{ canyonTitle }}
        </button>
        <div v-if="activeTab === 'jungle'" class="tabcontent" id="jungletab">
            <div class="tabcontent_group"
                  v-for="(item, idx) in cardJungle" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <div class="tabcontent_picture">
                    <img :src="require(`@/assets/images/activity/activity_${item.id}.jpg`)" alt="叢林照片">
                </div>
                <div class="tabcontent_text">
                    <h3>{{item.jungleTitle}}</h3>
                    <h4>{{item.jungleSub}}</h4>
                    <p>{{item.jungleText}}</p>
                </div>
                <div class="tabcontent_notice">
                    <p><span>開放時間:</span>{{item.openTime}}</p>
                    <p><span>體驗價格:</span>{{item.price}}</p>
                    <p><span>適合族群:</span>{{item.people}}</p>
                    <p><span>注意事項:</span>{{item.notice}}</p>
                </div>
            </div>
        </div>
            
        <div v-else-if="activeTab === 'snow'" class="tabcontent" id="snowtab">
          <div class="tabcontent_group"
          v-for="(item, idx) in cardSnow" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <div class="tabcontent_picture">
                    <img :src="require(`@/assets/images/activity/activity_${item.id}.jpg`)" alt="雪地照片">
                </div>
                <div class="tabcontent_text">
                    <h3>{{item.snowTitle}}</h3>
                    <h4>{{item.snowSub}}</h4>
                    <p>{{item.snowText}}</p>
                </div>
                <div class="tabcontent_notice">
                    <p><span>開放時間:</span>{{item.openTime}}</p>
                    <p><span>體驗價格:</span>{{item.price}}</p>
                    <p><span>適合族群:</span>{{item.people}}</p>
                    <p><span>注意事項:</span>{{item.notice}}</p>
                </div>
            </div>
        </div>
        <div v-else class="tabcontent" id="canyontab">
          <div class="tabcontent_group"
          v-for="(item,idx) in cardCanyon" :key="item.id"
                  :class="{reverse: idx%2 === 0}" >
                <div class="tabcontent_picture">
                    <img :src="require(`@/assets/images/activity/activity_${item.id}.jpg`)" alt="峽谷照片">
                </div>
                <div class="tabcontent_text">
                    <h3>{{item.canyonTitle}}</h3>
                    <h4>{{item.canyonSub}}</h4>
                    <p>{{item.canyonText}}</p>
                </div>
                <div class="tabcontent_notice">
                    <p><span>開放時間:</span>{{item.openTime}}</p>
                    <p><span>體驗價格:</span>{{item.price}}</p>
                    <p><span>適合族群:</span>{{item.people}}</p>
                    <p><span>注意事項:</span>{{item.notice}}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  <MainFooter/>  
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
export default {
  components:{
    MainHeader,
    MainFooter
    },
  data() {
    return {
      show: true,
      jungleTitle: '叢林歷險',
      tourTitle: '遊覽動物',
      jungleSub: '叢林歷險',
      tourText:
        '當您從台北預訂半日遊時，遠離城市的喧囂，沉浸在美麗的自然風光中。早晨，您可以直接從酒店出發，搭乘舒適的空調客車。您的目的地是東北海岸國家風景區。參觀繁華的港口城市基隆，欣賞其曠陰佛像，繼續前往壯觀的野柳地質公園，以其獨特的岩層而聞名。',
      advTitle: '寶藏探險',
      advText:
        '叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
      jungleText:
        '叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
      iceTitle: '冰雪奇緣',
      skiTitle: '滑雪體驗',
      skiText:
        '台灣滑雪場大致可以分為三種，一是真的須穿雪衣雪褲全套體驗的零下雪場，二為滑雪訓練機，以及搭配 VR 畫面的滑雪模擬機。各滑雪學校除了設備種類不同之外，準備的備品也大不相同；但設備使用一定會伴隨教練，所以教練的互動也是很重要的一環。',
      fishTitle: '冰上釣魚',
      iceSub: '冰雪奇緣',
      fishText:
        '冬天除了玩冰魚節慶典，韓國擁有許多優質的滑雪場，不但設備完整，也依不同滑雪程度的人設計了陂度不同的滑道，可挑戰不同層級，一展您的滑雪長才，讓您嘗試前所未有的滑雪樂，或在雪地裡和三五好友打雪仗，享受在雪地裡自由玩樂的感覺，這絕對是在台灣體驗不到的哦。',
      snowText:
        '冬天除了一般的滑雪玩法之外，還有另一種滿足大人雪上駕馭樂趣的冬季限定活動—北海道冰上釣魚！每年到了一、二月份，就是在日本釣魚的最佳季節，在札幌冬天結凍的河川，開一個圓圓的洞，垂下釣繩，就可釣冰下的西太公魚，而且不用準備任何釣魚用具之外，還會有日本冰釣達人指導您，就算是釣魚新手也沒不用怕！',
      canyonTitle: '荒野峽谷',
      balloonTitle: '熱氣球遊覽大峽谷',
      balloonText:
        '看著來自各國的專業飛行員駕駛碩大的夢幻熱氣球，滿載觀眾們的興奮期盼漫天飄遠，徜徉在縱谷間的藍天綠山之中，是臺東夏季不可錯過的一大美景。臺灣國際熱氣球嘉年華，包含熱氣球自由飛行表演、熱氣球繫留體驗、熱氣球自由飛空中遊覽、光雕音樂會、熱氣球夏令營，除了現場體驗升空的感動，還有視覺及聽覺浪漫激盪的精采饗宴。',
      canyonSub: '荒野峽谷',
      rockTitle: '攀岩體驗',
      rockText:
        '運動攀登意指先鋒攀登保護支點都已經事先用錨栓打好的路線，該些錨栓在路線上的距離配置均勻，不會讓攀登者的墜落距離過長。錨栓通常都是路線開發者從路線上方垂降下來時打進岩壁的。天然岩場用錨栓架設的路線，以及人工岩場中可供先鋒的路線，都是屬於運動攀登路線。',
      canyonText:
        '臺灣大部分的峽谷是發育在河床兩旁的兩岸的峽谷，大安溪峽谷是發育在比較平坦的河床，河床上面突然抬高以後，然後下切，發育在沉積岩上。臺灣的地震頻繁造成多變的地形、湍急的河水，因此形成了不少峽谷地形；不像其他國家的峽谷，需要經過長年累月才能形成磅礡的氣勢，峽谷的壯觀景色，大自然的鬼斧神工，令人嘖嘖稱奇。',
      activityTitle: '活動介紹',
      skiTabSub:'彷彿置身雪國，滑雪設備',
      notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，我們不負責賠償，謝謝。',
      skiTabText:'雪道變化是藉由調整機器坡度，主要的滑雪道介面是特殊材質滑雪毯比較像是毛毯換的感覺，鋼邊與之接觸模擬滑雪時的感覺，但是還是跟雪況有點不一樣，較沒有真雪蓬鬆厚度所產生的容錯率，因此滑行時要求的精準度更高，基本上需要一定的適應與訓練，另外摔倒要注意擦傷，iSKI都會提供的護具，務必要穿上。雪道變化是藉由調整機器坡度，主要的滑雪道介面是特殊材質滑雪毯比較像是毛毯換的感覺，另外摔倒要注意擦傷，iSKI都會提供的護具，務必要穿上。',
      openTime:'每日08:30~17:30',
      priceSki:'每人3,500元',
      group:'全年齡喜歡刺激的人',
      activeTab: 'jungle',
      cardJungle: [
                    {
                        id:'tour',
                        junglePic: '@/ass',
                        jungleTitle: '遊覽動物',
                        jungleSub: '在叢林中遊覽各種動物的英姿',
                        jungleText: "樹頂探險 是全程在樹上探險的一個過程，可以欣賞茂密的森林、眺望大山與河谷平原的景色，有可能看見猴子、松鼠與老鷹，我們跟猴子一樣在樹上飛躍與闖關，享受與大自然融為一體的樂趣。 森林裡的索道路線錯綜複雜分不清方向，所以必須由指導員來指引。我們採用最高標準的 “saferoller” 連續式安全確保系統 照顧您的每一步，這意味著一旦進入我們的第一個關卡，就不能後悔必須走完，幸好指導員安定人心的行前說明及適時的出現，協助完成探險經歷，現在就來安排您的假期吧!",
                        openTime:'每日08:30~17:30',
                        price:'每人3,500元',
                        people:'全年齡喜歡刺激的人',
                        notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
                    },
                    {
                        id:'adv',
                        junglePic: '@/assets/images/activity/activity_tour.jpg',
                        jungleTitle: "寶藏探險",
                        jungleSub: "快來叢林尋找大秘寶",
                        jungleText: "葡國裔西班牙探險家在1519年率領船隊首次環航地球，因金主西班牙政府財力不濟，航海計劃唯有靠Moncada家族出資成行，而環航主要目的是尋找價值不斐的黃金寶藏。 1521年後麥哲倫死於與菲律賓當地部族的衝突中，船長與船員找到了寶物後卻秘而不宣，傳說這批黃金被藏在西班牙某處。幾百年來探險家冒險犯難，黃金仍未被尋獲，最後主角憑藉失散多年親兄遺下的綫索，和尋寶獵人合作，就種種謎團抽絲剝繭，尋找寶藏。",
                        openTime:'每日08:30~17:30',
                        price:'每人3,500元',
                        people:'全年齡喜歡刺激的人',
                        notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
                    }              
                ],
      cardSnow: [
                    {
                        id:'ski',
                        snowPic: '@/assets/images/activity/activity_tour.jpg',
                        snowTitle: '滑雪體驗',
                        snowSub: '超大滑雪場等你來體驗',
                        snowText: "噴雪機是直噴式的，也就是說不需要的有壓縮空氣的幫助。這就好像我們澆花用的噴壺一樣，當水通過噴嘴後由於霧化作用，形成細微的液滴，然後由風扇鼓吹到空中。好處是噴雪機不需要配備有麻煩的空氣壓縮裝置，而只需有供水和動力裝置就可以了。水由液態凝結成固態的過程會比較困難，需要大的過冷度和好的形核條件以釋放水的凝固熱，這對自然條件的要求就比較苛刻。因此噴雪機通常都會有專門的冷卻部分，當外界條件差一點不能滿足造雪條件時，會促進水的凝固過程，在到達地面前能夠進行充分的冷卻、能模擬出自然降雪的情況唷。",
                        openTime:'每日08:30~17:30',
                        price:'每人3,500元',
                        people:'全年齡喜歡刺激的人',
                        notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
                    },
                    {
                        id:'fish',
                        snowPic: '@/assets/images/activity/activity_tour.jpg',
                        snowTitle: "冰上釣魚",
                        snowSub: "享受冰上釣魚樂趣",
                        snowText: "山川魚慶典將舉行，慶典期間您可在厚達40公分以上的冰層找個好位置，將釣竿放進冰釣窟窿，享受冰上垂釣的樂趣！當山川魚上鉤後，您還可以在現場的燒烤區、活動區品嚐山川魚鮮美的滋味，除了冰上釣魚體驗，現場也能玩雪盆、雪橇，還有「赤手捕魚」活動，挑戰從裝滿山川魚的大型水池，徒手抓起山川魚！冬天除了玩冰魚節慶典，韓國擁有許多優質的滑雪場，不但設備完整，也依不同滑雪程度的人設計了陂度不同的滑道，可挑戰不同層級，一展您的滑雪長才，讓您嘗試前所未有的滑雪樂，或在雪地裡和三五好友打雪仗，享受在雪地裡自由玩樂的感覺，這絕對是在台灣體驗不到的哦。",
                        openTime:'每日08:30~17:30',
                        price:'每人3,500元',
                        people:'全年齡喜歡刺激的人',
                        notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
                    }              
                ],
      cardCanyon: [
                    {
                        id:'balloon',
                        canyonPic: '@/assets/images/activity/activity_tour.jpg',
                        canyonTitle: '熱氣球遊覽大峽谷',
                        canyonSub: '空中遨遊欣賞峽谷美景',
                        canyonText: "熱氣球點火，準備就緒，緩緩地迎著朝陽飛向天空，緩慢飛升的過程，從高處鳥瞰，愛河風光盡收眼底，這樣的美讓人更愛高雄，用不同的視角看，有一種想要跟高雄說早安的感覺很美。」起了一早，民眾幸運地搭上熱氣球，彌補前一天氣球沒能升空的遺憾，沒能搭上氣球的，從旁捕捉美景打卡，同樣覺得幸福，民眾說：「期待很久了，去年沒有辦，所以今年特別期待，因為已經可以看到這個高雄愛河這個場域，是非常適合飛熱氣球的。」接下來天候因素許可，仍會有熱氣球升空，歡迎大家來愛河體驗浪漫，享受美食。",
                        openTime:'每日08:30~17:30',
                        price:'每人3,500元',
                        people:'全年齡喜歡刺激的人',
                        notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
                    },
                    {
                        id:'rock',
                        canyonPic: '@/assets/images/activity/activity_tour.jpg',
                        canyonTitle: "攀岩體驗",
                        canyonSub: "挑戰大峽谷攀岩",
                        canyonText: "頂繩攀登是一堂適合入門新手的訓練，課程中除了繩結、基礎攀岩技巧、確保技術之外，還有攀岩安全口號等課程內容，在課程結束後能有能力參與安檢卡的考試，以及能自己與同伴一起攀岩。先鋒攀登是Top Rope之後的進階課程，主要為教導先鋒攀登的技能，讓你能與繩伴先鋒一條路線攀岩。課程內容將包含：進階攀岩技巧、先鋒確保、進階攀岩技術、掛快扣以及掛繩等技術",
                        openTime:'每日08:30~17:30',
                        price:'每人3,500元',
                        people:'全年齡喜歡刺激的人',
                        notice:'心臟病、高血壓、脊椎/頸首部問題、骨質疏鬆症者、孕婦、身心不舒服者，請斟酌自己能力要不要參加，小心不要跌倒，謝謝。'
                    }              
                ],      
    }
  },
      methods:{
        scrollToTop(){
          window.scrollTo(0,0)
        }
      },
      mounted(){
        //要用到mounted，不能用在created中，因為Dom元件還沒被掛載，讀不到window
        this.scrollToTop()
      }
    }


</script>
<style lang="scss">
@import '@/assets/scss/style.scss';

.activity_wrapper {
  width: 100%;
  padding: 150px 0;
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
.activity_overview {
  background-color: $color-main-yellow;
}
.wrapper {
  width: 80%;
  margin:auto;
}
.activity_title {
  margin-bottom: 50px;
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
.activity_jungle_text:after {
  content: url(@/assets/images/activity/activity_20.png);
  position: absolute;
  right: -45px;
  bottom: -45px;
}
.activity_snow_text:after {
  content: url(@/assets/images/activity/activity_13.png);
  position: absolute;
  left: -50px;
  bottom: -80px;
}
.activity_canyon_text:after {
  content: url(@/assets/images/activity/activity_19.png);
  position: absolute;
  right: -110px;
  bottom: -110px;
}
.tab_jungle {
  background-color:#abe8d6;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  border-radius:10px 0 0 0;
}
.tab_snow {
  background-color: #abcbe9;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
}
.tab_canyon {
  background-color:#e1bb9e;
  border: none;
  padding: 20px 30px;
  cursor: pointer;
  border-radius:0 10px 0 0;
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
  background: url(@/assets/images/home/home_jungle_3.png),
    linear-gradient(to bottom, #abe8d6, $color-main-yellow);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  border-radius:0 10px 10px 10px;
}
#snowtab {
  background: url(@/assets/images/home/home_snow_3.png),
    linear-gradient(to bottom, #abcbe9, $color-main-yellow);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  border-radius:0 10px 10px 10px;
}
#canyontab {
  background: url(@/assets/images/home/home_canyon_2.png),
    linear-gradient(to bottom, #e1bb9e, $color-main-yellow);
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  border-radius:0 10px 10px 10px;
}
.tabcontent_group{
  display: flex;
  flex-wrap: wrap;
  padding:120px 50px;
  .tabcontent_picture{
    width: 50%;
  }
  .tabcontent_text{
    width: 50%;
    padding: 0 20px;
    h4{
      padding:10px 0;
      color:$color-basic-gray3 ;
    }
    p{
      text-align: justify;
      text-indent:2em;
      line-height: 2em;
    }
  }
  .tabcontent_notice{
    width: 100%;
    background-color: rgba($color: #ffff, $alpha: .6);
    padding: 20px;
    margin-top: 50px;
    p{
      padding:5px;
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
