<template>
    <div class="childComp-container">
        <p>ChildComp: a: {{ a }}, b: {{ b }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                a: 1,
                b: 2
            }
        },
        methods: {
            m1() {
                console.log("m1");
            }
        },
    }
</script>

<style lang="less" scoped>

</style>