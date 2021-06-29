<template>
    <div class="test-container">
        <RightList @select="handleSelect" :list="list" />
    </div>
</template>

<script>
    import RightList from "./RightList.vue";
    export default {
        components: {
            RightList,
        },
        data() {
            return {
                list: [
                    { name: "a", isSelect: false },
                    { name: "b", isSelect: false },
                    {
                        name: "c",
                        isSelect: false,
                        children: [
                            { name: "c-1", isSelect: false },
                            {
                                name: "c-2",
                                isSelect: false,
                                children: [
                                    { name: "c-2-1", isSelect: true },
                                    { name: "c-2-2", isSelect: false },
                                    { name: "c-2-3", isSelect: false },
                                    { name: "c-2-4", isSelect: false },
                                ],
                            },
                            { name: "c-3", isSelect: false },
                            { name: "c-4", isSelect: false },
                        ],
                    },
                    { name: "d", isSelect: false },
                ],
            };
        },
        methods: {
            handleSelect(item) {
                item.isSelect = true;
                console.log(item);
            }
        },
    };
</script>

<style lang="less" scoped></style>
