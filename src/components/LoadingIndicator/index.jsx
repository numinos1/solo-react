import { Container, Message } from './styles';

/**
 * Loading Indicator
 */
export default function LoadingIndicator() {
  return (
      <Container>
        <Message>
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>

          <h2>LOADING</h2>
          <span>details from the server</span>
        </Message>
      </Container>
  );
}
