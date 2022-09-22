<template>
    <div class="lightbox">
        <div class="modal-mask" :style="modalStyle">
            <div class="modal-container"  @click.self="toggleModal">
                
                <div class="modal-body">
                    <header>
                        <slot name="header">Default Header</slot>
                    </header>
                    <hr>
                    <main>
                        <slot>Default Body</slot>
                    </main>
                    <hr>
                    <footer>
                        <slot name="footer">Default Footer</slot>
                    </footer>
                </div>

            </div>

        </div>
        <button @click="isShow = true">Click Me</button>
    </div>

    <!-- <div id="inform_lightbox">
        <light-box>
            <template v-slot:header>
                <h2>檢舉達人</h2>
            </template>

            <template v-slot:footer>
                <h2>什麼鬼</h2>
            </template>

            <div>
                <a target="_blank" href="#">檢舉</a>
            </div>
        </light-box>
    </div> -->
</template>

<script>
export default {
    name: "ReportLightBox",
    data: () => ({
        isShow: false
    }),
    computed: {
        modalStyle() {
        return {
            'display': this.isShow ? '' : 'none'
        };
        }
    },
    methods: {
        toggleModal() {
            console.log('click')
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style>
        /* #app {
    position: relative;
    display: block;
    padding: 1rem;
    font-size: 1rem;
    height: 22rem;
    } */

    /* button {
        font-size: 30px;
    } */

    .lightbox {
        position: absolute;
        /* display: block; */
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .modal-mask {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: table;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
    }

    .modal-container {
    cursor: pointer;
    display: table-cell;
    vertical-align: middle;

    }

    .modal-body {
    cursor: auto;
    display: block;
    width: 50%;
    margin: 0 auto;
    padding: 2rem;
    background-color: #fff;
    }
</style>