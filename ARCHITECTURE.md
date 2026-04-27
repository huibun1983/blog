# Hugo 博客 + Decap CMS + Cloudflare Pages

## 项目概述
- **目标**：面向公众的静态博客
- **技术栈**：Hugo + Decap CMS + GitHub + Cloudflare Pages
- **管理后台**：Decap CMS (GitHub OAuth 登录)
- **部署**：Cloudflare Pages (自动构建)

## 架构设计
```
内容编辑 → Decap CMS → GitHub → Cloudflare Pages → 全球访问
     ↓
   Markdown 文件存储在 GitHub
```

## 关键文件
- `hugo.toml` - Hugo 配置
- `content/` - Markdown 文章
- `static/` - 静态资源
- `public/admin/` - Decap CMS 管理界面

## 部署配置
- **Build command**: `hugo`
- **Output directory**: `public`
- **环境变量**: 无需 API Token（Cloudflare GitHub 集成）

## 待办
- [ ] 初始化 Hugo 项目
- [ ] 配置 Decap CMS
- [ ] 配置 Hugo 主题
- [ ] 推送 GitHub
- [ ] Cloudflare Pages 连接 GitHub
- [ ] 测试 Decap CMS 在线编辑
