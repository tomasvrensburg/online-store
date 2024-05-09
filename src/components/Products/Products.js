// Import Stylesheet
import './products.css';
// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Importing icon
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/counter';

export default function Products() {
  // Defining global variables
  const productCatalogue = useSelector((state) => state.counter.productCatalogue);
  const dispatch = useDispatch();

  return (
    <div className="Products">
      <div className="products-banner-image">
        <h1>Products</h1>
      </div>
      <div className="products-container">
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-5">
          {/* Array for rendering product */}
          {Array.from({ length: 10 }).map((_, index) => (
            <Col key={index}>
              <div className="productImage">
                <img src={productCatalogue[index].image} alt="product" className="img-fluid" />
                {/* Button based on whether product is in cart or not */}
                {!productCatalogue[index].addedToCart &&
                  <button className="addToCart-Button"
                    onClick={() => dispatch(addToCart(index))}>
                    Add to cart
                    <FaShoppingCart className='icon' />
                  </button>}
                {productCatalogue[index].addedToCart &&
                  <button className="addedToCart-Button">
                    Added To Cart
                    <FaCheck className='icon' />
                  </button>}
              </div>
              <p>{productCatalogue[index].title}</p>
              <p className="featuredProduct-price">
                <strong>R {productCatalogue[index].price}</strong>
              </p>
            </Col>
          ))}
        </Row>
      </div >
    </div>
  );
}