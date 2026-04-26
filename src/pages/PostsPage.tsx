import { posts } from '@/data/posts';
import PostCard from '@/components/PostCard';
import { BookOpen } from 'lucide-react';

const PostsPage = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <BookOpen className="h-8 w-8 mr-3" />
          <div>
            <h1 className="text-3xl font-bold">全部文章</h1>
            <p className="text-muted-foreground">共 {posts.length} 篇文章</p>
          </div>
        </div>
        
        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
