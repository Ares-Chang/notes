---
title: 缩放页面内容
---

业务需求：使用页面整体缩小，类似浏览器绽放功能。

## zoom

```css
body {
	zoom: 0.8;
}
```

使用 zoom 缩放，起点位置为左上角。

## transform: scale()

```css
body {
	transform: scale(0.8);
}
```

使用 transform: scale() 需要注意缩放起点，位置是否正确,起点位置为中心。

> ps: 效果自行尝试，缩放时注意页面是否使用定位，可能会造成定位位置不变。