<template>
    <section class="wrap_report_publish">
        <div class="report_publish_container">
            <div class="title_main">
                <h2>發佈報告</h2>
            </div>
            <button class="btn_confirm discuss_show" type="button" @click="checkId" v-if="discuss_show == false">我要發布報告</button>
            <div class="row_report_write" v-if="discuss_show == true">
                <!-- 明信片-->
                <div class="col_postcard">
                    <div class="postcard_group">
                        <div class="postcard_release">
                            <h3 class="postcard_title_area">{{discuss_title}}</h3>
                            <p class="postcard_text_area">{{discuss_content}}</p>
                        </div>
                        <!-- 頭像 會員-->
                        <div class="postcard_member_data">
                            <div class="member_content">
                                <div class="postcard_member_pic">
                                    <img :src="require(`@/assets/images/report/report_avatar_${member.mem_pic}.png`)" alt="avatar">
                                </div>
                                <div class="postcard_name_time">
                                    <h4 class="postcard_member_name">{{member.mem_nick_name}}</h4>
                                    <!-- <p class="postcard_release_time">{{discuss_post_time}}</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="postcard_bg">
                        <img :src="require(`@/assets/images/report/report_postcard_${background_type}.jpg`)" alt="postcard">
                    </div>
                </div>

                <!-- method="POST"
                action="http://localhost/phpLab_CGD102/firefly_camping_php/report_publish.php" -->
                <!-- 輸入欄 0929-->
                <form 
                    class="col_write_text" 
                >
                    <input 
                        class="enter_title" 
                        type="discuss_title" 
                        maxlength="15" 
                        v-model="discuss_title"
                        placeholder="請輸入標題(15字以內)"
                    />
                    <textarea 
                        class="enter_text" 
                        name="discuss_content" 
                        type="text" 
                        maxlength="300" 
                        v-model="discuss_content"
                        placeholder="請輸入內文(300字以內)"
                    ></textarea>
                    <div class="confirm_choose_contain">
                        <div @click="DiscussSend" class="btn_confirm">發佈報告</div>
                        <select 
                            class="btn_bg_choose" 
                            v-model="background_type"
                        >
                            <option class="bg_choose" disabled value="1">選擇背景</option>
                            <option class="bg_choose" value="1">叢林歷險</option>
                            <option class="bg_choose" value="2">冰雪奇緣</option>
                            <option class="bg_choose" value="3">荒野峽谷</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
// import LoginLightBox from '../components/LoginLightBox.vue';

export default {
    components:{
        // LoginLightBox,
    },
    name: 'ReportPublish',
    data() {
        return {
            discuss_no:'',
            discuss_title: '',
            discuss_content: '',
            discuss_post_time: '',
            discuss_status:'1',
            comment_count: null,
            background_type: '1',
            mem_no:'',
            mem_id:'',
            mem_nick_name: '',
            mem_pic: '0',
            discuss_show: false, 
            // discuss_show == true ，就秀出
        };
    },
    methods:{
        //拿到會員資料
        getMemData(){
            this.member = JSON.parse(sessionStorage.getItem('member'));
            this.memId = this.member.mem_id;
            // console.log(this.member)  
        },
        //寫入新報告
        DiscussSend(){
            let xhr = new XMLHttpRequest();
            xhr.open("POST","http://localhost/phpLab_CGD102/firefly_camping_php/DiscussSend.php",true);
            // xhr.send(null);

            // let discuss_data = `mem_no=${this.member.mem_no}&
            //                     discuss_title=${this.discuss_title}&
            //                     discuss_content=${this.discuss_content}&
            //                     background_type=${this.background_type}`;
            let formData = new FormData();
            formData.append('mem_no', this.member.mem_no);
            formData.append('discuss_title', this.discuss_title);
            formData.append('discuss_content', this.discuss_content);
            formData.append('background_type', this.background_type);
            xhr.send(formData);
            // this.FetchAPIDiscuss();
            alert("發佈成功");
            this.discuss_title = '';
            this.discuss_content = '';
            this.background_type = '1';
        },
        //確認有無登入，用click事件，判斷提示
        checkId() {
            let checkLogin = sessionStorage.getItem('member');
            if(checkLogin == null){
                alert("請先登入");
            }else{
                this.discuss_show = true;
            }
        }
    },
    //created 是一開始就做
    created(){
        //是否有登入狀態
        let checkLogin = sessionStorage.getItem('member');
        if(checkLogin == null){
            return
        }else{
            this.discuss_show = true;
        }
        //拿到會員資料
        this.getMemData()
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

// 明信片 section
.wrap_report_publish{
    padding: 150px 0;
    background: $color-basic-White;
}
.report_publish_container{
    width: 80%;
    max-width: 1296px;
    margin: 0 auto;
    @include lg(){
        width: 90%;
    }
    @include md(){
        width: 95%;
    }
    .discuss_show{
        margin: 20px auto 0 auto;
        display: flex;
        justify-content: center;
    }
}
.row_report_write{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

// 明信片
.col_postcard{
    position: relative;
    width: 70%;
    margin: 10px;
    @include lg(){
        width: 80%;
    }
    @include tb(){
        width: 100%;
    }
}
.postcard_group{
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    @include md(){
        flex-direction: column-reverse;
    }
}
.postcard_bg{
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .4);
    overflow: hidden;
    img{
        height: 100%;
        object-fit: cover;
    }
    @include md(){
        height: 600px;
    }
}
.tab_active{
    display: block;
}
.postcard_title_area{
    padding: 0 0 20px;
    color: $color-basic-gray3;
}
.postcard_text_area{
    color: $color-basic-gray2;
    text-align: justify;
}
//文字
.postcard_release{
    width: 70%;
    padding: 20px;
    @include md(){
        width: 100%;
        height: 80%;
    }
}
// 頭像會員
.postcard_member_data{
    width: 30%;
    text-align: center;
    border-left: 2px solid $color-basic-gray1;
    @include md(){
        width: 100%;
        height: 20%;
        border-left: none;
        border-bottom: 2px solid $color-basic-gray1;
    }
}
.member_content{
    margin: 0 40px;
    @include md(){
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0;
        justify-content: flex-start;
        align-items: center;
    }
}
.postcard_member_pic{
    width: 80%;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 10px;
    @include md(){
        width: 80px;
        height: 80px;
        margin: 0 20px 0 0;
    }
}
//會員名字 時間 0929
.postcard_member_name{
    margin-bottom: 5px;
}
.postcard_release_time{
    color: $color-basic-gray2;
}

// 輸入欄
.col_write_text {
    width: 26%;
    margin: 10px;
    @include lg() {
        width: 80%;
    }
    @include tb() {
        width: 100%;
    }
}
.enter_title {
    width: 100%;
    height: 50px;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 5px 10px;
    margin-bottom: 20px;
    border: 1px solid $color-main-green;
}
.enter_text {
    width: 100%;
    height: 70%;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
    border: 1px solid $color-main-green;
    resize: none;
}
.confirm_choose_contain {
    display: flex;
    justify-content: flex-end;
}
.confirm_choose_contain .btn_confirm {
    margin-right: 20px;
}
.btn_bg_choose {
    font-size: $txt_btn;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid $color-str-green;
    color: $color-str-green;
    background: $color-basic-White;
}
</style>
