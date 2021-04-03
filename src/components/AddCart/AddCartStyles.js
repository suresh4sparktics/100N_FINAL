import { makeStyles } from "@material-ui/core";

export const AddCart = makeStyles((theme) => ({
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
    backgroundColor: "#47a848",
    textAlign: "center",
    padding: "20px 0px",
    width: "100% !important",
    color: "#ffffff",
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

export const AddCartButton = makeStyles((theme) => ({
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
    padding: "3.5px 3px",
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
    height: "25px !important",
    color: "#47a848",
    minWidth: "25px !important",
    padding: "5px 5px 10px 10px !important",
    border: "#47a848 solid 2px",
    borderBottomLeftRadius: "70px",
  },
  drecrement: {
    backgroundColor: "white",
    fontSize: "15px !important",
    height: "25px !important",
    minWidth: "25px !important",
    padding: "5px 10px 10px 5px",
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
