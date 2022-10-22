import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const PostMain = ({ post }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            By {post.author}
          </Card.Subtitle>
          <Card.Text className="text-truncate">{post.text}</Card.Text>
          <div className="text-center">
            <Button as={Link} to={`post/${post._id}`} variant="dark">
              Read
            </Button>
          </div>
        </Card.Body>
        <Card.Footer style={{ textAlign: 'right' }} className="text-muted">
          {post.date_formatted}
        </Card.Footer>
      </Card>
    </>
  );
};

export default PostMain;
