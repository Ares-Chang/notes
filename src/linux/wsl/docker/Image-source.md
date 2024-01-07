# 设置镜像源

Docker Hub 国内镜像源是指在国内境内提供 Docker 镜像服务的镜像源。

由于国际网络带宽等问题，国内用户下载 Docker 镜像通常速度较慢。

因此，为了解决这个问题，一些国内的公司和组织提供了 Docker 镜像的国内镜像源，例如阿里云、网易云、百度云等。

使用这些镜像源，国内用户可以更快地下载 Docker 镜像，提高使用体验。

## 国内常用加速源

| 镜像加速器          | 镜像加速器地址                       |
| ------------------- | ------------------------------------ |
| Docker 中国官方镜像 | https://registry.docker-cn.com       |
| DaoCloud 镜像站     | http://f1361db2.m.daocloud.io        |
| Azure 中国镜像      | https://dockerhub.azk8s.cn           |
| 科大镜像站          | https://docker.mirrors.ustc.edu.cn   |
| 阿里云              | https://ud6340vz.mirror.aliyuncs.com |
| 七牛云              | https://reg-mirror.qiniu.com         |
| 网易云              | https://hub-mirror.c.163.com         |
| 腾讯云              | https://mirror.ccs.tencentyun.com    |

## Windows/Mac

1. 打开 Docker Desktop 设置
2. 选择 "Docker Engine" 选项卡
3. 修改 "registry-mirrors" 项(如果没有自行添加)
4. 应用并重新启动

## Linux

1. 打开 Docker 配置文件 `/etc/docker/daemon.json`，如果该文件不存在，则可以创建该文件。
2. 在该配置文件中添加以下内容：

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

3. 保存配置文件并重启 Docker 服务，使其生效。

```sh
sudo systemctl restart docker
```
