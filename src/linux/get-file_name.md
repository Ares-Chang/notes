# 获取当前文件夹下所有文件名称

## 关于

业务需求：提取出当前文件夹下所有文件名称。

## 解决方法

### Windows

Windows 中可以使用 `dir` 命令，打印目录下文件的信息。

```shell
λ dir
 驱动器 C 中的卷是 Windows
 卷的序列号是 9C8F-DA4C

 C:\Users\EDZ\Desktop\wallpaper 的目录

2021/08/17  11:54    <DIR>          .
2021/08/17  11:54    <DIR>          ..
2021/08/17  12:13               160 file.txt
2021/08/17  11:59    <DIR>          folder
2021/03/23  15:54           290,967 wallhaven-2em38y.jpg
2021/03/23  15:54           113,151 wallhaven-4vz9jl.png
2021/03/23  15:54           791,059 wallhaven-6k75kw.jpg
2021/03/23  15:54         1,607,558 wallhaven-6ojrkw.jpg
2021/03/23  15:54           678,308 wallhaven-9m56vd.jpg
               6 个文件      3,481,203 字节
               3 个目录 125,481,152,512 可用字节
```

使用 `dir /b` 来操作，只显示文件名称，忽略详细信息

```shell
λ dir /b
file.txt
folder	# 文件夹
wallhaven-2em38y.jpg
wallhaven-4vz9jl.png
wallhaven-6k75kw.jpg
wallhaven-6ojrkw.jpg
wallhaven-9m56vd.jpg
```

使用 `>` 进行输出重定向，创建并输出到 `file.txt` 文件

```shell
λ dir /b >file.txt

λ cat file.txt
file.txt
folder	# 文件夹
wallhaven-2em38y.jpg
wallhaven-4vz9jl.png
wallhaven-6k75kw.jpg
wallhaven-6ojrkw.jpg
wallhaven-9m56vd.jpg
```

因为 `folder` 是一个文件夹，同时也要获取子文件夹下的文件。

可以使用 `dir` 的 `/s/b` 属性来打印出来，但是这样做打印出来的是绝对地址，需要做相应处理。

```shell
λ dir /s/b >file.txt

λ cat file.txt
C:\Users\EDZ\Desktop\wallpaper\file.txt
C:\Users\EDZ\Desktop\wallpaper\folder
C:\Users\EDZ\Desktop\wallpaper\wallhaven-2em38y.jpg
C:\Users\EDZ\Desktop\wallpaper\wallhaven-4vz9jl.png
C:\Users\EDZ\Desktop\wallpaper\wallhaven-6k75kw.jpg
C:\Users\EDZ\Desktop\wallpaper\wallhaven-6ojrkw.jpg
C:\Users\EDZ\Desktop\wallpaper\wallhaven-9m56vd.jpg
C:\Users\EDZ\Desktop\wallpaper\folder\123.jpg
```

觉得这种方法不好用，也可以进入每个文件夹中执行 `dir` 输出命令。

注意：`>` 代表的是覆盖输出，会覆盖之前的内容。

这种情况下，可以使用 `>>` 来进行追加输出，不会覆盖之前的内容。

```shell
C:\Users\EDZ\Desktop\wallpaper
λ dir /b >file.txt

C:\Users\EDZ\Desktop\wallpaper
λ cd folder\

C:\Users\EDZ\Desktop\wallpaper\folder
λ dir /b >>..\file.txt

C:\Users\EDZ\Desktop\wallpaper\folder
λ cd ..\

C:\Users\EDZ\Desktop\wallpaper
λ cat file.txt
file.txt
folder	# 文件夹
wallhaven-2em38y.jpg
wallhaven-4vz9jl.png
wallhaven-6k75kw.jpg
wallhaven-6ojrkw.jpg
wallhaven-9m56vd.jpg
123.jpg
```

### Linux

同理，Linux 中可以使用 `ls` 来进行对应查看及输出。

```shell
λ ls
file.txt  folder/  wallhaven-2em38y.jpg  wallhaven-4vz9jl.png  wallhaven-6k75kw.jpg  wallhaven-6ojrkw.jpg  wallhaven-9m56vd.jpg

λ ls >file.txt

λ cat file.txt
file.txt
folder/
wallhaven-2em38y.jpg
wallhaven-4vz9jl.png
wallhaven-6k75kw.jpg
wallhaven-6ojrkw.jpg
wallhaven-9m56vd.jpg
```

虽然 `cat` 出来文件夹是正常显示，但是打开 `file.txt` 文件查看，文件夹是乱码显示的，需注意！

如果也要显示出子级文件，可以使用 `ls -R` 来查看。

```shell
λ ls -R
.:
file.txt  folder/  wallhaven-2em38y.jpg  wallhaven-4vz9jl.png  wallhaven-6k75kw.jpg  wallhaven-6ojrkw.jpg  wallhaven-9m56vd.jpg

./folder:
123.jpg
```

使用 `>` 来输出。

```shell
λ ls -R >file.txt

λ cat file.txt
.:
file.txt
folder/
wallhaven-2em38y.jpg
wallhaven-4vz9jl.png
wallhaven-6k75kw.jpg
wallhaven-6ojrkw.jpg
wallhaven-9m56vd.jpg

./folder:
123.jpg
```
