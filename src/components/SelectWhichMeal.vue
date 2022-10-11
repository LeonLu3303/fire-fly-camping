<template>
  <a-space>
    <a-select
      v-model:value="value"
      :options="options"
      @change="handleChange"
    ></a-select>
  </a-space>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const options = ref([
      {
        value: null,
        label: '食材方案',
        disabled: true,
      },
      {
        value: '1',
        label: '肉多多吃到飽',
      },
      {
        value: '2',
        label: '素食養身蔬菜',
      },
      {
        value: '3',
        label: '奢侈海鮮大餐',
      },
      {
        value: '4',
        label: '海陸雙重享受',
      },
    ]);

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    return {
      focus,
      handleChange,
      value: ref('食材方案'),
      options,
    };
  },
  watch: {
    value(e) {
      this.$emit('update-result', e);
    },
  },
});
</script>
