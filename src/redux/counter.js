import { createSlice } from '@reduxjs/toolkit'
// Importing image sources
import productOne from '../images/IMG_0949.jpg.webp';
import productTwo from '../images/IMG_0895.jpg.webp';
import productThree from '../images/IMG_0874.jpg.webp';
import productFour from '../images/IMG_0716.jpg.webp';
import productFive from '../images/productFive.jpg';
import productSix from '../images/productSix.jpg';
import productSeven from '../images/productSeven.jpg';
import productEight from '../images/productEight.jpg';
import productNine from '../images/productNine.jpg';
import productTen from '../images/productTen.jpg';

const initialState = {
  // State for products
  productCatalogue: [
    {
      image: productOne,
      title: "Men's Sweater - Sage",
      price: 750.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productTwo,
      title: "Unisex Tee - Grey Melange - Plato",
      price: 250.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productThree,
      title: "Unisex Tee - Grey Melange - Ō",
      price: 250.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productFour,
      title: "Ladies Sweater - Sage",
      price: 750.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productFive,
      title: "Unisex Sweater - Grey Melange",
      price: 500.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productSix,
      title: "Plato House Blend - 1kg",
      price: 350.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productSeven,
      title: "Plato house blend - 250g",
      price: 100.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productEight,
      title: "Plato Socks",
      price: 189.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productNine,
      title: "Plato Travel Mug",
      price: 649.00,
      addedToCart: false,
      quantity: 0
    },
    {
      image: productTen,
      title: "Plato Water Bottle",
      price: 799.00,
      addedToCart: false,
      quantity: 0
    }
  ],
  cart: [],
  username: ""
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(state.productCatalogue[action.payload]);
      state.productCatalogue[action.payload].addedToCart = true;
      state.productCatalogue[action.payload].quantity = + 1;
    },
    decrease: (state, action) => {
      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
      }
    },
    increase: (state, action) => {
      state.cart[action.payload].quantity += 1;
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, decrease, increase, removeFromCart } = counterSlice.actions

export default counterSlice.reducer