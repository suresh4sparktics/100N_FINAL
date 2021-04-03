/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, makeStyles } from "@material-ui/core";

// import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import ActiveOrders from "./ActiveOrders";
import PropTypes from "prop-types";
import pattern from "../Home/pattern.png";
import HistoryOrder from "./HistoryOrder";
// import FooterItem from "../FooterItems/FooterItem";

const useStyles = makeStyles((theme) => ({
  activeColor: {
    backgroundColor: "white",
  },
  TabStyle: {
    backgroundColor: "#47a848",
    marginTop: "10px",
    margin: "0px auto 0px auto",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
  cartHeaderName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "30px",
  },
  cartContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "75%",
    padding: "70px 15px 15px 15px",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
  },
  cartBodyStyling: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: "63.4vh",
  },
  socialIcon: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    justifyContent: "center",
  },
  hyperlinkAlignStyle: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hyperlinkStyle: {
    textDecoration: "none",
    color: "#47a848",
    fontSize: "15px",
    padding: "10px 0px 10px 10px",
  },
  footerTextStyle: {
    display: "flex",
    flexDirection: "row",
    color: "#47a848",
    fontSize: "15px",
    justifyContent: "space-around",
  },
  footerStyle: {
    maxWidth: "75%",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px",
    margin: "0px auto 0px auto !important",
    boxShadow: "0px -2px 3px #47a848",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box div={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Orders(props) {
  const { phoneNumber } = props.user;
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [res, setRes] = useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Grid container className={classes.cartBodyStyling}>
      <Grid container spacing={2} className={classes.cartContainer}>
        <Grid item xs={12} sm={12}>
          <span className={classes.cartHeaderName}>My Orders</span>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.root}>
          <AppBar position="static" className={classes.TabStyle}>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              aria-label="simple tabs example"
              classes={{ indicator: classes.activeColor }}
            >
              <Tab label="Active" {...a11yProps(0)} />
              <Tab label="History" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <ActiveOrders />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <HistoryOrder />
          </TabPanel>
        </Grid>
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

export default connect(mapStateToProps)(Orders);
