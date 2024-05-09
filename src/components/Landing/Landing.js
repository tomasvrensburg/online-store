import Login from '../formik/Login';
import Register from '../formik/Register';
// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Importing stylesheet
import './landing.css';
// Importing images
import galleryOne from '../../images/galleryOne.webp';
import galleryTwo from '../../images/galleryTwo.webp';
import galleryThree from '../../images/galleryThree.webp';
import galleryFour from '../../images/galleryFour.webp';
import galleryFive from '../../images/galleryFive.webp';
import gallerySix from '../../images/gallerySix.webp';
import gallerySeven from '../../images/gallerySeven.webp';
import galleryEight from '../../images/galleryEight.webp';
import galleryNine from '../../images/galleryNine.webp';
import galleryTen from '../../images/galleryTen.webp';
import galleryEleven from '../../images/galleryEleven.jpeg';
import galleryTwelve from '../../images/galleryTwelve.webp';
import productOne from '../../images/IMG_0949.jpg.webp';
import productTwo from '../../images/IMG_0895.jpg.webp';
import productThree from '../../images/IMG_0874.jpg.webp';
import productFour from '../../images/IMG_0716.jpg.webp';

export default function Landing() {
  // Array for image src
  const imageSRC = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySix,
    gallerySeven,
    galleryEight,
    galleryNine,
    galleryTen,
    galleryEleven,
    galleryTwelve
  ];

  return (
    <div className="Landing">
      <div className="banner-image" />
      <h6>WELL HELLŌ</h6>
      <h2>Coffee sculpted. Community included.</h2>
      <p className="introduction">
        Come experience the ultimate coffee experience at Plato Coffee. Our premium coffee are expertly crafted to deliver exceptional flavours and quality. From bold and rich to smooth and creamy, we have something to satisfy every palate. Our cosy atmosphere and friendly staff create the perfect environment to relax and enjoy your favourite brew. Visit us today and taste the difference.
      </p>

      <div className="gallery">
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-5">
          {/* Array for rendering gallery */}
          {Array.from({ length: 12 }).map((_, index) => (
            <Col key={index}>
              <img src={imageSRC[index]} alt="Gallery" className="galleryImage img-fluid" />
            </Col>
          ))}
        </Row>
      </div >
      <section id="featuredProducts">
        <h2>Featured products</h2>
        <Row xs={2} sm={2} md={4} className="g-4 featured-container">
          <Col>
            <img src={productOne} className="img-fluid" alt="Man wearing sage Plato sweater" />
            <p>Men's Sweater - Sage</p>
            <p className="featuredProduct-price">R 750.00</p>
          </Col>
          <Col>
            <img src={productTwo} className="img-fluid" alt="Man wearing grey unisex t-shirt with Plato logo" />
            <p>Unisex Tee - Grey Melange - Plato</p>
            <p className="featuredProduct-price">R 250.00</p>
          </Col>
          <Col>
            <img src={productThree} className="img-fluid" alt="Woman wearing grey unisex t-shirt with Ō on" />
            <p>Unisex Tee -Grey Melange - Ō</p>
            <p className="featuredProduct-price">R 250.00</p>
          </Col>
          <Col>
            <img src={productFour} className="img-fluid" alt="Woman wearing sage Plato sweater" />
            <p>Ladies Sweater - Sage</p>
            <p className="featuredProduct-price">R 750.00</p>
          </Col>
        </Row>
      </section>
      <section id="featuredStore">
        <p>CAFE #31 . 5 AUGUST 2023</p>
        <h1>Bedfordview</h1>
        <p>
          <em>55 Van Buuren Road, Bedfordview, Johannesburg.</em>
        </p>
        <br />
        <p>Mon - Sat: 6am - 6pm . Sun: 7am - 6pm</p>
        <a href="https://maps.app.goo.gl/oKznRf2nfJCdzSvx5" target="_blank" rel="noreferrer">GOOGLE MAPS</a>
      </section>

      {/* Login / Register */}
      <div id='login-container'>
        <Login />
        <h4 id='loginOR'>OR</h4>
        <Register />
      </div>

    </div>
  );
}