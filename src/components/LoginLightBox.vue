<template>
    <div class="login_lightbox">
        <teleport to="body">
            <div class="modal_mask" :style="modalStyle">
                <div class="modal_container" @click.self="toggleModal">
                    <div class="modal_body">
                        <h4>請先登入</h4>
                        <div class="btn_light_box">
                            <button class="btn_submit" @click.self="toggleModal">取消</button>
                            <router-link class="login" to="/Login">
                                <button class="btn_confirm">登入</button>
                            </router-link>
                        </div>
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
                //燈箱隱藏
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

// .login_lightbox{
//     position: relative;
// }
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
    padding: 20px;
    border-radius: 5px;
    background-color: $color-main-yellow;
    text-align: center;
    cursor: auto;
    width: 360px;
    h4 {
        color: $color-basic-gray2;
        padding-bottom: 20px;
        padding-top: 10px;
    }
    @include md(){
            width: 280px;
        }
}
//取消 登入
.btn_light_box{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    button{
        margin: 5px 10px;
    }
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
    width: 30px;
    margin-right: 20px;
}
</style>