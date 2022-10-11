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
        value: '其他裝備',
        label: null,
        disabled: true,
      },
      {
        value: '1',
        label: '懷舊露營燈具',
      },
      {
        value: '2',
        label: '野外廚房套鍋組',
      },
      {
        value: '3',
        label: '生存多功能工具',
      },
      {
        value: '4',
        label: '安全通電延長線',
      },
    ]);

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    return {
      focus,
      handleChange,
      value: ref('其他裝備'),
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
