# 动态获取数据合并表格

## 问题

业务需求，需要用到 `element UI` 的 `table` 组件，但是看了文档发现合并项时并没有写的非常清楚。

由于官网提供的示例是静态数据，无法完全满足需求。

我们需要自己动手来补充需要的数据。

## 解决方法

其实实现并不难，只是伸手党做习惯了，不想动脑子。

其实和使用原生 `<tr/td>` 标签一样，只需要循环查找出符合的数据。

逐一判断元素是应该合并还是删除，更新操作便可。

以下代码块可运行在 `Vue` 环境下，代码中有明确注释可查看。

**注意！！！数据更新之后需要再次调用 `createMergeList` 否则会产生数据更新，页面不刷新的场面。**

代码块：

```vue
<template>
  <div>
    <el-table
      :data="dataList"
      :span-method="arraySpanMethod"
      border
      max-height="400"
    >
      <el-table-column
        :prop="item.name"
        :label="item.value"
        v-for="(item, index) in mergeName"
        :key="index"
      ></el-table-column>
    </el-table>
    <el-button type="primary" @click="addList" style="margin-top: 20px"
      >点击添加数据</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 模拟数据列表
      dataList: [
        {
          date: '2021/12/07',
          name: '王小虎',
          food: '苹果',
          price: '3.2'
        },
        {
          date: '2021/12/07',
          name: '王小虎',
          food: '香蕉',
          price: '5.0'
        },
        {
          date: '2021/12/08',
          name: '张小明',
          food: '香蕉',
          price: '2.3'
        },
        {
          date: '2021/12/08',
          name: '赵小红',
          food: '鸭梨',
          price: '8.2'
        }
      ],
      // 表单头列表
      mergeName: [
        {
          name: 'date',
          value: '日期',
          merge: true // 控制是否合并单元格
        },
        {
          name: 'name',
          value: '人物',
          merge: true
        },
        {
          name: 'food',
          value: '食物',
          merge: false
        },
        {
          name: 'price',
          value: '价格',
          merge: false
        }
      ],
      mergeList: [] // 记录合并数据
    }
  },
  created() {
    this.createMergeList() // 创建合并数据
    console.log(this.mergeList)
  },
  methods: {
    /**
     * 点击添加数据，解决数据更改，列表不渲染问题
     *
     * 数据更改后需要手动调用一下表格合并方法，否则数据渲染不出来
     */
    addList() {
      this.dataList.push(
        {
          date: '2021/12/09',
          name: '赵小红',
          food: '波菜',
          price: '2.2'
        },
        {
          date: '2021/12/09',
          name: '赵小红',
          food: '地瓜',
          price: '4.1'
        }
      )
      this.createMergeList() // 注意！！！数据更新后，这里一定要调用，否则会出现数据更新，页面不刷新情况
    },
    /**
     * 遍历创建要合并的数据
     * 期待数据格式：
     * [
     *  [2, 0, 1, 1],
     *  [2, 0, 1, 1],
     *  [1, 1, 1, 1],
     *  [1, 1, 1, 1]
     * ]
     * 数字代表重复个数，0 代表重复需要删除
     */
    createMergeList() {
      this.mergeName.map((item, index) => {
        this.setMergeList(index, item.name, item.merge)
      })
    },
    /**
     * 创建要合并的数据
     * @param {Number} idx 要创建值的下标
     * @param {String} key 要查询的键名
     * @param {Boolean} merge 控制是否要合并数据
     */
    setMergeList(idx, key, merge) {
      // 判别是否需要合并
      if (!merge) {
        // 不需要合并的初始化默认值 1
        this.mergeList[idx] = new Array(this.dataList.length).fill(1)
        return
      }
      // 以下为需要合并的处理
      this.mergeList[idx] = [] // 初始化列表，后续会向内部填充数据
      let position = 0 // 控制二维列表下标，数据相同情况下不处理，不同情况下替换为处理数据下标
      // 开始遍历数据
      this.dataList.map((item, index) => {
        // 如果当前处理数据是第一条，没有上一条做对比，不做处理，填充 1
        if (index === 0) {
          this.mergeList[idx].push(1)
          position = 0 // 防止进入下一轮遍历时无法从第一条开始
        } else {
          // 判别当前值和上一条值是否一致
          // 特殊条件：必须日期和时间相同的才会合并，否则正常跳过
          if (
            item[key] === this.dataList[index - 1][key] &&
            item.date === this.dataList[index - 1].date &&
            item.name === this.dataList[index - 1].name
          ) {
            this.mergeList[idx][position] += 1 // 如果一致，合并数 + 1
            this.mergeList[idx].push(0) // 当前下标补 0 删除
          } else {
            // 不符合条件，正常渲染
            this.mergeList[idx].push(1)
            position = index // 下标置为 index
          }
        }
      })
    },
    /**
     * 列表合并回调
     * @returns {Object, Array}
     */
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      for (let i = 0; i < this.mergeName.length; i++) {
        // 0 为删除，1 为正常显示，>1 为合并多少格
        if (columnIndex === i) {
          const rowspan = this.mergeList[i][rowIndex] // 行合并数
          const colspan = rowspan > 0 ? 1 : 0 // 列合并数
          console.log(
            `当前位于 ${rowIndex} 行，${columnIndex} 列，行合并：${rowspan}，列合并：${colspan}`
          )
          return {
            rowspan,
            colspan
          }
        }
      }
    }
  }
}
</script>
```
