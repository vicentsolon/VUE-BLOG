<template>
    <div class="test-container">
        <Layout>
            <template #left>
                <div class="left">左边栏</div>
            </template>
            <template #default>
                <div class="main">中间主区域</div>
            </template>
            <template #right>
                <div class="right">右边栏</div>
            </template>
        </Layout>
    </div>
</template>

<script>
    import Layout from "./";
    import "@/styles/global.less";
    export default {
        components: {
            Layout,
        },
    };
</script>

<style lang="less" scoped>
    .test-container {
        width: 70%;
        height: 400px;
        border: 2px solid red;
        margin: 10px auto;
        white-space: nowrap;
        .left {
            width: 150px;
            height: 100%;
            background: lightblue;
        }
        .main {
            width: 100%;
            height: 100%;
            background: lightgreen;
        }
        .right {
            width: 200px;
            height: 100%;
            background: lightcoral;
        }
    }
</style>
