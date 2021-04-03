import { makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";

export const AboutUsStyles = makeStyles((theme) => ({
  cartBodyStyling: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
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
    // height: "90vh",
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
    height: "10vh",
  },
  cartContainerInside: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "0px",
  },
  root1: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none !important",
      padding: "0px",
    },
  },
  content: {
    border: "1px solid transparent",
    height: "100%",
    padding: "0px 15px",
    transition: "all 600ms ease",
    boxShadow: "0px 0px 15px rgb(0 0 0 / 10%)",
    "&:hover": {
      borderBottomRightRadius: "40px",
      borderBottomLeftRadius: "40px",
      border: "2px solid #47a848",
    },
    "&>p": {
      fontStyle: "italic",
    },
    "&>h3": {
      textAlign: "center",
    },
  },
  block: {
    width: "100%",
    textAlign: "center",
    marginBlockEnd: "0rem",
    marginBlockStart: "0rem",
    margin: "10px",
    height: "5vh",
    fontSize: "20px",
  },
  contectFlex: {
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "10px",
  },
  contentFontSize: {
    fontSize: "20px",
  },
  p: {
    marginBlockEnd: "0rem",
    marginBlockStart: "0rem",
  },
  contentHeight: {
    height: "5vh",
    width: "100%",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      paddingBottom: "10px",
    },
  },
}));
