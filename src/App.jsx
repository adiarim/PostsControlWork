import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { PostsPage } from './pages/PostsPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { CreatePostPage } from './pages/CreatePostPage';

export function App() {
  return (
    <div className="app-container">
      <Header /> 
      
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/auth" element={<LoginPage />} />

        <Route 
          path="/create" 
          element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
}