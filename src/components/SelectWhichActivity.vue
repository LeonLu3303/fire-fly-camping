<template>
  <a-space>
    <a-select
      ref="select"
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
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    return {
      focus,
      handleChange,
      value: ref('主題活動'),
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
