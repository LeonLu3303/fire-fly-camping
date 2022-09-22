<template>
    <section class="frrdback">
            <div class="feedback_cotainer">
                <h2>{{sectionTitle}}</h2>
                <div class="content_group">
                    <div v-for="item in itemArray" :class="{active_item: psot_item==i}">
                        <div class="card_photo"><img :src="imgURL" alt="營火報告"></div>
                        <p>{{item.post}}</p>
                        <p>{{item.price}}</p>
                    </div>
                </div>
                <router-link to="/Shopping" class="btn_page_link">了解更多</router-link>
            </div>
    </section>
</template>
    
<script></script>
    
<style lang="scss">
    @import '../assets/scss/style.scss';
    @import '../assets/scss/component/HomeFeedback';
</style>