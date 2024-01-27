import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigationbar = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Nav.Link href="/" ><Navbar.Brand>Kayla&apos;s Cardinas</Navbar.Brand></Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" >Home</Nav.Link>
            <NavDropdown title="Store" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/store/shrimp" >Shrimp</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/store/plants">Plants</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/store/frags">Frags</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/store/accessories">3D Printed Accessories</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/store">All Products</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/about" >About</Nav.Link>
            <Nav.Link href="/care" >Shrimp Care</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar