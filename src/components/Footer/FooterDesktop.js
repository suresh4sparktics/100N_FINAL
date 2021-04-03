/* eslint-disable react/jsx-no-target-blank */
import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { FBIconGreen, InstaIconGreen } from "../Icons_Final/Icon";
import FooterDesktopStyles from "./FooterDesktopStyle";

function FooterDesktop() {
  const classes = FooterDesktopStyles();
  return (
    <Grid container item xs={12} sm={12} className={classes.footerStyle}>
      <Grid item xs={12} sm={12} className={classes.footerTextStyle}>
        <span>Copyright © 2020 100N. All rights reserved.</span>
      </Grid>
      <Grid item xs={7} sm={7} md={7} className={classes.hyperlinkAlignStyle}>
        <Link to="/aboutus" className={classes.hyperlinkStyle}>
          About Us &nbsp; |
        </Link>
        <Link to="/contactus" className={classes.hyperlinkStyle}>
          Contact Us &nbsp; |
        </Link>
        <Link to="/termscondition" className={classes.hyperlinkStyle}>
          Terms & Conditions &nbsp;
        </Link>
      </Grid>
      <Grid container item xs={5} sm={5} md={5} className={classes.socialIcon}>
        <Grid container justify="center" alignItems="center" item xs={12}>
          <span className={classes.hyperlinkStyleIcon}>
            Follow us on: &nbsp;
          </span>
          <a href="https://www.facebook.com/100N.Natural" target="_blank">
            <FBIconGreen />
          </a>
          <a href="https://www.instagram.com/100n.natural/" target="_blank">
            <InstaIconGreen />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FooterDesktop;
