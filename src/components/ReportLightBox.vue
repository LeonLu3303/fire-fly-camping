<template>
<<<<<<< HEAD
    <div class="report_lightbox">
        <teleport to="body">
            <div class="modal_mask" :style="modalStyle">
                <div class="modal_container" @click.self="toggleModal">
                    <div class="modal_body">
                        <p>檢舉原因</p>
                        <form action="">
                            <textarea class="inform_txt" type="text" maxlength="300" value="請輸入檢舉原因(限150字)"></textarea>
                            <button class="btn_confirm">送出</button>
                        </form>
                        <span class="btn_closure">
                            <img src="@/assets/images/main/main_icon_closure.png" alt="closure" @click.self="toggleModal">
                        </span>
                    </div>
                </div>
            </div>
        </teleport>
    </div>
    <a class="inform_icon" @click="isShow = true">
        <img src="@/assets/images/report/report_icon_caution.png" alt="caution">
    </a>
    <!-- <button @click="isShow = true">Click Me</button> -->
=======
  <div class="lightbox" to="body">
    <!-- <teleport to="body"> -->
    <div class="modal-mask" :style="modalStyle">
      <div class="modal-container" @click.self="toggleModal">
        <div class="modal-body">哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      </div>
    </div>
    <!-- </teleport> -->

    <button @click="isShow = true">Click Me</button>
  </div>
>>>>>>> e2e1c63cfc9a9aa909ce71ac6367552ff5db6172
</template>

<script>
export default {
<<<<<<< HEAD
    name: "ReportLightBox",
    data: () => ({
        isShow: false
    }),
    computed: {
        modalStyle() {
            return {
                'display': this.isShow ? '' : 'none'
                //燈箱隱藏
            };
        }
    },
    methods: {
        toggleModal() { 
            console.log('click')
            this.isShow = !this.isShow;
            //關閉燈箱
        }
    }
}

=======
  name: 'ReportLightBox',
  data: () => ({
    isShow: false,
  }),
  computed: {
    modalStyle() {
      return {
        display: this.isShow ? '' : 'none',
      };
    },
  },
  methods: {
    toggleModal() {
      console.log('click');
      this.isShow = !this.isShow;
    },
  },
};
>>>>>>> e2e1c63cfc9a9aa909ce71ac6367552ff5db6172
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

<<<<<<< HEAD
//檢舉灰背景
.modal_mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}
.modal_container {
    cursor: pointer;
    width: 100%;
    height: 100%;
}
//檢舉區塊
.modal_body {
    position: relative;
    top: 50%;  
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: auto;
    width: 400px;
    padding: 20px;
    border-radius: 5px;
    background-color: $color-main-yellow;
    text-align: center;
    h4 {
        color: $color-basic-gray2;
        padding-bottom: 20px;
    }
    p {
        font-size: $title_h4;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 24px;
    }
    @include md(){
            width: 300px;
        }
}
.inform_txt{
    width: 100%;
    height: 200px;
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 10px 10px;
    margin-bottom: 20px;
    border: 1px solid $color-main-green;
    resize: none;
}
//叉叉
.btn_closure{
    position: absolute;
    cursor: pointer;
    width: 40px;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
}
//檢舉icon
.inform_icon{
    display: inline-block;
    width: 26px;
=======
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
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
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
>>>>>>> e2e1c63cfc9a9aa909ce71ac6367552ff5db6172
}
</style>
