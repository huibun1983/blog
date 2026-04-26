import { Link } from 'react-router-dom';
import { Calendar, Tag as TagIcon, ArrowRight } from 'lucide-react';
import type { Post } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
        </div>
        <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
          <Link to={`/posts/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <TagIcon className="h-3 w-3 mr-1" />
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button variant="ghost" className="w-full" asChild>
          <Link to={`/posts/${post.slug}`} className="flex items-center justify-center">
            阅读全文
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
