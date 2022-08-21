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
      <Navbar.Brand href="#">Kayla's Cardinas</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
          <NavDropdown title="Store" id="navbarScrollingDropdown">
            <Link href="/store/plants" passHref><NavDropdown.Item>Plants</NavDropdown.Item></Link>
            <NavDropdown.Divider />
            <Link href="/store/caridina" passHref><NavDropdown.Item>
              Caridina
            </NavDropdown.Item></Link>
            <NavDropdown.Divider />
            <Link href="3d"><NavDropdown.Item>
              3D Printed Acessorites
            </NavDropdown.Item></Link>
          </NavDropdown>
         <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
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