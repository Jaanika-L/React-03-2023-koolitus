import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Õpetajatelt  õpetajatele</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Avaleht</Nav.Link>
            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
            <NavDropdown title="Kataloog" id="basic-nav-dropdown">
              <NavDropdown.Item href="/formaat">Formaat</NavDropdown.Item>
              <NavDropdown.Item href="/hind">
                Hind
              </NavDropdown.Item>
              <NavDropdown.Item href="/klassid">Klassid</NavDropdown.Item>
              <NavDropdown.Item href="/teemad">Teemad</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;