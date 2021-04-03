/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Checkbox, FormGroup } from "@material-ui/core";
import { connect } from "react-redux";
import { BackIcon } from "../Icons_Final/Icon";

const useStyles = makeStyles((theme) => ({
  paperWidthSm: {
    maxWidth: "600px !important",
  },
  appBar: {
    position: "relative",
    backgroundColor: "white",
    color: "#47a848",
    paddingRight: "0px !important",
  },
  formControl: {
    width: "100% !important",
  },
  dialogButtonStyle: {
    width: "100%",
    backgroundColor: "#47a848",
    color: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#47a848",
    },
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  dialogBodyStyling: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  legendaryStyle: {
    backgroundColor: "#47a8482b",
    textAlign: "center",
    padding: "20px 0px",
    width: "100% !important",
  },
  numberStyling: {
    padding: "6px 5px",
    backgroundColor: "#47a848",
    color: "white",
    fontSize: "13px",
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "#47a848",
    borderRadius: "5px",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    padding: "5px 15px !important",
    fontSize: "10px",
    "&:hover": {
      color: "#47a848",
      fontSize: "10px",
      backgroundColor: "white",
      border: "#47a848 solid 2px",
    },
  },
  increment: {
    backgroundColor: "white",
    fontSize: "15px !important",
    height: "30px !important",
    color: "#47a848",
    minWidth: "40px !important",
    paddingRight: "0px",
    border: "#47a848 solid 2px",
    borderBottomLeftRadius: "70px",
  },
  drecrement: {
    backgroundColor: "white",
    fontSize: "15px !important",
    height: "30px !important",
    minWidth: "40px !important",
    paddingLeft: "0px",
    color: "#47a848",
    border: "#47a848 solid 2px",
    borderBottomRightRadius: "70px",
  },
  formStyle: {
    height: "100%",
  },
  form_divStyle: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function OrdersDetails(props) {
  const { product } = props;
  const classes = useStyles();
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.buttonStyle} onClick={handleClickOpen}>
        Add
      </Button>
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
            <Typography variant="h6" className={classes.title}>
              {props.product.item_name}
            </Typography>
          </Toolbar>
        </AppBar>
        <DialogContent dividers></DialogContent>
      </Dialog>
    </div>
  );
}

export default OrdersDetails;
