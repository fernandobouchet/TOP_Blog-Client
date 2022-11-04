import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import commentService from '../features/commentService';
import { getErrorMessage } from '../helpers/functions';

const CreateComment = ({ postId, setPostData }) => {
  const [formData, setFormData] = useState({
    postId: postId,
    username: '',
    text: '',
  });
  const [errors, setErrors] = useState(null);

  const { username, text } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendMessage = await commentService.sendComment(formData);
    if (sendMessage.status === 400) {
      setErrors(sendMessage.data.errors);
      return;
    }
    setErrors(null);
    setPostData((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, formData],
    }));
    clearSubmit();
  };

  const clearSubmit = () => {
    setFormData({
      postId: postId,
      username: '',
      text: '',
    });
  };

  return (
    <>
      <Container className="text-center mb-5">
        <h5>Send a comment:</h5>
        <Form
          noValidate
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
              isInvalid={getErrorMessage(errors, 'username')}
            />
            <Form.Control.Feedback type="invalid">
              {getErrorMessage(errors, 'username')}
            </Form.Control.Feedback>
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
              isInvalid={getErrorMessage(errors, 'text')}
            />
            <Form.Control.Feedback type="invalid">
              {getErrorMessage(errors, 'text')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-1">
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default CreateComment;
