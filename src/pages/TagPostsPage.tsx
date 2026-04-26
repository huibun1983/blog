import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag } from 'lucide-react';
import { getPostsByTag, getAllTags } from '@/data/posts';
import PostCard from '@/components/PostCard';
import { Button } from '@/components/ui/button';

const TagPostsPage = () => {
  const { tagName } = useParams<{ tagName: string }>();
  const decodedTag = tagName ? decodeURIComponent(tagName) : '';
  const posts = getPostsByTag(decodedTag);
  const allTags = getAllTags();
  
  // 检查标签是否存在
  const tagExists = allTags.some(t => t.name === decodedTag);
  
  if (!tagExists) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">标签不存在</h1>
          <Button onClick={() => window.history.back()}>返回</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/tags">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回标签列表
          </Link>
        </Button>
        
        {/* Header */}
        <div className="flex items-center mb-8">
          <Tag className="h-8 w-8 mr-3" />
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-muted-foreground">#</span>
              {decodedTag}
            </h1>
            <p className="text-muted-foreground">共 {posts.length} 篇文章</p>
          </div>
        </div>
        
        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>暂无相关文章</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagPostsPage;
