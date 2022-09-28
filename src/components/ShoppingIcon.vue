<template>
    <router-link to="/ShoppingCart"><img src="@/assets/images/shop/shopping-cart.png" alt="" class="cart_icon"></router-link>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.cart_icon{
    position: fixed;
    width: 80px;
    right:0;
    bottom: 0;
    margin: 2rem;
    @include sm(){
        width: 60px;
        margin: 1rem;
    }

}
</style>