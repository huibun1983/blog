import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Tag, User } from 'lucide-react';
import { posts, getAllTags } from '@/data/posts';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HomePage = () => {
  const recentPosts = posts.slice(0, 3);
  const popularTags = getAllTags().slice(0, 6);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            欢迎来到我的博客
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            分享技术心得、生活感悟，记录成长的每一步
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/posts">
                <BookOpen className="mr-2 h-5 w-5" />
                浏览文章
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">
                <User className="mr-2 h-5 w-5" />
                关于我
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">最新文章</h2>
            <Button variant="ghost" asChild>
              <Link to="/posts" className="flex items-center">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tags */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">热门标签</h2>
            <Button variant="ghost" asChild>
              <Link to="/tags" className="flex items-center">
                查看全部
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tag className="mr-2 h-5 w-5" />
                标签分类
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Button key={tag.name} variant="secondary" asChild>
                    <Link to={`/tags/${encodeURIComponent(tag.name)}`}>
                      {tag.name}
                      <span className="ml-2 text-xs opacity-60">({tag.count})</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2026 我的博客. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
