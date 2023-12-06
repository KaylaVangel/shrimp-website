import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

const Navigationbar = () => {
  return (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Link href="/" passHref><Navbar.Brand>Kayla's Cardinas</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
          <NavDropdown title="Store" id="navbarScrollingDropdown">
            <Link href="/store/shrimp" passHref><NavDropdown.Item>
              Shrimp
            </NavDropdown.Item></Link>
            <NavDropdown.Divider />
            {/* <Link href="/store/plants" passHref><NavDropdown.Item>Plants</NavDropdown.Item></Link>
            <NavDropdown.Divider />
            <Link href="/store/frags" passHref><NavDropdown.Item>Frags</NavDropdown.Item></Link>
            <NavDropdown.Divider /> */}
            <Link href="/store/accessories" passHref><NavDropdown.Item>
              3D Printed Accessories
            </NavDropdown.Item></Link>
            <NavDropdown.Divider />
            <Link href="/store/all" passHref><NavDropdown.Item>All Products</NavDropdown.Item></Link>
          </NavDropdown>
         <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
         <Link href="/care" passHref><Nav.Link>Shrimp Care</Nav.Link></Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Navigationbar