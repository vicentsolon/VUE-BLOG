<template>
    <div class="test-container">
        <Empty text="无数据" />
    </div>
</template>

<script>
    import Empty from "./";
    import "@/styles/global.less";
    export default {
        components: {
            Empty,
        },
    };
</script>

<style lang="less" scoped>
    .test-container {
        width: 400px;
        height: 300px;
        border: 2px solid;
        margin: 0 auto;
        position: relative;
    }
</style>
