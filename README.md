# 我的博客

使用 Hugo + Decap CMS + Cloudflare Pages 构建的现代化静态博客。

## 特性

- ⚡ **极速** - 纯静态 HTML，加载速度极快
- 📝 **Decap CMS** - 通过浏览器在线编辑文章
- 🌙 **暗色模式** - 支持浅色/深色主题切换
- 📱 **响应式** - 完美适配手机、平板、桌面
- 🔒 **安全** - 没有数据库，无安全漏洞
- 🆓 **免费** - GitHub + Cloudflare Pages 零成本托管

## 快速开始

### 本地预览

```bash
# 安装 Hugo Extended
brew install hugo

# 启动本地服务器
hugo server -D
```

访问 http://localhost:1313 查看博客。

### 构建生产版本

```bash
hugo
```

静态文件会生成在 `public/` 目录。

## 写文章

### 方式一：在线编辑（推荐）

1. 访问 [/admin](/admin)
2. 使用 GitHub 账号登录
3. 点击 "New post" 创建新文章
4. 使用 Markdown 编辑，保存即可

### 方式二：本地编辑

在 `content/posts/` 目录创建 `.md` 文件：

```markdown
---
title: "文章标题"
date: 2026-04-27
description: "文章摘要"
tags:
  - 标签1
  - 标签2
author: 胡斌
---

文章内容...
```

## 部署

本博客使用 GitHub Actions 自动部署到 Cloudflare Pages。

每次推送到 `main` 分支都会自动：
1. 构建 Hugo 网站
2. 部署到 Cloudflare Pages
3. 更新 https://blog.huibun.workers.dev

## 项目结构

```
blog/
├── content/           # 文章内容 (Markdown)
│   ├── posts/        # 博客文章
│   └── pages/        # 页面（关于等）
├── layouts/           # Hugo 模板
│   ├── _default/     # 默认模板
│   └── partials/     # 可复用组件
├── static/           # 静态资源
│   ├── admin/       # Decap CMS 管理后台
│   └── images/      # 图片资源
├── .github/          # GitHub 配置
│   └── workflows/   # CI/CD 流程
└── hugo.toml        # Hugo 配置
```

## 技术栈

- **框架**: [Hugo](https://gohugo.io/)
- **CMS**: [Decap CMS](https://decapcms.org/)
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **托管**: [GitHub](https://github.com/)

## 许可证

MIT License
