import {
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_SUCCESS,
  FETCH_ADDON_START,
  FETCH_ADDON_FAIL,
  FETCH_ADDON_SUCCESS,
  ADD_CART,
  REMOVE_CART,
  INCREMENT,
  DECREMENT,
  ADD_CART_BUTTON,
  REMOVE_CART_BUTTON,
  REMOVE_CART_BUTTON1,
  EMPTY_CART,
  FETCH_COUPON_START,
  FETCH_COUPON_FAIL,
  FETCH_COUPON_SUCCESS,
} from "./productTypes";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_PRODUCT_START,
      });
      const products = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}get-products`
      );
      // console.log(products);
      var product = products.data.body;
      // console.log(product);
      dispatch({
        type: FETCH_PRODUCT_SUCCESS,
        payload: product,
      });
    } catch (err) {
      dispatch({
        type: FETCH_PRODUCT_FAIL,
        payload: err,
        error: true,
      });
    }
  };
};

export const fetchAddOns = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_ADDON_START,
      });
      const addOns = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}get-add-ons`
      );
      var addOn = addOns.data.body;
      // console.log(addOn);
      dispatch({
        type: FETCH_ADDON_SUCCESS,
        payload: addOn,
      });
    } catch (err) {
      dispatch({
        type: FETCH_ADDON_FAIL,
        payload: err,
        error: true,
      });
    }
  };
};

export const fetchCoupons = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FETCH_COUPON_START,
      });
      const coupons = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}get-coupons`
      );
      var coupon = coupons.data.body;
      // console.log(coupon);
      dispatch({
        type: FETCH_COUPON_SUCCESS,
        payload: coupon,
      });
    } catch (err) {
      dispatch({
        type: FETCH_COUPON_FAIL,
        payload: err,
        error: true,
      });
    }
  };
};

export const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

export const removeCart = (id) => {
  return {
    type: REMOVE_CART,
    payload: id,
  };
};

export const increment = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const decrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

export const addCartButton = (product) => {
  return {
    type: ADD_CART_BUTTON,
    payload: product,
  };
};

export const removeCartButton = (id) => {
  return {
    type: REMOVE_CART_BUTTON,
    payload: id,
  };
};

export const removeCartButton1 = (id) => {
  return {
    type: REMOVE_CART_BUTTON1,
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

// export const fetchPhones = () => {
//     return (dispatch) => {
//         dispatch(fetchPhoneStart)
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(data => data.json())
//         .then(data => {
//             const data1 = data;
//             dispatch(fetchPhoneSuccess(data1))
//         })
//         .catch(err => dispatch(fetchPhoneError(err)))
//     }
// }

// export const fetchProductStart = () => {
//   return {
//     type: FETCH_PRODUCT_START,
//   };
// };

// export const fetchProductSuccess = (user) => {
//   return {
//     type: FETCH_PRODUCT_SUCCESS,
//     payload: user,
//   };
// };

// export const fetchProductError = (error) => {
//   return {
//     type: FETCH_PRODUCT_FAIL,
//     payload: error,
//   };
// };
