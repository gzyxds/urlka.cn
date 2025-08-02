
 - [172号卡](https://urlka.cn)

## 技术栈 🥞

- **Astro v3.6.4**：现代静态网站生成器
- **Tailwind CSS v3.3.3**：实用类优先的 CSS 框架
- **React v19.1.1**：用于构建用户界面的 JavaScript 库
- **TailGrids**：提供优质的 UI 组件

## 功能特点

### 多场景适配 ✍️

该模板专为初创公司、SaaS 和应用程序网站设计，包含启动一个完整商业网站所需的所有必要部分、页面和组件，适合想要快速搭建强大在线平台的开发者。

### 强大的 Markdown 博客系统 ✍️

支持 Markdown 的博客系统，为运营完整的商业网站提供了一切必要功能：
- 博客文章列表页面
- 详细的博客文章页面
- 分类和标签支持
- 作者信息展示
- 阅读量和评论统计
- 相关文章推荐

### 丰富的组件库 🧩

Play Astro 提供了丰富的预构建组件，包括但不限于：

- **Hero 部分**：引人注目的首屏展示
- **功能展示**：展示产品或服务的核心功能
- **关于我们**：介绍公司或团队
- **价格方案**：展示不同的价格套餐
- **团队介绍**：展示团队成员
- **客户评价**：展示客户反馈
- **FAQ 部分**：常见问题解答
- **联系表单**：用户联系方式
- **博客部分**：展示最新文章
- **CTA 部分**：行动召唤区域
- **客户展示**：展示合作伙伴或客户
- **登录/注册页面**：用户账户管理

### 响应式设计 📱

完全响应式设计，确保在所有设备上（从移动设备到桌面）都能提供出色的用户体验。

### 深色模式支持 🌓

内置深色模式支持，为用户提供更好的浏览体验。

### 性能优化 ⚡

基于 Astro 构建，具有出色的性能和加载速度。

## 项目结构

```plaintext
├── .astro/                  # Astro 生成的类型定义
├── .vscode/                 # VS Code 配置
│   ├── extensions.json      # 推荐的扩展
│   └── launch.json          # 调试配置
├── public/                  # 静态资源
│   ├── assets/              # 图片、图标、字体等资源
│   │   ├── about/           # 关于页面的图片
│   │   ├── blog/            # 博客相关图片
│   │   ├── brands/          # 品牌和合作伙伴图标
│   │   ├── features/        # 功能图标
│   │   ├── fonts/           # 本地字体文件
│   │   ├── footer/          # 页脚相关图片
│   │   ├── hero/            # 首页横幅图片
│   │   ├── icons/           # 图标资源
│   │   ├── logo/            # 网站标志
│   │   ├── team/            # 团队成员图片
│   │   └── testimonials/    # 客户评价图片
│   ├── favicon.ico          # 网站图标
│   └── site.webmanifest     # PWA 配置文件
├── src/                     # 源代码
│   ├── components/          # 可复用组件
│   │   ├── layout/          # 布局相关组件
│   │   │   ├── BackToTop.astro    # 返回顶部按钮
│   │   │   ├── Breadcrumb.astro   # 面包屑导航
│   │   │   ├── Footer.astro       # 页脚组件
│   │   │   ├── Header.astro       # 页头组件
│   │   │   └── MadeWithButton.astro # 制作信息按钮
│   │   ├── Aboutsection.astro     # 关于部分
│   │   ├── Accordion.astro        # 手风琴组件
│   │   ├── Blogsection.astro      # 博客部分
│   │   ├── Border.astro           # 边框组件
│   │   ├── Card.astro             # 卡片组件
│   │   ├── Clients.astro          # 客户展示
│   │   ├── Contactsection.astro   # 联系部分
│   │   ├── CTAsection.astro       # 行动召唤部分
│   │   ├── Download.astro         # 下载部分
│   │   ├── Faq.astro              # 常见问题
│   │   ├── Features.astro         # 功能特性
│   │   ├── Formbox.astro          # 表单组件
│   │   ├── Function.astro         # 功能展示
│   │   ├── FunctionReverse.astro  # 反向功能展示
│   │   ├── Hero.astro             # 首页横幅
│   │   ├── Modalwith.astro        # 模态框组件
│   │   ├── Newsletterbox.astro    # 新闻订阅框
│   │   ├── Pagination.astro       # 分页组件
│   │   ├── PopularArticles.astro  # 热门文章
│   │   ├── Pricingsection.astro   # 价格部分
│   │   ├── Product.astro          # 产品展示
│   │   ├── Qrcode.astro           # 二维码组件
│   │   ├── RelatedArticles.astro  # 相关文章
│   │   └── Testimonials.astro     # 客户评价
│   ├── content/             # 内容文件
│   │   ├── config.js        # 内容配置
│   │   └── blog/            # 博客文章（Markdown）
│   │       ├── 1.md         # 博客文章1
│   │       ├── 2.md         # 博客文章2
│   │       └── ...          # 更多博客文章
│   ├── layouts/             # 页面布局
│   │   └── Layout.astro     # 主布局组件
│   ├── pages/               # 页面文件
│   │   ├── blog/            # 博客相关页面
│   │   │   └── [slug].astro # 动态博客文章页面
│   │   ├── 404.astro        # 404错误页面
│   │   ├── about.astro      # 关于页面
│   │   ├── blog.astro       # 博客列表页面
│   │   ├── contact.astro    # 联系页面
│   │   ├── customer.astro   # 客户页面
│   │   ├── index.astro      # 首页
│   │   ├── pricing.astro    # 价格页面
│   │   ├── Product.astro    # 产品页面
│   │   ├── signin.astro     # 登录页面
│   │   └── signup.astro     # 注册页面
│   ├── scripts/             # JavaScript 脚本
│   │   ├── darkMode.js      # 深色模式切换
│   │   ├── dropdown.js      # 下拉菜单功能
│   │   ├── scrollmenu.js    # 滚动菜单效果
│   │   ├── scrolltop.js     # 返回顶部功能
│   │   ├── stickymenu.js    # 粘性菜单效果
│   │   └── testimonial.js   # 客户评价轮播
│   └── utils/               # 工具函数
│       └── all.js           # 通用工具函数
├── .gitignore               # Git 忽略文件配置
├── .prettierrc              # Prettier 代码格式化配置
├── astro.config.mjs         # Astro 配置文件
├── package.json             # 项目依赖和脚本配置
├── tailwind.config.cjs      # Tailwind CSS 配置
└── tsconfig.json            # TypeScript 配置
```

## 安装与部署

所有命令都在项目根目录的终端中运行：

| 命令                   | 作用                                           |
| :--------------------- | :--------------------------------------------- |
| `npm install`          | 安装项目依赖                                   |
| `npm run dev`          | 启动本地开发服务器，访问地址 `localhost:4321` |
| `npm run build`        | 构建生产环境代码到 `./dist/` 目录              |
| `npm run preview`      | 本地预览构建后的代码                           |
| `npm run astro ...`    | 运行 CLI 命令，如 `astro add`, `astro check`   |
| `npm run astro -- --help` | 获取 Astro CLI 使用帮助                     |

## 项目配置

### 开发配置

- **`.gitignore`**：定义了需要忽略的文件和目录，如构建输出、依赖项等。
- **`.prettierrc`**：Prettier 代码格式化配置，使用单引号、尾随逗号等。
- **`astro.config.mjs`**：Astro 项目配置，集成了 Tailwind CSS、React 和压缩插件。
- **`tailwind.config.cjs`**：Tailwind CSS 配置，定义了屏幕尺寸、容器、颜色和阴影等。
- **`tsconfig.json`**：TypeScript 配置，继承自 `astro/tsconfigs/strict`。

### 依赖配置

#### 生产依赖

- `@astrojs/react`：Astro 的 React 集成。
- `@astrojs/tailwind`：Astro 的 Tailwind CSS 集成。
- `@fontsource-variable/inter`：可变字体。
- `@iconify/react`：图标库。
- `astro`：现代静态网站生成器。
- `astro-compress`：Astro 压缩插件。
- `react` 和 `react-dom`：React 库。
- `swiper`：轮播图组件库。
- `tailwindcss`：实用类优先的 CSS 框架。

#### 开发依赖

- `prettier`：代码格式化工具。
- `prettier-plugin-astro`：Astro 的 Prettier 插件。
- `prettier-plugin-tailwindcss`：Tailwind CSS 的 Prettier 插件。

## 主要组件和页面

### 核心组件

- **Header.astro**：网站顶部导航栏，包含logo、导航菜单和主题切换器
- **Footer.astro**：网站底部，包含链接、版权信息和社交媒体图标
- **Layout.astro**：主布局组件，包含页面的基本结构和元数据

### 页面组件

- **Hero.astro**：首页横幅组件，展示主要标题、描述和行动按钮
- **Features.astro**：功能特性部分，展示产品或服务的主要功能
- **Aboutsection.astro**：关于部分，介绍公司或团队信息
- **Function.astro/FunctionReverse.astro**：功能展示组件，以不同布局展示功能
- **Pricingsection.astro**：价格部分，展示不同的价格套餐
- **Team.astro**：团队介绍部分，展示团队成员信息
- **Testimonials.astro**：客户评价部分，展示客户反馈
- **Faq.astro**：常见问题部分，解答用户疑问
- **Contactsection.astro**：联系部分，提供联系表单
- **Blogsection.astro**：博客部分，展示最新文章
- **CTAsection.astro**：行动召唤部分，引导用户采取行动
- **Clients.astro**：客户展示部分，展示合作伙伴或客户

### 博客系统

- **博客内容模型**：使用 Astro 的内容集合 API 定义博客文章结构
- **博客列表页**：展示所有博客文章的列表
- **博客详情页**：使用动态路由 `[slug].astro` 展示单篇博客文章
- **相关文章**：在博客详情页展示相关文章
- **分类和标签**：支持按分类和标签筛选文章

### 实用组件

- **Card.astro**：通用卡片组件，用于展示内容
- **Formbox.astro**：表单组件，用于收集用户输入
- **Pagination.astro**：分页组件，用于长列表导航
- **Qrcode.astro**：二维码组件，用于展示二维码
- **Accordion.astro**：手风琴组件，用于展示可折叠内容
- **Modalwith.astro**：模态框组件，用于弹出内容
- **BackToTop.astro**：返回顶部按钮

## 自定义和扩展

### 修改主题

通过编辑 `tailwind.config.cjs` 文件可以自定义颜色、字体、间距等主题设置：

```js
theme: {
  extend: {
    colors: {
      primary: '#4A6CF7',
      // 添加或修改其他颜色
    },
    fontFamily: {
      // 自定义字体
    },
    // 其他主题设置
  }
}
```

### 添加新页面

1. 在 `src/pages/` 目录下创建新的 `.astro` 文件
2. 使用 `Layout` 组件作为页面布局
3. 添加所需的组件和内容

### 添加新博客文章

1. 在 `src/content/blog/` 目录下创建新的 `.md` 文件
2. 添加必要的前置元数据，如标题、日期、图片等
3. 编写文章内容

## 性能优化

Play Astro 模板已经进行了多项性能优化：

- 使用 Astro 的部分水合（Partial Hydration）特性，只在需要的地方加载 JavaScript
- 图片优化，使用适当的尺寸和格式
- 本地托管字体，减少外部请求
- 使用 `astro-compress` 插件压缩构建输出
- 使用 Tailwind CSS 的 JIT 编译器，只生成使用到的 CSS

## 浏览器兼容性

Play Astro 支持所有现代浏览器，包括：

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）

## 许可证 📄

Play Astro 是一个开源模板，你可以自由地将其用于个人和商业项目，无需任何归属声明或反向链接。

## 支持项目 💖

- 给项目点个 Star ⭐
- 与朋友分享该项目
- 如果你遇到任何 bug，请提交 issue
- 如果你修复了问题或认为可以为项目增加价值，欢迎提交 pull request

## 了解更多 👀

 - [172号卡](https://urlka.cn)