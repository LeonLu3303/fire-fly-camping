<template>
    <div id="tent_slide">
        <!-- 輪播圖片群組 -->
        <div class="tent_slide_group">
            <div class="tent_slide_big_pic" >
                <img class="prev_page" src="@/assets/images/main/main_prev_page.png" @click="prevPage">
                <img :src="require(`@/assets/images/service/service_feature_${currentPic}.jpg`)" alt="ordinary">
                <img class="next_page" src="@/assets/images/main/main_next_page.png" @click="nextPage">
            </div>

            <div class="tent_slide_btn">
                <!-- 當點擊小圖片時， 大圖小圖型值相等-->
                <div v-for="item in ordinaryPic" 
                    :key="item.id"
                    class="small_img_group"
                    :class="{
                        'activeSlide': (currentPic === item.id)
                    }"
                    @click="selectPage(item.id)"
                >
                <img :src="require(`@/assets/images/service/service_feature_${item.id}.jpg`)" alt="ordinary">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ServiceSwiper",

    data() {
        return {
            currentPic: 1,
            autoplay: false, // 是否自動輪播
            timer: null, // auto play
            timerDelay: 3000, // 自動輪播間隔秒數
            toggleTimer: true, // pause auto play
            
            ordinaryPic: [
                {
                    id:1,
                    ordinaryImg: '@/assets/images/service/service_feature_1.jpg',
                },
                {
                    id:2,
                    ordinaryImg: '@/assets/images/service/service_feature_2.jpg',
                },
                {
                    id:3,
                    ordinaryImg: '@/assets/images/service/service_feature_3.jpg',
                },
                {
                    id:4,
                    ordinaryImg: '@/assets/images/service/service_feature_4.jpg',
                },
                {
                    id:5,
                    ordinaryImg: '@/assets/images/service/service_feature_5.jpg',
                },
                {
                    id:6,
                    ordinaryImg: '@/assets/images/service/service_feature_6.jpg',
                },
            ]
        }
    },
    methods:{
        prevPage(){
            //頁面如果是第一頁，就不能再往前
            if(this.currentPic === 1) return
            this.currentPic -= 1
        },
        nextPage(){
            //頁面如果是最後一頁，就不能再往後
            if(this.currentPic >= this.paginations) 
            return
            this.currentPic += 1
        },
        selectPage(val){
            this.currentPic = val
        },
        // 自動輪播
		autoPlay() {
			setInterval(() => {
				if(this.toggleTimer) this.toNext();
			}, this.timerDelay);
		}
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.tent_slide_big_pic{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    &:hover .prev_page{
        left: 1%;
        opacity: 1;
    }
    &:hover .next_page{
        right: 1%;
        opacity: 1;
    }
}
.prev_page{
    position: absolute;
    cursor: pointer;
    width: 40px;
    height: 40px;
    font-size: $title_h1;
    border-radius: 50%;
    border: none;
    left: -10%;
    opacity: .5;
    transition: all .3s ease;
    @include tb(){
        left: 1%;
        opacity: 1;
    }
}
.next_page{
    position: absolute;
    cursor: pointer;
    width: 40px;
    height: 40px;
    font-size: $title_h1;
    border-radius: 50%;
    border: none;
    right: -10%;
    opacity: .5;
    transition: all .3s ease;
    @include tb(){
        right: 1%;
        opacity: 1;
    }
}
.tent_slide_btn{
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.small_img_group{
    opacity: .5;
    padding: 10px 5px;
}
.activeSlide{
    opacity: 1;
}

</style>