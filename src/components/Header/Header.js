import { Link } from 'react-router-dom';
// Importing Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
// Importing Logo and icons
import logo from '../../images/platoLogo.webp';
import shoppingBag from '../../images/shoppingBag.svg';
// Importing stylsheet
import './header.css';

export default function Header() {
  return (
    <header>

      {/* Off-canvas Navbar from Bootstrap */}
      <Navbar expand={false} className="mb-3">
        <Container fluid>
          <div className='navigationBar'>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt='"Plato Coffee" Logo' className='img-fluid nav-logo-img' />
              </Link>
            </Navbar.Brand>
            <Nav.Link>
              <Link to="/cart">
                <img src={shoppingBag} alt='Shopping Bag icon' />
              </Link>
            </Nav.Link>
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/" className='navigation-link'>Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/products" className='navigation-link'>Products</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/cart" className='navigation-link'>Shopping Cart</Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </header>
  );
}