/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import {
  FETCH_PRODUCT_FAIL,
  FETCH_PRODUCT_START,
  FETCH_PRODUCT_SUCCESS,
  ADD_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_CART,
  FETCH_ADDON_START,
  FETCH_ADDON_SUCCESS,
  FETCH_ADDON_FAIL,
  ADD_CART_BUTTON,
  REMOVE_CART_BUTTON,
  REMOVE_CART_BUTTON1,
  EMPTY_CART,
  FETCH_COUPON_FAIL,
  FETCH_COUPON_SUCCESS,
  FETCH_COUPON_START,
} from "./productTypes";

const cart1 = JSON.parse(localStorage.getItem("addcart"));

const initialState = {
  loadingProduct: false,
  loadingAddon: false,
  loadingCoupon: false,
  product: [],
  addOn: [],
  coupon: [],
  errorProduct: "",
  errorAddOn: "",
  errorCoupon: "",
  cart: cart1 ? cart1 : [],
  total: 0,
};

export const productReducer = (state = initialState, action, dispatch) => {
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return { ...state, loadingProduct: true };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingProduct: false,
        product: action.payload,
        errorProduct: "",
      };

    case FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loadingProduct: false,
        product: [],
        errorProduct: action.payload,
      };

    case FETCH_ADDON_START:
      return { ...state, loadingAddon: true };

    case FETCH_ADDON_SUCCESS:
      return {
        ...state,
        loadingAddon: false,
        addOn: action.payload,
        errorAddOn: "",
      };

    case FETCH_ADDON_FAIL:
      return {
        ...state,
        loadingAddon: false,
        addOn: [],
        errorAddOn: action.payload,
      };

    case FETCH_COUPON_START:
      return { ...state, loadingCoupon: true };

    case FETCH_COUPON_SUCCESS:
      return {
        ...state,
        loadingCoupon: false,
        coupon: action.payload,
        errorAddOn: "",
      };

    case FETCH_COUPON_FAIL:
      return {
        ...state,
        loadingCoupon: false,
        coupon: [],
        errorCoupon: action.payload,
      };

    case ADD_CART: {
      const item = action.payload;
      let temp = state.cart;
      const existItem = state.cart.find((x) => x.id === item.id);
      const existItem1 = state.cart.find((x) => {
        if (x.id === item.id) {
          if (
            JSON.stringify(x.selectedAddons.sort()) ===
            JSON.stringify(item.selectedAddons.sort())
          ) {
            return item;
          }
        }
      });
      // console.log(existItem);
      // console.log(existItem1);
      const existItemIndex = state.cart.findIndex((x) => x.id === item.id);
      const existItemIndex1 = state.cart.findIndex((x) => {
        if (x.id === item.id) {
          if (
            JSON.stringify(x.selectedAddons.sort()) ===
            JSON.stringify(item.selectedAddons.sort())
          ) {
            return x;
          }
        }
      });
      if (existItem) {
        if (existItem1) {
          temp[existItemIndex1].selectedQuantity += 1;
          temp[existItemIndex1].total =
            temp[existItemIndex1].selectedQuantity *
            temp[existItemIndex1].price;
          localStorage.setItem("addcart", JSON.stringify(temp));
          return { ...state, cart: temp };
        } else {
          localStorage.setItem(
            "addcart",
            JSON.stringify([...state.cart, item])
          );
          return { ...state, cart: [...state.cart, item] };
        }
      } else {
        localStorage.setItem("addcart", JSON.stringify([...state.cart, item]));
        return { ...state, cart: [...state.cart, item] };
      }
    }

    case ADD_CART_BUTTON: {
      const item = action.payload;
      // console.log(item);
      const existItem = state.cart.find((x) => x.id === item.id);
      if (existItem) {
        let cart1 = [
          ...state.cart.reduce((acc, item) => {
            if (item.id === action.payload.id) {
              return acc.concat({
                ...item,
                selectedQuantity: item.selectedQuantity + 1,
                total: item.price * (item.selectedQuantity + 1),
              });
            }
            return acc.concat([item]);
          }, []),
        ];
        localStorage.setItem("addcart", JSON.stringify(cart1));
        return { ...state, cart: cart1 };
      } else {
        localStorage.setItem("addcart", JSON.stringify([...state.cart, item]));
        return { ...state, cart: [...state.cart, item] };
      }
    }

    case REMOVE_CART_BUTTON: {
      const item = action.payload;
      // console.log(item);
      const existItem = state.cart.find((x) => x.id === item.id);
      if (existItem && existItem.selectedQuantity > 1) {
        let cart1 = [
          ...state.cart.reduce((acc, item) => {
            if (item.id === action.payload.id) {
              return acc.concat({
                ...item,
                selectedQuantity: item.selectedQuantity - 1,
                total: item.price * (item.selectedQuantity - 1),
              });
            }
            return acc.concat([item]);
          }, []),
        ];
        localStorage.setItem("addcart", JSON.stringify(cart1));
        return { ...state, cart: cart1 };
      } else {
        let cart1 = [...state.cart.filter((x) => x.id !== item.id)];
        localStorage.setItem("addcart", JSON.stringify(cart1));
        return { ...state, cart: cart1 };
      }
    }

    case REMOVE_CART_BUTTON1: {
      const item = action.payload;
      // console.log(item);
      let cart1 = [...state.cart.filter((x) => x.id !== item.id)];
      localStorage.setItem("addcart", JSON.stringify(cart1));
      return { ...state, cart: cart1 };
    }

    case REMOVE_CART: {
      const item = action.payload;
      // console.log(item);
      let cart1 = [...state.cart.filter((x) => x.cartID !== item.cartID)];
      localStorage.setItem("addcart", JSON.stringify(cart1));
      return { ...state, cart: cart1 };
    }

    case INCREMENT: {
      // console.log(action.payload);
      let cart1 = [
        ...state.cart.reduce((acc, item, i) => {
          if (
            item.id === action.payload.id &&
            JSON.stringify(item.selectedAddons.sort()) ===
              JSON.stringify(action.payload.selectedAddons.sort())
          ) {
            return acc.concat({
              ...item,
              selectedQuantity: item.selectedQuantity + 1,
              total:
                item.price * (item.selectedQuantity + 1) +
                action.payload.selectedAddons.reduce(function (acc, curr) {
                  return acc + curr.addon_price;
                }, 0) *
                  (item.selectedQuantity + 1),
            });
          }
          return acc.concat([item]);
        }, []),
      ];
      localStorage.setItem("addcart", JSON.stringify(cart1));
      return { ...state, cart: cart1 };
    }

    case DECREMENT: {
      const existItem = state.cart.find((x) => {
        if (x.id === action.payload.id) {
          if (
            JSON.stringify(x.selectedAddons.sort()) ===
            JSON.stringify(action.payload.selectedAddons.sort())
          ) {
            return x;
          }
        }
      });
      if (existItem.selectedQuantity > 1) {
        let cart1 = [
          ...state.cart.reduce((acc, item, i) => {
            if (
              item.id === action.payload.id &&
              JSON.stringify(item.selectedAddons.sort()) ===
                JSON.stringify(action.payload.selectedAddons.sort())
            ) {
              return acc.concat({
                ...item,
                selectedQuantity: item.selectedQuantity - 1,
                total:
                  item.price * (item.selectedQuantity - 1) +
                  action.payload.selectedAddons.reduce(function (acc, curr) {
                    return acc + curr.addon_price;
                  }, 0) *
                    (item.selectedQuantity - 1),
              });
            }
            return acc.concat([item]);
          }, []),
        ];
        localStorage.setItem("addcart", JSON.stringify(cart1));
        return { ...state, cart: cart1 };
      } else {
        let cart1 = [
          ...state.cart.filter(
            (x) => x.selectedAddons.sort() !== existItem.selectedAddons.sort()
          ),
        ];
        localStorage.setItem("addcart", JSON.stringify(cart1));
        return { ...state, cart: cart1 };
      }
    }

    case EMPTY_CART: {
      // console.log(item);
      let cart1 = [];
      localStorage.setItem("addcart", JSON.stringify(cart1));
      return { ...state, cart: cart1 };
    }

    default:
      return state;
  }
};

// ADD_CART
// let temp = state.cart;
// const existItem = state.cart.find((x) => x.id === item.id);
// const existItem1 = state.cart.find((x) => {
//   if (x.id === item.id) {
//     if (
//       JSON.stringify(x.selectedAddons.sort()) ===
//       JSON.stringify(item.selectedAddons.sort())
//     ) {
//       return item;
//     }
//   }
// });
// console.log(existItem);
// console.log(existItem1);
// const existItemIndex = state.cart.findIndex((x) => x.id === item.id);
// const existItemIndex1 = state.cart.findIndex((x) => {
//   if (x.id === item.id) {
//     if (
//       JSON.stringify(x.selectedAddons.sort()) ===
//       JSON.stringify(item.selectedAddons.sort())
//     ) {
//       return x;
//     }
//   }
// });
// if (existItem) {
//   if (existItem1) {
//     temp[existItemIndex1].selectedQuantity += 1;
//     temp[existItemIndex1].total =
//       temp[existItemIndex1].selectedQuantity *
//       temp[existItemIndex1].price;
//     localStorage.setItem("addcart", JSON.stringify(temp));
//     return { ...state, cart: temp };
//   } else {
//     localStorage.setItem(
//       "addcart",
//       JSON.stringify([...state.cart, item])
//     );
//     return { ...state, cart: [...state.cart, item] };
//   }
// } else {
//   localStorage.setItem("addcart", JSON.stringify([...state.cart, item]));
//   return { ...state, cart: [...state.cart, item] };
// }

// REMOVE_CART
// const existItem = state.cart.find((x) => {
//   if (x.id === action.payload.product.id) {
//     if (
//       JSON.stringify(x.selectedAddons.sort()) ===
//       JSON.stringify(action.payload.product.selectedAddons.sort())
//     ) {
//       return x;
//     }
//   }
// });
