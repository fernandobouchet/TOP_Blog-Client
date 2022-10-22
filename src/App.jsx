import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
