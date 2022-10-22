import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Post = ({ data }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.text}</Card.Text>
          <Button as={Link} to={`post/${data._id}`} variant="primary">
            Read
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
