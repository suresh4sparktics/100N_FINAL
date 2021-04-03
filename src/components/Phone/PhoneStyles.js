import React from "react";
import { makeStyles, withStyles, Slide } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#47a848",
  },
});

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const PhoneStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: "white",
    color: "#47a848",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  getOtpButton: {
    backgroundColor: "#47a848",
    color: "white",
    // width: "100%",
    "&:hover": {
      color: "#47a848",
      backgroundColor: "white",
      border: "1px solid #47a848",
      width: "100%",
    },
  },
  FieldStyle: {
    width: "100%",
    margin: "0 auto",
  },
  paper: {
    width: "100%",
    maxWidth: "30%",
    margin: "0px",
    height: "55%",
    paddingRight: "0 !important",
    position: "fixed",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      bottom: "0",
      width: "100%",
      maxWidth: "100%",
    },
    overflow: "hidden",
  },
  phoneNumberStyle: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  formStyle: {
    height: "100%",
  },
  formControlStyle: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  dialogText: {
    color: "black",
    textAlign: "center",
    paddingTop: "5px",
  },
  otpButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  resendOTP: {
    width: "100%",
    textAlign: "right",
    fontSize: "small",
    paddingTop: "5px",
  },
  resendLink: {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#47a848",
  },
  inputBase: {
    width: "75%",
    margin: "0 auto",
  },
  disabled: {
    backgroundColor: "#ccc !important",
    color: "#47a848 !important",
  },
}));

export default PhoneStyles;
