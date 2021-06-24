<template>
    <div class="carouselItem-container" ref="container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
        <div class="carousel-img" ref="image" :style="imagePosition">
            <ImageLoader @load="showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" />
        </div>
        <div class="title" ref="title">{{ carousel.title }}</div>
        <div class="desc" ref="desc">{{ carousel.description }}</div>
    </div>
</template>

<script>
    import ImageLoader from "@/components/ImageLoader";
    export default {
        props: ["carousel"],
        components: {
            ImageLoader,
        },
        data() {
            return {
                titleWidth: 0,
                descWidth: 0,
                containerSize: null, // 外层容器的尺寸
                innerSize: null, // 里层图片的尺寸
                mouseX: 0, // 鼠标的横坐标
                mouseY: 0 // 鼠标的纵坐标
            }
        },
        mounted() {
            this.titleWidth = this.$refs.title.clientWidth;
            this.descWidth = this.$refs.desc.clientWidth;

            this.setSize();

            this.mouseX = this.center.x;
            this.mouseY = this.center.y;

            window.addEventListener("resize", this.setSize);
        },
        destroyed() {
            window.removeEventListener("resize", this.setSize);
        },
        computed: {
            imagePosition() {
                if (!this.containerSize || !this.innerSize) {
                    return;
                }
                const extraWidth = this.innerSize.width - this.containerSize.width;
                const extraHight = this.innerSize.height - this.containerSize.height;
                const left = (-extraWidth / this.containerSize.width) * this.mouseX;
                const top = (-extraHight / this.containerSize.height) * this.mouseY;
                return {
                    transform: `translate(${left}px, ${top}px)`
                }
            },
            center() {
                return {
                    x: this.$refs.container.clientWidth / 2,
                    y: this.$refs.container.clientHeight / 2
                }
            }
        },
        methods: {
            showWords() {
                this.$refs.title.style.opacity = 1;
                this.$refs.title.style.width = 0;
                // 强行渲染，reflow
                this.$refs.title.clientWidth;
                this.$refs.title.style.transition = "1s";
                this.$refs.title.style.width = this.titleWidth + "px";

                this.$refs.desc.style.opacity = 1;
                this.$refs.desc.style.width = 0;
                // 强行渲染，reflow
                this.$refs.desc.clientWidth;
                this.$refs.desc.style.transition = "2s 1s";
                this.$refs.desc.style.width = this.descWidth + "px";
            },
            handleMouseMove(e){
                const rect = this.$refs.container.getBoundingClientRect();
                this.mouseX = e.clientX - rect.left;
                this.mouseY = e.clientY - rect.top;
            },
            handleMouseLeave() {
                this.mouseX = this.center.x;
                this.mouseY = this.center.y;
            },
            setSize() {
                this.containerSize = {
                    width: this.$refs.container.clientWidth,
                    height: this.$refs.container.clientHeight
                }

                this.innerSize = {
                    width: this.$refs.image.clientWidth,
                    height: this.$refs.image.clientHeight
                }
            }
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .carouselItem-container {
        width: 100%;
        height: 100%;
        color: #fff;
        position: relative;
        overflow: hidden;
    }
    .carousel-img {
        width: 110%;
        height: 110%;
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.3s;
    }
    .title,
    .desc {
        position: absolute;
        left: 50px;
        letter-spacing: 4px;
        color: #fff;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
            0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        overflow: hidden;
        opacity: 0;
    }
    .title {
        top: calc(50% - 60px);
        font-size: 2em;
    }
    .desc {
        top: 50%;
        font-size: 1.2em;
        color: lighten(@gray, 20%);
    }
</style>
