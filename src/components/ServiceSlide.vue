<template>
    <div>
        <transition-group tag="div" class="container" :name="transitionName">
            <div class="page" v-for="item in imgs" :key="item.id" v-show="item.id === show">
                <img :src="require(`@/assets/images/service/service_ordinary_${item.id}.jpg`)">
            </div>
        </transition-group>

        <button @click="setShow(show-1)">←</button>
        <span>
            <button v-for="num in imgs.length" :key="num-1" @click="setShow(num-1)">{{num}}</button>
        </span>
        <button @click="setShow(show+1)">→</button>
    </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let timer
const interval = 5000
export default {
    data () {
        return {
            transitionName: 'left-in',
            show: 0,
            imgs: [
                {
                    id:1,
                    ordinaryImg: '@/assets/images/service/service_ordinary_1.jpg',
                },
                {
                    id:2,
                    ordinaryImg: '@/assets/images/service/service_ordinary_2.jpg',
                },
                {
                    id:3,
                    ordinaryImg: '@/assets/images/service/service_ordinary_3.jpg',
                },
                {
                    id:4,
                    ordinaryImg: '@/assets/images/service/service_ordinary_4.jpg',
                },
                {
                    id:5,
                    ordinaryImg: '@/assets/images/service/service_ordinary_5.jpg',
                },
                {
                    id:6,
                    ordinaryImg: '@/assets/images/service/service_ordinary_6.jpg',
                },
            ]
        }
    },
    mounted () {
        timer = setInterval(this.nextShow, interval)
    },
    methods: {
        setShow (item) {
        this.show = item
        },
        nextShow () {
        this.show++
        }
    },
    watch: {
        show (nVal, oVal) {
        if (nVal < 0) {
            this.show = this.imgs.length - 1
        } else if (nVal > this.imgs.length - 1) {
            this.show = 0
        } else {
            if (oVal < 0) this.transitionName = 'left-in'
            else if (oVal > this.imgs.length - 1) this.transitionName = 'right-in'
            else this.transitionName = nVal > oVal ? 'right-in' : 'left-in'
        }
        }
    }
}
</script>

<style scoped>
    .right-in-enter{
        left:100%
    }
    .right-in-enter-active,.right-in-leave-active{
        transition: left 0.5s;
    }
    .right-in-enter-to,.right-in-leave{
        left:0%
    }
    .right-in-leave-to{
        left:-100%
    }
    .left-in-enter{
        left:-100%
    }
    .left-in-enter-active,.left-in-leave-active{
        transition: left 0.5s;
    }
    .left-in-enter-to,.left-in-leave{
        left:0%
    }
    .left-in-leave-to{
        left:100%
    }
    .container{
        position: relative;
        width: 100%;
        height: 480px;
        margin: 0 auto;
        overflow: hidden;
    }
    .page{
        position: absolute;
        width: 320px;
        height: 480px;
    }
</style>