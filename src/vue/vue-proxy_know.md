# 学习了解 Proxy

> 产品经理身旁过，需求变更逃不过。 测试姐姐眯眼笑，今晚 bug 必然多。

据悉 _Vue3.0_ 的正式版将要在本月(8 月)发布，从发布到正式投入到正式项目中，还需要一定的过渡期，但我们不能一直等到 _Vue3_ 正式投入到项目中的时候才去学习，提前学习，让你更快一步掌握 _Vue3.0_ ,升职加薪迎娶白富美就靠它了。不过在学习 _Vue3_ 之前，还需要先了解一下 `Proxy`,它是 _Vue3.0_ 实现数据双向绑定的基础。

## 了解代理模式

### 一个例子

作为一个单身钢铁直男程序员，小王最近逐渐喜欢上了前台小妹，不过呢，他又和前台小妹不熟，所以决定委托与前台小妹比较熟的 `UI` 小姐姐帮忙给自己搭桥引线。小王于是请 `UI` 小姐姐吃了一顿大餐，然后拿出一封情书委托它转交给前台小妹，情书上写的 **`我喜欢你，我想和你睡觉`**，不愧钢铁直男。不过这样写肯定是没戏的， `UI` 小姐姐吃人嘴短，于是帮忙改了情书，改成了 **`我喜欢你，我想和你一起在晨辉的沐浴下起床`**，然后交给了前台小妹。虽然有没有撮合成功不清楚啊，不过这个故事告诉我们，小王活该单身狗。

其实上面就是一个比较典型的代理模式的例子，小王想给前台小妹送情书，因为不熟所以委托 `UI` 小姐姐，`UI` 小姐姐相当于代理人，代替小王完成了送情书的事情。

### 引申

通过上面的例子，我们想想 _Vue_ 的数据响应原理，比如下面这段代码

```js
const xiaowang = {
  love: '我喜欢你，我想和你睡觉'
}
// 送给小姐姐情书
function sendToMyLove(obj) {
  console.log(obj.love)
  return '流氓，滚'
}
console.log(sendToMyLove(xiaowang))
```

如果没有 `UI` 小姐姐代替送情书，显示结局是悲惨的，想想 _Vue2.0_ 的双向绑定，通过

`Object.defineProperty` 来监听的属性 `get`,`set` 方法来实现双向绑定,这个

`Object.defineProperty` 就相当于 `UI` 小姐姐

```js
const xiaowang = {
  loveLetter: '我喜欢你，我想和你睡觉'
}
// UI小姐姐代理
Object.defineProperty(xiaowang, 'love', {
  get() {
    return xiaowang.loveLetter.replace('睡觉', '一起在晨辉的沐浴下起床')
  }
})

// 送给小姐姐情书
function sendToMyLove(obj) {
  console.log(obj.love)
  return '小伙子还挺有诗情画意的么，不过老娘不喜欢，滚'
}
console.log(sendToMyLove(xiaowang))
```

虽然依然是一个悲惨的故事，因为送奔驰的成功率可能会更高一些。但是我们可以看到，通过 `Object.defineproperty` 可以对对象的已有属性进行拦截，然后做一些额外的操作。

### 存在的问题

在 _Vue2.0_ 中，数据双向绑定就是通过 `Object.defineProperty` 去监听对象的每一个属性，然后在 `get`,`set` 方法中通过发布订阅者模式来实现的数据响应，但是存在一定的缺陷，比如只能监听已存在的属性，对于新增删除属性就无能为力了，同时无法监听数组的变化，所以在 _Vue3.0_ 中将其换成了功能更强大的 `Proxy`。

## 了解 Proxy

> `Proxy` 是 `ES6` 新推出的一个特性，可以用它去拦截 `js` 操作的方法，从而对这些方法进行代理操作。

### 用 Proxy 重写上面的例子

比如我们可以通过 `Proxy` 对上面的送情书情节进行重写:

```js
const xiaowang = {
  loveLetter: '我喜欢你，我想和你睡觉'
}
const proxy = new Proxy(xiaowang, {
  get(target, key) {
    if (key === 'loveLetter') {
      return target[key].replace('睡觉', '一起在晨辉的沐浴下起床')
    }
  }
})
// 送给小姐姐情书
function sendToMyLove(obj) {
  console.log(obj.loveLetter)
  return '小伙子还挺有诗情画意的么，不过老娘不喜欢，滚'
}
console.log(sendToMyLove(proxy))
```

### 再看这样一个场景

请分别使用 `Object.defineProperty` 和 `Proxy` 完善下面的代码逻辑.

```js
function observe(obj, callback) {}

const obj = observe(
  {
    name: '子君',
    sex: '男'
  },
  (key, value) => {
    console.log(`属性[${key}]的值被修改为[${value}]`)
  }
)

// 这段代码执行后，输出 属性[name]的值被修改为[妹纸]
obj.name = '妹纸'

// 这段代码执行后，输出 属性[sex]的值被修改为[女]
obj.sex = '女'
```

看了上面的代码，希望大家可以先自行实现以下，下面我们分别用 `Object.defineProperty` 和 `Proxy` 去实现上面的逻辑.

1. 使用 `Object.defineProperty`

```js
/**
 * 请实现这个函数，使下面的代码逻辑正常运行
 * @param {*} obj 对象
 * @param {*} callback 回调函数
 */
function observe(obj, callback) {
  const newObj = {}
  Object.keys(obj).forEach(key => {
    Object.defineProperty(newObj, key, {
      configurable: true,
      enumerable: true,
      get() {
        return obj[key]
      },
      // 当属性的值被修改时，会调用set，这时候就可以在set里面调用回调函数
      set(newVal) {
        obj[key] = newVal
        callback(key, newVal)
      }
    })
  })
  return newObj
}

const obj = observe(
  {
    name: '子君',
    sex: '男'
  },
  (key, value) => {
    console.log(`属性[${key}]的值被修改为[${value}]`)
  }
)

// 这段代码执行后，输出 属性[name]的值被修改为[妹纸]
obj.name = '妹纸'

// 这段代码执行后，输出 属性[sex]的值被修改为[女]
obj.name = '女'
```

2. 使用 `Proxy`

```js
function observe(obj, callback) {
  return new Proxy(obj, {
    get(target, key) {
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      callback(key, value)
    }
  })
}

const obj = observe(
  {
    name: '子君',
    sex: '男'
  },
  (key, value) => {
    console.log(`属性[${key}]的值被修改为[${value}]`)
  }
)

// 这段代码执行后，输出 属性[name]的值被修改为[妹纸]
obj.name = '妹纸'

// 这段代码执行后，输出 属性[sex]的值被修改为[女]
obj.name = '女'
```

通过上面两种不同实现方式，我们可以大概的了解到 `Object.defineProperty` 和 `Proxy` 的用法，但是当给对象添加新的属性的时候，区别就出来了，比如

```js
// 添加公众号字段
obj.gzh = '前端有的玩'
```

使用 `Object.defineProperty` 无法监听到新增属性，但是使用 `Proxy` 是可以监听到的。对比上面两段代码可以发现有以下几点不同

- `Object.defineProperty` 监听的是对象的每一个属性，而 `Proxy` 监听的是对象自身

- 使用 `Object.defineProperty` 需要遍历对象的每一个属性，对于性能会有一定的影响

- `Proxy` 对新增的属性也能监听到，但 `Object.defineProperty` 无法监听到。

## 初识 Proxy

### 概念与语法

在 `MDN` 中，关于 `Proxy` 是这样介绍的: `Proxy` 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。什么意思呢？ `Proxy` 就像一个拦截器一样，它可以在读取对象的属性，修改对象的属性，获取对象属性列表，通过 `for in` 循环等等操作的时候，去拦截对象上面的默认行为，然后自己去自定义这些行为，比如上面例子中的 `set`,我们通过拦截默认的 `set` ,然后在自定义的 `set` 里面添加了回调函数的调用

`Proxy` 的语法格式如下

```js
/**
 * target: 要兼容的对象，可以是一个对象，数组,函数等等
 * handler: 是一个对象，里面包含了可以监听这个对象的行为函数，比如上面例子里面的`get`与`set`
 * 同时会返回一个新的对象proxy, 为了能够触发handler里面的函数，必须要使用返回值去进行其他操作，比如修改值
 */
const proxy = new Proxy(target, handler)
```

在上面的例子里面，我们已经使用到了 `handler` 里面提供的 `get` 与 `set` 方法了，接下来我们一一看一下 `handler` 里面的方法。

`handler` 里面的方法列表

`handler` 里面的方法可以有以下这十三个，每一个都对应的一种或多种针对 `proxy` 代理对象的操作行为

1. `handler.get`

当通过 `proxy` 去读取对象里面的属性的时候，会进入到 `get` 钩子函数里面

2. `handler.set`

当通过 `proxy` 去为对象设置修改属性的时候，会进入到 `set` 钩子函数里面

3. `handler.has`

当使用 `in` 判断属性是否在 `proxy` 代理对象里面时，会触发 `has`，比如

```js
const obj = {
  name: '子君'
}
console.log('name' in obj)
```

4. `handler.deleteProperty`

当使用 `delete` 去删除对象里面的属性的时候，会进入 `deleteProperty` 钩子函数

5. `handler.apply`

当 `proxy` 监听的是一个函数的时候，当调用这个函数时，会进入 `apply` 钩子函数

6. `handle.ownKeys`

当通过 `Object.getOwnPropertyNames`,`Object.getownPropertySymbols`,`Object.keys`,`Reflect.ownKeys` 去获取对象的信息的时候，就会进入 `ownKeys` 这个钩子函数

7. `handler.construct`

当使用 `new` 操作符的时候，会进入 `construct` 这个钩子函数

8. `handler.defineProperty`

当使用 `Object.defineProperty` 去修改属性修饰符的时候，会进入这个钩子函数

9. `handler.getPrototypeOf`

当读取对象的原型的时候，会进入这个钩子函数

10. `handler.setPrototypeOf`

当设置对象的原型的时候，会进入这个钩子函数

11. `handler.isExtensible`

当通过 `Object.isExtensible` 去判断对象是否可以添加新的属性的时候，进入这个钩子函数

12. `handler.preventExtensions`

当通过 `Object.preventExtensions` 去设置对象不可以修改新属性时候，进入这个钩子函数

13. `handler.getOwnPropertyDescriptor`

在获取代理对象某个属性的属性描述时触发该操作，比如在执行 `Object.getOwnPropertyDescriptor(proxy, "foo")` 时会进入这个钩子函数

`Proxy` 提供了十三种拦截对象操作的方法，本文主要挑选其中一部分在 _Vue3_ 中比较重要的进行说明，其余的建议可以直接阅读 `MDN` 关于 `Proxy` 的介绍。

## 详细介绍

### get

> 当通过 `proxy` 去读取对象里面的属性的时候，会进入到 `get` 钩子函数里面

当我们从一个 `proxy` 代理上面读取属性的时候，就会触发 `get` 钩子函数，`get` 函数的结构如下

```js
/**
 * target: 目标对象，即通过proxy代理的对象
 * key: 要访问的属性名称
 * receiver: receiver相当于是我们要读取的属性的this,一般情况
 *           下他就是proxy对象本身，关于receiver的作用，后文将具体讲解
 */
handle.get(target, key, receiver)
```

#### 示例

我们在工作中经常会有封装 `axios` 的需求，在封装过程中，也需要对请求异常进行封装，比如不同的状态码返回的异常信息是不同的，如下是一部分状态码及其提示信息:

```js
// 状态码提示信息
const errorMessage = {
  400: '错误请求',
  401: '系统未授权，请重新登录',
  403: '拒绝访问',
  404: '请求失败，未找到该资源'
}

// 使用方式
const code = 404
const message = errorMessage[code]
console.log(message)
```

但这存在一个问题，状态码很多，我们不可能每一个状态码都去枚举出来，所以对于一些异常状态码，我们希望可以进行统一提示，如提示为系统异常，请联系管理员，这时候就可以使用 `Proxy` 对错误信息进行代理处理

```js
// 状态码提示信息
const errorMessage = {
  400: '错误请求',
  401: '系统未授权，请重新登录',
  403: '拒绝访问',
  404: '请求失败，未找到该资源'
}

const proxy = new Proxy(errorMessage, {
  get(target, key) {
    const value = target[key]
    return value || '系统异常，请联系管理员'
  }
})

// 输出 错误请求
console.log(proxy[400])
// 输出 系统异常，请联系管理员
console.log(proxy[500])
```

### set

> 当为对象里面的属性赋值的时候，会触发 `set`

当给对象里面的属性赋值的时候，会触发 `set`,`set` 函数的结构如下

```js
/**
 * target: 目标对象，即通过proxy代理的对象
 * key: 要赋值的属性名称
 * value: 目标属性要赋的新值
 * receiver: 与 get的receiver 基本一致
 */
handle.set(target, key, value, receiver)
```

#### 示例

某系统需要录入一系列数值用于数据统计，但是在录入数值的时候，可能录入的存在一部分异常值，对于这些异常值需要在录入的时候进行处理, 比如大于 `100` 的值，转换为 `100`, 小于 0 的值，转换为 `0`, 这时候就可以使用`proxy` 的 `set`，在赋值的时候，对数据进行处理

```js
const numbers = []
const proxy = new Proxy(numbers, {
  set(target, key, value) {
    if (value < 0) {
      value = 0
    } else if (value > 100) {
      value = 100
    }
    target[key] = value
    // 对于set 来说，如果操作成功必须返回true, 否则会被视为失败
    return true
  }
})

proxy.push(1)
proxy.push(101)
proxy.push(-10)
// 输出 [1, 100, 0]
console.log(numbers)
```

#### 对比 _Vue2.0_

在使用 _Vue2.0_ 的时候，如果给对象添加新属性的时候，往往需要调用 `$set`, 这是因为 `Object.defineProperty` 只能监听已存在的属性，而新增的属性无法监听，而通过 `$set` 相当于手动给对象新增了属性，然后再触发数据响应。但是对于 _Vue3.0_ 来说，因为使用了 `Proxy`， 在他的 `set` 钩子函数中是可以监听到新增属性的，所以就不再需要使用 `$set`

```js
const obj = {
  name: '子君'
}
const proxy = new Proxy(obj, {
  set(target, key, value) {
    if (!target.hasOwnProperty(key)) {
      console.log(`新增了属性${key},值为${value}`)
    }
    target[key] = value
    return true
  }
})
// 新增 公众号 属性
// 输出 新增了属性gzh,值为前端有的玩
proxy.gzh = '前端有的玩'
```

### has

> 当使用 `in` 判断属性是否在 `proxy` 代理对象里面时，会触发 `has`

```js
/**
 * target: 目标对象，即通过proxy代理的对象
 * key: 要判断的key是否在target中
 */
handle.has(target, key)
```

#### 示例

一般情况下我们在 `js` 中声明私有属性的时候，会将属性的名字以 `_` 开头，对于这些私有属性，是不需要外部调用，所以如果可以隐藏掉是最好的，这时候就可以通过 `has` 在判断某个属性是否在对象时，如果以 `_` 开头，则返回 `false`

```js
const obj = {
  publicMethod() {},
  _privateMethod() {}
}
const proxy = new Proxy(obj, {
  has(target, key) {
    if (key.startsWith('_')) {
      return false
    }
    return Reflect.get(target, key)
  }
})

// 输出 false
console.log('_privateMethod' in proxy)

// 输出 true
console.log('publicMethod' in proxy)
```

### deleteProperty

> 当使用 `delete` 去删除对象里面的属性的时候，会进入 `deleteProperty` 拦截器

```js
/**
 * target: 目标对象，即通过proxy代理的对象
 * key: 要删除的属性
 */
handle.deleteProperty(target, key)
```

#### 示例

现在有一个用户信息的对象，对于某些用户信息，只允许查看，但不能删除或者修改，对此使用 `Proxy` 可以对不能删除或者修改的属性进行拦截并抛出异常，如下

```js
const userInfo = {
  name: '子君',
  gzh: '前端有的玩',
  sex: '男',
  age: 22
}
// 只能删除用户名和公众号
const readonlyKeys = ['name', 'gzh']
const proxy = new Proxy(userInfo, {
  set(target, key, value) {
    if (readonlyKeys.includes(key)) {
      throw new Error(`属性${key}不能被修改`)
    }
    target[key] = value
    return true
  },
  deleteProperty(target, key) {
    if (readonlyKeys.includes(key)) {
      throw new Error(`属性${key}不能被删除`)
      return
    }
    delete target[key]
    return true
  }
})
// 报错
delete proxy.name
```

#### 对比 _Vue2.0_

其实与 `$set` 解决的问题类似，_Vue2.0_ 是无法监听到属性被删除的，所以提供了 `$delete` 用于删除属性，但是对于 `Proxy`，是可以监听删除操作的，所以就不需要再使用 `$delete` 了

### 其他操作

在上文中，我们提到了 `Proxy` 的 `handler` 提供了十三个函数，在上面我们列举了最常用的三个，其实每一个的用法都是基本一致的，比如 `ownKeys`，当通过`Object.getOwnPropertyNames`,`Object.getownPropertySymbols`,`Object.keys,Reflect.ownKeys` 去获取对象的信息的时候，就会进入 `ownKeys` 这个钩子函数，使用这个我们就可以对一些我们不像暴露的属性进行保护，比如一般会约定*开头的为私有属性，所以在使用 `Object.keys` 去获取对象的所有 `key` 的时候，就可以把所有 `*`开头的属性屏蔽掉。关于剩余的那些属性，建议大家多去看看`MDN` 中的介绍。

## Reflect

在上面，我们获取属性的值或者修改属性的值都是通过直接操作 `target` 来实现的，但实际上 `ES6` 已经为我们提供了在 `Proxy` 内部调用对象的默认行为的 `API`,即 `Reflect`。比如下面的代码

```js
const obj = {}
const proxy = new Proxy(obj, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  }
})
```

大家可能看到上面的代码与直接使用 `target[key]` 的方式没什么区别，但实际上 `Reflect` 的出现是为了让 `Object` 上面的操作更加规范，比如我们要判断某一个 `prop` 是否在一个对象中，通常会使用到 `in`,即

```js
const obj = { name: '子君' }
console.log('name' in obj)
```

但上面的操作是一种命令式的语法，通过 `Reflect` 可以将其转变为函数式的语法，显得更加规范

```js
Reflect.has(obj, 'name')
```

除了 `has`,`get` 之外，其实 `Reflect` 上面总共提供了十三个静态方法，这十三个静态方法与 `Proxy` 的 `handler` 上面的十三个方法是一一对应的，通过将 `Proxy` 与 `Reflect` 相结合，就可以对对象上面的默认操作进行拦截处理，当然这也就属于函数元编程的范畴了。

<br/>

> 结语 不要吹灭你的灵感和你的想象力; 不要成为你的模型的奴隶。 ——文森特・梵高

<br/>

本文转载自 [前端进击者](https://juejin.im/post/6861725116389130254) 用于收录
