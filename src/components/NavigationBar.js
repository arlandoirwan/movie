import { Container, Nav, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>LANMOVIE</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#super">Super Hero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
export default NavigationBar
