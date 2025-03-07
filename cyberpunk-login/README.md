# 赛博朋克风格登录系统

这是一个使用Vue 3、Vite和TypeScript构建的赛博朋克风格登录界面。

## 功能特点

- 赛博朋克风格UI设计
- 登录表单验证
- 忘记密码功能
- 注册新账号功能
- 社交媒体登录选项
- 响应式设计

## 技术栈

- Vue 3
- TypeScript
- Vite
- CSS3 (动画和特效)

## 安装和运行

1. 安装依赖：

```bash
npm install
```

2. 开发模式运行：

```bash
npm run dev
```

3. 构建生产版本：

```bash
npm run build
```

4. 预览生产版本：

```bash
npm run preview
```

## 测试账号

- 邮箱: admin@example.com
- 密码: password

## 项目结构

```
cyberpunk-login/
├── public/              # 静态资源
│   ├── logo.svg         # 应用logo
│   └── grid-bg.png      # 背景图片
├── src/                 # 源代码
│   ├── assets/          # 资源文件
│   │   └── main.css     # 主样式文件
│   ├── App.vue          # 主组件
│   ├── main.ts          # 入口文件
│   ├── vite-env.d.ts    # Vite环境声明
│   └── shims-vue.d.ts   # Vue类型声明
├── index.html           # HTML入口
├── package.json         # 项目配置
├── tsconfig.json        # TypeScript配置
├── tsconfig.node.json   # Node.js TypeScript配置
├── vite.config.ts       # Vite配置
└── README.md            # 项目说明
``` 