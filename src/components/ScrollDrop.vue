<template>
    <div class="scroll_container">
        <div class="scroll_text">scroll</div>
        <div class="scroll_group">
            <div class="scroll_line"></div>
            <div class="ball_drop"></div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        const scroll = document.querySelector('.ball_drop')

    gsap.to( scroll, {
        autoAlpha: 0,
        y: 110,
        // rotation: 90,
        ease: "power4",
        duration: 4,
        stagger: 0.2,
        repeatdelay: 0.3,
        repeat: -1
})
    },
    
}
</script>
<style land="scss" scoped>
    .scroll_container{
        width: 100px;
        padding: 1rem;
    }
    .scroll_line{
        height: 118px;
        width: 2px;
        background-color: gray;
        position: relative;
    }
    .ball_drop{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #000;
        position: absolute;
        left: 15px;
        top: 40px;
        opacity: 1;
    }
</style>