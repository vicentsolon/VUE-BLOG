<template>
    <div class="app-container">
        <Layout>
            <template #left>
                <div class="left">
                    <SiteAside />
                </div>
            </template>
            <template #default>
                <RouterView />
            </template>
        </Layout>
    </div>
</template>

<script>
    import Layout from "@/components/Layout";
    import SiteAside from "@/components/SiteAside";
    export default {
        components: {
            Layout,
            SiteAside
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    @import "~@/styles/mixin.less";
    .app-container {
        .self-fill(fixed);
    }
    .left {
        height: 100%;
        width: 250px;
    }
</style>
