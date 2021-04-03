/* eslint-disable no-unused-vars */
import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addCartButton,
  removeCartButton,
  removeCart,
} from "../../redux/product/productAction";
import { AddCartButton as useStyles } from "./AddCartStyles";

function AddCartButton(props) {
  const { product, addCartButton, removeCartButton } = props;
  // console.log(product);

  const [numOfProducts, setNumOfProducts] = useState(1);
  const [total, setTotal] = useState(product[5]);
  const [res, setRes] = useState(true);
  const [cart, setCart] = useState({
    productname: product.item_name,
    selectedQuantity: numOfProducts,
    price: product.online_price,
    total: product.online_price * numOfProducts,
    id: product.item_id,
    variant: product.variant,
  });

  const classes = useStyles();

  const incrementCart = (e) => {
    e.preventDefault();
    setNumOfProducts((prevState) => prevState + 1);
    setTotal((prevState) => prevState + product.price);
    addCartButton({
      productname: product.item_name,
      selectedQuantity: numOfProducts + 1,
      price: product.online_price,
      total: product.online_price * (numOfProducts + 1),
      id: product.item_id,
      variant: product.variant,
    });
  };
  const decrementCart = (e) => {
    e.preventDefault();
    if (numOfProducts > 1) {
      setNumOfProducts((prevState) => prevState - 1);
      setTotal((prevState) => prevState - product.price);
      removeCartButton({
        productname: product.item_name,
        selectedQuantity: numOfProducts - 1,
        price: product.online_price,
        total: product.online_price * (numOfProducts - 1),
        id: product.item_id,
        variant: product.variant,
      });
    } else {
      removeCartButton({
        productname: product.item_name,
        selectedQuantity: numOfProducts,
        price: product.online_price,
        total: product.online_price * numOfProducts,
        id: product.item_id,
        variant: product.variant,
      });
      setRes(true);
    }
  };

  const changeButton = (e) => {
    e.preventDefault();
    setRes(false);
    addCartButton({
      productname: product.item_name,
      selectedQuantity: numOfProducts,
      price: product.online_price,
      total: product.online_price * numOfProducts,
      id: product.item_id,
      variant: product.variant,
    });
  };

  return res ? (
    <Button className={classes.buttonStyle} onClick={changeButton}>
      Add
    </Button>
  ) : (
    <>
      <Button
        className={classes.increment}
        onClick={decrementCart}
        disabled={numOfProducts === 0}
      >
        &#8722;
      </Button>
      <span className={classes.numberStyling}>{numOfProducts}</span>
      <Button className={classes.drecrement} onClick={incrementCart}>
        +
      </Button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    productCart: state.product.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCartButton: (id) => dispatch(addCartButton(id)),
    removeCartButton: (id) => dispatch(removeCartButton(id)),
    removeCart: (id) => dispatch(removeCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCartButton);
