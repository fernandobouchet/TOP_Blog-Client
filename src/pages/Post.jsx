import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import postService from '../features/postService';
import { Container } from 'react-bootstrap';

const Post = () => {
  const { id } = useParams();

  const [post, setPostData] = useState();

  useEffect(() => {
    postService.getPostById(id).then((post) => {
      setPostData(post);
    });
  }, []);

  return (
    <>
      {post && (
        <Container>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
          <div>
            {post.messages.map((message) => (
              <p>{message.text}</p>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default Post;
