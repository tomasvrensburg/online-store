import { Link } from 'react-router-dom';
// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Import stylesheet
import './footer.css';
// Import icons
import { FaTiktok, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Row>
        <Col>
          <p>2024 © Platō Coffee</p>
          <p>Coffee sculpted. Community included.</p>
          <p>07122019</p>
          <a href="https://www.facebook.com/coffee.plato/" target="_blank" rel="noreferrer" className="footer-link">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/plato.coffee/" target="_blank" rel="noreferrer" className="footer-link">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@plato.coffee" target="_blank" rel="noreferrer" className="footer-link">
            <FaTiktok />
          </a>
        </Col>
        <Col className='footer-link-container'>
          <Link to="/" className='footer-link'>Home</Link>
          <Link to="/products" className='footer-link'>Products</Link>
          <Link to="/cart" className='footer-link'>Shopping Cart</Link>
        </Col>
      </Row>
    </footer>
  );
}