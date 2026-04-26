import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Tag as TagIcon, User, Share2 } from 'lucide-react';
import { getPostBySlug, posts } from '@/data/posts';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PostDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
          <Button onClick={() => navigate('/posts')}>返回文章列表</Button>
        </div>
      </div>
    );
  }
  
  // 获取相关文章（同标签）
  const relatedPosts = posts
    .filter(p => p.slug !== post.slug && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 2);
  
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (err) {
        // 用户取消分享
      }
    } else {
      // 降级方案：复制链接
      await navigator.clipboard.writeText(url);
      alert('链接已复制到剪贴板');
    }
  };
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/posts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回文章列表
          </Link>
        </Button>
        
        {/* Article Header */}
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              {post.author && (
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  <TagIcon className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              分享文章
            </Button>
          </header>
          
          <Separator className="my-8" />
          
          {/* Article Content */}
          <Card>
            <CardContent className="p-6 md:p-10">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                        {children}
                      </blockquote>
                    ),
                    code: ({ className, children }) => {
                      const isInline = !className;
                      if (isInline) {
                        return <code className="bg-muted px-1.5 py-0.5 rounded text-sm">{children}</code>;
                      }
                      return (
                        <code className="block bg-muted p-4 rounded-lg overflow-x-auto text-sm my-4">
                          {children}
                        </code>
                      );
                    },
                    pre: ({ children }) => (
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">{children}</pre>
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-4">
                        <table className="w-full border-collapse border border-border">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">{children}</th>
                    ),
                    td: ({ children }) => (
                      <td className="border border-border px-4 py-2">{children}</td>
                    ),
                    a: ({ href, children }) => (
                      <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        {children}
                      </a>
                    ),
                    hr: () => <hr className="my-8 border-border" />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </article>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">相关推荐</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Link to={`/posts/${relatedPost.slug}`} className="block">
                      <h3 className="font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;
