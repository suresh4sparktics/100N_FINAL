import { makeStyles } from "@material-ui/core";

export const CardStyles = makeStyles({
  media: {
    width: "100%",
    height: "200px",
  },
  productDetail: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  PriceAlignment: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    margin: "0px !important",
  },
  productCardAlignment: {
    padding: "10px 20px",
  },
  cardBody: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 0px 10px 0px",
  },
  textAlign1: {
    textAlign: "inherit",
    fontSize: "15px",
    textJustify: "inter-word",
  },
});
