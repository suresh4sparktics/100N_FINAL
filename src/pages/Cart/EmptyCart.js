/* eslint-disable jsx-a11y/img-redundant-alt */
import { makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "./sad.png";

const useStyles = makeStyles({
  textCenter: {
    textAlign: "center",
    margin: "0 auto",
    height: "80vh",
  },
  textHead: {
    marginTop: "10px",
  },
  textContent: {
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#47a848",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#47a848",
      border: "1px solid #47a848",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  rootButton: {},
});

function EmptyCart() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.textCenter}>
      <img src={logo} alt="Image" />
      <div className={classes.textHead}>Your basket is empty.</div>
      <div className={classes.textContent}>
        Try some of our nutritious food and beverages from the menu.
      </div>

      <Button
        variant="contained"
        onClick={() => {
          history.push("/");
        }}
        classes={{ root: classes.rootButton }}
        className={classes.button}
      >
        Go to Menu
      </Button>
    </div>
  );
}

export default EmptyCart;
