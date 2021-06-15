<template>
    <nav class="menu-container">
        <a v-for="item in item" :key="item.link" :href="item.link" :class="{selected: isSelected(item)}">
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.title }}</span>
        </a>
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
                item: [
                    {
                        link: "/",
                        icon: "home",
                        title: "首页",
                    },
                    {
                        link: "/blog",
                        icon: "blog",
                        title: "文章",
                        startWith: true
                    },
                    {
                        link: "/about",
                        icon: "about",
                        title: "关于我",
                    },
                    {
                        link: "/project",
                        icon: "code",
                        title: "项目&效果",
                    },
                    {
                        link: "/message",
                        icon: "chat",
                        title: "留言板",
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
            }
        }
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
