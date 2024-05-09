import InfoModal from '../InfoModal';
import React from 'react';
// Import Stylesheet
import './shoppingCart.css';
// Import Icons
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";

// Importing bootstrap components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// Redux methods
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, removeFromCart } from '../../redux/counter';

export default function ShoppingCart() {
  // Defining global variables
  const cart = useSelector((state) => state.counter.cart);
  const dispatch = useDispatch();

  // State for shipping info
  const [modalShow, setModalShow] = React.useState(false);

  // Calculating total amount of cart
  let total = 0;
  cart.forEach(item => {
    total += (item.quantity * item.price);
  });

  return (
    <div className="ShoppingCart">
      <h2>
        Your Cart
      </h2>
      <hr />
      {cart.length <= 0 &&
        <h1 id='emptyCartHeading'>Your Cart is empty...</h1>
      }
      <div className='cart-container'>
        {cart.map((product, index) => (
          <>
            <Row className='cart-item' key={index}>
              <Col xs="auto" className='cartImage-container'>
                <img src={cart[index].image} alt='product' className='cartItem-image' />
              </Col >
              <Col xs="6" className='cart-column'>
                <h3>{cart[index].title}</h3>
                <p>R {cart[index].price}</p>
              </Col>
              <Col xs="auto" className='cart-column'>
                <div className='quantity-container'>
                  <button id='decrease' onClick={() => dispatch(decrease(index))}>
                    <FaMinus />
                  </button>
                  <div id='quantity'>{cart[index].quantity}</div>
                  <button id='increase' onClick={() => dispatch(increase(index))}>
                    <FaPlus />
                  </button>
                </div>
                <button id='removeButton' onClick={() => dispatch(removeFromCart(index))}>Remove</button>
              </Col>
            </Row>
            <hr />
          </>
        ))}
        {cart.length > 0 &&
          <div id='checkout'>
            <h2>Total: R {total}</h2>
            <h3>
              Shipping
              <IoIosHelpCircleOutline className='icon help-icon' onClick={() => setModalShow(true)} />
            </h3>

            {/* Modal for shipping info */}
            <InfoModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            {/* Input for shipping method */}
            <div className='block'>
              <div>
                <input type='radio' id='express' name='shippingMethod' value='express' />
                <label htmlFor='standard'>Express Shipping - R150</label>
              </div>
              <div>
                <input type='radio' id='standard' name='shippingMethod' value='standard' />
                <label htmlFor='standard'>Standard Shipping - R60</label>
              </div>
              <div>
                <input type='radio' id='collect' name='shippingMethod' value='collect' />
                <label htmlFor='collect'>Collection - R30</label>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
}