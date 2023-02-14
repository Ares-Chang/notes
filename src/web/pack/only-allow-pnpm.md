# 只允许 pnpm

当您在项目中使用 `pnpm` 时，您不希望被其他人意外运行 `npm install` 或 `yarn`。 为了防止开发人员使用其他的包管理器，您可以将下面的这个 `preinstall` 脚本添加到您的 `package.json`：

```json
{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}
```

现在，只要有人运行 `npm install` 或 `yarn`，就会发生错误并且不会继续安装。

如果您使用 `npm v7`，请改用 `npx -y`。

> 引自 [pnpm 官网](https://pnpm.io/only-allow-pnpm)
