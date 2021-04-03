import { makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";

export const CartStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    height: "auto",
    paddingTop: "20px",
  },
  boxDetails: {
    width: "100%",
    height: "auto",
    // paddingTop: "15px",
  },
  boxDetailsSelect: {
    width: "100%",
    height: "auto",
    marginTop: "15px",
  },
  div: {
    textAlign: "center",
    height: "70vh",
    width: "100%",
  },
  media: {
    width: "120px",
    height: "50px",
  },
  cartBodyStyling: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
  },
  couponCodeStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  couponCodeStyleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  couponCodeStyleRow2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "red",
    "& svg": {
      marginLeft: "5px",
    },
    "& p": {
      marginLeft: "5px",
    },
  },
  buttonApplyStyle: {
    color: "white",
    backgroundColor: "#47a848",
    borderRadius: "5px",
    padding: "5px 15px !important",
    fontSize: "10px",
    "&:hover": {
      color: "#47a848",
      fontSize: "10px",
      backgroundColor: "white",
      border: "#47a848 solid 2px",
    },
  },
  headerCartStyle: {
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    backgroundColor: "white",
    maxWidth: "60% !important",
    position: "fixed",
    top: "0px",
    left: "0px",
    right: "0px",
    zIndex: 1,
    height: "57px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
    },
  },
  cartContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "75px 5px 15px 5px",
    },
    width: "60%",
    padding: "15px",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "75px",
  },
  cardAlignStyle: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // boxShadow: "0px 0.5px 2px #47a848, 0px 0.5px 1px #47a848 !important",
  },
  cardPriceDetailStyle: {
    padding: "10px 10px 10px 10px",
    boxShadow: "0px 0.5px 2px #47a848, 0px 0.5px 1px #47a848 !important",
  },
  cardPriceDetailDiscountStyle: {
    display: "flex",
    flexDirection: "row",
  },
  logoAlignStyling: {
    textAlign: "center",
  },
  arrowAlignStyling: {
    textAlign: "center",
  },
  cartHeaderName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "30px",
  },
  PriceDiscountStyling: {
    display: "flex",
    flexDirection: "column",
    textAlign: "end",
  },
  PriceDiscountHeader: {
    display: "flex",
    flexDirection: "column",
    textAlign: "start",
  },
  label: {
    display: "inline-block",
    width: "8em",
    backgroundColor: "#42b4d6",
    borderRadius: "6px",
    color: "#ffffff",
    padding: "0.5em",
    cursor: "pointer",
  },
  DropdownStyling: {
    width: "100% !important",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  DeliverAlignment: {
    flexDirection: "row !important",
  },
  color: {
    color: "black",
  },
  radioButton: {
    color: "#47a848",
  },
  cartBoxHeading: {
    padding: "15px 0 15px 0px",
    borderBottom: "#f4f4f4 1px solid",
    lineHeight: "18px",
    margin: 0,
  },
  cardInputStyle: {
    padding: "15px 0 15px 0px",
  },
  disabled: {
    backgroundColor: "#ccc !important",
    color: "#47a848 !important",
  },
  buttonStyle: {
    backgroundColor: "#47a848",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#47a848",
      border: "1px solid #47a848",
    },
  },
  warningIcon: {
    margin: "8px",
  },
  warning: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  warningText: {
    // color: "#FF9966",
    color: "#C03D29",
  },
  orderContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#47a84861",
    padding: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      padding: "15px",
    },
  },
  cartHeaderName_Green: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "30px",
    color: "#47a848",
  },
}));
