import './../css/Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <p>Daniel Salas Rodríguez. 2023.</p>
          </Col>
        </Row>
      </Container >
    </footer>
  );
}

export default Footer;
