/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import { FormControl, TextField } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import Cookies from "js-cookie";
import { connect } from "react-redux";
import {
  phoneNumber,
  userName,
  isLogged,
  saleCount,
} from "../../redux/user/userAction";
import {
  Transition,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "./PhoneStyles";
import PhoneStyles from "./PhoneStyles";

function Phone(props) {
  const {
    phoneNumber,
    userName,
    user,
    auth,
    data,
    setAuth,
    setAuth1,
    isLogged,
    saleCount,
  } = props;

  const getPhoneNumber = (data) => {
    fetch(`${process.env.production}customer-profile`, {
      method: "POST",
      body: JSON.stringify({
        mphone: `+91${data}`,
      }),
    })
      .then((t) => t.json())
      .then((data) => {
        console.log(data.body);
        saleCount(data.body.sale_count);
      })
      .catch((err) => console.log(err));
  };

  const history = useHistory();
  const classes = PhoneStyles();

  const [otp, SetOtp] = React.useState("");
  const [open, setOpen] = React.useState(true);
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("");

  const handleChangePhone = (e) => {
    const value = e.target.value;
    phoneNumber(value);
  };

  const handleChangeUser = (e) => {
    const value = e.target.value;
    userName(value);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setAuth(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    axios
      .post(`${process.env.REACT_APP_BASIC_URL}send-otp`, {
        mphone: `+91${user.phoneNumber}`,
        client: "100n",
      })
      .then((data) => {
        // console.log(data);
        if (data.data.statusCode === 200) {
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASIC_URL}validate-otp`, {
        mphone: `+91${user.phoneNumber}`,
        client: "100n",
        validateOTP: `${otp}`,
      })
      .then((data) => {
        // console.log(data);
        if (data.data.statusCode === 200) {
          if (props.data === "profile") {
            localStorage.setItem("user", JSON.stringify(user));
            getPhoneNumber(user.phoneNumber);
            history.push("/profile");
            setOpen(false);
            setAuth(false);
            // setAuth1(true);
            isLogged(true);
            Cookies.set("user", "loginTrue");
          } else if (props.data === "cart") {
            localStorage.setItem("user", JSON.stringify(user));
            getPhoneNumber(user.phoneNumber);
            history.push("/cart");
            setOpen(false);
            setAuth(false);
            // setAuth1(true);
            isLogged(true);
            Cookies.set("user", "loginTrue");
          } else {
            localStorage.setItem("user", JSON.stringify(user));
            getPhoneNumber(user.phoneNumber);
            history.push("/orders");
            setOpen(false);
            setAuth(false);
            // setAuth1(true);
            isLogged(true);
            Cookies.set("user", "loginTrue");
          }
        } else {
          setSnackMsg(data.data.body);
          setSnackOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };

  const resendLink = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASIC_URL}send-otp`, {
        mphone: `+91${user.phoneNumber}`,
        client: "100n",
      })
      .then((data) => {
        if (data.data.statusCode === 200) {
          setOpen(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleChangeOTP = (e) => {
    const value = e.target.value;
    SetOtp(value);
  };

  const PhoneNumber = (
    <form onSubmit={handleSubmit} className={classes.formStyle}>
      <div className={classes.phoneNumberStyle}>
        <FormControl component="fieldset" className={classes.formControlStyle}>
          <DialogContent>
            <DialogContentText className={classes.dialogText}>
              Login with 10-Digit Mobile Number
            </DialogContentText>
            <TextField
              onChange={handleChangePhone}
              value={user.phoneNumber}
              className={classes.FieldStyle}
              name="mphone"
              placeholder="Enter Mobile Number"
              InputProps={{ type: "number", disableUnderline: true }}
              // inputProps={{ root: classes.inputBase }}
              autoFocus={true}
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              className={classes.getOtpButton}
              disabled={!(user.phoneNumber.length === 10)}
              fullWidth
              classes={{ disabled: classes.disabled }}
            >
              Get OTP
            </Button>
          </DialogActions>
        </FormControl>
      </div>
    </form>
  );

  const OTPNumber = (
    <Fragment>
      <form onSubmit={handleSubmitOTP} className={classes.formStyle}>
        <div className={classes.phoneNumberStyle}>
          <FormControl
            component="fieldset"
            className={classes.formControlStyle}
          >
            <DialogContent>
              <DialogContentText className={classes.dialogText}>
                Login with 10-Digit Mobile Number
              </DialogContentText>
              <TextField
                className={classes.FieldStyle}
                onChange={handleChangePhone}
                value={user.phoneNumber}
                placeholder="Enter Mobile Number"
                name="mphone"
                InputProps={{ type: "number", disableUnderline: true }}
              />
            </DialogContent>
            <DialogContent>
              <DialogContentText className={classes.dialogText}>
                An OTP has been sent to registered number
              </DialogContentText>
              <TextField
                value={otp}
                className={classes.FieldStyle}
                onChange={handleChangeOTP}
                name="otp"
                placeholder="Enter your OTP Number"
                InputProps={{ type: "number", disableUnderline: true }}
                autoFocus={true}
              />
            </DialogContent>
            <DialogActions className={classes.otpButton}>
              <Button type="submit" className={classes.getOtpButton} fullWidth>
                Verify
              </Button>
              <div className={classes.resendOTP}>
                Didn't receive the OTP ?{" "}
                <span className={classes.resendLink} onClick={resendLink}>
                  Resend OTP
                </span>
              </div>
            </DialogActions>
          </FormControl>
        </div>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
        message={snackMsg}
      >
        <Alert onClose={handleClose} severity="error">
          {snackMsg}
        </Alert>
      </Snackbar>
    </Fragment>
  );

  const PHONENUMBER = open ? PhoneNumber : OTPNumber;

  return (
    <div>
      <Dialog
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={auth}
        // classes={{ paper: classes.paper }}
        fullWidth
      >
        <DialogTitle
          className={classes.title}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          LOGIN
        </DialogTitle>
        {PHONENUMBER}
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    phoneNumber: (id) => dispatch(phoneNumber(id)),
    userName: (id) => dispatch(userName(id)),
    isLogged: (id) => dispatch(isLogged(id)),
    saleCount: (id) => dispatch(saleCount(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
