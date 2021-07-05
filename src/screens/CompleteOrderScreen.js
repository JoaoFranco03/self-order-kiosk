import { Typography, Box, CircularProgress, Button, Fade } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import Logo from "../components/Logo";
import React, { useContext, useEffect } from "react";
import { createOrder, updateProduct } from "../actions";
import { Store } from "../Store";
import { useStyles } from "../styles";

export default function CompleteOrderScreen(props) {
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { order } = state;
  const { loading, error, newOrder } = state.orderCreate;

  useEffect(() => {
    console.log(order.orderItems)
    if (order.orderItems.length > 0) {
      createOrder(dispatch, order);
      updateProduct(order.orderItems, "subtract")
    }
  }, [order, dispatch]);

    return (
    <Fade in={true}>
    <Box className={[styles.root, styles.chooseBackground2]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h3"
                component="h3"
              >
                Your Order has been placed
              </Typography>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h1"
                component="h1"
              >
                Thank you!
              </Typography>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h3"
                component="h3"
              >
                Your order number is {newOrder.number}
              </Typography>
            </>
          )}
        </Box>
        <Box>
          <Button
            onClick={() => props.history.push("/")}
            variant="contained"
            color="secondary"
            className={[styles.largeButton, styles.rounded]}
          >
            Order Again
          </Button>
        </Box>
      </Box>
    </Box>
    </Fade>
  );
}
