/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Button,
  Card as Card1,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { NonVeg, Veg, Egg } from "../../components/Icons_Final/Icon";
import OrderCardEachItem from "./OrderCardEachItem";
const useStyles = makeStyles((theme) => ({
  productRowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "10px",
    alignItems: "center",
  },
}));

function OrderCard(props) {
  const { items } = props;

  return (
    <>
      <Card1 className="cartcard">
        {items.map((ele) => (
          <OrderCardEachItem key={ele.productname} item={ele} />
        ))}
      </Card1>
      <br />
    </>
  );
}

export default OrderCard;

{
  /* <Grid container item xs={12} className={classes.productRowStyle}>
          <Grid container item xs={12}>
            {items[0].variant ? (
              <Grid container justify="center" alignItems="center" item xs={1}>
                {items[0].variant === "V" ? (
                  <Veg />
                ) : items[0].variant === "NV" ? (
                  <NonVeg />
                ) : (
                  <Egg />
                )}
              </Grid>
            ) : null}
            <Grid
              container
              justify="flex-start"
              alignItems="center"
              item
              xs={9}
            >
              <p>{items[0].productname}</p>
            </Grid>
            <Grid container justify="flex-end" alignItems="center" item xs={2}>
              <p>&#x20B9; {items[0].total}/-</p>
            </Grid>
          </Grid>
          {items[0].selectedAddons ? (
            <Grid item container xs={12} className={classes.alignContent}>
              <Grid
                item
                container
                xs={12}
                justify="flex-start"
                alignItems="center"
              >
                <p className={classes.uiStyling}>
                  {items[0].selectedAddons.map((data, i) => (
                    <span>{(i ? ", " : "") + data}</span>
                  ))}
                </p>
              </Grid>
            </Grid>
          ) : null}
        </Grid> */
}
