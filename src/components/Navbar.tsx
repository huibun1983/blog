import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, Tag, Home, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/posts', label: '文章', icon: BookOpen },
    { path: '/tags', label: '标签', icon: Tag },
    { path: '/about', label: '关于', icon: User },
  ];
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-8 flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">我的博客</span>
        </Link>
        
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? 'default' : 'ghost'}
              asChild
            >
              <Link to={item.path} className="flex items-center space-x-2">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>
        
        {/* 管理入口 - 右对齐 */}
        <div className="ml-auto">
          <Button variant="default" size="sm" asChild>
            <a href="/admin" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <PenLine className="h-4 w-4" />
              <span>写文章</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;