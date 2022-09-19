<template>
    <section class="wrap_report_publish">
        <div class="report_container">
            <div class="title_main">
                <h2>發佈報告</h2>
            </div>
            <div class="row_report_write">
                
                <div class="col_postcard">
                    <div class="postcard_release">
                        <h3>請輸入標題</h3>
                        <p>請輸入內文</p>
                    </div>
                    <div class="postcard_user_data">
                        <div class="postcard_user_pic">
                            <img src="../assets/images/report_avatar_1.png" alt="avatar">
                        </div>
                        <h3 class="postcard_user_name">1313</h3>
                    </div>
                </div>

                <form class="col_write_text">
                    <input id="enter_title" type="text" placeholder="請入標題">
                    <textarea id="enter_text" name="enter_text" placeholder="請輸入內文..."></textarea>
                    <button>發布報告</button>
                    <select class="btn_choose" name="bg_select" id="bg_select">
                        <option value="1">背景選擇</option>
                        <option value="2">叢林歷險</option>
                        <option value="3">冰選奇緣</option>
                        <option value="4">荒野峽谷</option>
                    </select>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ReportPublish",
}
</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
    .row_report_write{
        display: flex;
    }
    .row_report_write .enter_text{
        width: 100%;
        height: 200px;
    }
    .col_postcard{
        display: flex;
        justify-content: center;
        width: 70%;
        height: 460px;
        background : url(../assets/images/report_jungle_p.png) no-repeat center center;
        background-size: cover;
        padding: 0 20px;
    }
    .postcard_release{
        width: 60%;
    }
    .postcard_user_data{
        text-align: center;
    }
    .col_write_text{
        width: 25%;
        padding: 0 20px;
    }
    .postcard_user_pic{
        width: 120px;
        border-radius: 60px;
        overflow: hidden;
    }
    #enter_title{
        width: 300px;
        height: 50px;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid $color-main-green;
    }
    #enter_text{
        
    }
</style>