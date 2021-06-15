<template>
    <Pager @pageChange="handlePageChange" :current="current" :total="total" />
</template>

<script>
    import Pager from "./";
    import "@/styles/global.less";
    export default {
        components: {
            Pager
        },
        data() {
            return {
                current: 3,
                total: 301
            }
        },
        methods: {
            handlePageChange(newPage) {
                this.current = newPage;
                console.log(`页面数据加载中，当前页码${newPage}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>