import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Post = ({ data }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text className="text-truncate">{data.text}</Card.Text>
          <Button as={Link} to={`post/${data._id}`} variant="primary">
            Read
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Date:{data.date_formatted}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Post;
