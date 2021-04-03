/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import loader from "../../100N_Loader.gif";

import {
  InQueue_White,
  Preparation_White,
  Delivery_White,
} from "../../components/Icons_Final/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { AppBar, IconButton, Toolbar, useMediaQuery } from "@material-ui/core";
import { BackIcon } from "../../components/Icons_Final/Icon";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import OrderCard from "./OrderCard";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: "#47a848",
    },
  },
  completed: {
    "& $line": {
      backgroundColor: "#47a848",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    // backgroundColor: "#fff",
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#47a848",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: "#47a848",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <InQueue_White />,
    2: <Preparation_White />,
    3: <Delivery_White />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0px !important",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rootLoader: {
    width: "100%",
    padding: "0px !important",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  root1: {
    padding: "0px",
  },
  paperWidthSm: {
    maxWidth: "600px !important",
  },
  appBar: {
    position: "relative",
    backgroundColor: "white",
    color: "#47a848",
    paddingRight: "0px !important",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    "& div": {
      width: "50%",
    },
  },
  orderID: {
    textAlign: "center",
    "&:hover": {
      color: "#47a848",
      cursor: "pointer",
    },
  },
  textCenter: {
    textAlign: "center",
    margin: "0 auto",
    height: "80vh",
  },
  textHead: {
    marginTop: "10px",
  },
  textContent: {
    marginTop: "10px",
  },
  menuButton: {
    marginTop: "10px",
    backgroundColor: "#47a848",
    color: "white",
    textTransform: "none",
  },
  link: {
    textDecoration: "none",
  },
  loader: {
    width: "100%",
  },
}));

function getSteps() {
  return ["In Queue", "In Preparation", "Ready for Delivery"];
}

function ActiveOrders(props) {
  const { phoneNumber } = props.user;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setIsLoading(false);
    fetch(`${process.env.REACT_APP_BASIC_URL}list-orders`, {
      method: "POST",
      body: JSON.stringify({
        mphone: `+91${phoneNumber}`,
        client: "100n",
        Order_query_type: "active",
      }),
    })
      .then((t) => t.json())
      .then((data) => {
        // console.log(data);
        setData(data.body);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let mounted = true;
    const interval = setInterval(() => {
      if (mounted) {
        fetch(`${process.env.REACT_APP_BASIC_URL}list-orders`, {
          method: "POST",
          body: JSON.stringify({
            mphone: `+91${phoneNumber}`,
            client: "100n",
            Order_query_type: "active",
          }),
        })
          .then((t) => t.json())
          .then((data) => {
            // console.log(data);
            setData(data.body);
          })
          .catch((err) => console.log(err));
      }
    }, 10000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      if (data[0].order_status === "In Queue") {
        setActiveStep(0);
      } else if (data[0].order_status === "In Preparation") {
        setActiveStep(1);
      } else if (data[0].order_status === "Ready for Delivery") {
        setActiveStep(2);
      }
    }
  }, [data]);

  return (
    <>
      {isLoading ? (
        <div className={classes.root}>
          {data.length > 0 ? (
            <Fragment>
              <p className={classes.orderID}>
                ORDER ID :{" "}
                <span onClick={handleClickOpen}>
                  <strong>{data[0].order_id}</strong>{" "}
                </span>
                <span>(View Details)</span>
              </p>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
                classes={{ root: classes.root1 }}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <Dialog
                classes={{ paperFullWidth: classes.paperWidthSm }}
                fullWidth={true}
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
              >
                <AppBar className={classes.appBar}>
                  <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                      <BackIcon />
                    </IconButton>
                    <Typography
                      component={"span"}
                      variant="h6"
                      className={classes.title}
                    >
                      {data.length > 0 ? data[0].order_id : null}
                    </Typography>
                  </Toolbar>
                </AppBar>
                <DialogContent dividers>
                  <TableContainer
                    component={Paper}
                    className={classes.tableContainer}
                  >
                    <Table className={classes.table} component="div">
                      <TableHead component="div">
                        <TableRow component="div">
                          <h3>Order Details</h3>
                        </TableRow>
                      </TableHead>
                      <TableBody component="div">
                        <TableRow component="div">
                          <TableCell component="div">Order ID</TableCell>
                          <TableCell align="right" component="div">
                            {data.length > 0 ? data[0].order_id : null}
                          </TableCell>
                        </TableRow>
                        <TableRow component="div">
                          <TableCell component="div">Delivery Time</TableCell>
                          <TableCell align="right" component="div">
                            {data.length > 0 ? data[0].delivery_time : null}
                          </TableCell>
                        </TableRow>
                        <TableRow component="div">
                          <TableCell component="div">Coupon</TableCell>
                          <TableCell component="div" align="right">
                            {data.length > 0 ? data[0].coupon : null}
                          </TableCell>
                        </TableRow>
                        <TableRow component="div">
                          <TableCell component="div">Order Type</TableCell>
                          <TableCell component="div" align="right">
                            {data.length > 0 ? data[0].order_type : null}
                          </TableCell>
                        </TableRow>
                        <TableRow component="div">
                          <TableCell component="div">Order Status</TableCell>
                          <TableCell component="div" align="right">
                            {data.length > 0 ? data[0].order_status : null}
                          </TableCell>
                        </TableRow>
                        <TableRow component="div">
                          <TableCell component="div">Total Amount</TableCell>
                          <TableCell component="div" align="right">
                            &#x20B9;{" "}
                            {data.length > 0 ? data[0].total_amount : null}
                          </TableCell>
                        </TableRow>
                        <TableRow component="div">
                          <TableCell component="div">Placed On</TableCell>
                          <TableCell component="div" align="right">
                            {data.length > 0 ? data[0].placed_on : null}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <OrderCard items={data.length > 0 ? data[0].items : null} />
                </DialogContent>
              </Dialog>
            </Fragment>
          ) : (
            <div>
              <div className={classes.textHead}>
                No active order is available.
              </div>
              <div className={classes.textContent}>
                Try some delicious food and beverages from our menu.
              </div>
              <Link to="/" className={classes.link}>
                <Button className={classes.menuButton}>Go to Menu</Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={classes.rootLoader}>
          <img src={loader} alt="loading..." className={classes.loader} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(ActiveOrders);
