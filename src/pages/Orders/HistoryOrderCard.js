import React, { useState } from "react";
import {
  AppBar,
  Dialog,
  DialogContent,
  makeStyles,
  IconButton,
  Toolbar,
  Typography,
  Card as Card1,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BackIcon } from "../../components/Icons_Final/Icon";
import OrderCard from "./OrderCard";

const useStyles = makeStyles((theme) => ({
  productRowStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "10px",
    alignItems: "center",
  },
  uiStyling: {
    listStyleType: "none",
    "& $li": {
      margin: "5px 0px 5px 0px",
    },
  },
  appBar: {
    position: "relative",
    backgroundColor: "white",
    color: "#47a848",
    paddingRight: "0px !important",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolBarStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  card: {
    width: "60%",
    marginTop: "20px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

function HistoryOrderCard(props) {
  const { item } = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card1 className={classes.card} onClick={handleOpen}>
        <Grid container item xs={12} className={classes.productRowStyle}>
          <Grid item xs={12}>
            Order ID : {item.order_id}
          </Grid>
          <Grid item xs={12}>
            Placed On : {item.placed_on}
          </Grid>
          <Grid item xs={12}>
            CartValue : {item.total_amount}
          </Grid>
        </Grid>
      </Card1>
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          fullScreen
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <BackIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {item.order_id}
              </Typography>
            </Toolbar>
          </AppBar>
          <DialogContent dividers>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <h3>Order Details</h3>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Order ID</TableCell>
                    <TableCell align="right">{item.order_id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Delivery Time</TableCell>
                    <TableCell align="right">{item.delivery_time}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Instructions</TableCell>
                    <TableCell align="right">{item.extra_notes}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Order Type</TableCell>
                    <TableCell align="right">{item.order_type}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Order Status</TableCell>
                    <TableCell align="right">{item.order_status}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Amount</TableCell>
                    <TableCell align="right">
                      Rs :{item.total_amount}/-
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Placed On</TableCell>
                    <TableCell align="right">{item.placed_on}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <OrderCard items={item.items} />
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
}

export default HistoryOrderCard;
