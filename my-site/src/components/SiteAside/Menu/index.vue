<template>
    <nav class="menu-container">
        <RouterLink
            v-for="item in items"
            :key="item.link"
            :to="{ name: item.name }"
            :exact="item.exact"
            active-class="selected"
            exact-active-class=""
        >
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.title }}</span>
        </RouterLink>
    </nav>
</template>

<script>
    import Icon from "@/components/Icon";
    export default {
        components: {
            Icon,
        },
        data() {
            return {
                items: [
                    {
                        name: "Home",
                        icon: "home",
                        title: "首页",
                        exact: true
                    },
                    {
                        name: "Blog",
                        icon: "blog",
                        title: "文章",
                        exact: false
                    },
                    {
                        name: "About",
                        icon: "about",
                        title: "关于我",
                        exact: true
                    },
                    {
                        name: "Project",
                        icon: "code",
                        title: "项目&效果",
                        exact: true
                    },
                    {
                        name: "Message",
                        icon: "chat",
                        title: "留言板",
                        exact: true
                    },
                ],
            };
        },
        methods: {
            isSelected(item) {
                let link = item.link.toLowerCase();
                let curPathName = location.pathname.toLowerCase();
                if (item.startWith) {
                    return curPathName.startsWith(link);
                } else {
                    return link === curPathName;
                }
            },
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .menu-container {
        color: @gray;
        margin: 24px 0;
        a {
            display: block;
            padding: 0 50px;
            display: flex;
            align-content: center;
            height: 45px;
            line-height: 45px;
            .icon {
                width: 35px;
                font-size: 24px;
            }
            &:hover {
                color: #fff;
            }
            &.selected {
                background: darken(@words, 3%);
            }
        }
    }
</style>
