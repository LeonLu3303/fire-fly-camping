<template>
  <a-space>
    <a-select
      v-model:value="value"
      @focus="focus"
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

    const focus = () => {
      console.log('focus');
    };

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
