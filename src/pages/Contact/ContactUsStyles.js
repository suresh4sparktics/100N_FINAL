import { makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";

export const ContactUsStyles = makeStyles((theme) => ({
  root1: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none !important",
      padding: "0px",
    },
  },
  cartContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "auto",
    },
    width: "75%",
    padding: "70px 15px 15px 15px",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
    height: "90vh",
  },
  contactUS: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "5px",
  },
  textField: {
    margin: "10px",
    width: "100%",
  },
  address: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "10px",
    padding: "5px",
  },
  map: {
    width: "100%",
    marginTop: "10px",
  },
  mapIframe: {
    width: "100%",
  },
  mapMedia: {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: "0",
    "& iframe": {
      left: "0",
      top: "0",
      height: "100%",
      width: "100%",
      position: "absolute",
    },
  },
  buttonStyle: {
    marginTop: "15px",
    color: "#fff",
    backgroundColor: "#47a848",
    border: "1px solid #47a848",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#47a848",
    },
  },
  cartContainerInside: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
  },
  heading: {
    textAlign: "center",
    width: "100%",
    fontSize: "30px",
    margin: "0px",
    alignItems: "center",
    paddingTop: "8px",
  },
  headingGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
