<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="a">經濟營帳</a-radio-button>
        <a-radio-button value="b">豪華營帳</a-radio-button>
        <a-radio-button value="c">主題營帳</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref('a');
    return {
      value1,
    };
  },
});
</script>
