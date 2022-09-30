<template>
        <!-- [activity_block] - 依據不同區塊區分圖片 -->
        <div v-for="(item) in text[activity_block]" :key="item + 'id'">
            <p>{{item.title}}</p>
            <p>{{item.text}}</p>
            
        </div>     
</template>
<script>

export default ({
    props: {
        // 將父層資料傳到子元件，接收到父層的 item.name
        activity_block: String
    },
    name: "Activityttest",
    data(){
        return{
            text: {
                //叢林
                '叢林歷險': [
                    {title:'探險',
                    text:'測試文字'
                    }

                ],
                //冰島
                '冰雪奇緣': [
                    {title:'雪地',
                     text:'測試文字'
                    }
                ],
                //峽谷
                '荒野峽谷': [
                   {title:'攀岩',
                    text:'測試文字'
                    }
                ],
            }
        }
    }
});
</script>
<style scoped>
/* For demo */

</style>