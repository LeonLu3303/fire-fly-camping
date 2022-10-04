<template>
    <div class="scroll_container">
        <div class="scroll_text"><p>scroll</p></div>
        <div class="scroll_group">
            <div class="scroll_line"></div>
            <div class="ball_drop"></div>
        </div>
    </div>
</template>
<script>
import {gsap} from 'gsap'  
export default {
    mounted() {
        const scroll = document.querySelector('.ball_drop')

    gsap.to( scroll, {
        autoAlpha: 1,
        y: 120,
        ease: "power4",
        duration: 3,
        stagger: 0.2,
        repeatdelay: 0.3,
        repeat: -1
})
    },
    
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';  
    .scroll_container{
        width: 100px;
        padding: 1rem;
    }
    .scroll_text{
        padding: 1rem 0;
        text-align: center;
        color: #0e685e;
    }
    .scroll_line{
        height: 115px;
        width: 2px;
        background-color: #fff;
        position: relative;
        margin-left: 2rem;
    }
    .ball_drop{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #0e685e;
        position: absolute;
        left: 39px;
        top: 45px;
        opacity: 1;
    }
</style>