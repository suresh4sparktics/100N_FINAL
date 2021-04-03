/* eslint-disable jsx-a11y/iframe-has-title */
import { Button, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { FooterDesktop } from "../../components";
import axios from "axios";
import { ContactUsStyles } from "./ContactUsStyles";

function ContactUs() {
  const [details, setDetails] = useState({
    mphone: "",
    email_id: "",
    customerName: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BASIC_URL}contact-us`,
        JSON.stringify({
          client: "100n",
          mphone: details.mphone,
          email_id: details.email_id,
          customerName: details.customerName,
          message: details.message,
          event_type: `${process.env.REACT_APP_EVENT_TYPE}`,
        })
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setDetails({ ...details, [e.target.name]: value });
  };
  const classes = ContactUsStyles();
  return (
    <Grid container className={classes.root1}>
      <Grid container spacing={2} className={classes.cartContainer}>
        <Grid container spacing={2} className={classes.cartContainerInside}>
          <Grid item xs={12} sm={12} className={classes.headingGrid}>
            <span className={classes.heading}>CONTACT US</span>
          </Grid>
          <Grid container item spacing={2} xs={12}>
            <Grid container item xs={12} sm={5}>
              <div className={classes.contactUS}>
                <h3>DROP US YOUR NOTE HERE...</h3>
                <form onSubmit={handleSubmit}>
                  <Grid item>
                    <TextField
                      name="customerName"
                      placeholder="Enter your Name"
                      value={details.customerName}
                      onChange={onChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="email_id"
                      placeholder="Enter your Email"
                      value={details.email_id}
                      onChange={onChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="mphone"
                      placeholder="Enter your Phone Number"
                      value={details.mphone}
                      onChange={onChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      name="message"
                      placeholder="Drop your Query"
                      value={details.message}
                      multiline
                      rows={2}
                      onChange={onChange}
                      className={classes.textField}
                    />
                  </Grid>
                  <Button
                    variant="contained"
                    type="submit"
                    className={classes.buttonStyle}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
            <Grid container item xs={12} sm={7}>
              <div className={classes.address}>
                <h3>ADDRESS</h3>
                <div>
                  Nehru Rd, Hanuman Nagar, Shilpa Hills, Hyderabad, Telangana
                  500084.
                </div>
                <div className={classes.map}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.89720866787!2d78.36634181459794!3d17.46463330517017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93492d04dcc9%3A0xa2f7178fa436741b!2s100N!5e0!3m2!1sen!2snl!4v1609006053993!5m2!1sen!2snl"
                    height="300"
                    // width="550"
                    // frameborder="0"
                    // allowfullscreen=""
                    // tabindex="0"
                    aria-hidden="false"
                    className={classes.mapIframe}
                  ></iframe>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <FooterDesktop />
    </Grid>
  );
}

export default ContactUs;

// {
//   "mphone": "+31685508973",
//   "email_id": "kalagateja@gmail.com",
//   "client": "100n",
//   "customerName": "teja",
//   "message": "message",
//   "event_type": 0/1
// }
