import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';
import PostMain from '../components/PostMain';
import postService from '../features/postService';

const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    postService.getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <Container>
      {posts && (
        <Container>
          <div className="py-4">
            <PostMain post={posts[0]} />
          </div>
          <Row xs={1} md={2} className="g-4">
            {posts.slice(1).map((post) => (
              <Col key={post._id}>
                <Post data={post} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Home;
