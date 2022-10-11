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
  props: ['wherePick'],
  setup() {
    const options = ref(
      [
        {
          value: null,
          label: '主題活動',
          disabled: true,
        },
        {
          value: '1',
          label: '遊覽動物',
        },
        {
          value: '2',
          label: '寶藏探險',
        },
      ],
      [
        {
          value: null,
          label: '主題活動',
          disabled: true,
        },
        {
          value: '1',
          label: '滑雪體驗',
        },
        {
          value: '2',
          label: '冰上釣魚',
        },
      ],
      [
        {
          value: null,
          label: '主題活動',
          disabled: true,
        },
        {
          value: '1',
          label: '熱氣球遊覽大峽谷',
        },
        {
          value: '2',
          label: '攀岩體驗',
        },
      ]
    );
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
