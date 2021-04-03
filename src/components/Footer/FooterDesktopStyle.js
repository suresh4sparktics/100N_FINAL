import { makeStyles } from "@material-ui/core";

const FooterDesktopStyles = makeStyles((theme) => ({
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
  hyperlinkStyle: {
    textDecoration: "none",
    color: "#47a848",
    fontSize: "18px",
    padding: "10px 0px 10px 10px",
  },
  hyperlinkStyleIcon: {
    textDecoration: "none",
    color: "#47a848",
  },
  followus: {
    textDecoration: "none",
    color: "#47a848",
    fontSize: "x-large",
    padding: "10px 0px 10px 10px",
  },
  footerTextStyle: {
    display: "flex",
    flexDirection: "row",
    color: "#47a848",
    fontSize: "18px",
    justifyContent: "space-around",
  },
  footerStyle: {
    maxWidth: "75%",
    maxHeight: "100px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    display: "flex",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px 0px",
    margin: "0px auto 0px auto !important",
    // boxShadow: "0px -2px 3px #47a848",  footer
    // boxShadow: "0 8px 6px -6px #47a848", header
    boxShadow:
      "0px -4px 4px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  gridMargin: {
    marginTop: "13px",
  },
}));

export default FooterDesktopStyles;
