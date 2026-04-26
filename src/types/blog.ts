// 博客文章类型定义
export interface Post {
  slug: string;  // DecapCMS 使用 slug 作为唯一标识
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
  author?: string;
}

// 标签类型
export interface Tag {
  name: string;
  count: number;
}