<template>
    <div class="report_lightbox">
        <teleport to="body">
            <div class="modal_mask" :style="modalStyle">
                <div class="modal_container" @click.self="toggleModal">
                    <div class="modal_body">
                        <p>檢舉原因</p>
                        <form action="">
                            <textarea 
                                    class="inform_txt" 
                                    type="text" 
                                    maxlength="150" 
                                    placeholder="請寫入檢舉原因(150字以內)"
                            >
                            </textarea>
                            <button class="btn_confirm" type="button">送出</button>
                        </form>
                        <span class="btn_closure">
                            <img src="@/assets/images/main/main_icon_closure.png" alt="closure" @click.self="toggleModal">
                        </span>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
    <a class="inform_icon" @click="isShow = true">
        <img src="@/assets/images/report/report_icon_caution.png" alt="caution">
    </a>
    <!-- <button @click="isShow = true">Click Me</button> -->
</template>

<script>
export default {
    name: "ReportLightBox",
    data: () => ({
        isShow: false
    }),
    computed: {
        modalStyle() {
            return {
                'display': this.isShow ? '' : 'none'
                //燈箱不隱藏 : 隱藏
            };
        }
    },
    methods: {
        toggleModal() { 
            console.log('click')
            this.isShow = !this.isShow;
            //關閉燈箱
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

//檢舉灰背景
.modal_mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}
.modal_container {
    cursor: pointer;
    width: 100%;
    height: 100%;
}
//檢舉區塊
.modal_body {
    position: relative;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: auto;
    width: 400px;
    padding: 20px;
    border-radius: 5px;
    background-color: $color-main-yellow;
    text-align: center;
    h4 {
        color: $color-basic-gray2;
        padding-bottom: 20px;
    }
    p {
        font-size: $title_h4;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 24px;
    }
    @include md(){
            width: 300px;
        }
}
.inform_txt{
    width: 100%;
    height: 200px;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
    border: 1px solid $color-main-green;
    resize: none;
}
//叉叉
.btn_closure{
    position: absolute;
    cursor: pointer;
    width: 40px;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
}
//檢舉icon
.inform_icon{
    display: inline-block;
    width: 26px;
}
</style>
