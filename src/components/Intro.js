import { Button, Col, Container, Row } from 'react-bootstrap'
import '../style/LandingPage.css'
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-item-center">
        <Row>
          <Col>
            <div className="title">Nonton yuk </div>
            <div className="title">
              Sebelum nonton itu <br />
              di larang!!
            </div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href="#trending">
                Lihat Semua List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Intro
