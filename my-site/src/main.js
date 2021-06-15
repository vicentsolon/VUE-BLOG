import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"
import VueRouter from "vue-router";

import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        { name: "Home", path: "/", component: Home },
        { name: "Blog", path: "/blog", component: Blog },
        { name: "About", path: "/about", component: About },
        { name: "Project", path: "/project", component: Project },
        { name: "Message", path: "/message", component: Message }
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
