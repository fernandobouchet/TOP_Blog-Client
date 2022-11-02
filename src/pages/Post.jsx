import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import postService from '../features/postService';
import { Container } from 'react-bootstrap';
import Comment from '../components/Comment';
import CreateComment from '../components/CreateComment';
import Loading from '../components/Loading';
import Divider from '../components/Divider';
import arrayBufferToBase64 from '../helpers/functions';

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
        <Container style={{ flex: '1' }}>
          <Container id="post-content" className="text-center">
            <h1>{post.title}</h1>
            <p className="text-muted text-start">
              {post.author} | {post.date_formatted}
            </p>
            <img
              src={`data:image/png;base64,${arrayBufferToBase64(
                post.image.data.data
              )}`}
              alt="Post image"
              width={'100%'}
            />
            <p id="post-text">{post.text}</p>
          </Container>
          <Divider />
          <Container className="text-center">
            <h5>Comments ({post.messages.length}):</h5>
            {post.messages.map((comment, index) => (
              <Comment key={comment.id || index} comment={comment} />
            ))}
          </Container>
          <Divider />
          <Container>
            <CreateComment setPostData={setPostData} />
          </Container>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Post;
