<template>
    <section>
        <div class="group">
            <a-tabs type="card" v-model:activeKey="activeKey">
                <a-tab-pane key="1" tab="會員資料">
                    <h2>{{userName}}</h2>
                    <h3>編輯會員資料</h3>
                    <div class="table_group">
                        <div class="memtxt_group">
                            <div class="memtxt">
                            <p>暱稱:<input type="text"></p>
                            <p>信箱:<input type="email"></p> 
                            <p>密碼:<a href="">重設密碼</a></p>
                            <p>電話:<input type="text"></p> 
                        </div>
                        <div class="memtxt">
                            <p>縣市:<select name="" id="">
                                <option value="">桃園市</option>
                                <option value="">桃園市</option>
                            </select></p>
                            <p>鄉鎮市區:<select name="" id=""></select></p>
                                <option value="">中壢區</option>  
                            <p>地址:<textarea name="" id="" cols="20" rows="3"></textarea></p>
                        </div>
                        </div>
                        
                        <div class="mem_image" v-for="i in 6">
                            <input  type="radio"><img src="../assets/activity_20.png" alt="">
                        </div>
                        <button>查詢</button>
                    </div>
                </a-tab-pane>

                <a-tab-pane key="2" tab="營地預定查詢">
                    
                </a-tab-pane>

                <a-tab-pane key="3" tab="商品訂單查詢">Content of Tab Pane 3</a-tab-pane>
            </a-tabs> 
        </div>
        
    </section>
</template>
<script>
    export default ({
      data() {
        return {
            
        }
      }
    });
    </script>
    <style lang="scss">
        /* 套件 */
        .group{
            width: 600px;
            margin: 0 auto;
            background-color:#6CAEA2;
        }
        .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab{
            background-color:#6CAEA2;
            border:none;
        }
        .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
            color:#fff;
        }
        .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-bottom > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before, .ant-tabs-bottom > div > .ant-tabs-nav::before{
            border:none;
        }
        .memtxt_group{
            display: flex;
            justify-content: space-evenly;
        }
        .memtxt{
            text-align: start;
        }
        .mem_image{
            display: inline-block;
            img{
                width: 50px;
            }
        }
        
    </style>