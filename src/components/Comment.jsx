import { Card } from 'react-bootstrap';

const Comment = ({ comment }) => {
  return (
    <>
      <Card style={{ maxWidth: '25rem' }} className="mx-auto my-3 mw-50">
        <Card.Body>
          <div
            style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.175)' }}
            className="d-flex justify-content-between"
          >
            <h6>{comment.username}</h6>
            <span className="text-muted">
              {comment.date_formatted ? comment.date_formatted : 'Just now'}
            </span>
          </div>
          <p className="card-text text-start mt-2">{comment.text}</p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Comment;
