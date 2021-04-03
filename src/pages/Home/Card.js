/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import { Card as Card1, CardMedia, makeStyles } from "@material-ui/core";
import "./Card.css";
import Grid from "@material-ui/core/Grid";
import { AddCart, AddCartButton } from "../../components/index";
import ReadMoreReact from "read-more-react";
import { ReadMore } from "react-revolution";
import { NonVeg, Veg, Egg } from "../../components/Icons_Final/Icon";
import { CardStyles } from "./CardStyles";
// import { decrementCart, incrementCart } from '../../redux';
// import { connect } from 'react-redux';

const Card = (props) => {
  const { product } = props;
  const { category_name, item_img } = product;

  const classes = CardStyles();

  const IMAGE = (category_name, item_img) => {
    if (item_img) {
      return `${process.env.REACT_APP_IMAGE_URL}${item_img}`;
    } else {
      return `${process.env.REACT_APP_IMAGE_URL}default.jpg`;
    }
  };

  // console.log(IMAGE(category_name, item_img));
  // key={data.item_id}

  return (
    <Grid item>
      <Card1 className="productCardStyle">
        {/* {product.item_id % 4 === 0 ? (
        <CardMedia className={classes.media} image={water} />
      ) : (
        <CardMedia className={classes.media} image={egg} />
      )} */}
        <CardMedia
          className={classes.media}
          image={IMAGE(category_name, item_img)}
        />
        <Grid container className={classes.productCardAlignment}>
          {product.variant ? (
            <Grid container className={classes.productDetail}>
              <Grid item xs={1} className={classes.textAlign}>
                {product.variant === "V" ? (
                  <Veg />
                ) : product.variant === "NV" ? (
                  <NonVeg />
                ) : (
                  <Egg />
                )}
              </Grid>
              <Grid item xs={8} className={classes.textAlign}>
                <p>
                  <strong>{product.item_name}</strong>
                </p>
              </Grid>
              <Grid item xs={3} className={classes.PriceAlignment}>
                <p>&#x20B9; {product.online_price}/-</p>
              </Grid>
            </Grid>
          ) : (
            <Grid container className={classes.productDetail}>
              <Grid item xs={9} className={classes.textAlign}>
                <strong>{product.item_name}</strong>
              </Grid>
              <Grid item xs={3} className={classes.PriceAlignment}>
                <p>&#x20B9; {product.online_price}/-</p>
              </Grid>
            </Grid>
          )}
          <Grid container className={classes.cardBody}>
            <Grid item xs={9} className={classes.textAlign1}>
              {product.description ? (
                <ReadMore
                  addClass="rr-read-more-example"
                  animation="opacity"
                  data={
                    product.description ? product.description.slice(0, 35) : ""
                  }
                  toggleForwards={
                    <span className="read-more-button"> ....More </span>
                  }
                  dataToggle={
                    product.description ? product.description.slice(36) : ""
                  }
                  toggleBackwards={
                    <span className="read-less-button"> .... Less </span>
                  }
                />
              ) : (
                product.item_name
              )}
            </Grid>
            <Grid item xs={3} className={classes.PriceAlignment}>
              {product.allowed_addons || product.allowed_weights ? (
                <AddCart product={props.product} />
              ) : (
                <AddCartButton product={props.product} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Card1>
    </Grid>
  );
};

export default Card;

// const changeUnit = (item) => {
//     console.log(item)
//     var store = []

//     if(localStorage.getItem('addcart') === null){
//         let product1 = item
//         store.push(product1);
//         localStorage.setItem('addcart',JSON.stringify(store))
//         }else{
//         var stored = JSON.parse(localStorage.getItem('addcart'))
//         // console.log(stored)
//         var product2 = item;
//         stored.push(product2)
//         localStorage.setItem('addcart',JSON.stringify(stored))
//         }
//     }

// data={changeUnit}
// const mapStateToProps = state => {
//   return {
//       numOfProducts : state.numOfProducts
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     incrementCart : () => dispatch(incrementCart()),
//     decrementCart : () => dispatch(decrementCart())
//   }
// }

{
  /* <CardMedia
className={classes.media}
// image={IMAGE(category_name, item_img)}
/> */
}

// console.log(product);
// console.log(`${product.item_img}`);
// console.log({ a: category_name, b: item_img });
// const image = product.item_img
//   ? `${process.env.REACT_APP_IMAGE_URL}${product.item_img}`
//   : `${process.env.REACT_APP_IMAGE_URL}default_juice.jpeg`;

// const IMAGE = (category_name, item_img) => {
//   if (item_img) {
//     return `${process.env.REACT_APP_IMAGE_URL}${item_img}`;
//   } else {
//     if (category_name === "Juices") {
//       return `${process.env.REACT_APP_IMAGE_URL}default_juice.jpeg`;
//     } else if (category_name === "Salads") {
//       return `${process.env.REACT_APP_IMAGE_URL}default_salad.jpeg`;
//     } else if (category_name === "Sandwiches") {
//       return `${process.env.REACT_APP_IMAGE_URL}default_sandwich.jpeg`;
//     } else {
//       return `${process.env.REACT_APP_IMAGE_URL}default_juice.jpeg`;
//     }
//   }
// };
