# 隐藏状态栏及操作栏

## 问题

学习 Flutter 过程中，发现：

项目需要全屏处理，不需要顶部状态栏和底部操作栏。

需要隐藏 status bar。

> PS：因为项目学习中需要截图，不想要 status bar 所以做以下处理，不确保真实项目中是否起作用！

## 解决方法

查询发现，只要增加一个依赖项就可以解决这个问题。

::: warning 注意
以下操作需要在项目启动前完成，否则代码不起作用！

注入成功后可以通过属性换切显示隐藏 status bar.
:::

在项目顶部引入依赖:

```dart
import 'package:flutter/services.dart';
```

在最上层 `Widget` 的 `build` 方法开头增加以下代码：

```dart
SystemChrome.setEnabledSystemUIOverlays([]); // 隐藏顶部状态栏及底部操作栏
```

如果只想隐藏顶部状态栏或底部操作栏，可以在 [] 中写入对应属性：

```dart
SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.top]);	// 隐藏底部操作栏
SystemChrome.setEnabledSystemUIOverlays([SystemUiOverlay.bottom]); // 隐藏顶部状态栏
```

> [] 中的属性可以理解为想要显示什么，如果 [] 为空，表示什么都不显示。

### 完整代码

```dart
import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // 引入隐藏依赖项

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    SystemChrome.setEnabledSystemUIOverlays([]); // 隐藏顶部状态栏及底部操作栏
    return MaterialApp(
      title: 'MyApp',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text('Hello World！'),
        ),
      ),
    );
  }
}
```

### 效果图

![](./images/hide-status_bar/Snipaste_2021-06-16_16-08-44.png)
