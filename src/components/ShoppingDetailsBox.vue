<template>
    <div class="details_adding_box">
        <img src="../assets/images/shop/shopping_adding_msg.png" alt="">
        <h4 class="adding_text">Hello~{{itemSelected}}<br>
        已加入購物車囉～</h4>
    </div>
    
    
</template>

<script>
export default {
    props: {
        itemSelected: String,
    }
}
</script>
<style lang="scss" scoped>
.details_adding_box{
    position: fixed;
    width: 350px;
    height: 300px;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .adding_text{
        position: relative;
        top: -85px;
        left: 50px;
        color: #4d8084;
    }
}
</style>


