# onLaunch 函数中的异步方法处理

## 问题

功能需求，在进入 App 页时调用接口获取一些数据，然后要在活动页中使用。

因为小程序本体只是用来推广活动的，因此不产生跳转等问题，会直接打开活动页。

但是当活动页加载完成，`onLaunch` 函数内，接口调用的数据却获取不到。

经查询，发现这应该是 `uni-app` 框架本身的问题，在 `onLaunch` 钩子内如果调用异步，数据加载顺序就会发生改变。（避坑 🙃）

也就是说在 `onLaunch` 钩子还在执行异步数据获取的时候，页面的 `onLoad` 钩子就已经开始执行了。所以获取不到需要的数据体。

## 解决方法

### 可以利用 `Promise` 来解决这个异步数据异常问题。

1. 在 `main.js` 中增加以下代码：

```js
Vue.prototype.$onLaunched = new Promise(resolve => {
  Vue.prototype.$isResolve = resolve
})
```

注册一个 `Promise` 事件，阻塞页面加载，一会调用。

2. 在 `App.vue` 的 `onLaunch` 的异步请求中增加 `Promise` 的数据返回。

```js
onLaunch: async function() {
	let {
		page_status
	} = await this.$u.api.pagesSwitch()
	console.log(123)
	this.$isResolve() // 这是重点！！！
},
```

执行完异步请求之后，执行 `resolve` 可以让 `Promise` 正常结束

3. 在页面 `onLoad` 钩子中调用 `Promise` 暂停业务代码继续执行，直到 `App` 中的异步请求完成，数据体返回。

```js
async onLoad(option) {
	await this.$onLaunched // 这是重点！！！
	console.log(456)
	/**
	 * 业务代码
	 */
}
```

### 如果小程序中有多个页面都需要用到数据，这个方法就有些繁琐。

可以使用 `Vue.mixin` 进行全局混入执行操作，每个页面在没有获取到数据之前都不会自主加载成功。

1. 新建一个 `my_mixin.js` 文件，用于写入混入方法。

```js
module.exports = {
  async onLoad() {
    await this.$onLaunched // 这是重点！！！
    console.log(456)
    if (this.getDataList) {
      this.getDataList() // 这里执行每个页面特定方法
    }
  }
}
```

2. 在 `main.js` 中注册全局混入文件。

```js
import myMixin from './common/my_mixin.js'
Vue.mixin(myMixin)
```

事件注册完成，正常 `console` 显示流程应该是 `123 456` 如果显示顺序不对，证明方法并没有生效。

<br/>

方法参考自：[瞭月](https://www.lervor.com/archives/128/)，感谢解决我遇到的问题。愿人间没有 BUG 🤡。
