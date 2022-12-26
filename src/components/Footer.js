import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3} className="foot">
            <h1>LANMOVIE</h1>
            <br />
            <p>jalan di tenagh jalan .com</p>
            <p>no:0812345678</p>
            <p>
              <i>wwww.lanmoivie.com</i>
            </p>
            <p>since:2022</p>
          </Col>
          <Col md={3} className="foot">
            <p>jalan di tenagh jalan .com</p>
            <p>no:0812345678</p>
            <p>
              <i>wwww.lanmoivie.com</i>
            </p>
            <p>since:2022</p>
          </Col>
          <Col md={3} className="foot">
            <p>jalan di tenagh jalan .com</p>
            <p>no:0812345678</p>
            <p>
              <i>wwww.lanmoivie.com</i>
            </p>
            <p>since:2022</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Footer
