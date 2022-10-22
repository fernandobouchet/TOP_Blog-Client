import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import commentService from '../features/commentService';

const CreateComment = ({ setPostData }) => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    postId: id,
    username: '',
    text: '',
  });

  const { username, text } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPostData((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, formData],
    }));
    commentService.sendComment(formData);
    clearSubmit();
  };

  const clearSubmit = () => {
    setFormData({
      username: '',
      text: '',
    });
  };

  return (
    <>
      <Container className="text-center mb-5">
        <h5>Send a comment:</h5>
        <Form
          style={{ maxWidth: '25rem' }}
          className="m-auto"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-1">
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              value={username}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="comment">Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              placeholder="Comment"
              name="text"
              id="comment"
              value={text}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Button variant="dark" type="submit">
              Send
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default CreateComment;
