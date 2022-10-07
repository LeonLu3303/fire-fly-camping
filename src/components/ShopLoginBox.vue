<template>
    <div class="login_lightbox">
        <div class="modal_mask" :style="modalStyle">
            <div class="modal_container" @click="toggleModal">
                <div class="modal_body">
                    <h4>請先登入</h4>
                    <div class="btn_light_box">
                        <button class="btn_submit" @click="toggleModal">取消</button>
                        <router-link class="login" to="/Login">
                            <button class="btn_confirm">登入</button>
                        </router-link>
                    </div>
                    <span class="btn_closure">
                        <img src="@/assets/images/main/main_icon_closure.png" alt="closure" @click="toggleModal">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toggleModal () {
            // this.$emit() -> 
            // 將('第一個可取任何名稱，父系的click 需同名',第二個是將裡面的內容傳給父層)
            // 當點擊後，會將false 的值傳給父層，即會關閉
            this.$emit('close', false)
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
檢舉icon
.inform_icon{
    display: inline-block;
    width: 30px;
    margin-right: 20px;
}
</style>