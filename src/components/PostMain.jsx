import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import arrayBufferToBase64 from '../helpers/functions';

const PostMain = ({ post }) => {
  return (
    <>
      <Card as={Link} to={`post/${post._id}`} className="h-100">
        <Card.Img
          src={`data:image/png;base64,${arrayBufferToBase64(
            post.image.data.data
          )}`}
          width="100px"
        ></Card.Img>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text className="text-truncate">{post.text}</Card.Text>
          <Card.Text className="mb-2 text-muted">
            By {post.author} | {post.date_formatted}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostMain;
