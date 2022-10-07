<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="2">二人</a-radio-button>
        <a-radio-button value="4">四人</a-radio-button>
        <a-radio-button value="6">六人</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref('2');
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
