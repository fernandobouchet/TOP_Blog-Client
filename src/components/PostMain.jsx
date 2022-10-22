import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const PostMain = ({ post }) => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Latest</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
          <Button as={Link} to={`post/${post._id}`} variant="primary">
            Read
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{post.date}</Card.Footer>
      </Card>
    </>
  );
};

export default PostMain;
