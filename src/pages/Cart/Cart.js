/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
  FormControlLabel,
  Grid,
  makeStyles,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  Select,
  TextField,
  withStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import CardStyle from "@material-ui/core/Card";
import { connect } from "react-redux";
import { BackIcon } from "../../components/Icons_Final/Icon";
import logo from "../../components/Header/100N.png";
import { Link, useHistory } from "react-router-dom";
import {
  email,
  phoneNumber,
  saleCount,
  userName,
} from "../../redux/user/userAction";
import OrderConfirmation from "../Orders/OrderConfirmation";
import OrderFailed from "../Orders/OrderFailed";
import EmptyCart from "./EmptyCart";
import HappyCart from "./HappyCart";
import Tooltip from "@material-ui/core/Tooltip";
import { InfoIcon } from "../../components/Icons_Final/Icon";
import { emptyCart, fetchCoupons } from "../../redux/product/productAction";
import InputBase from "@material-ui/core/InputBase";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import _ from "lodash";
import { CartStyles } from "./CartStyle";

const StyledButton = withStyles({
  root: {
    background: "#47a848",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const GreenRadio = withStyles({
  root: {
    color: "#47a848",
    "&$checked": {
      color: "#47a848",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function minuteArray(time) {
  let array = [];
  let hours = 23;
  let hour = parseInt(time[0] + time[1]);
  let minute = parseInt(time[3] + time[4]);
  var minute1 = 0;
  if (minute >= 0 && minute <= 5) {
    minute1 = 30;
    hours = 24;
  } else if (minute >= 6 && minute <= 35) {
    minute1 = 0;
  } else {
    minute1 = 30;
  }
  for (let i = hour; i < hours; i++) {
    if (minute >= 0 && minute <= 5) {
      array.push(`${i}:${minute1}`);
      array.push(`${i + 1}:00`);
    } else if (minute >= 6 && minute <= 35) {
      array.push(`${i + 1}:${minute1}0`);
      array.push(`${i + 1}:30`);
    } else {
      array.push(`${i + 1}:${minute1}`);
      array.push(`${i + 2}:00`);
    }
  }
  return array;
}

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Cart(props) {
  // console.log(props);
  const { cart, userName, email, user, coupon, emptyCart, saleCount } = props;
  // console.log(user);
  const [data, setData] = useState("");
  const [cartPrice, setCartPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [taxedPrice, setTaxedPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [couponFailed, setCouponFailed] = useState(false);
  const [formFailed, setFormFailed] = useState(false);
  const [time, setTime] = useState(0);
  const [orderMessage, setOrderMessage] = useState("");
  const [res, SetRes] = useState(false);
  const [response, SetResponse] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const [openHappyCart, setOpenHappyCart] = useState(false);
  let history = useHistory();

  const [cartDetails, setCartDetails] = useState({
    takeAway: "",
    instructions: "",
    coupon: "",
    delivery: "",
    time: "",
    deliveryAddress: "",
    name: user.userName,
    email: user.email,
    vehicleNumber: "",
    delivery_mphone: "",
  });

  const [cartDetailsErrors, setCartDetailsErrors] = useState({
    coupon: "",
    takeAway: "",
    instructions: "",
    delivery: "",
    time: "",
    deliveryAddress: "",
    name: "",
    email: "",
    vehicleNumber: "",
    delivery_mphone: "",
  });
  const userUpdate = (data) => {
    fetch(`${process.env.REACT_APP_BASIC_URL}update-customer-profile`, {
      method: "POST",
      body: JSON.stringify({
        mphone: `+91${data.phoneNumber}`,
        email_id: `${data.email}`,
        first_name: `${data.userName}`,
        sale_count: data.sale_count + 1,
      }),
    })
      .then((t) => t.json())
      .then((data) => {
        saleCount(data.body.sale_count);
      })
      .catch((err) => console.log(err));
  };

  const cart1 = JSON.parse(localStorage.getItem("addcart"));
  const classes = CartStyles();
  const timeArray = minuteArray(time);

  function toLocaleStringSupportsLocales() {
    let userAgentString = navigator.userAgent;
    let chromeAgent = userAgentString.indexOf("Chrome") > -1;
    let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
    if (firefoxAgent) {
      try {
        return new Date().toLocaleString("en-IN", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
          timeZone: "IST",
        });
      } catch (e) {
        return e instanceof RangeError;
      }
    } else if (chromeAgent) {
      let tDate = new Date();
      let IndianDate = tDate.toLocaleString("en-IN", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        timeZone: "IST",
      });
      return IndianDate;
    }
  }
  useEffect(() => {
    props.fetchCoupons();

    if (cart !== null) {
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        sum = sum + cart[i].total;
      }

      setCartPrice(sum);
      let tax = sum * 0.05;
      setTax(parseFloat(tax).toFixed(2));
      setTaxedPrice(Math.floor(sum + tax));
      setTotal(Math.floor(sum + tax));
    }
    var IndianDate = toLocaleStringSupportsLocales();
    // console.log(IndianDate);
    setTime(IndianDate ? IndianDate : "");
  }, [cart]);

  useEffect(() => {
    if (saleCount > 2) {
      setCartDetails({ ...cartDetails, coupon: "100N-OFF" });
    }
  });

  useEffect(() => {
    const data = cartDetails;
    if (res) {
      let cart = JSON.parse(localStorage.getItem("addcart"));
      fetch(`${process.env.REACT_APP_BASIC_URL}verify-place-order`, {
        method: "POST",
        body: JSON.stringify({
          client: "100n",
          coupon: `${data.coupon}`,
          delivery_address: data.deliveryAddress
            ? `${data.deliveryAddress}`
            : "",
          delivery_time: data.time ? `${data.time}` : "",
          extra_notes: `${data.instructions}`,
          items: cart,
          mphone: `+91${user.phoneNumber}`,
          order_type: `${data.delivery}`,
          order_status_id: 2,
          order_status: "In Queue",
          razorpay_payment_id: `${response.razorpay_payment_id}`,
          razorpay_order_id: `${response.razorpay_order_id}`,
          razorpay_signature: `${response.razorpay_signature}`,
          tax: "",
          total_amount: total,
          vehicle_number: `${data.vehicleNumber}`,
          delivery_mphone: `${data.delivery_mphone}`,
        }),
      })
        .then((t) => t.json())
        .then((t) => {
          console.log(t);
          if (t.statusCode !== 200) {
            history.push("/cart");
            setOpen2(true);
            SetRes(false);
          } else {
            userUpdate(user);
            setOrderMessage(t.body);
            emptyCart();
            localStorage.setItem("addcart", JSON.stringify([]));
            setOpen1(true);
            setOpenHappyCart(true);
          }
        })
        .catch((err) => {
          alert("Payment Not Succesfull Please try again");
        });
    }
  }, [res]);

  async function displayRazorpay() {
    // console.log(user);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data2 = await fetch(
      `${process.env.REACT_APP_BASIC_URL}get-order-id`,
      {
        method: "POST",
        body: JSON.stringify({
          order_amount: total * 100,
          order_currency: "INR",
          order_receipt: "order_rcptid_12",
          notes: "{'Vehicle Number': 'TS 08 ES 0294'}",
        }),
      }
    ).then((t) => t.json());

    console.log(data2);
    const data1 = JSON.parse(data2.body);
    console.log(data1);

    const options = {
      key: "rzp_test_EqP2cwQr8CLkKt",
      // key: "rzp_live_0hE4fU1vvX6OIG",
      currency: data1.currency,
      amount: `${data1.amount}`,
      order_id: data1.id,
      name: "100N",
      description: "Payment",
      "theme.color": "#47a848",
      handler: function (response) {
        console.log(response);
        if (response) {
          SetResponse({
            razorpay_payment_id: `${response.razorpay_payment_id}`,
            razorpay_order_id: `${response.razorpay_order_id}`,
            razorpay_signature: `${response.razorpay_signature}`,
          });
          SetRes(true);
          console.log("PayMent Sucess");
        }
      },
      prefill: {
        name: `${user.userName}`,
        email: `${user.email}`,
        contact: `${user.phoneNumber}`,
      },
      modal: {
        ondismiss: function () {
          console.log(`Checkout form closed`);
        },
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const onChange = (e) => {
    const value = e.target.value;
    setCartDetails({ ...cartDetails, [e.target.name]: value });
  };

  const nameChange = (e) => {
    const value = e.target.value;
    setCartDetails({ ...cartDetails, name: value });
    userName(value);
  };

  const emailChange = (e) => {
    const value = e.target.value;
    setCartDetails({ ...cartDetails, email: value });

    email(value);
  };

  const handleValidation = () => {
    let fields = cartDetails;
    let errors = cartDetailsErrors;
    let formIsValid = true;
    let lastAtPos = fields["email"].lastIndexOf("@");
    let lastDotPos = fields["email"].lastIndexOf(".");

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      // errors["name"] = "Cannot be empty";
      setCartDetailsErrors({ ...cartDetailsErrors, name: "Cannot be empty" });
    }
    //Email
    if (!fields["email"]) {
      formIsValid = false;
      // errors["email"] = "Cannot be empty";
      setCartDetailsErrors({ ...cartDetailsErrors, email: "Cannot be empty" });
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        // errors["email"] = "Email is not valid";
        setCartDetailsErrors({
          ...cartDetailsErrors,
          email: "Email is not valid",
        });
      }
    }

    return formIsValid;
  };

  const applyCoupon = (e) => {
    const values = cartDetails.coupon;
    const value = coupon.filter((e) => e.coupon_code === values);
    if (value.length) {
      let discount_10 = Math.floor(
        cartPrice * (value[0].coupon_discount / 100)
      );
      const discounted_Total = cartPrice - discount_10;

      setDiscount(discount_10);
      let tax = discounted_Total * 0.05;
      setTax(parseFloat(tax).toFixed(2));
      setTaxedPrice(Math.floor(discounted_Total + tax));
      setTotal(Math.floor(discounted_Total + tax));
      setOpen(false);
      setCouponFailed(false);
    } else {
      // console.log("Invalid");
      setCouponFailed(true);
    }
  };

  const removeCoupon = (e) => {
    const revised_Total = total + discount;
    setDiscount(0);
    setTotal(revised_Total);
    setCartDetails({ ...cartDetails, coupon: "" });
    setOpen(true);
  };

  const disableCheckoutButton = (e) => {
    setIsEnabled(false);
    setTimeout(function () {
      setIsEnabled(true);
    }, 10000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Checkout");
    // console.log(handleValidation());
    // console.log(cartDetailsErrors);
    if (handleValidation()) {
      // alert("Form submitted");
      setFormFailed(false);
      setData(cartDetails);
      userName(cartDetails.name);
      email(cartDetails.email);
      displayRazorpay(props);
      disableCheckoutButton();
    } else {
      setFormFailed(true);
    }
  };

  const PICKUP = (
    <Grid item xs={12} className={classes.boxDetailsSelect}>
      <CardStyle className={classes.cardPriceDetailStyle}>
        <p>We follow safety protocols at our store.</p>
        <Select
          name="time"
          value={cartDetails.time}
          displayEmpty
          onChange={onChange}
          input={<BootstrapInput />}
          inputProps={{ "aria-label": "Without label", disableUnderline: true }}
        >
          <MenuItem value="" disabled>
            Choose your perferred time
          </MenuItem>
          <MenuItem value={`ASAP`}>As Soon As Possible</MenuItem>
          {timeArray.map((el) => (
            <MenuItem key={`${el}`} value={`${el}`}>
              {el}
            </MenuItem>
          ))}
        </Select>
        {cartDetails.time === "ASAP" ? (
          <>
            <p>The order will be ready within 30min of order confirmation.</p>
            <p>Enter Vehicle Number</p>
            <TextField
              id="vehicleNumber"
              name="vehicleNumber"
              fullWidth
              value={cartDetails.vehicleNumber}
              onChange={onChange}
              autoComplete="off"
              placeholder="Enter Vehicle Number"
              InputProps={{ disableUnderline: true }}
              className={classes.cardInputStyle}
            />
          </>
        ) : (
          <>
            <p>Enter Vehicle Number</p>
            <TextField
              id="vehicleNumber"
              name="vehicleNumber"
              fullWidth
              value={cartDetails.vehicleNumber}
              onChange={onChange}
              autoComplete="off"
              placeholder="Enter Vehicle Number"
              InputProps={{ disableUnderline: true }}
              className={classes.cardInputStyle}
            />
          </>
        )}
      </CardStyle>
    </Grid>
  );

  const DELIVERY = (
    <Grid item xs={12} className={classes.boxDetailsSelect}>
      <CardStyle className={classes.cardPriceDetailStyle}>
        <Grid item xs={12} className={classes.warning}>
          <WarningIcon htmlColor="#f68a03" className={classes.warningIcon} />{" "}
          <p className={classes.warningText}>
            Currently we only deliver within Shilpa Hills, Hyderabad.
          </p>
        </Grid>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.862602210284!2d78.36933780478617!3d17.466289136324328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d2a6b2b7cf%3A0x3e42ce4c86518902!2sShilpa%20Hills%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1609145254748!5m2!1sen!2sin"
          height="250"
          aria-hidden="false"
          // width="600"
          // frameborder="0"
          // allowfullscreen=""
          // tabindex="0"
        ></iframe>
        <p>Enter House Address</p>
        <TextField
          id="deliveryAddress"
          name="deliveryAddress"
          fullWidth
          value={cartDetails.deliveryAddress}
          onChange={onChange}
          autoComplete="off"
          placeholder="Address"
          InputProps={{ disableUnderline: true }}
          className={classes.cardInputStyle}
        />
        <p>Enter Delivery Phone Number</p>
        <TextField
          id="delivery_mphone"
          name="delivery_mphone"
          fullWidth
          value={cartDetails.delivery_mphone}
          onChange={onChange}
          autoComplete="off"
          placeholder="Phone Number"
          InputProps={{ disableUnderline: true }}
          className={classes.cardInputStyle}
        />
      </CardStyle>
    </Grid>
  );

  useEffect(() => {
    let name = _.isNull(cartDetails.name);
    let email = _.isNull(cartDetails.email);
    // console.log({ name, email });
    if (!(name && email)) {
      const temp =
        cartDetails.name.length > 0 &&
        cartDetails.email.length > 0 &&
        cartDetails.deliveryAddress.length > 0 &&
        cartDetails.delivery.length;
      if (temp) {
        setIsEnabled(true);
      } else {
        setIsEnabled(false);
      }
    }
  }, [cartDetails]);

  return (
    <>
      <Grid container className={classes.cartBodyStyling}>
        <Grid item xs={12} sm={12} className={classes.headerCartStyle}>
          <Grid item xs={1} className={classes.arrowAlignStyling}>
            <Link to="/">
              <BackIcon colour="#47a848" />
            </Link>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={8} className={classes.logoAlignStyling}>
            <Link to="/">
              <img src={logo} className={classes.media} alt="Logo" />
            </Link>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Grid container spacing={2} className={classes.cartContainer}>
          {!open1 ? (
            <Grid item xs={12} sm={12}>
              <span className={classes.cartHeaderName}>My Basket</span>
            </Grid>
          ) : null}

          {open2 ? <OrderFailed /> : null}
          {!open1 ? (
            cart1 && cart1.length !== 0 ? (
              <>
                {user.sale_count < 2 ? (
                  <Grid item xs={12} sm={12}>
                    <p className={classes.orderContent}>
                      Compliments, you are eligible for 50% Off. Apply coupon
                      <span>
                        <strong> &nbsp;100N-CODE50 &nbsp;</strong>
                      </span>
                      to redeem.
                    </p>
                  </Grid>
                ) : null}
                <Grid spacing={2} item container>
                  <Grid item xs={12} sm={7}>
                    {cart1.map((data) => (
                      <Grid key={data.id} item xs={12} sm={12} md={12}>
                        <Card product={data} />
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <form onSubmit={handleSubmit}>
                      <Grid item xs={12} className={classes.boxDetails}>
                        <CardStyle className={classes.cardAlignStyle}>
                          <h4 className={classes.cartBoxHeading}>
                            INSTRUCTIONS
                          </h4>
                          <TextField
                            id="instructions"
                            name="instructions"
                            fullWidth
                            value={cartDetails.instructions}
                            onChange={onChange}
                            autoComplete="off"
                            placeholder="Instructions"
                            InputProps={{ disableUnderline: true }}
                            className={classes.cardInputStyle}
                          />
                        </CardStyle>
                      </Grid>
                      <Grid item xs={12} sm={12} className={classes.box}>
                        <CardStyle className={classes.cardAlignStyle}>
                          <h4 className={classes.cartBoxHeading}>COUPON</h4>
                          <div className={classes.couponCodeStyle}>
                            <div className={classes.couponCodeStyleRow}>
                              <TextField
                                id="coupon"
                                name="coupon"
                                value={cartDetails.coupon}
                                onChange={onChange}
                                autoComplete="off"
                                placeholder="Apply Coupon"
                                InputProps={{ disableUnderline: true }}
                                className={classes.cardInputStyle}
                              />
                              {open ? (
                                <Button
                                  className={classes.buttonApplyStyle}
                                  onClick={applyCoupon}
                                >
                                  APPLY
                                </Button>
                              ) : (
                                <Button
                                  className={classes.buttonApplyStyle}
                                  onClick={removeCoupon}
                                >
                                  REMOVE
                                </Button>
                              )}
                            </div>
                            {couponFailed ? (
                              <div className={classes.couponCodeStyleRow2}>
                                <ErrorIcon color="error" />{" "}
                                <p>Coupon is invalid or has expired.</p>
                              </div>
                            ) : null}
                          </div>
                        </CardStyle>
                      </Grid>
                      <Grid item xs={12} className={classes.box}>
                        <CardStyle className={classes.cardPriceDetailStyle}>
                          <h4 className={classes.cartBoxHeading}>
                            DELIVERY TYPE*
                          </h4>
                          <RadioGroup
                            aria-label="Delivery Type"
                            name="delivery"
                            className={classes.DeliverAlignment}
                            value={cartDetails.delivery}
                            onChange={onChange}
                          >
                            <FormControlLabel
                              value="PickUp"
                              control={<GreenRadio />}
                              label="PICK UP"
                            />
                            <FormControlLabel
                              value="Home Delivery"
                              control={<GreenRadio />}
                              label="HOME DELIVERY"
                              disabled={cartPrice < 300 ? true : false}
                            />
                          </RadioGroup>
                          {cartPrice < 300 ? (
                            <p className={classes.orderContent}>
                              Sorry, you can't order yet. Home Delivery is
                              available on minimum cart value of RS.300/-
                            </p>
                          ) : null}
                        </CardStyle>
                      </Grid>
                      {cartDetails.delivery === "PickUp"
                        ? PICKUP
                        : cartDetails.delivery === "Home Delivery"
                        ? DELIVERY
                        : null}

                      <Grid item xs={12} className={classes.box}>
                        <CardStyle className={classes.cardAlignStyle}>
                          <h4 className={classes.cartBoxHeading}>NAME*</h4>
                          <TextField
                            required={true}
                            id="name"
                            name="name"
                            fullWidth
                            onChange={nameChange}
                            autoComplete="off"
                            value={user.userName}
                            InputProps={{ disableUnderline: true }}
                            className={classes.cardInputStyle}
                            placeholder="Enter your Name"
                          />
                          <h4 className={classes.cartBoxHeading}>EMAIL*</h4>
                          <TextField
                            required={true}
                            id="email"
                            name="email"
                            fullWidth
                            onChange={emailChange}
                            autoComplete="off"
                            value={user.email}
                            InputProps={{ disableUnderline: true }}
                            className={classes.cardInputStyle}
                            placeholder="Enter your Email"
                          />
                          {formFailed ? (
                            <div className={classes.couponCodeStyleRow2}>
                              <ErrorIcon color="error" />{" "}
                              <p>Enter validate Name and Email Address.</p>
                            </div>
                          ) : null}
                        </CardStyle>
                      </Grid>
                      <Grid item xs={12} className={classes.box}>
                        <CardStyle className={classes.cardPriceDetailStyle}>
                          <Grid item xs={12}>
                            <h3
                              style={{
                                marginBlockStart: "0em",
                                marginBlockEnd: "0em",
                              }}
                            >
                              Price Details
                            </h3>
                            <hr style={{ borderTop: "4px", color: "green" }} />
                          </Grid>
                          <Grid
                            container
                            className={classes.cardPriceDetailDiscountStyle}
                          >
                            <Grid
                              item
                              xs={6}
                              className={classes.PriceDiscountHeader}
                            >
                              <span style={{ padding: "5px 0px" }}>
                                Coupon Discount
                              </span>
                              <span style={{ padding: "5px 0px" }}>
                                Cart Price
                              </span>
                              <span
                                style={{
                                  padding: "5px 0px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <span style={{ marginRight: "5px" }}>Tax</span>
                                <Tooltip title="GST 5%" arrow placement="right">
                                  <span style={{ marginRight: "5px" }}>
                                    <InfoIcon />
                                  </span>
                                </Tooltip>
                                <span style={{ flexGrow: "1" }}></span>
                              </span>
                              <span style={{ padding: "5px 0px" }}>
                                Amount Payable
                              </span>
                            </Grid>
                            <Grid
                              item
                              xs={6}
                              className={classes.PriceDiscountStyling}
                            >
                              <span style={{ padding: "5px 0px" }}>
                                &#x20B9; {discount}/-
                              </span>
                              <span style={{ padding: "5px 0px" }}>
                                &#x20B9; {cartPrice}/-
                              </span>
                              <span style={{ padding: "5px 0px" }}>
                                &#x20B9; {tax}/-
                              </span>
                              <span style={{ padding: "5px 0px" }}>
                                &#x20B9; {total}/-
                              </span>
                            </Grid>
                          </Grid>
                        </CardStyle>
                      </Grid>
                      <Grid item xs={12} className={classes.box}>
                        <Button
                          type={"submit"}
                          fullWidth
                          disableRipple={true}
                          disabled={!isEnabled}
                          className={classes.buttonStyle}
                          classes={{ disabled: classes.disabled }}
                        >
                          CheckOUT
                        </Button>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </>
            ) : (
              <EmptyCart />
            )
          ) : (
            <>
              {open1 ? <OrderConfirmation text={orderMessage} /> : null}
              <HappyCart
                open={openHappyCart}
                setOpen={setOpenHappyCart}
                user={user}
                orderId={orderMessage}
              />
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
    user: state.user,
    coupon: state.product.coupon,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    phoneNumber: (id) => dispatch(phoneNumber(id)),
    userName: (id) => dispatch(userName(id)),
    email: (id) => dispatch(email(id)),
    emptyCart: () => dispatch(emptyCart()),
    fetchCoupons: () => dispatch(fetchCoupons()),
    saleCount: (count) => dispatch(saleCount(count)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(Cart);
