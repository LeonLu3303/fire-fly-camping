<template>
    <section class="reservation_camp">
        <div class="home_parallex">
            <img class="jungle_bg_img j_1" src="@/assets/images/home/home_jungle_600_1.png" alt="">
            <img class="jungle_bg_img j_2" src="@/assets/images/home/home_jungle_600_2.png" alt="">
            <img class="jungle_bg_img j_3" src="@/assets/images/home/home_jungle_600_3.png" alt="">
            <img class="jungle_bg_img j_4" src="@/assets/images/home/home_jungle_600_4.png" alt="">
        </div>
        <div class="reservation_cotainer">
            <div class="search_zone">
                <h2 class="search_zone_title">{{sectionTitle}}</h2>
                <div class="search_zone_option">
                    <div class="option_theme">
                        <select>
                        <option>主題區域</option>
                        <option>叢林歷險</option>
                        <option>冰雪奇緣</option>
                        <option>荒野峽谷</option>
                        </select>
                    </div>
                    <div class="option_tent">
                        <select>
                        <option>幾人營帳</option>
                        <option>二人營帳</option>
                        <option>四人營帳</option>
                        <option>六人營帳</option>
                        </select>
                    </div>
                    <div class="option_month">
                        <select>
                        <option>你要露營的月份是？</option>
                        </select>
                    </div>
                </div>
                <button class="btn_search">{{btnTitle}}</button>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
    export default {
        data() {
            return {
                sectionTitle: '你要去哪裡露營呢？',
                btnTitle: '搜尋',
                
            }
        },
        mounted(){
            const jungle_1 = document.querySelector('.home_parallex img');
            const jungle_2 = document.querySelector('.j_2');
            const jungle_3 = document.querySelector('.j_3');
            const jungle_4 = document.querySelector('.j_4');

            gsap.to(jungle_1, {
                y: -650,
                scrollTrigger: {
                    trigger: 'home_parallex',
                    scrub: true,
                    // markers: true,
                    // start: 'top botton-=20%',
                    ease:"Bounce.easeIn",
                    // end: 'top-=20% center ',
                }
            })

            gsap.to(jungle_2 , {
                y: -250,
                scrollTrigger: {
                    trigger: "home-mountains",
                    scrub: true,
                    ease:"Bounce.easeIn",
                    // markers: true,
                }
            })
            gsap.to(jungle_3, {
                y: 400,
                scrollTrigger: {
                    trigger: "home-mountains",
                    scrub: true,
                    ease:"Bounce.easeIn",
                    // markers: true,
                }
            })
            gsap.to(jungle_4, {
                y: 950,
                scrollTrigger: {
                    trigger: "home-mountains",
                    scrub: true,
                    ease:"Bounce.easeIn",
                    // markers: true,
                }
            })
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/style.scss';
    @import '../assets/scss/component/_HomeReservation.scss';
</style>