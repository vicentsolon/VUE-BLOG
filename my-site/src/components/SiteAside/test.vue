<template>
    <div class="test-container">
        <SiteAside />
    </div>
</template>

<script>
    import SiteAside from "./";
    import "@/styles/global.less";
    export default {
        components: {
            SiteAside
        }
    }
</script>

<style lang="less" scoped>
    .test-container {
        width: 250px;
        height: 550px;
        border: 2px solid red;
        margin: 10px auto;
    }
</style>