<template>
    <div class="imageLoader-container">
        <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
        <img
            alt=""
            @load="handleLoad"
            :src="src"
            :style="{
                opacity: originOpacity,
                transition: `all ${duration}ms`
            }"
        />
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                default: 2000,
            },
        },
        data() {
            return {
                originLoaded: false,
                everythingDone: false,
            };
        },
        computed: {
            originOpacity() {
                return this.originLoaded ? 1 : 0;
            },
        },
        methods: {
            handleLoad() {
                this.originLoaded = true;
                setTimeout(()=>{
                    this.everythingDone = true;
                    this.$emit("load");
                }, this.duration);
            }
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/mixin.less";
    .imageLoader-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img {
            .self-fill();
            object-fit: cover;
        }
        .placeholder {
            z-index: 999;
            filter: blur(6px);
        }
    }
</style>
