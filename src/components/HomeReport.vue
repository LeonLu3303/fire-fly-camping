<template>
    <section class="wrap_home_report">
        <div class="report_home_container">
            <div class="title_main">
                <h2>精選報告</h2>
            </div>
            <!-- 報告卡片 -->
            <div class="row_home_report">
                <div class="col_home_report" v-for="item in hotData" :key="item.mem_no">
                    <div class="report_user">
                        <div class="user_pic">
                            <img :src="require(`@/assets/images/report/report_avatar_${item.mem_pic}.png`)" alt="avatar">
                        </div>
                        <div class="user_data">
                            <h4 class="user_name">{{item.mem_name}}</h4>
                            <p class="release_time">{{item.discuss_post_time}}</p>
                        </div>
                    </div>
                    <div class="report_content">
                        <h4 class="report_title">{{item.discuss_title}}</h4>
                        <p class="report_txt">{{item.discuss_content}}</p>
                    </div>
                    <div class="report_btn">
                        <ReportLightBox/>
                        <router-link 
                            class="message_icon" 
                            :to="{
                                name:'ReportMessage',
                                query: {
                                    'discuss_no': item.discuss_no
                                }
                            }"
                        >
                            <img src="@/assets/images/report/report_msg_1.png" alt="report">
                            <p class="message_count">{{item.comment_count}}</p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="report_more">
                <router-link to ="/Activity" class="btn_page_link">了解更多</router-link>
            </div>
        </div>
    </section>
</template>

<script>
import ReportLightBox from '../components/ReportLightBox.vue';

export default {
    name: "ReportCard",
    components: {
        ReportLightBox
    },
    data(){
        return {
            current: 1,
            paginate: 6,
            discussCard: [],
        }
    },
    computed: {
        hotData() {
            //根據留言數做比較排序
            // console.log(this.discussCard.comment_count);
            return [...this.discussCard].sort( function(a,b) {
                return b.comment_count - a.comment_count;
            });
        },
    },
    methods: {
        FetchAPIDiscuss(){
            // https://tibamef2e.com/cgd102/g1/firefly_camp_php/discuss_card.php
            // http://localhost/phpLab_CGD102/firefly_camp_php/discuss_card.php
            fetch('http://localhost/phpLab_CGD102/firefly_camping_php/discuss_card.php').then((response) => {
                this.fetchError = (response.status !== 200)
                return response.json()
            }).then(responseText => {
                const discussData = responseText
                this.discussCard = discussData;
            
                console.log(this.discussCard);
            }).catch((err) => {
                this.discussCard = true
            })
        },
    },
    created() {
        this.FetchAPIDiscuss();
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.wrap_home_report{
    padding-top: 50px;
    padding-bottom: 150px;
    background: $color-aid-blue2;
    position: relative;
    z-index: 3;
}
.report_home_container{
    width: 80%;
    max-width: 1296px;
    margin: 0 auto;
    .title_main{
        h2{
            color: $color-basic-White;
        }
    }
    @include md() {
		width: 90%;
	}
    @include sm() {
		width: 95%;
	}
}
//btn 了解更多
.report_more{
    .btn_page_link{
        margin: 0 auto;
    }
}

//卡片
.row_home_report {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 0 60px;
}
.col_home_report {
    display: flex;
    flex-direction: column;
    width: 31%;
    height: 480px;
    margin: 10px;
    padding: 30px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    @include lg() {
        width: 45%;
    }
    @include md() {
        width: 100%;
    }
}
.report_user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #8a8a8a;
}
.user_pic {
    width: 80px;
    border-radius: 50px;
    overflow: hidden;
    margin-right: 20px;
}
.report_content {
    flex-grow: 1;
    padding: 20px 0;
}
.report_title {
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-align: justify;
}
.report_txt {
    color: $color-basic-gray2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    text-align: justify;
}

//檢舉 留言 button
.report_btn{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    vertical-align:middle;
}
.message_icon{
    display: inline-block;
    margin-left: 20px;
    img{
        width: 26px;
        margin-right: 5px;
    }
}
.message_icon{
    display: flex;
    .message_count{
        color: $color-basic-gray1;
        font-size: 20px;
        font-weight: 500;
    }
}
</style>