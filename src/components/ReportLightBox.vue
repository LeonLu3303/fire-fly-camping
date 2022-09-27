<template>
    <div class="lightbox" to="body">
        <!-- <teleport to="body"> -->
            <div class="modal-mask" :style="modalStyle">
                <div class="modal-container" @click.self="toggleModal">
                    <div class="modal-body">
                        哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                    </div>
                </div>
            </div>
        <!-- </teleport> -->

        <button @click="isShow = true">Click Me</button>
    </div>
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
  height: 20rem;
} */

.lightbox {
    position: relative;
    z-index: 100;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.modal-mask {
    position: absolute;
    z-index: 100;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
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