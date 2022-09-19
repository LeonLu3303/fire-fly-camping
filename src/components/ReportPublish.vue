<template>
    <section class="wrap_report_publish">
        <div class="container">
            <div class="title_main">
                <h2>發佈報告</h2>
            </div>
            <div>
                <h3></h3>
                <p></p>
            </div>
            <div class="row_report_write">

                <div class="col_postcard">
                    <div class="postcard_user_data">
                        <div class="postcard_user_pic">
                            <img src="../assets/images/report_avatar_1.png" alt="avatar">
                        </div>
                        <div class="postcard_user_name">1313</div>
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
        width: 60%;
        height: 500px;
        background : url(../assets/images/report_jungle_p.png) center center;
        background-size: contain;
        padding: 0 20px;
    }
    .col_write_text{
        width: 30%;
        padding: 0 20px;
    }
    .postcard_user_pic{
        width: 120px;
        border-radius: 60px;
        overflow: hidden;
    }
</style>