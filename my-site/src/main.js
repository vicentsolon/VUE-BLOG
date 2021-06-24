// 入口文件
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "./router";
// 模拟数据
import "./mock";
import "./api/banner";
// 弹出消息
import showMessage from './utils/showMessage';
Vue.prototype.$showMessage = showMessage;

// 全局注册自定义指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
