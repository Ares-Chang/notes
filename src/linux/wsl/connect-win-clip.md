---
aside: false
---

# Vim 同步 Win 剪贴板

WSL 中使用 `vim` 时无法直接同步 Win 系统内剪贴板内容。

在 WSL 的仓库下找到一个 [issues](https://github.com/microsoft/WSL/issues/4440#issuecomment-638884035), 可以暂时规避这个问题。

在 `~/.vimrc` 中键入以下内容：

```vim
" WSL yank support
let s:clip = '/mnt/c/Windows/System32/clip.exe'  " change this path according to your mount point
if executable(s:clip)
    augroup WSLYank
        autocmd!
        autocmd TextYankPost * if v:event.operator ==# 'y' | call system(s:clip, @0) | endif
    augroup END
endif
```

:::warning 注意：
此方法只能把 `vim` 中的内容粘贴到 Win 剪贴板中，并不能反向粘贴。

暂时还没找到更好的方法，如果有，请提个 [issue](https://github.com/Ares-Chang/notes/issues/new) 帮帮我 😭。
:::
