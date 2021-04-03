/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button, Card as Card1, makeStyles, Slide } from "@material-ui/core";
import "./Card.css";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import {
  addCartButton,
  decrement,
  increment,
  removeCart,
  removeCartButton,
  removeCartButton1,
} from "../../redux/product/productAction";
import { NonVeg, Veg, Egg } from "../../components/Icons_Final/Icon";
import Popover from "@material-ui/core/Popover";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./CardStyle";

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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)((props) => {
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

const Card = (props) => {
  const [open, setOpen] = React.useState(false);

  const id = open ? "simple-popover" : undefined;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    removeCart,
    increment,
    decrement,
    product,
    removeCartButton,
    removeCartButton1,
    addCartButton,
  } = props;
  const classes = useStyles();
  return (
    <>
      <Card1 className="cartcard">
        <Grid container item xs={12} className={classes.productRowStyle}>
          <Grid container item xs={12}>
            {product.variant ? (
              <Grid container justify="center" alignItems="center" item xs={1}>
                {product.variant === "V" ? (
                  <Veg />
                ) : product.variant === "NV" ? (
                  <NonVeg />
                ) : (
                  <Egg />
                )}
              </Grid>
            ) : (
              <Grid
                container
                justify="center"
                alignItems="center"
                item
                xs={1}
              ></Grid>
            )}
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              item
              xs={8}
            >
              <p>{product.productname}</p>
            </Grid>
            <Grid container justify="flex-end" alignItems="center" item xs={3}>
              <p>&#x20B9; {product.total}/-</p>
            </Grid>
          </Grid>
          {product.selectedAddons && product.selectedAddons.length ? (
            <Grid item container xs={12} className={classes.alignContent}>
              <Grid
                item
                container
                xs={12}
                justify="flex-start"
                alignItems="center"
              >
                <p>
                  {product.selectedAddons.map((data, i) => (
                    <span key={i}>{(i ? ", " : "") + data.addon_name}</span>
                  ))}
                </p>
              </Grid>
              <Grid
                container
                justify="flex-start"
                alignItems="center"
                item
                xs={6}
              >
                <DeleteIcon
                  onClick={handleClickOpen}
                  className={classes.alignDeleteIcon}
                  style={{ fontSize: 20 }}
                />{" "}
                Remove
              </Grid>
              <Grid
                container
                justify="flex-end"
                alignItems="center"
                item
                xs={6}
              >
                <div className={classes.alignStylingButtons}>
                  <Button
                    onClick={() => decrement(product)}
                    className={classes.increment}
                  >
                    -
                  </Button>
                  <p className={classes.quantityStyle}>
                    {product.selectedQuantity}
                  </p>
                  <Button
                    onClick={() => increment(product)}
                    className={classes.drecrement}
                  >
                    +
                  </Button>
                </div>
              </Grid>
            </Grid>
          ) : (
            <Grid container item xs={12} className={classes.alignContent}>
              <Grid
                container
                justify="flex-start"
                alignItems="center"
                item
                xs={6}
              >
                <DeleteIcon
                  onClick={handleClickOpen}
                  className={classes.alignDeleteIcon}
                  style={{ fontSize: 20 }}
                />
                Remove
              </Grid>
              <Grid
                container
                justify="flex-end"
                alignItems="center"
                item
                xs={6}
              >
                <div className={classes.alignStylingButtons}>
                  <Button
                    onClick={() => removeCartButton(product)}
                    className={classes.increment}
                  >
                    -
                  </Button>
                  <p className={classes.quantityStyle}>
                    {product.selectedQuantity}
                  </p>
                  <Button
                    onClick={() => addCartButton(product)}
                    className={classes.drecrement}
                  >
                    +
                  </Button>
                </div>
              </Grid>
            </Grid>
          )}
        </Grid>

        <Dialog
          TransitionComponent={Transition}
          open={open}
          onClose={handleClose}
          fullWidth
        >
          <DialogTitle
            className={classes.title}
            id="customized-dialog-title"
            onClose={handleClose}
          >
            CONFIRMATION
          </DialogTitle>
          <DialogContentText className={classes.dialogText}>
            Are you sure?
          </DialogContentText>
          <DialogActions>
            <Button onClick={handleClose} className={classes.cancelButton}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                removeCartButton1(product);
                handleClose();
              }}
              className={classes.confirmButton}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Card1>
      <br />
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (id) => dispatch(removeCart(id)),
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id)),
    addCartButton: (id) => dispatch(addCartButton(id)),
    removeCartButton: (id) => dispatch(removeCartButton(id)),
    removeCartButton1: (id) => dispatch(removeCartButton1(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

// onClick={() => removeCartButton1(product)}

{
  /* <Popover
id={id}
open={open}
anchorEl={anchorEl}
onClose={handleClose}
anchorOrigin={{
  vertical: "bottom",
  horizontal: "right",
}}
transformOrigin={{
  vertical: "top",
  horizontal: "left",
}}
>
<div className={classes.popover}>
  <span>Are you sure?</span>
  <Button
    onClick={() => removeCartButton1(product)}
    className={classes.buttonPopover}
  >
    YES
  </Button>
  <Button onClick={handleClose} className={classes.buttonPopover}>
    NO
  </Button>
</div>
</Popover> */
}
