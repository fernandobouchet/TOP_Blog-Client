import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Post = ({ data }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>{' '}
          <Card.Subtitle className="mb-2 text-muted">
            By {data.author}
          </Card.Subtitle>
          <Card.Text className="text-truncate">{data.text}</Card.Text>
          <div className="text-center">
            <Button as={Link} to={`post/${data._id}`} variant="dark">
              Read
            </Button>
          </div>
        </Card.Body>
        <Card.Footer style={{ textAlign: 'right' }} className="text-muted">
          {data.date_formatted}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Post;
