<template>
    <section class="featured_products">
            <div class="products_cotainer">
                <div class="title_main">
                    <h2>{{sectionTitle}}</h2>
                </div>
                <div class="content_group">
                    <div v-for="item in itemArray" :class="{content_card: products_item==i}" :key="item">
                        <div class="card_photo"><img :src="require(`@/assets/images/shop/shopping_prod_${item.id}.jpg`)" alt="精選商品"></div>
                        <p class="products_name">{{item.name}}</p>
                        <p class="products_price">$NT{{item.price}}</p>
                    </div>
                </div>
                <router-link to="/Shopping" class="btn_page_link">了解更多</router-link>
            </div>
    </section>
</template>

<script>
    export default{
        name: 'HomeProduces',
        data() {
            return {
                sectionTitle:'精選商品',
                itemArray:[
                    {
                        id:2,
                        imgURL:'@/assets/images/shop/shopping_prod_2.jpg',
                        name:'營火叢不怕風吹帽',
                        price:2680
                    },
                    {
                        id:1,
                        imgURL:'@/assets/images/shop/shopping_prod_1.jpg',
                        name:'營火叢多喝水瓶',
                        price:2680
                    },
                    {
                        id:3,
                        imgURL:'@/assets/images/shop/shopping_prod_3.jpg',
                        name:'營火叢漁夫帽',
                        price:2680
                    },
                    {
                        id:6,
                        imgURL:'@/assets/images/shop/shopping_prod_6.jpg',
                        name:'營火叢T-Shirt',
                        price:2680
                    },
                    {
                        id:5,
                        imgURL:'@/assets/images/shop/shopping_prod_5.jpg',
                        name:'營火叢金勾杯',
                        price:2680
                    },
                    {
                        id:4,
                        imgURL:'../assets/images/shopping_prod_4.jpg',
                        name:'營火叢帽Ｔ',
                        price:2680
                    }

                ]
            }
        },
    }
</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
    @import '../assets/scss/component/HomeProducts';
</style>