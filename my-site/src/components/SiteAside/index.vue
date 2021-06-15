<template>
    <div class="siteAside-container">
        <Avatar url="http://zhongmiaozhimen.club/content/images/2020/12/4686A053-2E05-417E-8BB5-8470FBBC9D3E.png" :size="150" />
        <p class="title">众妙之门</p>
        <Menu />
        <Contact />
        <p class="footer">© 2021 - 众妙之门 - 蜀ICP备17003103号</p>
    </div>
</template>

<script>
    import Avatar from "@/components/Avatar";
    import Menu from "./Menu";
    import Contact from "./Contact";
    export default {
        components: {
            Avatar,
            Menu,
            Contact
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .siteAside-container {
        background: @dark;
        padding: 20px 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        box-sizing: border-box;
        .avatar-container {
            margin: 0 auto;
        }
        .title {
            color: #fff;
            font-size: 1.2em;
            text-align: center;
        }
        .footer {
            font-size: 12px;
            text-align: center;
        }
    }
</style>