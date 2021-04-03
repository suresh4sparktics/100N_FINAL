/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import logo from "./happy.png";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import { HappyCartStyles } from "./HappyCartStyles";

function HappyCart(props) {
  const { user, orderId } = props;
  const classes = HappyCartStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [feedback, setFeedBack] = useState("");
  const [display, setDisplay] = useState(true);
  const [displayText, setDisplayText] = useState(false);

  function onChange(event, newValue) {
    setValue(newValue);
    console.log(newValue);
    setDisplayText(true);
  }
  const handleFeedBack = () => {
    fetch(
      "https://jqfiey93v5.execute-api.us-east-1.amazonaws.com/staging/update-feedback",
      {
        method: "POST",
        body: JSON.stringify({
          mphone: `+91${user.phoneNumber}`,
          unique_server_order_id: `${orderId}`,
          feedback: `${feedback}`,
          rating: `${value}`,
        }),
      }
    )
      .then((t) => t.json())
      .then((t) => console.log(t));
    console.log(value);
    setDisplay(false);
  };

  const feedbackChange = (e) => {
    const value = e.target.value;
    setFeedBack(value);
    setDisplayText(true);
  };

  return (
    <>
      <div className={classes.textCenter}>
        <div className={display ? classes.feedback : classes.feedbackNone}>
          <p>How do you rate your experience?</p>
          <Rating
            className={classes.rating}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              onChange(event, newValue);
            }}
          />
          {displayText ? (
            <Fade bottom>
              <TextField
                required={true}
                id="feedback"
                name="feedback"
                fullWidth
                onChange={feedbackChange}
                autoComplete="off"
                value={feedback}
                InputProps={{ disableUnderline: true }}
                inputProps={{ root: classes.cardInputStyle1 }}
                className={classes.cardInputStyle}
                placeholder="Drop Your Suggestions"
              />
            </Fade>
          ) : null}
          <Button onClick={handleFeedBack} className={classes.button}>
            Send Feedback
          </Button>
        </div>
        <img src={logo} alt="Image" width="270px" />
        <div className={classes.textContent}>
          Try some delicious other food and beverages from our menu.
        </div>
        <Button
          onClick={() => {
            history.push("/");
          }}
          className={classes.button}
        >
          Go to Menu
        </Button>
      </div>
    </>
  );
}

export default HappyCart;
