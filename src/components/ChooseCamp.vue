<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="1">經濟營帳</a-radio-button>
        <a-radio-button value="2">豪華營帳</a-radio-button>
        <a-radio-button value="3">主題營帳</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref('1');

    return {
      value1,
    };
  },
  watch: {
    value1(e) {
      this.$emit('update-result', e);
    },
  },
});
</script>
