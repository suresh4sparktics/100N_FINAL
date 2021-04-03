/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

import HistoryOrderCard from "./HistoryOrderCard";
import { Link } from "react-router-dom";
import loader from "../../100N_Loader.gif";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  },
  rootLoader: {
    width: "100%",
    padding: "0px !important",
  },
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
  menuButton: {
    marginTop: "10px",
    backgroundColor: "#47a848",
    color: "white",
    textTransform: "none",
  },
  link: {
    textDecoration: "none",
  },
  loader: {
    width: "100%",
  },
}));

function HistoryOrder(props) {
  const { phoneNumber } = props.user;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(false);
    fetch(`${process.env.REACT_APP_BASIC_URL}list-orders`, {
      method: "POST",
      body: JSON.stringify({
        mphone: `+91${phoneNumber}`,
        client: "100n",
        Order_query_type: "history",
      }),
    })
      .then((t) => t.json())
      .then((data) => {
        // console.log(data);
        setData(data.body);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={classes.root}>
          {data.length > 0 ? (
            data.map((ele) => (
              <HistoryOrderCard key={ele.order_id} item={ele} />
            ))
          ) : (
            <div>
              <div className={classes.textHead}>
                No order history available.
              </div>
              <div className={classes.textContent}>
                Try some delicious food and beverages from our menu.
              </div>
              <Link to="/" className={classes.link}>
                <Button className={classes.menuButton}>Go to Menu</Button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={classes.rootLoader}>
          <img src={loader} alt="loading..." className={classes.loader} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(HistoryOrder);

{
  /* <MaterialTable
        columns={column}
        data={data}
        options={{ search: false, showTitle: false, toolbar: false }}
        onRowClick={(e, rowData) => {
          console.log(rowData);
          setOpen(true);
          setRowData(rowData);
        }}
      />{" "} */
}

// const column = [
//   { title: "Order ID", field: "order_id" },
//   { title: "Order Status", field: "order_status" },
//   { title: "Order Type", field: "order_type" },
//   { title: "Total Amount", field: "total_amount" },
// ];
