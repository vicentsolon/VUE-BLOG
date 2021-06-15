<template>
    <div class="pager-container">
        <a @click="handleClick(1)" :class="{disabled: current === 1}">|&lt;&lt;</a>
        <a @click="handleClick(current - 1)" :class="{disabled: current === 1}">&lt;&lt;</a>
        <a @click="handleClick(item)" v-for="(item, index) in numbers" :key="index" :class="{active: item ===current}">{{ item }}</a>
        <a @click="handleClick(current + 1)" :class="{disabled: current === pageNumber}">&gt;&gt;</a>
        <a @click="handleClick(pageNumber)" :class="{disabled: current === pageNumber}">&gt;&gt;|</a>
    </div>
</template>

<script>
    export default {
        props: {
            current: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 301
            },
            limit: {
                type: Number,
                default: 10
            },
            visibleNumber: {
                type: Number,
                default: 10
            }
        },
        computed: {
            pageNumber() {
                return Math.ceil(this.total / this.visibleNumber);
            },
            visibleMin() {
                let min = this.current - Math.floor(this.visibleNumber / 2);
                if (min < 1) {
                    min = 1
                }
                return min;
            },
            visibleMax() {
                let max = this.visibleMin + this.visibleNumber - 1;
                if (max > this.pageNumber) {
                    max = this.pageNumber;
                }
                return max;
            },
            numbers() {
                const arr = [];
                for (let i = this.visibleMin; i <= this.visibleMax; i ++) {
                    arr.push(i);
                }
                return arr;
            }
        },
        methods: {
            handleClick(newPage) {
                if (newPage === this.current || newPage < 1 || newPage > this.pageNumber) {
                    return;
                }
                this.$emit("pageChange", newPage);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .pager-container {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        a {
            margin: 0 6px;
            cursor: pointer;
            color: @primary;
            &.active {
                font-weight: bold;
                color: @words;
                cursor: text;
            }
            &.disabled {
                cursor: not-allowed;
                color: @lightWords;
            }
        }
    }
</style>