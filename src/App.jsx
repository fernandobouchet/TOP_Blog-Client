import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import postService from './features/postService';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
