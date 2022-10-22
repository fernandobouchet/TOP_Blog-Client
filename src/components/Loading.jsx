import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <>
      <Container
        style={{ flex: '1' }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner
          animation="grow"
          style={{ minWidth: '7rem', minHeight: '7rem' }}
        />
      </Container>
    </>
  );
};

export default Loading;
