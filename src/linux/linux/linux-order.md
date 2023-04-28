# Linux 常用命令

下列命令部分可在 Windows 上使用

本章只做拓展，具体参数可参考 --help 来查看

::: tip 注意:
`[]` 内包裹为可选自定义内容
:::

## ls

ls 会列举出当前工作目录的内容（文件或文件夹）：

```shell
ls
```

- 查看当前目录下所有文件（包括隐藏文件）：

```shell
ls -a
#（注：所谓隐藏文件夹就是以 . 开头的文件）
```

- 查看当前目录下所有文件（包括隐藏文件的详细信息）：

```shell
ls -al
```

## pwd

- 查看当前完整路径

## cat

- 查看文件完整内容

```shell
cat test.md # 查看 test.md 文件内容
```

> cat 命令会把文件内容全部输出到命令行，大文件不容易观看，可以使用 less 命令查看。

## less

- 查看文件内容，可通过 vim 命令进行光标调度及查询。

```shell
less test.md # 查看 test.md 文件内容
```

- `-N`: 显示行号

```shell
less -N test.md # 查看 test.md 文件内容，并显示行号
```

## grep

搜索文件内容，并打印出匹配的行。

```shell
grep '123' test.md # 在 test.md 文件中搜索 123
```

参数使用:

```shell
grep [options] [pattern] [file]
```

常用参数

- `-i`：表示忽略模式中的大小写差异
- `-v`：表示仅显示不匹配模式的行
- `-n`：表示显示匹配模式所在的行号
- `-c`：表示显示匹配模式的行数
- `-w`：表示匹配整个单词，避免匹配到部分单词
- `-r`：表示递归查找指定目录下的文件
- `-A [n]`：表示显示匹配行及其后 n 行的内容
- `-B [n]`：表示显示匹配行及其前 n 行的内容
- `-C [n]`：表示显示匹配行及其前后 n 行的内容

## mkdir

- 创建文件夹：

```shell
mkdir test
```

## cd

- 进入到指定文件夹

```shell
cd code # 进入本目录下 code 文件夹

cd \ # 跳转到根目录

cd .. # 跳转到上级目录

cd ~ # 跳转到家目录
```

## touch

- 创建文件

```shell
touch readme.md # 创建一个 Makedown 文件
```

## mkdir

- 创建文件夹

```shell
mkdir projects # 创建一个叫 projects 的文件夹
```

## rm

- 删除文件

```shell
rm readme.md # 删除 readme.md 文件
```

- 彻底删除文件夹

删除文件夹和删除文件同理，但是文件夹内不能有文件。

如有文件需要，彻底删除才可以

```shell
rm -rf projects # 强制删除 projects 文件夹下所有内容

# 💡解释：
#  -r 就是向下递归，不管有多少级目录，一并删除。
#  -f 就是直接强行删除，不作任何提示的意思。
```

- 清空文件夹

清空文件夹但是保存目录

```shell
rm -rf ./123/* # 清空 123 目录下的所有文件及文件夹,但是保留 123 文件夹
```

## mv

- 重命名文件

```shell
mv readme.md README.md # 把 readme.md 剪切粘贴并重命名为 README.md
```

- 剪切

```shell
mv 123.md ../ # 剪切 123.md 到上级目录
```

> -u：若目标文件已经存在，对比目标文件，新的才会更新

## cls

- 清空命令行

```shell
cls # 清空当前命令行
clear # 清空当前命令行
```

## cp

- 拷贝文件

```shell
cp test.md ./abc # 把 test.md 文件拷贝到当前目录 abc 文件夹下

cp test.md 123.md # 复制 test.md 并重命名为 123.md
```

- 拷贝文件夹

```shell
cp -r 123 234 # 把 123 文件夹复制到 234 文件夹下
# -r 递归复制，文件夹下有文件一起复制
```

> -i 属性：每次覆盖文件前让用户确认是否覆盖
