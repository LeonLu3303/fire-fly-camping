<template>
    <div class="mem_content_group">
        <h3>編輯會員資料</h3>
        <form class="mem_form" method="POST" enctype="multipart/form-data">
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
                            <input id="mem_name" name="name" class="input_box" type="text" v-model="mem_name"/>
                        </li>
                        <li>
                            <input id="mem_nick_name" class="input_box" type="text" v-model="mem_nick_name"/>
                        </li>
                        <li>
                            <input id="mem_email" name="email" class="input_box" type="email" v-model="mem_email" />
                        </li>
                        <li>
                            <input id="mem_tel" class="input_box" type="tel" v-model="mem_phone"/>
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
                            <select  class="menu_choose" v-model="mem_city">
                                <option value=""></option>
                                <option v-for="i in city" :key="i">{{i}}</option>
                            </select>
                        </li>
                        <li>
                            <input  class="input_box input_addr" type="text" v-model="mem_addr" />
                        </li>
                    </ul>
                </div>
            </div>
            <h4>選取大頭貼</h4>
            <ul class="tabcontent_img">
                <li>
                    <label for="sloth" class="select_img">
                        <input type="radio" id="sloth" name="namepic" class="input_none" value="1" v-model="mem_pic">
                        <img src="@/assets/images/report/report_avatar_1.png">
                    </label>
                </li>
                <li>
                    <label for="bear" class="select_img">
                        <input type="radio" id="bear" name="namepic" class="input_none" v-model="mem_pic">
                        <img src="@/assets/images/report/report_avatar_2.png" value="2">
                    </label>
                </li>
                <li>
                    <label for="fox" class="select_img">
                        <input type="radio" id="fox" name="namepic" class="input_none" value="3" v-model="mem_pic">
                        <img src="@/assets/images/report/report_avatar_3.png">
                    </label>
                </li>
                <li>
                    <label for="snake" class="select_img">
                        <input type="radio" id="snake" name="namepic" class="input_none" value="4" v-model="mem_pic">
                        <img src="@/assets/images/report/report_avatar_4.png">
                    </label>
                </li>
                <li>
                    <label for="penguin" class="select_img">
                        <input type="radio" id="penguin" name="namepic" class="input_none" value="5" v-model="mem_pic">
                        <img src="@/assets/images/report/report_avatar_5.png">
                    </label>
                </li>
                <li>
                    <label for="dinosaur" class="select_img" >
                        <input type="radio" id="dinosaur" name="namepic" class="input_none" value="6" v-model="mem_pic">
                        <img src="@/assets/images/report/report_avatar_6.png">
                    </label>
                </li>
            </ul>
            <button class="btn_confirm" type="submit" id="submit" @click="update">儲存</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "MemberModify",
        created(){
            let checkLogin = sessionStorage.getItem('member');
            if(checkLogin == null){
                location.replace("/HomeView");
            }
            this.getMemData()
            this.fetchtest()
        },
        data(){
            return {
                city:[
                    '基隆市','嘉義市','台北市','嘉義縣','新北市','台南市','桃園市','高雄市','新竹市','屏東縣','新竹縣','台東縣','苗栗縣','花蓮縣','台中市','宜蘭縣','彰化縣','澎湖縣','南投縣','金門縣','雲林縣','連江縣'
                ],

                selected: '',
                memmodifydata:{},
                memId: '',
                memdata:'',
                member:'',
                mem_id:'',
                mem_name:'',
                mem_email:'',
                mem_nick_name:'',
                mem_city:'',
                mem_addr:'',
                mem_phone:'',
                mem_pic:'',
                mem_deta:[]
            }
        },
        methods:{
            getMemData(){
                this.member = JSON.parse(sessionStorage.getItem('member'));
                this.mem_id = this.member.mem_id;
                // this.mem_name = this.member.mem_name;
                // this.mem_email = this.member.mem_email;
                // this.mem_nick_name = this.member.mem_nick_name;
                // this.mem_city = this.member.mem_city;
                // this.mem_addr = this.member.mem_addr;
                // this.mem_phone = this.member.mem_phone;
                console.log(this.member)
                console.log(this.mem_id)
    
            },
            fetchtest(){
                console.log(this.mem_id)
                fetch(`http://localhost/CGD102G1/back_end/membermodifytest.php?memId=${this.mem_id}`
                ,
                {method:'GET'})                
                .then((response) => {
                    this.fetchError = (response.status !== 200)
                //json(): 返回 Promise，resolves 是 JSON 物件
                    return response.json()
                }).then(responseText => {
                    console.log(responseText)
                    const useData = responseText
                    this.memmodifydata = useData[0]
                    this.mem_name = responseText.mem_name;
                    this.mem_email = responseText.mem_email;
                    this.mem_nick_name = responseText.mem_nick_name;
                    this.mem_city = responseText.mem_city;
                    this.mem_addr = responseText.mem_addr;
                    this.mem_phone = responseText.mem_phone;
                }).catch((err) => {
                    this.memmodifydata = true
                });
            },
            update(e){
                if (
                    //指定css選擇器的節點
                        e.target.closest('button') &&
                        e.target.closest('button').id === 'submit'
                    ) {
                    //取消預設submit事件
                        e.preventDefault()
                        
                
                var xhr = new XMLHttpRequest();
               
                xhr.open("POST","http://localhost/CGD102G1/back_end/updatemember.php", true);
                xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                let mem_deta = `mem_id=${this.mem_id}&mem_name=${this.mem_name}&mem_email=${this.mem_email}&mem_nick_name=${this.mem_nick_name}&mem_city=${this.mem_city}&mem_addr=${this.mem_addr}&mem_phone=${this.mem_phone}&mem_pic=${this.mem_pic}`;
                    xhr.send(mem_deta);
                alert("修改成功");
                }

            }
        }

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