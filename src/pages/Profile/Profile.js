/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Button, Snackbar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { email, phoneNumber, userName } from "../../redux/user/userAction";
import { useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
// import FooterItem from "../FooterItems/FooterItem";
import userProfile from "./user-profile.png";
import ProfileStyles from "./ProfileStyles";

function Profile(props) {
  const classes = ProfileStyles();
  const history = useHistory();

  const { user, email, phoneNumber, userName } = props;

  const [USER, setUSER] = useState({
    userName: user.userName,
    phoneNumber: user.phoneNumber,
    email: user.email,
  });
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);
  const [gender, setGender] = useState("male");
  const [date, onDateChange] = useState(new Date());

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASIC_URL}customer-profile`, {
      method: "POST",
      body: JSON.stringify({
        mphone: `+91${user.phoneNumber}`,
      }),
    })
      .then((t) => t.json())
      .then((data) => {
        const data1 = data.body;
        if (data1 === "No user found") {
        } else {
          setUSER({
            userName: data1.first_name,
            phoneNumber: data1.phone_number.slice(3),
            email: data1.email_id,
          });
          phoneNumber(data1.phone_number.slice(3));
          userName(data1.first_name);
          email(data1.email_id);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const update = (e) => {
    e.preventDefault();
    fetch(`${process.env.production}update-customer-profile`, {
      method: "POST",
      body: JSON.stringify({
        mphone: `+91${user.phoneNumber}`,
        email_id: USER.email,
        first_name: USER.userName,
        sale_count: USER.sale_count,
      }),
    })
      .then((t) => t.json())
      .then((data) => {
        setSnackMsg(data.body);
        setSnackOpen(true);
        setIsEnabled(true);
      })
      .catch((err) => console.log(err));
  };

  const onChangeValue = (e) => {
    e.preventDefault();
    setIsEnabled(false);
    const value = e.target.value;
    setUSER({ ...USER, [e.target.name]: value });
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <Grid container className={classes.root1}>
      <Grid container spacing={2} className={classes.cartContainer}>
        <Grid item xs={12} sm={12}>
          <span className={classes.cartHeaderName}>Your Profile</span>
          <form
            autoComplete="off"
            className={classes.FormStyleAlignment}
            onSubmit={update}
          >
            <div className={classes.profileDetails}>
              <div className={classes.profileDetailsLeft}>
                <img
                  style={{ width: "250px", height: "250px" }}
                  src={userProfile}
                />
              </div>
              <div className={classes.profileDetailsRight}>
                <h5 className={classes.textLabel}>Phone Number</h5>
                <TextField
                  name="phoneNumber"
                  fullWidth
                  value={USER.phoneNumber ? `+91${USER.phoneNumber}` : ""}
                  onChange={onChangeValue}
                  autoComplete="off"
                  placeholder="Enter Phone Number"
                  size="small"
                  className={classes.cardInputStyle}
                  variant="outlined"
                  disabled
                />
                <h5 className={classes.textLabel}>Name</h5>
                <TextField
                  id="first_name"
                  name="userName"
                  fullWidth
                  value={USER.userName || ""}
                  onChange={onChangeValue}
                  autoComplete="off"
                  placeholder="Enter Your Name"
                  size="small"
                  className={classes.cardInputStyle}
                  variant="outlined"
                />
                <h5 className={classes.textLabel}>Email Address</h5>
                <TextField
                  id="standard-size-small"
                  name="email"
                  fullWidth
                  value={USER.email || ""}
                  onChange={onChangeValue}
                  autoComplete="off"
                  placeholder="Enter Email"
                  size="small"
                  className={classes.cardInputStyle}
                  variant="outlined"
                />
                <br />
                <div className={classes.button}>
                  <Button
                    onClick={() => history.push("/")}
                    className={classes.getOtpButton}
                  >
                    {" "}
                    Go To Home{" "}
                  </Button>
                  <Button
                    disabled={isEnabled}
                    type="submit"
                    className={classes.getOtpButtonOpposite}
                    classes={{ disabled: classes.disabled }}
                  >
                    {" "}
                    Update{" "}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={snackOpen}
          autoHideDuration={6000}
          onClose={() => setSnackOpen(false)}
          message={snackMsg}
        >
          <Alert severity="success">{snackMsg}</Alert>
        </Snackbar>
      </Grid>
      {/* <FooterItem /> */}
    </Grid>
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
    email: (id) => dispatch(email(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
