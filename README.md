## 简介
这是一个基于Vue构建的单页应用（SFC），项目内容为个人博客。

## SFC
单文件组件，Single File Component，即一个文件就包含了一个组件所需的全部代码

## git基本使用
- git init
- git add .
- git commit -m "first commit"
- git remote add origin [SSH-Adress]
- git push origin master

## 组件开发
组件的出现是为了实现以下两个目标：
1. 降低整体复杂度，提升代码的可读性和可维护性
2. 提升局部代码的可复用性

绝大部分情况下，一个组件就是页面中某个区域，组件包含该区域的：

- 功能（JS代码）

- 内容（模板代码）

- 样式（CSS代码）

  > 要在组件中包含样式，需要构建工具的支撑

## 组件事件

   <img src="http://mdrs.yuanjin.tech/img/20201113134557.png" alt="image-20201113134557175" style="zoom:40%;" />

   抛出事件：子组件在某个时候发生了一件事，但自身无法处理，于是通过事件的方式通知父组件处理

   事件参数：子组件抛出事件时，传递给父组件的数据

   注册事件：父组件申明，当子组件发生某件事的时候，自身将做出一些处理

## 插槽
   在某些组件的模板中，有一部分区域需要父组件来指定

   > 具名插槽
   > 如果某个组件中需要父元素传递多个区域的内容，也就意味着需要提供多个插槽
   > 为了避免冲突，就需要给不同的插槽赋予不同的名字

## 路由
  1. **如何根据地址中的路径选择不同的组件？**
  2. **把选择的组件放到哪个位置？**
  3. **如何无刷新的切换组件？**

```shell
# 路由插件的使用
npm i vue-router
```

```js
import Vue from 'vue';
import App from "./App.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Vue.use(插件)  在Vue中安装插件

// 路由配置
const router = new VueRouter({
  routes: [ // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    { path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
  	{ path: '/bar', component: Bar }
  ]
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```




