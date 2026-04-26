import { User, Mail, Github, MapPin, Code, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <User className="h-8 w-8 mr-3" />
          <h1 className="text-3xl font-bold">关于我</h1>
        </div>
        
        {/* Profile Card */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                <User className="w-16 h-16 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">博客作者</h2>
                <p className="text-muted-foreground mb-4">全栈开发者 / 技术写作者</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    深圳
                  </div>
                  <a 
                    href="mailto:example@email.com" 
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    example@email.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* About Content */}
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">关于这个博客</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                欢迎来到我的个人博客！这是一个分享技术心得、生活感悟和成长记录的地方。
                我热爱技术，专注于 Web 开发领域，同时也在不断探索新的技术和工具。
              </p>
              <p>
                在这里，你可以找到关于前端开发、后端技术、DevOps、云原生等方面的文章。
                我希望通过分享自己的学习和实践经验，能够帮助到更多走在技术道路上的朋友们。
              </p>
              <p>
                如果你有任何问题或想法，欢迎通过邮件或 GitHub 与我联系。
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Skills */}
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2" />
              技术栈
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React', 'TypeScript', 'Node.js', 'Python',
                'Tailwind CSS', 'PostgreSQL', 'Docker', 'Kubernetes',
                'Git', 'GitHub', 'Cloudflare', 'AWS'
              ].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Contact */}
        <Card>
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">联系方式</h3>
            <div className="space-y-3">
              <a 
                href="mailto:example@email.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 mr-3" />
                example@email.com
              </a>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5 mr-3" />
                GitHub
              </a>
            </div>
          </CardContent>
        </Card>
        
        {/* Footer */}
        <Separator className="my-8" />
        <div className="text-center text-muted-foreground">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and React
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
