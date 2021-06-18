<template>
    <div class="home-container" ref="container">
        <h1>首页</h1>
        <button @click="handleClick">点击提交</button>
        <div class="test" ref="test"></div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$showMessage({
                    content: "评论成功",
                    type: "success",
                    container: this.$refs.test,
                    callback: function () {
                        console.log("ended!!!");
                    }
                });
            }
        },
    };
</script>

<style lang="less" scoped>
    .test {
        width: 300px;
        height: 200px;
        border: 2px solid;
        margin: 0 auto;
    }
</style>
