<template>
    <a-pagination
        show-size-changer
        :default-current="6"
        :total="500"
        @change="onPageChange"
        @showSizeChange="onShowSizeChange"
    />
</template>

<script>
export default {
    data() {
        return {
            pageSize: 6,
            current: 1,
        }
    },
    methods: {
        onPageChange (page) {
        console.log(page)
        },
        onShowSizeChange (current, pageSize) {
        console.log(current, pageSize);
        }
    }
}
</script>
