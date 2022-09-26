# iview 中 table 里嵌套其他组件

## 需求

iview 官方文档中关于 table 的 Render 写法介绍只有哪么几个，那么如果要嵌套其他组件怎么写入呢？

## 代码块

### input

```js
render: (h, params) => {
  return h("Input", {
    props: {
      value: "",
      size: "small",
    },
    on: {
      input: (val) => {
        t.data[params.index].estimateTime = val;
      },
    },
  });
},
```

### select

```js
render: (h, params) => {
  return h(
    "Select",
    {
      props: {},
      on: {
        "on-change": (event) => {
          this.data[params.index].volumeType = event;
        },
      },
    },
    params.row.action.map((item) => {
      return h("Option", {
        props: {
          value: item.value,
          label: item.name,
        },
      });
    })
  );
},
```

### switch

> 注: 没有使用 [iview-loader](https://www.iviewui.com/docs/guide/iview-loader) 时，必须使用 `i-switch` 标签。

```js
render: (h, params) => {
  //return h('元素',{元素的性质},'内容')
  return h(
    "i-switch",
    {
      props: {
        size: "large",
        value: params.row.status == "true",
      },
      on: {
        "on-change": (value) => {
          console.log(value)
        },
      },
    },
    [
      h("span", {
        slot: "open",
        domProps: {
          innerHTML: "正常",
        },
      }),
      h("span", {
        slot: "close",
        domProps: {
          innerHTML: "冻结",
        },
      }),
    ]
  );
},
```

另一种写法：

```js
render: (h, params) => {
  //return h('元素',{元素的性质},'内容')
  return h(
    "i-switch",
    {
      props: {
        size: "large",
        value: params.row.status == "true",
      },
      on: {
        "on-change": (value) => {
          console.log(value)
        },
      },
      scopedSlots: {
        open: () => h("span", "正常"),
        close: () => h("span", "冻结"),
      },
    },
  );
},
```

### Tag

Render 语法中是可以嵌套 js 语法使用的

```js
render: (h, params) => {
  return h(
    "div",
    params.row.grade.map((item) => {
      return h("Tag", item);
    })
  );
},
```

[阅读原文](https://blog.csdn.net/weixin_42981419/article/details/86162561)
