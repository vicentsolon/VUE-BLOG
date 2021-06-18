<template>
    <div class="app-container">
        <p ref="para">引用测试</p>
        <ChildComp ref="comp" />
        <button @click="handleClick">查看引用</button>
    </div>
</template>

<script>
    import ChildComp from "./ChildComp.vue";
    export default {
        components: {
            ChildComp
        },
        methods: {
            handleClick() {
                this.$refs.comp.a = "test";
            }
        },
    }
</script>

<style lang="less" scoped>

</style>