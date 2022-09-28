<template>
    <router-link to="/ShoppingCart"><img src="@/assets/images/shop/shopping-cart.png" alt="" class="cart_icon"></router-link>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';

.cart_icon{
    position: fixed;
    width: 80px;
    right:0;
    bottom: 50px;
    margin: 2rem;
    transform-style: preserve-3d;
    animation: spin 4s 5s infinite;
    &:hover{
        transform: scale(1.3);
        transition: all .8s linear;
    }
    @include sm(){
        width: 60px;
        margin: 1rem;
    }

}
@keyframes spin{
    from{transform: rotate(-360deg)};
    to{transform: rotate(0deg)};
}
</style>