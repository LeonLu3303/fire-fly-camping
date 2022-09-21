<template>
    <section class="featured_products">
            <div class="products_cotainer">
                <h2>{{sectionTitle}}</h2>
                <div class="content_group">
                    <div v-for="item in itemArray" :class="{active_item: products_item==i}">
                        <div class="card_photo"><img :src="require(`../assets/images/shopping_prod_${item.id}.jpg`)" alt="精選商品"></div>
                        <p>{{item.productsName}}</p>
                        <p>{{item.productsPrice}}</p>
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
                        id:1,
                        imgURL:'../assets/images/shopping_prod_1.jpg',
                        productsName:'營火叢多喝水瓶',
                        productsPrice:2680
                    },
                    {
                        id:2,
                        imgURL:'../assets/images/shopping_prod_2.jpg',
                        productsName:'營火叢不怕風吹帽',
                        productsPrice:2680
                    },
                    {
                        id:3,
                        imgURL:'../assets/images/shopping_prod_3.jpg',
                        productsName:'營火叢漁夫帽',
                        productsPrice:2680
                    },
                    {
                        id:4,
                        imgURL:'../assets/images/shopping_prod_4.jpg',
                        productsName:'營火叢帽Ｔ',
                        productsPrice:2680
                    },
                    {
                        id:5,
                        imgURL:'../assets/images/shopping_prod_5.jpg',
                        productsName:'營火叢金勾杯',
                        productsPrice:2680
                    },
                    {
                        id:6,
                        imgURL:'../assets/images/shopping_prod_6.jpg',
                        productsName:'營火叢T-Shirt',
                        productsPrice:2680
                    }
                ]
            }
        },
    }
</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
</style>