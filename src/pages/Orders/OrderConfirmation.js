/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";
import { useHistory } from "react-router-dom";
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
    backgroundColor: "#47a84861",
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
  spanClick: {
    cursor: "pointer",
    color: "#47a848",
  },
}));
function OrderConfirmation(props) {
  const classes = useStyles();
  useEffect(() => {});
  const history = useHistory();

  return (
    <Grid item xs={12} sm={12}>
      <span className={classes.cartHeaderName}>Order Confirmation</span>
      <p className={classes.orderContent}>
        {" "}
        Your order(#{props.text}) has been successfully placed. To track your
        orders{" "}
        <span
          onClick={() => {
            history.push("/orders");
          }}
          className={classes.spanClick}
        >
          &nbsp; [Go Here]
        </span>
      </p>
    </Grid>
  );
}

export default OrderConfirmation;
