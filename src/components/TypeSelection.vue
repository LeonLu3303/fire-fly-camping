<template>
  <a-space>
    <a-select
      ref="select"
      v-model:value="value1"
      :options="options1"
      @focus="focus"
      @change="handleChange"
    ></a-select>
    <a-select
      v-model:value="value2"
      @focus="focus"
      :options="options2"
      @change="handleChange"
    ></a-select>
    <a-select
      v-model:value="value3"
      :options="options3"
      @focus="focus"
      @change="handleChange"
    ></a-select>
  </a-space>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const options1 = ref([
      {
        value: null,
        label: '主題活動',
        disabled: true,
      },
      {
        value: '1',
        label: '冰河垂釣',
      },
      {
        value: '2',
        label: '雪山滑雪',
      },
    ]);
    const options2 = ref([
      {
        value: '其他裝備',
        label: null,
        disabled: true,
      },
      {
        value: '1',
        label: '露營燈',
      },
      {
        value: '2',
        label: '卡拉OK設備',
      },
      {
        value: '3',
        label: '投影機',
      },
    ]);
    const options3 = ref([
      {
        value: null,
        label: '食材方案',
        disabled: true,
      },
      {
        value: '1',
        label: '奢侈海鮮大餐',
      },
      {
        value: '2',
        label: '海陸雙重享受',
      },
      {
        value: '3',
        label: '養身素食通腸胃',
      },
    ]);

    const focus = () => {
      console.log('focus');
    };

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    return {
      focus,
      handleChange,
      value1: ref('主題活動'),
      value2: ref('其他裝備'),
      value3: ref('食材方案'),
      options1,
      options2,
      options3,
    };
  },
});
</script>
