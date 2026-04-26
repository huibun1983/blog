import type { Post } from '@/types/blog';

// 示例文章数据
// 警告：不要手动修改此文件！通过 /admin 页面在线编辑
export const posts: Post[] = [
  {
    slug: 'build-blog-with-react-tailwind',
    title: '使用 React 和 Tailwind CSS 构建现代化博客',
    date: '2026-04-26',
    excerpt: '在这篇文章中，我们将探讨如何使用 React、TypeScript 和 Tailwind CSS 构建一个功能完善的个人博客系统。',
    content: `# 使用 React 和 Tailwind CSS 构建现代化博客

## 前言

在这篇文章中，我们将探讨如何使用 React、TypeScript 和 Tailwind CSS 构建一个功能完善的个人博客系统。

## 技术栈

我们的博客使用以下技术：

- **React 18** - 用户界面框架
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **React Router** - 页面路由管理
- **React Markdown** - Markdown 内容渲染

## 项目结构

\`\`\`
blog/
├── src/
│   ├── components/    # UI 组件
│   ├── pages/         # 页面组件
│   ├── types/         # TypeScript 类型
│   └── data/          # 静态数据
├── public/
└── package.json
\`\`\`

## 核心功能

1. **文章列表** - 展示所有博客文章
2. **文章详情** - 完整的 Markdown 渲染
3. **标签分类** - 按标签筛选文章
4. **关于页面** - 个人介绍

## 开始使用

首先，安装依赖：

\`\`\`bash
npm install
npm run dev
\`\`\`

然后访问 http://localhost:5173 即可看到博客。

## 结语

这个博客模板可以作为你个人博客的起点，根据需要进行定制和扩展。`,
    tags: ['React', 'Tailwind CSS', '前端开发'],
    author: '博客作者'
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript 最佳实践指南',
    date: '2026-04-25',
    excerpt: '深入探讨 TypeScript 的最佳实践，帮助你编写更健壮、更易维护的代码。',
    content: `# TypeScript 最佳实践指南

## 为什么选择 TypeScript？

TypeScript 为 JavaScript 添加了静态类型检查，帮助我们在编译阶段发现错误，提高代码质量。

## 核心概念

### 1. 类型注解

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

### 2. 接口 vs 类型别名

\`\`\`typescript
// 接口
interface User {
  name: string;
  age: number;
}

// 类型别名
type Point = {
  x: number;
  y: number;
};
\`\`\`

### 3. 泛型

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## 最佳实践

1. **优先使用 interface** - 对于对象结构
2. **使用 type 处理联合类型** - 需要组合类型时
3. **避免 any** - 尽量使用 unknown
4. **善用 Utility Types** - Partial、Required、Pick 等

## 总结

遵循这些最佳实践，可以让你的 TypeScript 代码更加健壮和易维护。`,
    tags: ['TypeScript', '编程', '前端开发'],
    author: '博客作者'
  },
  {
    slug: 'responsive-design-principles',
    title: '响应式设计原理与实践',
    date: '2026-04-24',
    excerpt: '了解响应式设计的核心原理，学习如何使用 CSS 媒体查询和现代布局技术创建适配各种设备的网站。',
    content: `# 响应式设计原理与实践

## 什么是响应式设计？

响应式设计是一种让网站在不同设备上都能良好展示的设计方法。

## 核心技术

### 1. 媒体查询

\`\`\`css
/* 移动优先 */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
\`\`\`

### 2. Flexbox 布局

\`\`\`css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
\`\`\`

### 3. CSS Grid

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
\`\`\`

## 断点策略

| 设备 | 断点 |
|------|------|
| 手机 | < 640px |
| 平板 | 640px - 1024px |
| 桌面 | > 1024px |

## 实践建议

1. 移动优先设计
2. 使用相对单位（rem, %, vw）
3. 图片响应式
4. 测试真实设备`,
    tags: ['CSS', '响应式设计', '前端开发'],
    author: '博客作者'
  },
  {
    slug: 'nodejs-backend-getting-started',
    title: 'Node.js 后端开发入门',
    date: '2026-04-23',
    excerpt: 'Node.js 是 JavaScript 运行时环境，让我们可以在服务器端运行 JavaScript。本文介绍 Node.js 的基础知识和实战技巧。',
    content: `# Node.js 后端开发入门

## Node.js 简介

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境，让 JavaScript 可以在服务器端运行。

## 核心模块

### HTTP 模块

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000);
\`\`\`

### 文件系统模块

\`\`\`javascript
const fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\`

## Express 框架

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000);
\`\`\`

## 总结

Node.js 为前端开发者打开了后端开发的大门，学习曲线平缓，功能强大。`,
    tags: ['Node.js', '后端开发', 'JavaScript'],
    author: '博客作者'
  }
];

// 获取所有标签
export const getAllTags = (): { name: string; count: number }[] => {
  const tagCount: Record<string, number> = {};
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  
  return Object.entries(tagCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

// 根据标签获取文章
export const getPostsByTag = (tag: string): Post[] => {
  return posts.filter(post => post.tags.includes(tag));
};

// 根据slug获取文章
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};
