import { makeStyles } from "@material-ui/core";
import pattern from "./pattern.png";

export const HomeStyles = makeStyles((theme) => ({
  root1: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none !important",
      backgroundRepeat: "none !important",
      padding: "0px",
    },
  },
  socialIcon: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    fontSize: "15px",
    justifyContent: "center",
  },
  hyperlinkAlignStyle: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  floatIcons: {
    position: "fixed",
    zIndex: "10000",
    top: "250px",
    fontSize: "14px",
    padding: "5px",
    right: "0px",
    backgroundColor: "#47a848",
    borderTopLeftRadius: "10px",
    height: "auto",
    borderBottomLeftRadius: "10px",
    color: "white",
    transition: "bottom .2s",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hyperlinkStyle: {
    textDecoration: "none",
    color: "#47a848",
    fontSize: "15px",
    padding: "10px 0px 10px 10px",
  },
  scrollBarContainer: {
    backgroundColor: "#47a848",
    maxWidth: "75% !important",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "0px !important",
    position: "sticky",
    zIndex: "1000",
    top: "65px",
    [theme.breakpoints.down("sm")]: {
      // width: "100% !important",
      maxWidth: "100% !important",
      padding: "0px !important",
      position: "sticky",
    },
  },
  description: {
    color: "black",
    fontSize: "12px",
  },
  CardContainerStyle: {
    width: "75%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: "0px auto 0px auto !important",
    padding: "70px 20px",
    borderRadius: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      // margin: "0px auto 0px auto !important",
      backgroundColor: "transparent",
      padding: "59px 0px",
    },
  },
  ImageCardContainerStyle: {
    width: "75%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: "0px auto 0px auto !important",
    padding: "70px 20px",
    borderRadius: "0px",
    height: "calc(100vh - 100px)",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      // margin: "0px auto 0px auto !important",
      backgroundColor: "transparent",
      padding: "59px 0px",
    },
  },
  footerTextStyle: {
    display: "flex",
    flexDirection: "row",
    color: "#47a848",
    fontSize: "15px",
    justifyContent: "space-around",
  },
  footerStyle: {
    maxWidth: "75%",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px",
    margin: "0px auto 0px auto !important",
    boxShadow: "0px -2px 3px #47a848",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gridMargin: {
    marginTop: "13px",
  },
  loader: {
    width: "100%",
  },
  popupImage: {
    position: "relative",
    marginBottom: "-6px",
  },
  buttonContainer: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "60px",
    right: "10%",
    [theme.breakpoints.down("xs")]: {
      // display: "none",
      width: "75%",
      bottom: "30px",
    },
  },
  popupButton: {
    backgroundColor: "#fff",
    width: "75%",
    color: "#47a848",
    "&:hover": {
      backgroundColor: "#fff",
      width: "75%",
      color: "#47a848",
    },
  },
  popupDialog: {
    maxWidth: "none",
  },
  labelFontWeight: {
    fontWeight: "900",
  },
}));
