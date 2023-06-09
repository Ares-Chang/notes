export const sidebar = {
  '/web/html/': [
    {
      text: 'HTML',
      items: [
        {
          text: '关于',
          link: '/web/html/'
        },
        {
          text: '图片文件下载',
          link: '/web/html/download'
        },
        {
          text: 'IOS 系统验证码自动填充两次问题',
          link: '/web/html/input-ios-BUG'
        },
        {
          text: '防止 img 的图片被手机浏览器的 图片查看器 打开',
          link: '/web/html/mobile-img'
        },
        {
          text: '标签语义化',
          link: '/web/html/tags-semantization'
        },
        {
          text: '禁止 Video 视频播放时自动全屏',
          link: '/web/html/video-playsinline'
        },
        {
          text: 'video poster 属性空白',
          link: '/web/html/video-poster'
        }
      ]
    }
  ],

  '/web/css/': [
    {
      text: 'CSS',
      items: [
        {
          text: '关于',
          link: '/web/css/'
        },
        {
          text: '去除背景色',
          link: '/web/css/background-color'
        },
        {
          text: 'CSS 实现文字贴图和渐变文字',
          link: '/web/css/css-background-clip'
        },
        {
          text: '通过一个颜色计算出一个更浅的颜色',
          link: '/web/css/css-count-color'
        },
        {
          text: 'CSS 鼠标聚焦动画',
          link: '/web/css/css-mouse_focus'
        },
        {
          text: '段落首行缩进',
          link: '/web/css/css-text-indent'
        },
        {
          text: '文本打点展示',
          link: '/web/css/css-text-overflow'
        },
        {
          text: 'CSS 控制文本大小写',
          link: '/web/css/css-text-transform'
        },
        {
          text: 'CSS 实现 Tooltip 效果',
          link: '/web/css/css-tooltip'
        },
        {
          text: '缩放页面内容',
          link: '/web/css/css-zoom'
        },
        {
          text: 'sass/scss 使用简介',
          link: '/web/css/scss'
        },
        {
          text: '悬浮卡片间隙影响背景拖动问题',
          link: '/web/css/css-pointer-events'
        }
      ]
    }
  ],

  '/web/javascript/': [
    {
      text: 'JAVASCRIPT',
      items: [
        {
          text: '关于',
          link: '/web/javascript/'
        },
        {
          text: '常用方法',
          link: '/web/javascript/common-method'
        },
        {
          text: '移动端常见事件',
          link: '/web/javascript/Mobile-terminal-event'
        },
        {
          text: '常用遍历方法',
          link: '/web/javascript/js-each'
        },
        {
          text: 'base 64 图片显示不成功',
          link: '/web/javascript/base64-blank'
        },
        {
          text: '解决 map 中无法进行 async 问题',
          link: '/web/javascript/es6-map-async'
        },
        {
          text: '获取本周、本月、本季度时间段',
          link: '/web/javascript/get-time_quantum'
        },
        {
          text: '前端限制：禁止复制剪切',
          link: '/web/javascript/js-ban-copy'
        },
        {
          text: '日期格式化 YYMMDD 改为 YY-MM-DD',
          link: '/web/javascript/js-date_format'
        },
        {
          text: '快速获取 URL 中的参数',
          link: '/web/javascript/js-get-url_params'
        },
        {
          text: 'JS Date 日期格式和字符串的相互转换',
          link: '/web/javascript/js-newDate'
        },
        {
          text: 'js 定时器代码块',
          link: '/web/javascript/js-timer'
        },
        {
          text: '节流与防抖',
          link: '/web/javascript/throttle-and-debounce'
        },
        {
          text: '画中画',
          link: '/web/javascript/video-pip'
        }
      ]
    }
  ],

  '/web/ajax/': [
    {
      text: 'AJAX',
      items: [
        {
          text: '关于',
          link: '/web/ajax/'
        },
        {
          text: '原生 AJAX',
          link: '/web/ajax/native-ajax'
        }
      ]
    }
  ],

  '/web/ui-module/': [
    {
      text: 'UI Module',
      items: [
        {
          text: '关于',
          link: '/web/ui-module/'
        }
      ]
    },
    {
      text: 'iView UI',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: '表单验证踩坑记录',
          link: '/web/ui-module/iview-form'
        },
        {
          text: 'InputNumber 默认显示占位符',
          link: '/web/ui-module/iview-inputNumber'
        },
        {
          text: 'Modal 嵌入 Form 表单验证之防止关闭',
          link: '/web/ui-module/iview-modal-verify'
        },
        {
          text: 'iview 中 table 里嵌套其他组件',
          link: '/web/ui-module/iview-table'
        },
        {
          text: 'table 表格中排序错乱问题',
          link: '/web/ui-module/iview-table-sort'
        },
        {
          text: 'Upload 上传成功后 input 框无法赋值',
          link: '/web/ui-module/iview-upload-value'
        }
      ]
    },
    {
      text: 'Element UI',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: '动态获取数据合并表格',
          link: '/web/ui-module/el-merge-table'
        }
      ]
    }
  ],

  '/web/uni-app/': [
    {
      text: 'Uni App',
      items: [
        {
          text: '关于',
          link: '/web/uni-app/'
        },
        {
          text: '小程序内长按分享图片',
          link: '/web/uni-app/applet-Long_press'
        },
        {
          text: '小程序内长按识别二维码',
          link: '/web/uni-app/applet-QRCode'
        },
        {
          text: '获取用户授权信息',
          link: '/web/uni-app/get-userinfo'
        },
        {
          text: 'onLaunch 函数中的异步方法处理',
          link: '/web/uni-app/uni-async-onLaunch'
        },
        {
          text: '去除左上小房子',
          link: '/web/uni-app/uni-goHome'
        },
        {
          text: '解决同页面多视频可同时播放问题',
          link: '/web/uni-app/uni-more_video_play'
        },
        {
          text: '实现点击输入密码弹窗',
          link: '/web/uni-app/uni-pop_up'
        },
        {
          text: '小程序中手动控制视频播放',
          link: '/web/uni-app/uni-video'
        },
        {
          text: '在 H5 中打开小程序',
          link: '/web/uni-app/wx-URL-Scheme'
        },
        {
          text: '微信小程序中区分运行环境及请求域名',
          link: '/web/uni-app/wx-getAccountInfoSync'
        },
        {
          text: '微信小程序拒绝 ios 虚拟支付',
          link: '/web/uni-app/wx-hollow_place'
        },
        {
          text: '微信小程序内使用阿里图标库',
          link: '/web/uni-app/wx-iconfont'
        },
        {
          text: '扫描普通二维码打开小程序',
          link: '/web/uni-app/wx-link_open_applet'
        },
        {
          text: '去除默认导航栏',
          link: '/web/uni-app/wx-navigationStyle'
        },
        {
          text: '微信支付接入',
          link: '/web/uni-app/wx-pay'
        },
        {
          text: '微信分享按钮呈灰色',
          link: '/web/uni-app/wx-share'
        }
      ]
    },
    {
      text: '公众号',
      items: [
        {
          text: 'H5 页面自定义微信分享',
          link: '/web/uni-app/wx-js-sdk'
        }
      ]
    }
  ],

  '/web/pack/': [
    {
      text: 'Pack',
      items: [
        {
          text: '关于',
          link: '/web/pack/'
        },
        {
          text: '只允许 pnpm',
          link: '/web/pack/only-allow-pnpm'
        }
      ]
    },
    {
      text: 'Webpack',
      items: [
        {
          text: '关于',
          link: '/web/pack/webpack/'
        },
        {
          text: 'Vue CLI 默认依赖下载器修改',
          link: '/web/pack/webpack/vue-cli-download'
        },
        {
          text: '获取本机 IP',
          link: '/web/pack/webpack/get-local-ip'
        },
        {
          text: 'Vue Cli 多环境打包命令配置',
          link: '/web/pack/webpack/vue-cli-pack-config'
        },
        {
          text: 'vue-cli 2.X 如何开启局域网访问',
          link: '/web/pack/webpack/vue-host-ip'
        },
        {
          text: 'webpack 配置全局引入 npm 包',
          link: '/web/pack/webpack/webpack-ProvidePlugin'
        }
      ]
    }
  ],

  '/web/echarts/': [
    {
      text: 'Echarts',
      items: [
        {
          text: '关于',
          link: '/web/echarts/'
        },
        {
          text: '类微信小程序数据统计图表分享',
          link: '/web/echarts/echarts-likeness_wx'
        },
        {
          text: '解决鼠标悬停借位问题',
          link: '/web/echarts/echarts-malposition'
        }
      ]
    }
  ],

  '/vue/': [
    {
      text: 'Vue 3',
      items: [
        {
          text: 'Eslint 搭配 defineProps 报错问题',
          link: '/vue/v3-eslint-macro'
        }
      ]
    },
    {
      text: 'Vue 2',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: '关于',
          link: '/vue/'
        },
        {
          text: 'Module not found 找不到模块',
          link: '/vue/module_not_found'
        },
        {
          text: 'props 双向绑定问题',
          link: '/vue/props-tow-binding'
        },
        {
          text: 'this.$refs 打印 undefined 问题',
          link: '/vue/refs-console-undefined'
        },
        {
          text: '组件属性透传',
          link: '/vue/vm.attrs'
        },
        {
          text: '安装 less',
          link: '/vue/vue-add-less'
        },
        {
          text: '安装 less 的错误处理',
          link: '/vue/vue-less-error'
        },
        {
          text: 'Vue 配置多环境接口地址',
          link: '/vue/vue-env'
        },
        {
          text: 'Vue 中模式及环境变量配置',
          link: '/vue/vue-mode-and-env'
        },
        {
          text: '注册全局 filter',
          link: '/vue/vue-filters'
        },
        {
          text: '学习了解 Proxy',
          link: '/vue/vue-proxy_know'
        },
        {
          text: 'vue 路由跳转',
          link: '/vue/vue-router'
        },
        {
          text: 'vue 页面绑定滚动事件',
          link: '/vue/vue-scroll'
        },
        {
          text: '配置 title 图标及文字',
          link: '/vue/vue-title-ico'
        },
        {
          text: 'wangeditor 取消自动获取焦点',
          link: '/vue/wangeditor-getfocus'
        }
      ]
    }
  ],

  '/git/': [
    {
      text: 'Git',
      items: [
        {
          text: '关于',
          link: '/git/'
        },
        {
          text: 'Git 常用命令',
          link: '/git/git-easy-order'
        },
        {
          text: 'Git 三大分区',
          link: '/git/git-partition'
        },
        {
          text: 'Git Proxy',
          link: '/git/git-proxy'
        },
        {
          text: '删除某次提交记录',
          link: '/git/delete-commit'
        },
        {
          text: '删除远程仓库中的文件',
          link: '/git/delete-file'
        },
        {
          text: 'HEAD^ 提示 More?',
          link: '/git/git-HEAD'
        },
        {
          text: '重写历史',
          link: '/git/git-amend'
        },
        {
          text: '设置大小写敏感',
          link: '/git/git-core.ignorecase'
        },
        {
          text: 'git commit 规范',
          link: '/git/git-commit'
        },
        {
          text: 'git 中忽略某个文件',
          link: '/git/git-ignore'
        },
        {
          text: '解决 .gitignore 不生效问题',
          link: '/git/inoperative-gitignore'
        },
        {
          text: '解决 git 合并未完成问题',
          link: '/git/git-merge-conflict'
        },
        {
          text: '合并分支失败',
          link: '/git/git-merger-failure'
        },
        {
          text: '清理无效远程追踪分支',
          link: '/git/git-remote-prune'
        },
        {
          text: 'git remote 命令',
          link: '/git/git-remote'
        },
        {
          text: '版本回退报错',
          link: '/git/git-reset-error'
        },
        {
          text: '撤销上次提交',
          link: '/git/git-soft'
        },
        {
          text: 'git stash 暂存修改',
          link: '/git/git-stash'
        },
        {
          text: 'git 无法 push 成功问题',
          link: '/git/issue-repository-exists'
        },
        {
          text: '保存 git 帐户密码',
          link: '/git/save-password'
        }
      ]
    }
  ],

  '/react/': [
    {
      text: 'React',
      items: [
        {
          text: '关于',
          link: '/react/'
        },
        {
          text: 'React 脚手架安装',
          link: '/react/react-staging'
        },
        {
          text: 'JSX 基础语法',
          link: '/react/jsx-basic-study'
        },
        {
          text: 'PubSubJS 发布订阅机制',
          link: '/react/pubsubjs'
        },
        {
          text: 'React Proxy 代理配置',
          link: '/react/react-proxy'
        },
        {
          text: 'React Router DOM 使用',
          link: '/react/react-router-dom'
        }
      ]
    }
  ],

  '/flutter/': [
    {
      text: 'Dart',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'Dart 基础笔记',
          link: '/flutter/dart-base-note'
        }
      ]
    },
    {
      text: 'Flutter Note',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: 'Flutter 环境搭建',
          link: '/flutter/flutter-env-setup'
        },
        {
          text: 'Flutter 组件学习',
          link: '/flutter/flutter-wudget-study'
        }
      ]
    },
    {
      text: 'Flutter',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: '关于',
          link: '/flutter/'
        },
        {
          text: '模拟器设置为中文',
          link: '/flutter/emulator-setup_zh'
        },
        {
          text: '隐藏状态栏及操作栏',
          link: '/flutter/hide-status_bar'
        },
        {
          text: 'VSCode 在 60s 内无法连接到模拟器',
          link: '/flutter/vscode-not_start-emulator'
        }
      ]
    }
  ],

  '/linux/linux/': [
    {
      text: 'Linux',
      items: [
        {
          text: '关于',
          link: '/linux/linux/'
        },
        {
          text: 'Linux 常用命令',
          link: '/linux/linux/linux-order'
        },
        {
          text: '获取当前文件夹下所有文件名称',
          link: '/linux/linux/get-file_name'
        }
      ]
    }
  ],

  '/linux/vim/': [
    {
      text: 'Vim',
      items: [
        {
          text: '关于',
          link: '/linux/vim/'
        },
        {
          text: 'vim 学习笔记',
          link: '/linux/vim/vim-notes'
        },
        {
          text: '强制保存只读文件',
          link: '/linux/vim/vim-read-only-file'
        }
      ]
    }
  ],

  '/linux/ubuntu/': [
    {
      text: 'Ubuntu',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: '关于',
          link: '/linux/ubuntu/'
        },
        {
          text: '常用命令',
          link: '/linux/ubuntu/ubuntu-common-order'
        },
        {
          text: '自动隐藏上主状态栏',
          link: '/linux/ubuntu/beautify-hideTopBar'
        },
        {
          text: "将Ubuntu的'桌面'改为'Desktop'",
          link: '/linux/ubuntu/edit-Desktop'
        }
      ]
    },
    {
      text: '生态环境',
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: '安装 Chrome',
          link: '/linux/ubuntu/install-Chrome'
        },
        {
          text: '使用 deepin-wine 安装微信',
          link: '/linux/ubuntu/install-deepin-wine'
        }
      ]
    }
  ],

  '/else/tools/': [
    {
      text: 'Gadget',
      items: [
        {
          text: '关于',
          link: '/else/tools/'
        },
        {
          text: '配置 7z 命令行模式',
          link: '/else/tools/7z-cmd'
        },
        {
          text: 'FQ',
          link: '/else/tools/FQ'
        },
        {
          text: 'Cmder',
          link: '/else/tools/cmder'
        },
        {
          text: 'Cmder 高级应用',
          link: '/else/tools/cmder-expert'
        },
        {
          text: 'degit',
          link: '/else/tools/degit'
        },
        {
          text: 'ni',
          link: '/else/tools/ni'
        },
        {
          text: 'nrm',
          link: '/else/tools/nrm'
        },
        {
          text: 'taze',
          link: '/else/tools/taze'
        },
        {
          text: 'GifCam',
          link: '/else/tools/gifcam'
        },
        {
          text: 'Snipaste',
          link: '/else/tools/snipaste'
        },
        {
          text: 'Sublime Text 插件推荐',
          link: '/else/tools/sublime-plugin'
        },
        {
          text: '关闭 VS Code 标签同步修改',
          link: '/else/tools/vscode-close-linked-editing'
        }
      ]
    }
  ],

  '/else/interview/': [
    {
      text: 'RiceBowl',
      items: [
        {
          text: '关于',
          link: '/else/interview/'
        },
        {
          text: '在什么情况下 a === a - 1 ?',
          link: '/else/interview/a-isItEqualTo-a-1'
        },
        {
          text: '面试题',
          link: '/else/interview/interview-questions'
        }
      ]
    }
  ],

  '/else/hodgepodge/': [
    {
      text: 'Hodgepodge',
      items: [
        {
          text: '关于',
          link: '/else/hodgepodge/'
        },
        {
          text: 'Chrome 主页被劫持到 hao123',
          link: '/else/hodgepodge/chrome-virus'
        },
        {
          text: '傻傻分不清之 Cookie、Session、Token、JWT',
          link: '/else/hodgepodge/cookie-particular'
        },
        {
          text: '开源许可图解',
          link: '/else/hodgepodge/open-source'
        }
      ]
    }
  ],

  '/else/': [
    {
      text: 'About',
      items: [
        {
          text: '关于',
          link: '/else/about/'
        },
        {
          text: 'GitHub Pages',
          link: '/else/about/GitHub-Pages'
        },
        {
          text: 'GitHub Actions 自动部署',
          link: '/else/about/GitHub-Actions'
        }
      ]
    },
    {
      text: 'Read Books',
      items: [
        {
          text: '关于',
          link: '/else/read-books/'
        },
        {
          text: '许三观卖血记',
          link: '/else/read-books/许三观卖血记'
        }
      ]
    }
  ]
}
