<template>
    <div class="home-container" ref="container" @wheel="handleWheel">
        <ul class="carousel-container" :style="{marginTop}" @transitionend="handleTransitionEnd">
            <li v-for="item in banners" :key="item.id">
                <CarouselItem :carousel="item" />
            </li>
        </ul>
        <div class="icon icon-up" @click="switchTo(index - 1)" v-show="index >= 1">
            <Icon type="arrowUp" />
        </div>
        <div class="icon icon-down" @click="switchTo(index + 1)" v-show="index < banners.length - 1">
            <Icon type="arrowDown" />
        </div>
        <ul class="indicator">
            <li v-for="(item, i) in banners" :key="item.id" :class="{ active: i === index}" @click="switchTo(i)"></li>
        </ul>
    </div>
</template>

<script>
    import { getBanners } from "@/api/banner";
    import CarouselItem from "./CarouselItem.vue";
    import Icon from "@/components/Icon";
    export default {
        components: {
            CarouselItem,
            Icon,
        },
        data() {
            return {
                banners: [],
                index: 0,
                containerHeight: 0,
                switching: false
            };
        },
        async created() {
            this.banners = await getBanners();
        },
        mounted() {
            this.containerHeight = this.$refs.container.clientHeight;
            window.addEventListener("resize", this.handleResize);
        },
        computed: {
            marginTop() {
                return -this.index * this.containerHeight + "px";
            },
        },
        destroyed() {
            window.removeEventListener("resize", this.handleResize);
        },
        methods: {
            switchTo(i) {
                this.index = i;
            },
            handleWheel(e) {
                if (this.switching) {
                    return;
                }
                if (e.deltaY > 0 && this.index < this.banners.length - 1) {
                    this.index ++;
                    this.switching = true;
                }
                if (e.deltaY < 0 && this.index > 0) {
                    this.index --;
                    this.switching = true;
                }
            },
            handleTransitionEnd() {
                this.switching = false;
            },
            handleResize() {
                this.containerHeight = this.$refs.container.clientHeight;
            }
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    @import "~@/styles/mixin.less";
    .home-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
    }
    .carousel-container {
        width: 100%;
        height: 100%;
        transition: 500ms;
        li {
            width: 100%;
            height: 100%;
        }
    }
    .icon {
        font-size: 30px;
        color: @gray;
        .self-center();
        cursor: pointer;
        transform: translateX(-50%);
        &.icon-up {
            top: 25px;
            animation: jump-up 2s infinite;
        }
        &.icon-down {
            top: auto;
            bottom: 25px;
            animation: jump-down 2s infinite;
        }
        @keyframes jump-up {
            0% {
                transform: translate(-50%, 5px);
            }
            50% {
                transform: translate(-50%, -5px);
            }
            100% {
                transform: translate(-50%, 5px);
            }
        }
        @keyframes jump-down {
            0% {
                transform: translate(-50%, -5px);
            }
            50% {
                transform: translate(-50%, 5px);
            }
            100% {
                transform: translate(-50%, -5px);
            }
        }
    }
    .indicator {
        .self-center();
        transform: translateY(-50%);
        left: auto;
        right: 30px;
        li {
            width: 7px;
            height: 7px;
            border: 1px solid #fff;
            border-radius: 50%;
            margin-bottom: 10px;
            cursor: pointer;
            background: @words;
            &.active {
                background: #fff;
            }
        }
    }
</style>
