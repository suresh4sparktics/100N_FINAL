/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Phone from "../Phone/Phone";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Badge from "@material-ui/core/Badge";
import "./Footer.css";
import { connect } from "react-redux";
import {
  LockIconWhite,
  BasketIconWhite,
  ProfileIconWhite,
} from "../Icons_Final/Icon";
import { IconButton } from "@material-ui/core";
import { isLogged } from "../../redux/user/userAction";
import FooterMobileStyles from "./FooterMobileStyle";

function FooterMobile(props) {
  const { isLogged, user, cart } = props;
  const numOfCart = cart.reduce(function (prev, cur) {
    return prev + cur.selectedQuantity;
  }, 0);
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState("");

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      isLogged(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  const authChange = () => {
    setAuth(true);
  };

  const classes = FooterMobileStyles();

  return (
    <>
      <Grid container item xs={12} className={clsx(classes.root, "footer")}>
        <Grid item xs={6} className={classes.item}>
          {user.isLogged ? (
            <IconButton classes={{ root: classes.button }}>
              <Link to="/profile">
                <ProfileIconWhite />
              </Link>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setData("profile");
                authChange();
              }}
              classes={{ root: classes.button }}
            >
              <LockIconWhite />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={6} className={classes.item}>
          {user.isLogged ? (
            <IconButton classes={{ root: classes.button }}>
              <Badge
                badgeContent={numOfCart}
                classes={{ badge: classes.badgeColor }}
              >
                <Link to="/cart">
                  <BasketIconWhite />
                </Link>
              </Badge>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setData("cart");
                authChange();
              }}
              classes={{ root: classes.button }}
            >
              <Badge
                badgeContent={numOfCart}
                classes={{ badge: classes.badgeColor }}
              >
                <BasketIconWhite />
              </Badge>
            </IconButton>
          )}
        </Grid>
      </Grid>
      <Phone auth={auth} setAuth={setAuth} data={data} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLogged: (id) => dispatch(isLogged(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterMobile);
