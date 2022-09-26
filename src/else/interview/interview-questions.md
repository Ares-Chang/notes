# '面试题'

## 数据排序并去重(es6)

```js
;[...new Set(arr)].sort((a, b) => a - b)
```

## 如何理解 MVVM 原理？

简单理解就是通过数据劫持机制来观察数据是否被变化，如果变化更新视图，来形成一个数据双向绑定的效果

## 响应式数据的原理是什么？

Vue 是一个数据驱动视图的框架，它的响应数据主要依赖 `Object.defineProperty()` 这个方法进行数据劫持。这是个 ES5 里面提供的方法，函数内有 `get()` 和 `set()` 两个方法，当访问的时候，自动调用 get ，赋值的时候自动调用 set ，但是这个方法是 ES5 中一个无法 shim 的特性，所以不支持 IE8 及以下的浏览器

ES6 也提供了一个方法 Proxy ，这个方法也可以实现，效果比 `Object.defineProperty()` 更好

## 组件中的 data 为什么是一个函数?

因为 JS 本身特质的问题，如果 data 不是函数而是一个对象的话，两个实例都引用一个对象，只要修改了其中一个，另外一个也会改变，为了避免这个问题，data 设置成函数，拥有自己的作用域

## Vue 组件如何通信？

Vue 组件通信分为父子传值 props ,子父传值 $emit ,兄弟传值 eventbus ,或者使用 Vuex 做数据通信

## 什么是作用域插槽？

官方文档解释：有的时候你希望提供的组件带有一个可从子组件获取数据的可复用的插槽。

## 简述 Vue 中 diff 算法原理？

> 关于 diff 算法：diff 算法即是差异查找算法，对比两个 dom 树不同点，相同的复用，不同的重新渲染

## v-for 中为什么要用 key ?

为了避免重复渲染，造成不必要的性能消耗

`v-for` 更新已渲染元素列表时，默认采用`就地复用`策略，列表数据修改的时候，他会根据 key 值去判断某个值是否修改，如果修改，则重新渲染这一项，否则复用之前的元素。

## 什么是虚拟 DOM

直接操作 DOM 性能消耗太大，所以通过 JS 实现了一个与 DOM 树对应的虚拟 dom 对象，他的出现解决了直接操作 DOM 的性能消耗，避免了大量无谓的计算量

## css-loader 和 style-loader 有什么区别

- css-loader 是处理 css 文件的

- style-loader 把 js 中 import 导入的样式文件代码，打包到 js 文件中，运行 js 文件时，将样式自动插入到`<style>`标签中

- mini-css-extract-plugin 把 js 中 import 导入的样式文件代码，打包成一个实际的 css 文件，结合 html-webpack-plugin，在 dist/index.html 中以 link 插入 css 文件；默认将 js 中 import 的多个 css 文件，打包时合成一个

## http 协议的特点

无状态，无连接

## DOM 事件模型

冒泡和捕获

## DOM 事件流

冒泡阶段 > 目标阶段 > 捕获阶段

## H5 新特性

出现了一些具有语义性的标签 header footer nav article

video audio canvas

新的表单元素 email url time date

## C3 中的伪类

- first-of-type
- last-of-type
- only-child
- falst-child
- nth-child
- last-child

## C3 中唯一引入的伪元素是

:selection 被用户高亮的部分

## Vue 生命周期

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

## v-if 和 v-show 的区别

v-show 和 v-if 都是用来显示隐藏元素，v-if 还有一个 v-else 配合使用，两者达到的效果都一样，性能方面却有很大的区别。 v-if 绝对是更消耗性能的，因为 v-if 在显示隐藏过程中有 DOM 的添加和删除，v-show 就简单多了，只是操作 css 。

## axios 和 ajax 的区别

axios 是通过 promise 封装 XML 达到效果，ajax 就一种单纯的异步请求技术

## ajax 的缺点

- 存在安全问题
- 对搜索引擎支持较弱
- 不是很好的支持移动设备

## ajax 有什么数据类型格式

json 和字符串, XML

## 什么是跨域

跨域就是没有遵守同源策略进行请求，协议，域名，端口三者不同，就是一个域下的文件要去请求另外一个域下的文件

## 解决跨域的方式有哪几种？

jsonp：常用方法，通过动态添加 script 标签来达到跨域的效果

CORS：在发送请求的时候，添加一个特殊的请求头，来达成效果

服务端跨域：在前后端分离的项目中可以借助服务器实现跨域，具体做法是：前端向本地服务器发送请求，本地服务器代替前端再向 api 服务器接口发送请求进行服务器间通信，本地服务器其实就是个中转站的角色，再将响应的数据返回给前端，下面用 node.js 做一个示例

postmessage 跨域，H5 新添加的一种方法，类似于 jsonp ，动态添加 iframe 标签来达到效果

## 你用过什么后台语言,java,基本类型有哪几个

Java 基本类型共有八种，基本类型可以分为三类，字符类型 char，布尔类型 boolean 以及数值类型 byte、short、int、long、float、double。

## element-ui 用的哪个版本

element-ui: ^2.13.0

vant: ^2.4.1

## bootstrap 用过吗，按钮有那几个样式

默认，成功，提交，危险，警告

## ajax 中信息是如何在浏览器和服务器之间进行传递的

Ajax 与服务端是通过字符串或者 xml 进行交互的

## line-height: 15px 150% 1.5 1.5em

有单位时，子元素继承了父元素计算得出的行距；无单位时继承了系数，子元素会分别计算各自行距（推荐使用）。

## ES6 提供了什么

`let` `const` `() => {}` 有了块级作用域 解构赋值 模板字符串

## promise 和 ajax 有什么区别

ajax 是异步的。promise 是同步的，并且解决了 ajax 回调函数造成的回调地狱问题

## 什么是闭包

简单点理解就是，一个函数内可以访问另外一个函数内的私有变量，但是大量使用会造成内存泄漏，并不是很友好

## 怎么解决内存泄漏

尽量少使用闭包，js 自己有垃圾回收机制

## js 如何实现一个栈

数组的添加和删除

## 如何删除一个 DOM 节点

removeChild

innerHTML

## 前端开发流程

开会，敲定项目，分配任务，开发，抽取剥离，自测联调，提交验收，交接说明，维护

## Vue 的优点

MVVM 数据双向绑定，数据驱动视图，指令化操作,组件化，可复用

## JQuery 和 JQuery-UI 的区别

jquery-ui 只是 jquery 的一个插件，是一个 UI 框架，
jQuery 本身注重于后台，没有漂亮的界面，而 jQueryUI 则补充了前者的不足

## 前端的性能优化，

减少请求，合并小的文件，精灵图的使用

## 雪碧图的原理

为了减少 http 请求，把多张小的照片，组合成一张，可以有效减少请求次数

## 定位有哪几种

绝对定位，相对定位，静态定位，固定定位

## node 使用多吗，SQL 增删改查

insert value

delete form

update set

select form

## 什么是面向对象

我个人的理解，面向对象开发就是，把一个任务看作一个人，这个人他会干什么，有什么，放在程序里就是，把这个任务看成一个对象，对象有什么属性，有什么方法，这些，属性方法都是可以复用的，这就很友好

## vue 第一次渲染会触发哪几个钩子函数

beforeCreate，created，beforeMount，mounted

## DOM 渲染在哪个阶段完成

mounted

## 什么是 DOM 什么是 BOM

- DOM 是文档对象模型
- BOM 是浏览器对象模型

都提供了一些供开发者使用的 API

## 说一下 keep-alive

keep-alive 是 vue 中提供的动态缓存机制，可以缓存设置了的页面不被销毁

## git 常用命令有哪些

git add

git commit

git log

git status

git push

git branch

## call 和 apply 的区别

两者都可以改变 this 指向，但是传递参数的形式不一向，
第一个参数都是指向谁，但是 apply 的第二个参数是个数组，参数放在数组中

## 什么是事件委托

就是本来该自己干的事情，但是委托给了别人帮忙执行，

## 如何阻止默认行为

e.preventDefault

e.stopPropageation

## 如何让盒子往右平移 200 像素，在放大 2 倍

transform:translate 平移
transform:scale 放大

## 解决移动端 300ms 的延迟

- 禁用缩放功能

- 更改默认视口宽度

- 使用 touch-action 事件来解决这个问题

## new 事件经历了什么

1.开辟一个空间，this 指向这个空间

2.执行 this.xx = xx

3.隐式的返回 this

## ES6 中箭头函数和普通函数有什么区别

更加简洁高效

箭头函数中没有 this

没有 arguments

不能作为构造函数使用

没有原型 prototype

## 同步和异步的区别

同步会堵塞下面代码的运行

异步不会产生这样的问题

## 渐进式框架的理解

Vue 就是渐进式开发

我的理解是：渐进式开发，代表就是组件化，它本身提供了很多组件，插件，你可以引入一两个组件来使用，也可以使用提供的全家桶来开发项目，是充满选择性的。

## Vue 和原生 JS 的区别

原生 JS 是直接操作 DOM 元素的

但是 Vue 的本意是不操作 DOM 元素，只改变数据，由数据驱动视图的。

## ES5 和 ES6 的区别是什么

ES6 是 ES5 的进阶版本，代码行为更为严谨

提供了 let 和 const 定义变量，可以产生作用域

## promise 是同步执行的还是异步执行的

是同步执行的但是 .then() 方法是异步执行的

## promise 有哪几种状态

三种状态

执行中
已成功
已失败

## forEach For in 和 for of 的区别

forEach 是 ES6 提交的用来遍历数组的一个方法，但是中途不能停止

`for in` 是用来遍历对象的，和 `for of` 的区别是，`for of`,可以用来遍历字符串

## 你知道 Symbol 吗？

这是个 Es6 新增的基本类型

Symbol 的诞生代表着独一无二，是为了防止对象属性名冲突而产生的，是通过 symbol 函数产生的，但是不能使用 new 否则会报错的

## const 的变量可以改变

const 不能保证 object, array 等类型的数据不可改变

## node 的优点

单线程

异步 I/O，提升并发量

事件驱动

## 清除浮动有哪几种

chear:both

BFC：overflow:hidden

## Css 引入的方式有哪几种

内联，内嵌，外联，导入（@imponent）

## 优雅降级与渐进增强

因为高级的 css 会有兼容性问题，所以为了全部兼容浏览器，有了优雅降级与渐进增强，优雅降级是由繁入简，渐进增强是由简入繁，先实现最简单的效果，然后在增加特效

## JS 中那些数据返回 false

0，null，undefined,false,""

## typeof 和 instanceof 的区别

typeof 是个符号，可以检测数据是什么类型的

instanceof 是个关键字，可以检测这是不是个对象，是个什么类型的对象

## 深拷贝，浅拷贝

浅拷贝只能拷贝一层数据，比如一层数据是个对象，里面还有个对象，就拷贝不到，但是深拷贝是利用递归原理实现的，可以拷贝到深层次内容

浅拷贝是拷贝的对象的属性引用，不是整个属性，但是深拷贝是把整个对象拷贝，再次操作不会对原对象产生任何影响

## export 和 export default 的区别

两者都是用来导出对象使用的,导出对象可以使用 import 来引入，但是在一个文件中 export 和 import 可以使用多次，但是 export default 只能使用一次

通过 export 方式导入，导入时必须要加 {}, export default 则不需要

export 能直接导出变量表达式，export default 不行。

## require 和 import 的区别

require 是 commonJS 提供的规范，动态加载

import 是 ES6 新规范，静态加载，导入的方法更多，但是需要借用 babel 模块解析

现 node.js 对 ES6 支持不够强，依旧需要使用 require 导入

## 单向数据流 && 双向数据流

React 采用的是单向数据流绑定 单向数据指的是组件不会改变接收到的数据，它们只会监听数据的变化，当组件的更新机制触发后，会使用新值重新渲染

Vue 采用的是双向数据流绑定 双向数据指的就是视图和数据绑定，数据改变，视图改变

## on bind live 之间的区别

这三者都是用来绑定事件的，bind 和 live 都已经被 jQuery 弃用，都存在缺陷问题，推荐使用 on 来绑定事件，使事件绑定方式统一。

## 观察者模式

观察者模式就是一种一对多的关系，一个对象同时被多个对象监听，如果当一个对象被修改时，会自动通知他的依赖对象，观察者模式属于行为模式,行为型模式关注的是对象之间的通讯，观察者模式就是观察者和被观察者之间的通讯。
它定义了四种角色: 抽象主题，具体主题，抽象观察者，具体观察者

## active-class 是哪个组件的属性

router-link

## 怎么获取 vue-router 动态参数

$route.params

## vue-router 有哪几种导航钩子

有全局导航钩子和路由独享的钩子

全局：
beforeEach
afterEach

局部：
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave

## Map 和 Set 的区别

Set 因为自身不能重复的特性，多数用来去重使用

Map 是一组键值对的结构，具有极快的查找速度

## $route 和 $router 的区别是什么

`$route` 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。

而 `$router` 是“路由实例”对象包括了路由的跳转方法，钩子函数等。

## 怎么让谷歌支持小于 12px 的文字

可以加谷歌前缀。或者使用 transfrom:scale(0.8) 来进行强制缩放

## 如何解决 vue 修改数据页面不刷新的问题（强制刷新）

可以通过 $set() 方法来主动通知 Vue 你的数据该更新了

## vue-cli 怎么新增自定义指令

通过 directives 属性来绑定自定义指令

## vue-router 两种路由的模式

hash 和 history

## vue 的动态组件怎么注册

:is 属性

## 拖拽的事件

drag 事件 html API

## 数组降维

arr.flat(Infinity) 可以解决这个问题，把多维数组降级为一维数组。

## Class 和 构造函数的区别

- Class 在书写上更倾向于面向对象的写法，更容易阅读和书写，是一种语法糖，
- ES5 的构造函数的原型上的属性和方法可以遍历 ES6 不能够遍历
- ES6 的类必须通过 new 调用，构造函数则可以不用
- Class 不存在变量提升
- ES6 的类没有私有方法和私有属性（正在提议中）
- Class 多了一个静态方法（static）,里面的 this 指向的是类本身，静态方法可以被子类继承
- ES6 的静态属性和静态方法
- ES6 类多了一个 new Target 可以判定 new 的构造函数

## vue 各个组件怎么修改头部 title

使用 vue-meta 插件

## 网络协议分为哪几层

OSI 参考模型将整个网络通信的功能划分为七个层次,它们由低到高分别是物理层(PH)、数据链路层(DL)、网络层(N)、传输层(T)、会话层(S)、表示层(P)、应用层(A)。 每层完成一定的功能，每层都直接为其上层提供服务，并且所有层次都互相支持。

## 怎么检测浏览器的版本

用 `navigator.userAgent` 来获取浏览器信息

## li 与 li 之间有看不见的空白，是什么原因？

把 li 标签转换成行内块就可以了，因为在渲染 html 的时候，会把换行渲染为空格添加到页面中

## Vuex 页面刷新的时候数据丢失怎么解决

vuex 数据存放在内在中，刷新会丢失，放在 localStorage 中就好了，可以通过 `vuex-persistedstate` 插件来解决

## vue-router 和 Vuex 是在什么阶段挂载上去的

都是在 beforeCreate 阶段挂载上去的
