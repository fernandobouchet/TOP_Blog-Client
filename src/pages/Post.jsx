import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import postService from '../features/postService';
import { Container } from 'react-bootstrap';

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    postService.getPostById(id).then((post) => {
      setPost(post);
    });
  }, []);

  return (
    <>
      {post.length !== 0 && (
        <Container>
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </Container>
      )}
    </>
  );
};

export default Post;
