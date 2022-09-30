<template>
  <a-space direction="vertical" :size="12">
    <a-range-picker v-model:value="value1" :ranges="ranges" />
  </a-space>
</template>
<script>
import dayjs from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value1: ref(),
      ranges: {
        Today: [dayjs(), dayjs()],
        'This Month': [dayjs(), dayjs().endOf('month')],
      },
    };
  },
  watch: {
    value1(e) {
      this.$emit('update-result', e);
    },
  },
});
</script>
