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

   <img src="http://mdrs.yuanjin.tech/img/20201113134557.png" alt="image-20201113134557175" style="zoom:30%;" />

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

### 安装路由插件
```shell
# 路由插件的使用
npm i vue-router
```

### 基本使用
```js
import Vue from 'vue';
import App from "./App.vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter); // Vue.use(插件)  在Vue中安装插件

// 路由配置
const router = new VueRouter({
  routes: [ // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    {name: "Foo", path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
    {name: "Bar", path: '/bar', component: Bar }
  ],
  mode: "history", // 路由模式
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```

```html
<!-- App.vue -->
<div class="container">
  <div>
    <!-- 公共区域 -->
  </div>
  <div>
    <!-- 页面区域 -->
    <!-- vue-router 匹配到的组件会渲染到这里 -->
    <RouterView />
  </div>
</div>
```

### 路由模式
路由模式决定了：
   1. 路由从哪里获取访问路径
   2. 路由如何改变访问路径

`vue-router`提供了三种路由模式：
   1. hash：默认值。路由从浏览器地址栏中的hash部分获取路径，改变路径也是改变的hash部分。该模式兼容性最好。
   2. history：路由从浏览器地址栏的`location.pathname`中获取路径，改变路径使用的H5的`history api`。该模式可以让地址栏最友好，但是需要浏览器支持`history api`
   3. abstract：路由从内存中获取路径，改变路径也只是改动内存中的值。这种模式通常应用到非浏览器环境中。

### 导航

`vue-router`提供了全局的组件`RouterLink`，它的渲染结果是一个`a`元素

```html
<RouterLink to="/blog">文章</RouterLink>
<!-- mode:hash 生成 -->
<a href="#/blog">文章</a>
<!-- mode:history 生成 -->
<!-- 为了避免刷新页面，vue-router实际上为它添加了点击事件，并阻止了默认行为，在事件内部使用hitory api更改路径 -->
<a href="/blog">文章</a>
```

### 激活状态

默认情况下，`vue-router`会用 **当前路径** 匹配 **导航路径** ：

- 如果当前路径是以导航路径开头，则算作匹配，会为导航的a元素添加类名`router-link-active`
- 如果当前路径完全等于导航路径，则算作精确匹配，会为导航的a元素添加类名`router-link-exact-active`

> 可以为组件`RouterLink`添加bool属性`exact`，将匹配规则改为：必须要精确匹配才能添加匹配类名`router-link-active`
> 另外，可以通过`active-class`属性更改匹配的类名，通过`exact-active-class`更改精确匹配的类名

### 命名路由

使用命名路由可以解除系统与路径之间的耦合

```js
// 路由配置
const router = new VueRouter({
  routes: [ // 路由规则
    // 当匹配到路径 /foo 时，渲染 Foo 组件
    { name:"foo", path: '/foo', component: Foo },
    // 当匹配到路径 /bar 时，渲染 Bar 组件
    { name:"bar", path: '/bar', component: Bar }
  ]
})

```

```html
<!-- 向to属性传递路由信息对象 RouterLink会根据你传递的信息以及路由配置生成对应的路径 -->
<RouterLink :to="{ name:'foo' }">go to foo</RouterLink>
```

## 弹出消息
### 使用css module

需要将样式文件命名为`xxx.module.ooo`

`xxx`为文件名

`ooo`为样式文件后缀名，可以是`css`、`less`

### 得到组件渲染的Dom

```js
  /**
    获取某个组件渲染的Dom根元素
  */
function getComponentRootDom(comp, props){
  const vm = new Vue({
    render: h => h(comp, {props})
  })
  vm.$mount();
  return vm.$el;
}
```

### 扩展vue实例

<img src="http://mdrs.yuanjin.tech/img/20201203172154.jpg" alt="扩展vue实例" style="zoom:33%;" />

### ref

```html
<template>
	<div>
    <p ref="para">some paragraph</p>
    <ChildComp ref="comp" />
    <button @click="handleClick">查看所有引用</button>
  </div>
</template>

<script>
  import ChildComp from "./ChildComp"
	export default {
    components:{
      ChildComp
    },
    methods:{
      handleClick(){
        // 获取持有的所有引用
        console.log(this.$refs);
        /*
        {
        	para: p元素（原生DOM）,
        	comp: ChildComp的组件实例
        }
        */
      }
    }
  }
</script>
```


> 通过`ref`可以直接操作`dom`元素，甚至可能直接改动子组件，这些都不符合`vue`的设计理念。
>
> 除非迫不得已，否则不要使用`ref`

## 获取远程数据
1. 前后端分离
2. 开发环境有跨域问题
3. 生产环境一般没有跨域问题
4. 解决开发环境的跨域问题 --> Mock --> 构建生产环镜下的真实数据响应

> vue cli: https://cli.vuejs.org/zh/
>
> axios: https://github.com/axios/axios
>
> mockjs：http://mockjs.com/

## 组件生命周期

<img src="http://mdrs.yuanjin.tech/img/20200908051939.png" alt="image-20200908051939745" style="zoom:50%;" />

<img src="http://mdrs.yuanjin.tech/img/20201206132819.png" alt="image-20201206132819263" style="zoom:50%;" />

## 自定义指令

### 全局注册
```js
// mydirective 指令名称
Vue.directive("mydirective", {
  // 指令配置
});
```
之后就能在所有组件中使用了

### 局部注册
在组件内进行注册
```js
export defualt {
  directives: {
    // mydirective 指令名称
    mydirective: {
      // 指令配置
    }
  }
}
```

### 指令配置对象

没有配置的指令，就像没有配置的组件一样，毫无意义

`vue`支持在指令中配置一些**钩子函数**，在适当的时机，`vue`会调用这些钩子函数并传入适当的参数，以便开发者完成自己想做的事情。

常用的钩子函数：

```js
// 指令配置对象
{
  bind(){
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  },
  inserted(){
    // 被绑定元素插入父节点时调用。
  },
  update(){
    // 所在组件的 VNode 更新时调用
  }
}
```

### 配置简化

比较多的时候，在配置自定义指令时，我们都会配置两个钩子函数

```js
{
  bind(el, bingding){
    
  },
  update(el, bingding){
    
  }
}
```

这样，在元素绑定和更新时，都能运行到钩子函数

如果这两个钩子函数实现的功能相同，可以直接把指令配置简化为一个单独的函数：

```js
function(el, bingding){
  // 该函数会被同时设置到bind和update中
}
```

> 利用上述知识，可满足大部分自定义指令的需求
>
> 更多的自定义指令用法见[官网](https://cn.vuejs.org/v2/guide/custom-directive.html)

## 混入
有的时候，许多组件有着类似的功能，这些功能代码分散在组件不同的配置中。

![image-20210105161811637](http://mdrs.yuanjin.tech/img/20210105161811.png)

于是，我们可以把这些配置代码抽离出来，利用**混入**融合到组件中。

![image-20210105162109015](http://mdrs.yuanjin.tech/img/20210105162109.png)

具体的做法非常简单：

```js
// 抽离的公共代码
const common = {
  data(){
    return {
      a: 1,
      b: 2
    }
  },
  created(){
    console.log("common created");
  },
  computed:{
    sum(){
      return this.a + this.b;
    }
  }
}

/**
 * 使用comp1，将会得到：
 * common created
 * comp1 created 1 2 3
 */
const comp1 = {
  mixins: [common] // 之所以是数组，是因为可以混入多个配置代码
  created(){
    console.log("comp1 created", this.a, this.b, this.sum);
  }
}
```

混入并不复杂，更多细节参见[官网](https://cn.vuejs.org/v2/guide/mixins.html)

## 组件递归
利用组件属性**name**可实现组件递归