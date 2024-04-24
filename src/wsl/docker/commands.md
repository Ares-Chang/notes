# 常用命令

## help

学会 `--help` ，可以了解所有可用的命令的使用信息。

### 列出帮助信息

```sh
docker --help
```

### 列出指定命令帮助信息

```sh
docker 命令 --help
```

## 镜像

### 搜索镜像

```sh
docker search 镜像名称
```

### 获取镜像

```sh
docker pull 镜像名称
```

### 查看镜像列表

```sh
docker images ls
```

### 删除镜像

```sh
docker rmi 镜像id
```

## 容器

### 查看容器

```sh
docker ps
```

`-a` 查看所有容器

### 启动容器

```sh
docker run 镜像名称
```

### 停止、启动、杀死、重启一个容器

```sh
docker stop 容器id
docker start 容器id
docker kill 容器id
docker restart 容器id
```

### 删除容器

```sh
docker rm 容器id
```

### 查看容器日志

```sh
docker logs 容器id
```

### 进入容器

```sh
docker exec -it 容器id bash
```
