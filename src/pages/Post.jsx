import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import postService from '../features/postService';
import { Container } from 'react-bootstrap';
import Comment from '../components/Comment';
import CreateComment from '../components/CreateComment';
import Loading from '../components/Loading';
import Divider from '../components/Divider';

const Post = () => {
  const { id } = useParams();

  const [post, setPostData] = useState();

  useEffect(() => {
    postService.getPostById(id).then((post) => {
      setTimeout(() => {
        setPostData(post);
      }, 500);
    });
  }, []);

  return (
    <>
      {post ? (
        <>
          <Container className="text-center" style={{ flex: '1' }}>
            <h1>{post.title}</h1>
            <p>{post.text}</p>
          </Container>
          <Divider />
          <Container className="text-center">
            <h5>Comments ({post.messages.length}):</h5>
            {post.messages.map((comment, index) => (
              <Comment key={comment.id || index} comment={comment} />
            ))}
          </Container>
          <Container>
            <CreateComment setPostData={setPostData} />
          </Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Post;
