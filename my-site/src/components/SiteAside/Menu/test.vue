<template>
    <div class="test-container">
        <Menu />
    </div>
</template>

<script>
    import Menu from "./";
    import "@/styles/global.less";
    export default {
        components: { Menu },
    };
</script>

<style lang="less" scoped>
    .test-container {
        width: 300px;
        height: 500px;
        border: 2px solid red;
        background: #000;
        margin: 0 auto;
    }
</style>
