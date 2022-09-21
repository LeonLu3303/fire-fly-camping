<template>
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
                            <img :src="require(`../assets/images/activity_${item.id}.jpg`)" alt="叢林照片">
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
                            <img :src="require(`../assets/images/activity_${item.id}.jpg`)" alt="雪地照片">
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
                            <img :src="require(`../assets/images/activity_${item.id}.jpg`)" alt="峽谷照片">
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
</template>

<script>

</script>

<style>
    
</style>