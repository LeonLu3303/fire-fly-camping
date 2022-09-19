<template>
    <div class="banner">
        <img src="../assets/images/banner_activity.png" alt="banner">
    </div>
    <section class="activity_jungle activity_wrapper">
        <div class="wrapper">
            <h2 class="title_main activity_title">{{jungleTitle}}</h2>
            <div class="activity_group">
                <div class="activity_item">
                    <div class="activity_item_tour activity_items">
                        <div class="activity_item_tour_title">{{tourTitle}}</div>
                        <div class="activity_item_tour_text">
                            <h3>{{tourTitle}}</h3>
                            <p>{{jungleSub}}</p>
                            <p>{{tourText}}</p>
                        </div>
                    </div>
                    <div class="activity_item_adventure activity_items">
                        <div class="activity_item_adventure_title">{{advTitle}}</div>
                        <div class="activity_item_adventure_text">
                            <h3>{{advTitle}}</h3>
                            <p>{{jungleSub}}</p>
                            <p>{{advText}}</p>
                        </div>
                    </div>
                </div>
                <div class="activity_picture">
                    <img class="island" src="../assets/images/activity_1.png" alt="叢林小島">
                    <img src="../assets/images/activity_2.png" alt="小島陰影">
                </div>
            </div>
            <div class="activity_group_introduction">
                <div class="activity_carousel"><img src="../assets/images/activity_23.jpg" alt="叢林照片"></div>
                <div class="activity_introduction_text activity_jungle_text">
                    <h3 class="title_spacing">{{jungleSub}}</h3>
                    <p class="sub_spacing">感受叢林的大自然氣氛</p>
                    <p>{{jungleText}}</p>
                    <div class="jungle_pic">
                </div>
                </div>
                
            </div>
        </div>   
    </section>
    <section class="activity_ice activity_wrapper">
        <div class="wrapper">
            <h2 class="title_main activity_title">{{iceTitle}}</h2>
            <div class="activity_group">
                <div class="activity_picture">
                    <img class="island" src="../assets/images/activity_12.png" alt="冰雪小島">
                    <img src="../assets/images/activity_2.png" alt="小島陰影">
                </div>
                <div class="activity_item">
                    <div class="activity_item_ski activity_items">
                        <div class="activity_item_ski_title">{{skiTitle}}</div>
                        <div class="activity_item_ski_text">
                            <h3>{{skiTitle}}</h3>
                            <p>{{iceSub}}</p>
                            <p>{{skiText}}</p>
                        </div>
                    </div>
                    <div class="activity_item_fish activity_items">
                        <div class="activity_item_fish_title">{{fishTitle}}</div>
                        <div class="activity_item_fish_text">
                            <h3>{{fishTitle}}</h3>
                            <p>{{iceSub}}</p>
                            <p>{{fishText}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="activity_group_introduction">
                <div class="activity_introduction_text activity_snow_text">
                    <h3 class="title_spacing">{{iceSub}}</h3>
                    <p class="sub_spacing">感受大雪紛飛的美景</p>
                    <p>{{snowText}}</p>
                </div>
                <div class="activity_carousel">
                    <img src="../assets/images/activity_24.jpg" alt="雪地照片">
                </div>
            </div>
        </div>   
    </section>
    <section class="activity_canyon activity_wrapper">
        <div class="wrapper">
            <h2 class="title_main activity_title">{{canyonTitle}}</h2>
            <div class="activity_group">
                <div class="activity_item">
                    <div class="activity_item_ballon activity_items">
                        <div class="activity_item_ballon_title">{{balloonTitle}}</div>
                        <div class="activity_item_ballon_text">
                            <h3>{{balloonTitle}}</h3>
                            <p>{{canyonSub}}</p>
                            <p>{{balloonText}}</p>
                        </div>
                    </div>
                    <div class="activity_item_rock activity_items">
                        <div class="activity_item_rock_title">{{rockTitle}}</div>
                        <div class="activity_item_rock_text">
                            <h3>{{rockTitle}}</h3>
                            <p>{{canyonSub}}</p>
                            <p>{{rockText}}</p>
                        </div>
                    </div>
                </div>
                <div class="activity_picture">
                    <img class="island" src="../assets/images/activity_18.png" alt="峽谷小島">
                    <img src="../assets/images/activity_2.png" alt="小島陰影">
                </div>
            </div>
            <div class="activity_group_introduction">
                <div class="activity_carousel">
                    <img src="../assets/images/activity_25.jpg" alt="峽谷照片">
                </div>
                <div class="activity_introduction_text activity_canyon_text">
                    <h3 class="title_spacing">{{canyonSub}}</h3>
                    <p class="sub_spacing">親身感受壯麗峽谷景色</p>
                    <p>{{canyonText}}</p>
                </div>
            </div>
        </div>   
    </section>
    <section class="activity_overview activity_wrapper">
        <div class="wrapper">
            <h2 class="title_main activity_title">{{activityTitle}}</h2>
            <div class="activity_tabs">
            <button class="activity_tabs tab_jungle tab_title" @click="activeTab = 'A'">{{jungleTitle}}</button>
            <button class="activity_tabs tab_snow tab_title" @click="activeTab = 'B'">{{iceTitle}}</button>
            <button class="activity_tabs tab_canyon tab_title" @click="activeTab = 'C'">{{canyonTitle}}</button>
            <div v-if="activeTab === 'A'" class="tabcontent" id="jungletab"
            >哈哈</div>
            <div v-else-if="activeTab === 'B'" class="tabcontent" id="snowtab">哈哈哈哈</div>
            <div v-else="activeTab === 'C'" class="tabcontent" id="canyontab">哈哈哈哈哈哈</div>
        </div>
        </div>
        
    </section>
</template>
<script>
    export default ({
      data() {
        return {
            jungleTitle:'叢林歷險',
            tourTitle:'遊覽動物',
            jungleSub:'叢林歷險',
            tourText:'當您從台北預訂半日遊時，遠離城市的喧囂，沉浸在美麗的自然風光中。早晨，您可以直接從酒店出發，搭乘舒適的空調客車。您的目的地是東北海岸國家風景區。參觀繁華的港口城市基隆，欣賞其曠陰佛像，繼續前往壯觀的野柳地質公園，以其獨特的岩層而聞名。',
            advTitle:'寶藏探險',
            advText:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
            jungleText:'叢林探險是考驗玩家取捨的策略遊戲。玩家們扮演攝影團隊，在叢林追尋動物的蹤跡，拍下他們迷人的身影。然而，在叢林探險時也會遭遇各種問題，除了身邊的夥伴可能會帶著照片偷跑，還要提防有害的蚊蟲襲擊，不小心得了傳染病就只能一無所獲的回家休息了！',
            iceTitle:'冰雪奇緣',
            skiTitle:'滑雪體驗',
            skiText:'台灣滑雪場大致可以分為三種，一是真的須穿雪衣雪褲全套體驗的零下雪場，二為滑雪訓練機，以及搭配 VR 畫面的滑雪模擬機。各滑雪學校除了設備種類不同之外，準備的備品也大不相同；但設備使用一定會伴隨教練，所以教練的互動也是很重要的一環。',
            fishTitle:'冰上釣魚',
            iceSub:'冰雪奇緣',
            fishText:'冬天除了玩冰魚節慶典，韓國擁有許多優質的滑雪場，不但設備完整，也依不同滑雪程度的人設計了陂度不同的滑道，可挑戰不同層級，一展您的滑雪長才，讓您嘗試前所未有的滑雪樂，或在雪地裡和三五好友打雪仗，享受在雪地裡自由玩樂的感覺，這絕對是在台灣體驗不到的哦。',
            snowText:'冬天除了一般的滑雪玩法之外，還有另一種滿足大人雪上駕馭樂趣的冬季限定活動—北海道冰上釣魚！每年到了一、二月份，就是在日本釣魚的最佳季節，在札幌冬天結凍的河川，開一個圓圓的洞，垂下釣繩，就可釣冰下的西太公魚，而且不用準備任何釣魚用具之外，還會有日本冰釣達人指導您，就算是釣魚新手也沒不用怕！',
            canyonTitle:'荒野峽谷',
            balloonTitle:'熱氣球遊覽大峽谷',
            balloonText:'看著來自各國的專業飛行員駕駛碩大的夢幻熱氣球，滿載觀眾們的興奮期盼漫天飄遠，徜徉在縱谷間的藍天綠山之中，是臺東夏季不可錯過的一大美景。臺灣國際熱氣球嘉年華，包含熱氣球自由飛行表演、熱氣球繫留體驗、熱氣球自由飛空中遊覽、光雕音樂會、熱氣球夏令營，除了現場體驗升空的感動，還有視覺及聽覺浪漫激盪的精采饗宴。',
            canyonSub:'荒野峽谷',
            rockTitle:'攀岩體驗',
            rockText:'運動攀登意指先鋒攀登保護支點都已經事先用錨栓打好的路線，該些錨栓在路線上的距離配置均勻，不會讓攀登者的墜落距離過長。錨栓通常都是路線開發者從路線上方垂降下來時打進岩壁的。天然岩場用錨栓架設的路線，以及人工岩場中可供先鋒的路線，都是屬於運動攀登路線。',
            canyonText:'臺灣大部分的峽谷是發育在河床兩旁的兩岸的峽谷，最有名的可能就像太魯閣峽谷，但是我們這個大安溪峽谷是發育在比較平坦的河床，河床上面突然抬高以後，然後下切，發育在沉積岩上。臺灣的地震頻繁造成多變的地形、湍急的河水，因此形成了不少峽谷地形；不像其他國家的峽谷，需要經過長年累月才能形成磅礡的氣勢，臺灣的峽谷在短短幾年間就能形成，峽谷的壯觀景色，大自然的鬼斧神工，令人嘖嘖稱奇。',
            activityTitle:'活動介紹',
            activeTab:""
            
            

        }
      }
    });
    </script>
    <style lang="scss">
        @import "../assets/scss/style.scss";

        .activity_wrapper{
            width: 100%;
            padding: 150px 0;
        }
        .activity_jungle{
            background:linear-gradient(to bottom,$color-main-yellow, $color-main-green);
        }
        .activity_ice{
            background:linear-gradient(to bottom,#F5F2E9, #A1C6E8);
        }
        .activity_canyon{
            background:linear-gradient(to bottom,#F5F2E9, #D9B294);
        }
        .activity_overview{
            background-color:$color-main-yellow;
        }
        .wrapper{
            max-width: 1296px;
            margin: auto;
        }
        .activity_title{
            margin-bottom: 50px;
        }
        .activity_group{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding-bottom: 50px;
        }
        .activity_item{
            width: 35%; 
        }
        .activity_picture{
            width: 55%;
             .island{
                 position: relative;
                 top: 60px;
                 z-index: 1;
             }
        }
        .activity_items{
            background-color: #FFFFFF;
            margin-bottom: 20px;
            box-sizing: border-box;
            padding: 30px;
        }
        .activity_group_introduction{
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 50px;
            justify-content: center;
            .activity_carousel{
                width: 45%;
            }
            .activity_introduction_text{
                width: 45%;
                background-color: #FFFFFF;
                position: relative;
                padding: 35px;
                .title_spacing{
                    margin-bottom: 15px;
                }
                .sub_spacing{
                    margin-bottom: 10px;
                }
            }
        }
        .activity_jungle_text:after{
            content: url(../assets/images/activity_20.png);
            position: absolute;
            right: -45px;
            bottom: -45px;
        }
        .activity_snow_text:after{
            content: url(../assets/images/activity_13.png);
            position: absolute;
            left: -50px;
            bottom:-50px;
        }
        .activity_canyon_text:after{
            content: url(../assets/images/activity_19.png);
            position: absolute;
            right: -100px;
            bottom:-90px;
        }
        .tab_jungle{
            background-color: #A6CEC2;
            border: none;
            padding: 20px 30px;
        }
        .tab_snow{
            background-color: #BCD4E8;
            border: none;
            padding: 20px 30px;
        }
        .tab_canyon{
            background-color: #C99F7F;
            border: none;
            padding: 20px 30px;
        }
        .tab_title{
            color: #537979;
            font-weight: 700;
            font-size: $title_h4;
            letter-spacing: 1px;
            &:hover{
                color: #FFFFFF;
            }
        }
        .tabcontent{
            background-color:#A6CEC2;
            height: 1000px;
        }
        #jungletab{
            background-image: url(../assets/images/home_jungle_3.png);
            background-size: cover;
        }
        #snowtab{
            background-color:#BCD4E8;
            background-image: url(../assets/images/home_snow_2.png);
            background-size: cover;
        }
        #canyontab{
            background-color:#C99F7F;
        }
    </style>