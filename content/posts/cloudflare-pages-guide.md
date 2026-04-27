---
title: "使用 Cloudflare Pages 免费部署静态网站"
date: 2026-04-25
description: "详细介绍如何使用 Cloudflare Pages 免费托管静态网站，包括自定义域名、CI/CD 配置。"
tags:
  - Cloudflare
  - 部署
  - DevOps
author: 胡斌
---

# 使用 Cloudflare Pages 免费部署静态网站

Cloudflare Pages 是一个强大的静态网站托管平台，完全免费且速度极快。

## 为什么选择 Cloudflare Pages？

- 🆓 **免费套餐强大** - 每月 500 次构建，无限带宽
- ⚡ **全球 CDN** - 225+ 个数据中心
- 🔒 **自动 HTTPS** - 免费 SSL 证书
- 🛠️ **无缝集成 Git** - GitHub, GitLab 支持

## 部署步骤

### 1. 准备项目

确保项目根目录有构建脚本：

```json
{
  "scripts": {
    "build": "hugo" // 或 npm run build
  }
}
```

### 2. 连接 GitHub

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Pages** → **Create a project**
3. 选择 **Connect to Git**
4. 授权 GitHub，选择仓库

### 3. 配置构建

| 设置 | 值 |
|------|-----|
| Project name | blog |
| Production branch | main |
| Build command | `hugo` |
| Build output directory | `public` |

### 4. 部署完成

Cloudflare 会自动：

- 拉取代码
- 运行构建
- 部署到全球网络

## 自定义域名

在 Pages 设置中添加自定义域名，Cloudflare 会自动配置：

- DNS 记录
- SSL 证书
- 页面规则
- 缓存策略

## 小技巧

1. **使用 _headers 文件** 优化缓存
2. **配置 _redirects** 处理 SPA 路由
3. **开启 Brotli 压缩** 提升加载速度

祝部署顺利！ 🚀
