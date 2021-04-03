import { makeStyles } from "@material-ui/core";

export const HappyCartStyles = makeStyles({
  textCenter: {
    textAlign: "center",
    margin: "0 auto",
    height: "calc(100vh - 65px)",
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
    color: "#fff",
    textTransform: "none",
    marginRight: "25px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#47a848",
      border: "1px solid #47a848",
    },
  },
  buttonOpposite: {
    marginTop: "10px",
    backgroundColor: "#fff",
    color: "#47a848",
    textTransform: "none",
    marginRight: "25px",
    border: "1px solid #47a848",
    "&:hover": {
      backgroundColor: "#47a848",
      color: "#fff",
      border: "1px solid #47a848",
    },
  },
  feedback: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    boxShadow: "0px 0px 15px rgb(0 0 0 / 10%)",
  },
  feedbackNone: {
    display: "none",
  },
  cardInputStyle: {
    padding: "15px 10px 15px 10px",
    transition: "all 0.5s ease",
    border: "1px solid rgba(0,0,0,0.2)",
    margin: "5px",
  },
  cardInputStyle1: {
    padding: "15px 0 15px 0px",
    border: "1px solid black",
  },
  rating: {
    padding: "15px 10px 15px 10px",
    margin: "5px",
  },
});
