import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoReorderTwo} from 'react-icons/io5'
import {AiOutlineShoppingCart} from 'react-icons/ai'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <div className="icon">
                <IoReorderTwo />
            </div>
            <div>Pepper</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <Nav.Link href="#action2">Career</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
            <div className="cart">
                <AiOutlineShoppingCart />
                <div>Cart</div>
            </div>
            <button className="button2" id='btn2'>Login</button>
            <button className="button1">Get Started</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;