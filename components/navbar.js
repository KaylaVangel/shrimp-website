import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

const Navigationbar = () => {
  return (
  <Navbar expand="lg">
    <Container fluid>
      <Link href="/" passHref><Navbar.Brand>Kayla&apos;s Cardinas</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/" passHref>Home</Nav.Link>
          <NavDropdown title="Store" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/store/shrimp" passHref>
              Shrimp
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <Link href="/store/plants" passHref><NavDropdown.Item>Plants</NavDropdown.Item></Link>
            <NavDropdown.Divider />
            <Link href="/store/frags" passHref><NavDropdown.Item>Frags</NavDropdown.Item></Link>
            <NavDropdown.Divider /> */}
            <NavDropdown.Item href="/store/accessories" passHref>
              3D Printed Accessories
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/store/all" passHref>All Products</NavDropdown.Item>
          </NavDropdown>
         {/*<Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>*/}
         <Nav.Link href="/care" passHref>Shrimp Care</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navigationbar