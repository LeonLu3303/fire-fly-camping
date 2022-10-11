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
                    <textarea 
                            class="personal_write" 
                            type="text" maxlength="300" 
                            v-model="comment_content" 
                            placeholder="請寫入留言(300字以內)"
                    >
                    </textarea>
                    <button 
                            class="btn_confirm" 
                            @click="DiscussComment" 
                            type="button"
                    >
                    留言
                    </button>
                </form>
            </div>

            <!-- 其他會員留言區 -->
            <div class="other_message_wrap">
                <div class="row_other_member" v-for="item in commentDate" :key="item.comment_no">
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
                                <p class="message_time">{{formatDate(item.comment_date)}}</p>
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
            commentCount: [],
        }
    },
    computed: {
        commentDate() {
            return [...this.commentCount[1]].sort( function(a,b) {
                return Date.parse(b.comment_date) - Date.parse(a.comment_date);
                //將時間轉換成秒數
            });
        }
    },
    //new FormData().append('變數名稱', 值)
    methods: {
        //讓滾輪維持在上
        scrollToTop(){
            window.scrollTo(0,0)
        },
        //拿到會員資料
        getMemData(){
            this.member = JSON.parse(sessionStorage.getItem('member'));
            this.memId = this.member.mem_id;
            // console.log(this.member)  
        },
        //把資料庫撈出來的時間，在做轉換喧染
        formatDate(date) {
            const myDate = new Date(date); 
            return `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}` 
        },
        //抓報告id，連結報告資料
        FetchAPIComment(){
            // let discuss_no = location.search.slice(1).split('=')[1];
            //透過 vue router取得query的值
            //discussId = 條件判斷 ? 運算式A : 運算式B
            this.discussId = this.$route.query && this.$route.query.discuss_no ? this.$route.query.discuss_no : null
            //使用fetch 需加判斷式，抓不到php資料 網頁也可以出現
            if(!this.discussId) return
            fetch(`http://localhost/phpLab_CGD102/firefly_camping_php/Comment.php?discuss_no=${this.discussId}`
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
        //對報告進行留言
        DiscussComment(){
            let xhr = new XMLHttpRequest();
            xhr.open("POST","http://localhost/phpLab_CGD102/firefly_camping_php/DiscussComment.php",true);

            // let comment_data = `mem_no=${this.member.mem_no}&
            //                     discuss_no=${this.discussId}&
            //                     comment_content=${this.comment_content}`;
            let formData = new FormData();
            formData.append('mem_no', this.member.mem_no);
            formData.append('discuss_no', this.discussId);
            formData.append('comment_content', this.comment_content);
            xhr.send(formData);
            this.FetchAPIComment();
            alert("留言成功");
            this.comment_content = '';
        },
    },
    created() {
        this.getMemData();
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