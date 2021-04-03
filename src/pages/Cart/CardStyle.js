import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundColor: "white",
    color: "#47a848",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  media: {
    height: "1px",
    paddingTop: "36.82%",
  },
  productDetail: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
  },
  quantityStyle: {
    padding: "6px 5px",
    backgroundColor: "#47a848",
    color: "white",
    fontSize: "13px",
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
  alignStylingButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  alignContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px 0px 0px 5px",
    justifyContent: "space-between",
  },
  cartimage: {
    [theme.breakpoints.down("sm")]: {
      width: "40px !important",
      height: "30px",
    },
    width: "130px !important",
    height: "70px",
  },
  textAlign: {
    textAlign: "center",
    marginTop: "5px",
  },
  productRowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "10px",
    alignItems: "center",
  },
  removeButtonAlignment: {
    display: "flex",
    flexDirection: "row",
    color: "grey",
    justifyContent: "flex-end",
    padding: "0px 18px 12px 0px",
  },
  alignDeleteIcon: {
    color: "grey",
    cursor: "pointer",
  },
  typography: {
    padding: theme.spacing(2),
  },
  popover: {
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcd680",
    "& span": {
      marginLeft: "5px",
    },
  },
  buttonPopover: {
    margin: "2px",
    padding: "2px",
    color: "white",
    backgroundColor: "#47a848",
    borderRadius: "5px",
    "&:hover": {
      color: "#47a848",
      backgroundColor: "white",
      border: "#47a848 solid 2px",
    },
  },
  dialogText: {
    color: "black",
    textAlign: "center",
    paddingTop: "5px",
    margin: "10px",
  },
  cancelButton: {
    backgroundColor: "#CC3300",
  },
  confirmButton: {
    backgroundColor: "#47a848",
  },
}));

export default useStyles;
