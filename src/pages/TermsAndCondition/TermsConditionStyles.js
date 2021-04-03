import { makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";

export const TermsConditionStyles = makeStyles((theme) => ({
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
      fontSize: "16px",
    },
    width: "75%",
    padding: "70px 15px 15px 15px",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
    height: "90vh",
    fontSize: "20px",
  },
  heading: {
    textAlign: "center",
    width: "100%",
    fontSize: "30px",
    margin: "0px",
    alignItems: "center",
    paddingTop: "8px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  headingGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainerInside: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
  },
}));
