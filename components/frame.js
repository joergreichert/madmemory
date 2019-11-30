import Head from '../components/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../styles.css"

export default ({ children }) => (
  <div>
    <Head title="MadMemory" />
    <Container className="frame">
      <Row>
        <div className="title">MadMemory</div>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <div className="description">
            Can you remember it?
          </div>
        </Col>
      </Row>
      <Row>
        {children}
      </Row>
    </Container>
  </div>
);