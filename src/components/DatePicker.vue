<template>
  <a-space direction="vertical" :size="12">
    <a-range-picker v-model:value="value1" :ranges="ranges" />
    <a-range-picker
      v-model:value="value2"
      style="width: 400px"
      :ranges="ranges"
      show-time
      format="YYYY/MM/DD HH:mm:ss"
    />
  </a-space>
</template>
<script>
import dayjs from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value1: ref(),
      value2: ref(),
      ranges: {
        Today: [dayjs(), dayjs()],
        'This Month': [dayjs(), dayjs().endOf('month')],
      },
    };
  },
});
</script>
