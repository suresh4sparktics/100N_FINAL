/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  cartContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100vh !important",
      margin: "65px auto 0px auto !important",
    },
    width: "75%",
    height: "100vh !important",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "100px 0px",
    minHeight: "100% !important",
    backgroundColor: "white",
  },
  cartBodyStyling: {
    backgroundImage: `url(${pattern})`,
    height: "100vh !important",
  },
  root1: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none !important",
      backgroundRepeat: "none !important",
      padding: "0px",
    },
  },
  cardBodyStyle: {
    padding: "40px !important",
  },
  cardAlignStyle: {
    padding: "20px !important",
    boxShadow: "0px 0.5px 2px #47a848, 0px 0.5px 1px #47a848 !important",
  },
  hyperlinkStyle: {
    textDecoration: "none",
    color: "#47a848",
  },
  orderContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ff7171",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      padding: "15px",
    },
  },
  cartHeaderName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "30px",
    color: "#47a848",
  },
}));
function OrderFailed() {
  const classes = useStyles();
  return (
    // <Grid container className={classes.root1}>
    // <Grid container spacing={2} className={classes.cartContainer}>
    <Grid item xs={12} sm={12}>
      <p className={classes.orderContent}>
        Sorry, Your Order is Failed. Please Try Again.
      </p>
    </Grid>
    // </Grid>
    // </Grid>
  );
}

export default OrderFailed;
