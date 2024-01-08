# GitHub SSH keys

使用 SSH 连接到 GitHub 仓库，需要为 GitHub 生成单独的 SSH 密钥。

GitHub 提供了一套完整的 [文档教程](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/about-ssh)

以下仅简单介绍如何生成并使用 SSH 密钥。

## 检查现有 SSH 密钥

在生成新的 SSH 密钥之前，应该检查本地计算机是否存在现有密钥。

1. 打开 Git Bash。
2. 输入 `ls -al ~/.ssh` 以查看是否存在现有的 SSH 密钥。

```sh
ls -al ~/.ssh
```

3. 检查目录列表以查看是否已经有 SSH 公钥。 默认情况下，GitHub 的一个支持的公钥的文件名是以下之一。

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

:::tip 提示:
如果收到错误，指示 `~/.ssh` 不存在，则表明默认位置中没有现有的 SSH 密钥对。 您可以在下一步中创建新的 SSH 密钥对。
:::

## 生成新 SSH 密钥

可在本地计算机上生成新的 SSH 密钥。 生成密钥后，可以将公钥添加到你在 GitHub.com 上的帐户，以启用通过 SSH 进行 Git 操作的身份验证。

1. 打开 Git Bash。
2. 粘贴以下文本，将示例中使用的电子邮件替换为 GitHub 电子邮件地址。

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

:::warning 注意: 如果你使用的是不支持 `Ed25519` 算法的旧系统，请使用以下命令：

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

:::

这将以提供的电子邮件地址为标签创建新 SSH 密钥。

```sh
> Generating public/private ALGORITHM key pair.
```

当系统提示您“Enter a file in which to save the key（输入要保存密钥的文件）”时，可以按 `Enter` 键接受默认文件位置。 请注意，如果以前创建了 SSH 密钥，则 `ssh-keygen` 可能会要求重写另一个密钥，在这种情况下，我们建议创建自定义命名的 SSH 密钥。 为此，请键入默认文件位置，并将 `id_ALGORITHM` 替换为自定义密钥名称。

```sh
> Enter a file in which to save the key (/c/Users/YOU/.ssh/id_ALGORITHM):[Press enter]
```

3. 在提示符下，键入安全密码。 有关详细信息，请参阅 "[使用 SSH 密钥密码](https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)"。

## 将 SSH 密钥添加到 `ssh-agent`

在向 ssh 代理添加新的 SSH 密钥以管理您的密钥之前，您应该检查现有 SSH 密钥并生成新的 SSH 密钥。

如果已安装 [GitHub Desktop](https://desktop.github.com/)，可使用它克隆存储库，而无需处理 SSH 密钥。

### Windows

1. 在新的管理员终端窗口（`PowerShell` 或 `CMD`）中，确保 `ssh-agent` 正在运行。可以使用“使用 SSH 密钥密码”中的“自动启动 `ssh agent`”说明，或者手动启动它：

```sh
# start the ssh-agent in the background
Get-Service -Name ssh-agent | Set-Service -StartupType Manual
Start-Service ssh-agent
```

2. 在无提升权限的终端窗口中，将 SSH 私钥添加到 `ssh-agent`。 如果使用其他名称创建了密钥或要添加具有其他名称的现有密钥，请将命令中的 `ided25519` 替换为私钥文件的名称。

```sh
ssh-add /c/Users/YOU/.ssh/id_ed25519
```

### Linux

1. 运行以下命令使 `ssh-agent` 在后台运行：

```sh
eval "$(ssh-agent -s)"
```

2. 将私钥添加到 `ssh-agent` 之中

```sh
ssh-add ~/.ssh/id_ed25519
```

## 将 SSH 公钥添加到 GitHub 上的帐户

可以添加 SSH 密钥并将其用于身份验证或提交签名，或同时用于这两个目的。如果要使用相同的 SSH 密钥进行身份验证和签名，则需要将其上传两次。

1. 将 SSH 公钥复制到剪贴板。

```sh
cat ~/.ssh/id_ed25519.pub
```

2. 打开到 GitHub 设置页面
3. 在侧边栏中，点击 “SSH and GPG keys”。
4. 添加新的 SSH key。
5. 设置信息并把公钥粘贴到 “Key” 栏，保存添加 SSH key。

## 测试 SSH 连接

添加完成后，运行以下命令测试 SSH 连接。

```sh
ssh -T git@github.com
```

您可能会看到类似如下的警告：

```out
The authenticity of host 'github.com (20.205.243.166)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

验证所看到的信息是否与上面的公钥匹配。如果是，则键入 `yes`:

```out
Hi Ares-Chang! You've successfully authenticated, but GitHub does not provide shell access.
```

验证生成的消息包含您的用户名。 如果收到“权限被拒绝”消息，请参阅“[错误：权限被拒绝（公钥）](https://docs.github.com/zh/authentication/troubleshooting-ssh/error-permission-denied-publickey)”。
