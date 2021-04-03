import { makeStyles } from "@material-ui/core";
import pattern from "../Home/pattern.png";

const ProfileStyles = makeStyles((theme) => ({
  cartContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    width: "75%",
    padding: "70px 15px 15px 15px",
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    height: "86.55vh",
    overflow: "scroll",
  },
  media: {
    width: "120px",
    height: "50px",
  },
  FormStyleAlignment: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
      alignItems: "stretch",
    },
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  getOtpButton: {
    margin: "0 20px",
    color: "#47a848",
    backgroundColor: "white",
    border: "1px solid #47a848",
    "&:hover": {
      backgroundColor: "#47a848",
      color: "white",
    },
  },
  getOtpButtonOpposite: {
    margin: "0 20px",
    backgroundColor: "#47a848",
    color: "white",
    border: "1px solid #47a848",
    "&:hover": {
      color: "#47a848",
      backgroundColor: "white",
    },
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "40px",
    paddingTop: "10px",
  },
  cartHeaderName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "30px",
    paddingBottom: "15px",
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
  hyperlinkStyle: {
    textDecoration: "none",
    color: "#47a848",
    fontSize: "15px",
    padding: "10px 0px 10px 10px",
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
  root1: {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none !important",
      padding: "0px",
    },
  },
  textLabel: {
    width: "100%",
    marginBlockEnd: "1rem",
    marginBlockStart: "1rem",
  },
  profileDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  profileDetailsLeft: {
    display: "flex",
    flexDirection: "column",
  },
  profileDetailsRight: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  disabled: {
    backgroundColor: "#ccc !important",
    color: "#47a848 !important",
  },
}));

export default ProfileStyles;
