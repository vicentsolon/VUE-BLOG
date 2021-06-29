<template>
    <ul class="rightList-container">
        <li v-for="(item, i) in list" :key="i" >
            <span @click="handleClick(item)" :class="{ active: item.isSelect}">
                {{ item.name }}
            </span>
            <RightList @select="handleClick" :list="item.children" />
        </li>
    </ul>
</template>

<script>
    export default {
        name: "RightList",
        props: ["list"],
        methods: {
            handleClick(item) {
                this.$emit("select", item);
            }
        },
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .rightList-container {
        list-style: none;
        padding: 0;
        margin-left: 1em;
        li {
            min-height: 40px;
            line-height: 40px;
            cursor: pointer;
            .active {
                color: @warn;
                font-weight: bold; 
            }
        }
    }
</style>