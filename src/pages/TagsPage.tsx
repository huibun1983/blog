import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import { getAllTags } from '@/data/posts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TagsPage = () => {
  const tags = getAllTags();
  
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Tag className="h-8 w-8 mr-3" />
          <div>
            <h1 className="text-3xl font-bold">标签分类</h1>
            <p className="text-muted-foreground">共 {tags.length} 个标签</p>
          </div>
        </div>
        
        {/* Tags Grid */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Tag className="mr-2 h-5 w-5" />
              所有标签
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <Button
                  key={tag.name}
                  variant="secondary"
                  className="h-auto py-2 px-4"
                  asChild
                >
                  <Link to={`/tags/${encodeURIComponent(tag.name)}`}>
                    <span className="mr-2">#</span>
                    {tag.name}
                    <span className="ml-2 text-xs opacity-60">
                      ({tag.count})
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TagsPage;
