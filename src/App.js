import {
  Container,
  Row,
  Col,

} from 'react-bootstrap';

import ChatDetails from './components/ChatDetails/ChatDetails';
import ChatList  from './components/ChatList/ChatList';

const App = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <ChatList />
        </Col>
        <Col md={8}>
          <ChatDetails />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
