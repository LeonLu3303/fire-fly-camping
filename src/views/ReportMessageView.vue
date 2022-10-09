<template>
    <MainHeader/>
    <!-- banner -->
    <div class="banner" >
        <img src="@/assets/images/main/banner_report.png" alt="banner">
    </div>
    <!-- 報告留言 -->
    <section class="wrap_report_message">
        <div class="message_container">
            <div class="title_main">
                <h2>報告留言</h2>
            </div>
            <!-- 返回報告 -->
            <router-link class="Report_link_path" to="/Report">
                <div class="back_Report_page">
                    <img class="back_Report_icon" src="@/assets/images/booking/booking_arrow_prev.png" alt="">
                    <span>返回報告</span>
                </div>
            </router-link>
            <!-- 明信片留言 -->
            <ReportDiscuss v-if="commentCount.length>0" :discuss="commentCount[0]"/>

            <!-- 會員個人留言欄 -->
            <div class="message_member_container">
                <form class="message_personal" action="">
                    <textarea class="personal_write" type="text" maxlength="300" placeholder="請寫入留言(300字以內)"></textarea>
                    <button class="btn_confirm" id="publish_message" href="#">留言</button>
                </form>
            </div>

            <!-- 其他會員留言區 -->
            <div class="other_message_wrap">
                <div class="row_other_member" v-for="item in commentCount[1]" :key="item.comment_no">
                    <div class="col_other_data">
                        <div class="member_pic">
                            <img :src="require(`@/assets/images/report/report_avatar_${item.mem_pic}.png`)" alt="avatar">
                        </div>
                        <h4 class="member_name">{{item.mem_name}}</h4>
                    </div>
                    <!-- 發佈時間 檢舉 -->
                    <div class="col_other_message">
                        <div class="other_message_content">
                            <p class="other_write">{{item.comment_content}}</p>
                            <div class="message_time_inform">
                                <p class="message_time">{{item.comment_date}}</p>
                                <ReportLightBox/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <MainFooter/>
    <!-- 接收報告頁面的discuss_no，在methods寫fetch function，把discuss_no post 到後端hpp，再把function塞進 beforeMounted， -->
</template>

<script>
import ReportDiscuss from '../components/ReportDiscuss.vue';
import ReportLightBox from '../components/ReportLightBox.vue';

export default {
    name: "ReportMessage",
    components: {
        ReportDiscuss,
        ReportLightBox,
    },
    data() {
        return {
            discussId: 0,
            commentCount: [
                // {
                //     discuss_no:'',
                //     comment_no:'1',
                //     comment_content: "沒關係我也是，沒關係我也是XD沒關係我也是XD沒關係我也是XD沒關係我也是XD",
                //     comment_date: "2022/09/28",
                //     mem_no:'1',
                //     mem_name:'王小明',
                //     mem_pic:'1',
                // },
            ],
        }
    },
    //new FormData().append('變數名稱', 值)
    methods:{
        scrollToTop(){
            window.scrollTo(0,0)
        },
        FetchAPIComment(){
            // let discuss_no = location.search.slice(1).split('=')[1];
            //透過 vue router取得query的值
            this.discussId = this.$route.query && this.$route.query.discuss_no ? this.$route.query.discuss_no : null
            //使用fetch 需加判斷式，抓不到php資料 網頁也可以出現
            if(!this.discussId) return
            fetch(`http://localhost/phpLab_CGD102/firefly_camp_php/Comment.php?discuss_no=${this.discussId}`
            ).then((response) => {
                if(response){
                    this.fetchError = (response.status !== 200)
                    //json(): 返回 Promise，resolves 是 JSON 物件
                    return response.json()
                }
            }).then(responseText => {
                this.commentCount = responseText;
            }).catch((err) => {
                this.commentCount = []
            })
        },
    },
    created() {
        this.FetchAPIComment();
    },
    mounted() {
        this.scrollToTop();
        // console.log(this.$route.query.discuss_no);
        // this.discussId = this.$route.query.discuss_no;
        // 使用query，傳遞資料
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.wrap_report_message{
    padding: 150px 0;
    background: $color-basic-White;
}
.message_container{
    width: 80%;
    max-width: 1296px;
    margin: 0 auto;
    @include lg(){
        width: 90%;
    }
    @include md(){
        width: 95%;
    }
}
//返回報告
.Report_link_path{
    padding-bottom: 30px;
}
.back_Report_page{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span{
        color: $color-str-green;
        font-size: $title_h4;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .back_Report_icon{
        width: 40px;
        padding-right: 10px;
    }
}
//會員個人留言欄
.message_member_container{
    width: 70%;
    padding: 20px;
    margin: 0 auto 20px;
    border-radius: 10px;
    background: $color-main-yellow;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    @include lg(){
        width: 80%;
    }
    @include tb(){
        width: 100%;
    }
}
.personal_write{
    width: 100%;
    height: 140px;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid $color-main-green;
    resize: none;
}
.message_personal{
text-align: end;
}
//其他會員留言
.other_message_wrap{
    width: 70%;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background: $color-main-yellow;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    @include lg(){
        width: 80%;
    }
    @include tb(){
        width: 100%;
    }
}
.row_other_member{
    padding: 16px;
    border-radius: 10px;
    background: $color-basic-White;
    margin: 0 0 20px;
}
.col_other_data{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 14px;
}
.col_other_data .member_pic{
    border-radius: 50%;
    overflow: hidden;
    width: 40px;
    margin-right: 10px;
}
.other_message_content .other_write{
    margin-bottom: 20px;
    color: $color-basic-gray1;
    text-align: justify;
}
.message_time_inform{
    display: flex;
    justify-content: flex-end;
}
.message_time{
    padding-right: 20px;
    color: $color-basic-gray1;
}
.message_inform_icon{
    width: 28px;
}
</style>