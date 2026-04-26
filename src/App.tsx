import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import PostsPage from '@/pages/PostsPage';
import PostDetailPage from '@/pages/PostDetailPage';
import TagsPage from '@/pages/TagsPage';
import TagPostsPage from '@/pages/TagPostsPage';
import AboutPage from '@/pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:slug" element={<PostDetailPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/tags/:tagName" element={<TagPostsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
