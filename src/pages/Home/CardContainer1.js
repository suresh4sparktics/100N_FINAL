/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import {
  fetchAddOns,
  fetchCoupons,
  fetchProducts,
} from "../../redux/product/productAction";
import { connect } from "react-redux";
import ScrollBar from "../Swiper/ScrollBar";
import Dialog from "@material-ui/core/Dialog";
import popup from "./popupImage.jpg";
import popup2 from "./popupImage(1).jpg";
import { Button } from "@material-ui/core";
import FooterItem from "../FooterItems/FooterItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Binoculars } from "../Icons_Final/Icon";
import { CardContainerStyles } from "./CardContainerStyles";
import loader from "../../100N_Loader.gif";
import { Element } from "react-scroll";
// import Element from "./New_Element";

function CardContainer(props) {
  const { products, loadingProduct } = props;
  const [open, setOpen] = useState(true);
  const matches = useMediaQuery("(min-width:600px)");

  const classes = CardContainerStyles();
  useEffect(() => {
    props.fetchProducts();
    props.fetchAddOns();
    props.fetchCoupons();
    const value = sessionStorage.getItem("popup");
    if (value) {
      setOpen(false);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("popup", "shown");
  };

  return (
    <Grid container className={classes.root1}>
      <ScrollBar />
      {loadingProduct ? (
        <Grid
          container
          spacing={2}
          className={classes.ImageCardContainerStyle}
          justify="center"
          alignItems="center"
        >
          <img src={loader} alt="loading..." className={classes.loader} />
        </Grid>
      ) : (
        <Grid container spacing={2} className={classes.CardContainerStyle}>
          <Element name="mostloved" id="mostloved">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.best_seller === 1) {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="combo" id="combo">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.category_name === "Combos") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="alldaybreakfast" id="alldaybreakfast">
            <Grid
              component="section"
              container
              id="alldaybreakfast"
              spacing={2}
            >
              {products
                ? products.map((data) => {
                    if (data.category_name === "All Day Breakfast") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="lunch/dinner" id="lunch/dinner">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.category_name === "Lunch/Dinner") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="juices" id="juices">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.category_name === "Juices") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="fruitbowls" id="fruitbowls">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.category_name === "Fruit Bowls") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="salads" id="salads">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.category_name === "Salads") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
          <Element name="sandwiches" id="sandwiches">
            <Grid component="section" container spacing={2}>
              {products
                ? products.map((data) => {
                    if (data.category_name === "Sandwiches") {
                      return (
                        <Grid key={data.item_id} item xs={12} sm={6} md={4}>
                          <Card product={data} />
                        </Grid>
                      );
                    }
                  })
                : null}
            </Grid>
          </Element>
        </Grid>
      )}
      <FooterItem />
      <Dialog
        classes={{ paperWidthSm: classes.popupDialog }}
        scroll={"body"}
        open={open}
        onClose={handleClose}
      >
        <img
          width="100%"
          height="100%"
          src={matches ? popup : popup2}
          alt="PopUp Image"
          className={classes.popupImage}
        />
        <div className={classes.buttonContainer}>
          <Button
            onClick={handleClose}
            className={classes.popupButton}
            classes={{ label: classes.labelFontWeight }}
            startIcon={<Binoculars />}
          >
            Explore
          </Button>
        </div>
      </Dialog>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.product.product,
    loadingProduct: state.product.loadingProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchAddOns: () => dispatch(fetchAddOns()),
    fetchCoupons: () => dispatch(fetchCoupons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
