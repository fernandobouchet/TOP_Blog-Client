import { Container, Row, Col } from 'react-bootstrap';
import Post from '../components/Post';
import PostMain from '../components/PostMain';

const Home = ({ posts }) => {
  return (
    <Container>
      <header className="container">
        <h1>Blog</h1>
        <p>
          This is a blog created as a full-stack app, part of the TOP
          assignaments.
        </p>
      </header>
      {posts.length !== 0 && (
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
