// 公共代码
// 获取远程数据
export default function(defaultDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false
        },
    }
}