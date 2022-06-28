# Linux复习知识点

> `` 单引号的内容为代码,老师上课讲过跟使用的代码, 记忆方式: 记住代码 + 使用场景
>
> <> 尖括号的意义是某个类型,是需要灵活记忆,例如 `passwd <用户名>`
> <> 的内容是动态可变的, 意义为用户名, 其正确的含义为更改某个具体用户的密码,实际操作不需要输入<>

## 单元1

`passwd` 更改root密码
`passwd -` 更改root密码
`passwd <用户>` 更改某个用户的密码,

`pwd` 显示当前的目录路径

`cd /` 切换到root根目录
`cd ` 切换到家目录(/root/home)
`cd ..` 退到上一层目录

`ls` 显示当前目录的文件(包含目录)
`ls -A` 显示所有(除了.开头的隐藏文件)文件
`ls -C` 多列显示输入结果(默认行为)

`cat` 查看文件

`more` 分屏显示文件内容

`mkdir` 创建文件夹
`mkdir -m` 创建目录同时设置目录权限 例: `mkdir -m 750 /home/user`
`mkdir -p` 如果创建的目录的父目录不存在则连父目录同时创建

`rmdir` 删除空目录

`touch` `>` 创建新文件

`cp file1 file2` 复制,从file1复制到file2,如果file2存在,则提示是否覆盖
`cp -f <file1> <file2>` 复制,从file1复制到file2,如果file2存在,则删除file2,再复制过去,不提示用户
`cp -i <file1> <file2>` 复制,从file1复制到file2,如果file2存在,则提示是否覆盖,默认行为
`cp -r <file1> <file2>` 复制,从file1递归目录复制到file2,如果file2存在,则提示是否覆盖

`alias` 查看别名
`alias <命令名称> = <新命令名称>` 更改命令别名,例子: `alias touch = 't'`

`mv <file1> <file2>` 将file1更名为file2
`mv -f <file1> <file2>` 重命名,从file1重命名为file2,如果file2存在,则删除file2内容并重命名,不提示用户

`rm -r` 递归删除目录,提示用户是否删除
`rm -f` 提示用户
`rm -rf` 递归删除目录,不提示用户

单元1习题
将文件file1更名为file2: `cat file1 > file2`