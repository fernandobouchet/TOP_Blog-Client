import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <>
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner
          animation="grow"
          style={{ minWidth: '7rem', minHeight: '7rem' }}
        />
      </Container>
    </>
  );
};

export default Loading;
