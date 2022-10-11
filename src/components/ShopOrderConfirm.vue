<template>
    <!-- 訂單確認 LightBox -->
    <div class="bg_shop_confirm">
        <div class="wrap_shop_confirm">
            <div class="shop_conf_price">
                <h4>應付金額：＄</h4>
                <hr>
            </div>
            <div class="shop_conf_credit">
                <h4>信用卡資訊</h4>
                <p>信用卡卡號：</p>
                <hr>
            </div>
            <div class="shop_conf_order_info">
                <h4>收件人資訊</h4>
                <p>收件人名字：</p>
                <p>收件人電話：</p>
                <p>收件人地址：</p>
            </div>
            <div class="confirm_btn_box">
                <button class="btn_confirm" type="button" @click="orderCompleted">確認無誤</button>
                <button @click="cancel" class="btn_return" type="button">取消</button>
            </div>
        </div>
    </div>
    <!-- 訂單已成立 LightBox -->
    <div v-if="orderCompletedBox" class="container_shop_order_completed">
        <div class="wrap_order_completed">
            <div class="order_confirm_content">
                <h4>訂單已成立囉～</h4>
                <hr>
                <p>訂單編號：</p>
                <p>訂單成立時間：</p>
                <p>訂單狀態：已付款</p>
            </div>
            <div class="confirm_btn_box">
                <button class="btn_return" @click="close" type="button">關閉</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            confirmBox: false,
            orderCompletedBox: false,
        }
    },
    methods: {
        // 
        cancel () {
        this.$emit('cancelBox',this.confirmBox)
    },
        close () {
        this.orderCompletedBox = !this.orderCompletedBox
    },
        orderCompleted () {
        this.orderCompletedBox = true
    }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.bg_shop_confirm, .container_shop_order_completed{
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}
.wrap_shop_confirm, .wrap_order_completed{
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem;
        width: 350px;
        height: auto;
        background-color: #fff;
        border-radius: 10px;
        > div, p, h4{
            padding: 0.5rem;
        }
    }
.confirm_btn_box{
    display: flex;
    justify-content: center;
    > button{
        margin: 0.5rem;
    }
}
</style>