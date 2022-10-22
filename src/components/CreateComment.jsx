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
      <Container className="text-center">
        <h5>Write a comment:</h5>
        <Form
          style={{ maxWidth: '28rem' }}
          className="m-auto"
          onSubmit={handleSubmit}
        >
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Comment
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Comment"
                name="text"
                value={text}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default CreateComment;
