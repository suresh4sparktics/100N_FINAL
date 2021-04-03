import { makeStyles } from "@material-ui/core";

const FooterMobileStyles = makeStyles({
  root: {
    width: "70%",
    height: "45px",
    backgroundColor: "#47a848",
    position: "fixed",
    bottom: 10,
    right: 0,
    left: 0,
    borderBottomLeftRadius: "35px",
    borderBottomRightRadius: "35px",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
  },
  item: {
    textAlign: "center",
  },
  media: {
    width: "120px",
    height: "50px",
  },
  badgeColor: {
    backgroundColor: "white",
    color: "#47a848",
  },
  button: {
    padding: 0,
  },
});

export default FooterMobileStyles;
