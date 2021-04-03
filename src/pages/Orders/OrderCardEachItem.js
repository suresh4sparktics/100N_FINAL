import React from "react";
import Grid from "@material-ui/core/Grid";
import { NonVeg, Veg, Egg } from "../../components/Icons_Final/Icon";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productRowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "10px",
    alignItems: "center",
  },
}));

function OrderCardEachItem(props) {
  const { item } = props;
  const classes = useStyles();
  return (
    <Grid container item xs={12} className={classes.productRowStyle}>
      <Grid container item xs={12}>
        {item.variant ? (
          <Grid container justify="center" alignItems="center" item xs={1}>
            {item.variant === "V" ? (
              <Veg />
            ) : item.variant === "NV" ? (
              <NonVeg />
            ) : (
              <Egg />
            )}
          </Grid>
        ) : null}
        <Grid container justify="flex-start" alignItems="center" item xs={9}>
          <p>{item.productname}</p>
        </Grid>
        <Grid container justify="flex-end" alignItems="center" item xs={2}>
          <p>&#x20B9; {item.total}/-</p>
        </Grid>
      </Grid>
      {item.selectedAddons ? (
        <Grid item container xs={12} className={classes.alignContent}>
          <Grid item container xs={12} justify="flex-start" alignItems="center">
            <p>
              {item.selectedAddons.map((data, i) => (
                <span key={i}>{(i ? ", " : "") + data.addon_name}</span>
              ))}
            </p>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default OrderCardEachItem;
