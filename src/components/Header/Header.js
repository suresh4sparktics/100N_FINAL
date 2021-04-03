/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "./100N.png";
import { Link, useHistory } from "react-router-dom";
import { Drawer, IconButton, List, ListItem } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Cookies from "js-cookie";
import Badge from "@material-ui/core/Badge";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";
import Phone from "../Phone/Phone";
import {
  BasketIconGreen,
  ProfileIconGreen,
  LockIconGreen,
  HomeIconGreen,
  SignOutIconGreen,
  InstaIconGreen,
  FBIconGreen,
  OrdersIconGreen,
  MenuIconCustom,
} from "../Icons_Final/Icon";
import { isLogged, emptyUser } from "../../redux/user/userAction";
import { emptyCart } from "../../redux/product/productAction";
import { HeaderStyles } from "./HeaderStyles";

function Header(props) {
  const { isLogged, user, emptyCart, emptyUser } = props;
  const numOfCart = props.cart.reduce(function (prev, cur) {
    return prev + cur.selectedQuantity;
  }, 0);
  const classes = HeaderStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const matches = useMediaQuery("(max-width:600px)");

  const [auth, setAuth] = useState(false);
  // const [auth1, setAuth1] = useState(false);
  const [data, setData] = useState("");

  const readCookie = () => {
    const user = Cookies.get("user");
    if (user) {
      // setAuth1(true);
      isLogged(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  const authChange = () => {
    setAuth(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const signOut = () => {
    localStorage.setItem("addcart", JSON.stringify([]));
    localStorage.removeItem("user");
    Cookies.remove("user");
    history.push("/");
    isLogged(false);
    emptyCart();
    emptyUser();
  };

  return (
    <>
      <Grid container item xs={12} className={classes.headerStyle}>
        <Grid item xs={2} sm={2} md={2} lg={2} className={classes.menuAlign}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIconCustom />
          </IconButton>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} className={classes.item}>
          <Link to="/">
            <img src={logo} className={classes.media} alt="Logo" />
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.alignIconHeader}>
          {user.isLogged ? (
            <IconButton>
              <Badge
                badgeContent={numOfCart}
                classes={{ badge: classes.badgeColor }}
                className={matches ? classes.hideIcons : " "}
              >
                <Link to="/cart">
                  <BasketIconGreen
                    className={matches ? classes.hideIcons : " "}
                  />
                </Link>
              </Badge>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setData("cart");
                authChange();
              }}
            >
              <Badge
                badgeContent={numOfCart}
                classes={{ badge: classes.badgeColor }}
                className={matches ? classes.hideIcons : " "}
              >
                <BasketIconGreen
                  className={matches ? classes.hideIcons : " "}
                />
              </Badge>
            </IconButton>
          )}
        </Grid>
        <Grid item xs={1} className={classes.alignIconHeader}>
          {user.isLogged ? (
            <IconButton className={matches ? classes.hideIcons : " "}>
              <Link to="/profile">
                <ProfileIconGreen
                  className={matches ? classes.hideIcons : " "}
                />
              </Link>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setData("profile");
                authChange();
              }}
              className={matches ? classes.hideIcons : " "}
            >
              <LockIconGreen />
            </IconButton>
          )}
        </Grid>
        <Phone auth={auth} setAuth={setAuth} data={data} />
      </Grid>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
          paperAnchorLeft: classes.drawerLeft,
        }}
      >
        <div className={classes.drawerHeader}>
          <Link to="/">
            <img src={logo} className={classes.sideBarMedia} alt="Logo" />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon color="error" />
            ) : (
              <ChevronRightIcon color="error" />
            )}
          </IconButton>
        </div>
        <Divider />
        <div onClick={handleDrawerClose}>
          <List>
            <Link to="/" className={classes.hyperlink}>
              <ListItem button key="HOME">
                <ListItemIcon>
                  <HomeIconGreen />
                </ListItemIcon>
                <ListItemText primary="HOME" />
              </ListItem>
            </Link>
            {user.isLogged ? (
              <Link to="/profile" className={classes.hyperlink}>
                <ListItem button key="PROFILE">
                  <ListItemIcon>
                    <ProfileIconGreen />
                  </ListItemIcon>
                  <ListItemText primary="PROFILE" />
                </ListItem>
              </Link>
            ) : (
              <ListItem
                button
                key="PROFILE"
                className={classes.hyperlink}
                onClick={() => {
                  setData("profile");
                  authChange();
                }}
              >
                <ListItemIcon>
                  <LockIconGreen />
                </ListItemIcon>
                <ListItemText primary="PROFILE" />
              </ListItem>
            )}
            {user.isLogged ? (
              <Link to="/cart" className={classes.hyperlink}>
                <ListItem button key="BASKET">
                  <ListItemIcon>
                    <BasketIconGreen />
                  </ListItemIcon>
                  <ListItemText primary="BASKET" />
                </ListItem>
              </Link>
            ) : (
              <ListItem
                button
                key="BASKET"
                className={classes.hyperlink}
                onClick={() => {
                  setData("cart");
                  authChange();
                }}
              >
                <ListItemIcon>
                  <BasketIconGreen />
                </ListItemIcon>
                <ListItemText primary="BASKET" />
              </ListItem>
            )}
            {user.isLogged ? (
              <Link to="/orders" className={classes.hyperlink}>
                <ListItem button key="ORDERS">
                  <ListItemIcon>
                    <OrdersIconGreen />
                  </ListItemIcon>
                  <ListItemText primary="ORDERS" />
                </ListItem>
              </Link>
            ) : (
              <ListItem
                button
                key="ORDERS"
                className={classes.hyperlink}
                onClick={() => {
                  setData("orders");
                  authChange();
                }}
              >
                <ListItemIcon>
                  <OrdersIconGreen />
                </ListItemIcon>
                <ListItemText primary="ORDERS" />
              </ListItem>
            )}
            <ListItem
              button
              key="Signout"
              onClick={() => {
                signOut();
                handleDrawerClose();
              }}
              className={classes.hyperlink}
            >
              <ListItemIcon>
                <SignOutIconGreen />
              </ListItemIcon>
              <ListItemText primary="SIGNOUT" />
            </ListItem>
          </List>
        </div>
        <Divider />
        <List>
          <Link
            to="/contactus"
            className={classes.hyperlink}
            onClick={handleDrawerClose}
          >
            <ListItem button key="CONTACT US">
              <ListItemText primary="CONTACT US" />
            </ListItem>
          </Link>
          <Link
            to="/aboutus"
            className={classes.hyperlink}
            onClick={handleDrawerClose}
          >
            <ListItem button key="ABOUT US">
              <ListItemText primary="ABOUT US" />
            </ListItem>
          </Link>
          <Link
            to="/termscondition"
            className={classes.hyperlink}
            onClick={handleDrawerClose}
          >
            <ListItem button key="TERMS & CONDITIONS">
              <ListItemText primary="TERMS & CONDITIONS" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <span
          style={{
            textAlign: "center",
            padding: "15px 5px 8px 5px",
            color: "green",
            fontSize: "x-large",
          }}
        >
          Follow us on
        </span>
        <div
          className={classes.socialIconAlignment}
          onClick={handleDrawerClose}
        >
          <div> </div>
          <div> </div>
          <div> </div>
          <a href="https://www.facebook.com/100N.Natural" target="_blank">
            <FBIconGreen />
          </a>
          <a href="https://www.instagram.com/100n.natural/" target="_blank">
            <InstaIconGreen />
          </a>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      </Drawer>
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
    emptyCart: () => dispatch(emptyCart()),
    emptyUser: () => dispatch(emptyUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
/* eslint-disable no-unused-vars */
