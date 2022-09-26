# 移动端常见事件

## click 事件

单击事件，类似于 PC 端的 click ，但在移动端中，连续 click 的触发有 200ms ~ 300ms 的延迟

## touch 类事件

触摸事件，有 touchstart touchmove touchend touchcancel 四种之分

- touchstart：手指触摸到屏幕会触发

- touchmove：当手指在屏幕上移动时，会触发

- touchend：当手指离开屏幕时，会触发

- touchcancel：可由系统进行的触发，比如手指触摸屏幕的时候，突然 alert 了一下，或者系统中其他打断了 touch 的行为，则可以触发该事件

## tap 类事件

触碰事件，我目前还不知道它和 touch 的区别，一般用于代替 click 事件，有 tap longTap singleTap doubleTap 四种之分

- tap: 手指碰一下屏幕会触发

- longTap: 手指长按屏幕会触发

- singleTap: 手指碰一下屏幕会触发

- doubleTap: 手指双击屏幕会触发

## swipe 类事件

滑动事件，有 swipe swipeLeft swipeRight swipeUp swipeDown 五种之分

- swipe：手指在屏幕上滑动时会触发

- swipeLeft：手指在屏幕上向左滑动时会触发

- swipeRight：手指在屏幕上向右滑动时会触发

- swipeUp：手指在屏幕上向上滑动时会触发

- swipeDown：手指在屏幕上向下滑动时会触发
