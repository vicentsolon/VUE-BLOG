<template>
    <div class="test-container">
        <ImageLoader @load="handleLoaded" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" />
    </div>
</template>

<script>
    import ImageLoader from "./";
    import "@/styles/global.less";
    export default {
        components: {
            ImageLoader,
        },
        methods: {
            handleLoaded() {
                console.log("ImageLoader组件load事件触发，图片加载完成");
            }
        }
    };
</script>

<style lang="less" scoped>
    .test-container {
        width: 400px;
        height: 300px;
        border: 2px solid;
        margin: 0 auto;
    }
</style>
