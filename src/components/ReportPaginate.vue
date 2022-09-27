<template>
    <a-pagination v-model:current="current" :total="50" show-less-items />
</template>

<script>
    import { defineComponent, ref } from 'vue';
    export default defineComponent({
        setup() {
        return {
            current: ref(1),
        };
        },
    
    });
</script>