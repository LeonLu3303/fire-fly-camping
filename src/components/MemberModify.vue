<template>
    <div class="mem_content_group">
        <h3>編輯會員資料</h3>
        <form class="mem_form" action="">
            <div class="tabcontent_text_group">
                <div class="tabcontent_txt_group">
                    <ul class="tabcontent_txt">
                        <li>
                            <label for="mem_name" class="tab_label">
                                <p>會員姓名</p>
                            </label>
                        </li>                    
                        <li>
                            <label for="mem_nick_name" class="tab_label">
                                <p>暱稱</p>
                            </label>
                        </li>
                        <li>
                            <label for="mem_email" class="tab_label">
                                <p>E-mail</p>
                            </label>
                        </li>
                        <li>
                            <label for="mem_tel" class="tab_label">
                                <p>電話</p>
                            </label>
                        </li> 
                    </ul>
                    <ul class="tabcontent_txt">
                        <li>
                            <input id="mem_name" class="input_box" type="text" v-model="memmodifydata.mem_name"/>
                        </li>
                        <li>
                            <input id="mem_nick_name" class="input_box" type="text" v-model="memmodifydata.mem_nick_name"/>
                        </li>
                        <li>
                            <input id="mem_email" class="input_box" type="email" v-model="memmodifydata.mem_email" />
                        </li>
                        <li>
                            <input id="mem_tel" class="input_box" type="tel" v-model="memmodifydata.mem_phone"/>
                        </li>
                    </ul>
                </div>
                <div class="tabcontent_txt_group">
                    <ul class="tabcontent_txt">
                        <li>
                            <label class="tab_label" for="">
                            <p>縣市</p></label>
                        </li>
                        <li>
                            <label class="tab_label" for=""><p>地址</p></label>
                        </li>
                    </ul>
                    <ul class="tabcontent_txt">
                        <li>
                            <select  class="menu_choose" v-model="selected">
                                <option value="">{{memmodifydata.mem_city}}</option>
                                <option v-for="i in city" :key="i">{{i}}</option>
                            </select>
                        </li>
                        <li>
                            <input  class="input_box input_addr" type="text" :value="`${memmodifydata.mem_addr}`" />
                        </li>
                    </ul>
                </div>
            </div>
            <h4>選取大頭貼</h4>
            <ul class="tabcontent_img">
                <li>
                    <label for="sloth" class="select_img">
                        <input type="radio" id="sloth" name="namepic" class="input_none" value="1">
                        <img src="@/assets/images/report/report_avatar_1.png">
                    </label>
                </li>
                <li>
                    <label for="bear" class="select_img">
                        <input type="radio" id="bear" name="namepic" class="input_none">
                        <img src="@/assets/images/report/report_avatar_2.png" value="2">
                    </label>
                </li>
                <li>
                    <label for="fox" class="select_img">
                        <input type="radio" id="fox" name="namepic" class="input_none" value="3">
                        <img src="@/assets/images/report/report_avatar_3.png">
                    </label>
                </li>
                <li>
                    <label for="snake" class="select_img">
                        <input type="radio" id="snake" name="namepic" class="input_none" value="4">
                        <img src="@/assets/images/report/report_avatar_4.png">
                    </label>
                </li>
                <li>
                    <label for="penguin" class="select_img">
                        <input type="radio" id="penguin" name="namepic" class="input_none" value="5">
                        <img src="@/assets/images/report/report_avatar_5.png">
                    </label>
                </li>
                <li>
                    <label for="dinosaur" class="select_img" >
                        <input type="radio" id="dinosaur" name="namepic" class="input_none" value="6">
                        <img src="@/assets/images/report/report_avatar_6.png">
                    </label>
                </li>
            </ul>
            <button class="btn_confirm" type="submit" value="Submit">儲存</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "MemberModify",
        beforeMount(){
            this.FetchAPIFunc()
        },
        data(){
            return {
                city:[
                    '基隆市','嘉義市','台北市','嘉義縣','新北市','台南市','桃園縣','高雄市','新竹市','屏東縣','新竹縣','台東縣','苗栗縣','花蓮縣','台中市','宜蘭縣','彰化縣','澎湖縣','南投縣','金門縣','雲林縣','連江縣'
                ],

                selected: '',
                memmodifydata: {},
                memId: 1,
            }
        },
        methods:{
            getMemData(){
                const memberdata = sessionStorage.getItem('memId')
                return this.memberdata = JSON.parse(memberdata)
            },
            FetchAPIFunc(){
                fetch(`http://localhost/CGD102G1/back_end/membermodify.php?memId=${this.memId}`).then((response) => {
                this.fetchError = (response.status !== 200)
                //json(): 返回 Promise，resolves 是 JSON 物件
                 return response.json()})
                 .then(responseText => {const useData = responseText
                this.memmodifydata = useData[0]
                console.log(this.memmodifydata);
                }).catch((err) => {
                this.memmodifydata = true
             });
            },
        },
        // mounted(){
        //     if(sessionStorage.getItem("memmodifydata")){
        //         this.memmodifydata = JSON.parse(sessionStorage.getItem("memmodifydata")
        //     }else{
        //         FetchAPIFunc().then(useData => this.memmodifydata = useData);
        //     } 
        // }
    }
</script>

<style  lang="scss" scoped>
@import '@/assets/scss/style.scss';
.mem_content_group{
    padding: 70px 0;
    h3{
        color:$color-str-green;
        margin-bottom: 20px;
    }
}
.mem_form{
    width: 100%;
    .tabcontent_text_group{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .tabcontent_txt_group{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;
        .tabcontent_txt{
            padding: 0 10px;
            text-align: start;
            li{
            padding: 10px 0;
            }
        }   
      }
    }
    .tabcontent_img{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 20px; 
    }
    .tabcontent_img li{
        width: 100px;
        margin:15px ;
        @include tb(){
            margin:5px ;
        } 
    }
    h4{
        color: $color-main-green;
    }
}
.tabcontent_txt{
    color:$color-basic-gray3;
}
.tab_label{
    p{
        font-weight: 600;
        padding: 3px 0;
    }
}
.input_none{
    display: none;
}
.input_none + img{
    cursor: pointer;
    border:2px solid transparent;
}
.input_none:checked + img{
    border: 4px solid $color-str-red;
}
.btn_confirm{
    cursor: pointer;
}
.input_addr{
    width: 300px;
}
</style>