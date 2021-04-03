/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
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
import { addCart } from "../../redux/product/productAction";
import { BackIcon } from "../Icons_Final/Icon";
import { AddCart as useStyles } from "./AddCartStyles";

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

function AddCart(props) {
  const { product, addOns, addCart, productCart } = props;
  const classes = useStyles();
  const theme = useTheme();
  const ADDONS = [];
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [cart2, setCart2] = React.useState([]);
  const [addonsCart, setAddonsCart] = React.useState([]);
  const [numOfProducts, setNumOfProducts] = React.useState(1);
  const [total, setTotal] = React.useState(product[5]);
  const [cart, setCart] = React.useState({
    productname: product.item_name,
    selectedAddons: [],
    selectedQuantity: numOfProducts,
    price: product.online_price,
    total: product.online_price * numOfProducts,
    id: product.item_id,
    variant: product.variant,
  });

  // useEffect(() => {
  const allowedAddons = product.allowed_addons
    ? JSON.parse(product.allowed_addons)
    : null;

  if (allowedAddons) {
    for (let i = 0; i < allowedAddons.length; i++) {
      for (let j = 0; j < addOns.length; j++) {
        if (allowedAddons[i] === addOns[j].addon_code) {
          ADDONS.push(addOns[j]);
        }
      }
    }
  }
  // }, []);

  // console.log(ADDONS);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // console.log("close");
    setNumOfProducts(1);
    setOpen(false);
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCart({
      ...cart,
      selectedAddons: cart2,
      selectedQuantity: numOfProducts,
      total:
        product.online_price * numOfProducts +
        cart2.reduce(function (acc, curr) {
          return acc + curr.addon_price;
        }, 0),
      cartID: productCart ? productCart.length + 1 : 1,
    });
    setNumOfProducts(1);
    setCart2([]);
    setOpen(false);
  };

  const change2 = (event) => {
    const val = parseInt(event.target.value);
    if (event.target.checked) {
      let data = cart2;
      for (let i = 0; i < addOns.length; i++) {
        if (addOns[i].addon_code === val) {
          data.push(addOns[i]);
          break;
        }
      }
      // console.log(data.filter((e) => e.addon_name));
      setCart2(data);
    } else {
      let data1 = cart2;
      let data2 = data1.filter((e) => e.addon_code !== val);
      // console.log(data2.filter((e) => e.addon_name));
      setCart2(data2);
    }
  };

  const incrementCart = () => {
    setNumOfProducts((prevState) => prevState + 1);
    setTotal((prevState) => prevState + product.price);
  };
  const decrementCart = () => {
    setNumOfProducts((prevState) => prevState - 1);
    setTotal((prevState) => prevState - product.price);
  };

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

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
            <Button
              className={classes.increment}
              onClick={decrementCart}
              disabled={numOfProducts < 2}
            >
              &#8722;
            </Button>
            <span className={classes.numberStyling}>{numOfProducts}</span>
            <Button className={classes.drecrement} onClick={incrementCart}>
              +
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent dividers>
          {/* <div className={classes.dialogBodyStyling}> */}
          <form onSubmit={handleSubmit} className={classes.formStyle}>
            <div className={classes.form_divStyle}>
              {props.product.allowed_weights ? null : null}
              {ADDONS.length ? (
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel
                    // component="legend"
                    className={classes.legendaryStyle}
                  >
                    ADD-ONS (Optional)
                  </FormLabel>
                  <FormGroup>
                    {ADDONS.map((ele) => (
                      <FormControlLabel
                        key={`${ele.addon_name}`}
                        control={<Checkbox />}
                        label={`${ele.addon_name}(Rs : ${ele.addon_price}/-)`}
                        value={ele.addon_code}
                        onChange={change2}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              ) : null}
              <Button type="submit" className={classes.dialogButtonStyle}>
                {" "}
                Add Cart{" "}
              </Button>
            </div>
          </form>
        </DialogContent>
        {/* </div> */}
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    addOns: state.product.addOn,
    productCart: state.product.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id) => dispatch(addCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCart);

// cart2.map((e) => e.addon_name)
