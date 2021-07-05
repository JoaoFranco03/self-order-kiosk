import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Fade,
} from "@material-ui/core";
import { useStyles } from "../styles";
import Logo from "../components/Logo";
import React from "react";

export default function PaymentScreen(props) {
  const styles = useStyles();
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.chooseBackground2]}>
        <Box className={[styles.main, styles.center]}>
          <Box>
            <Logo large></Logo>
            <Typography
              gutterBottom
              className={styles.title}
              variant="h3"
              component="h3"
            >
              Please follow the instruction<br></br>
              on the PIN pad.
            </Typography>
            <CircularProgress />
          </Box>
          <Box className={[styles.center, styles.space]}>
            <Button
              onClick={() => props.history.push("/complete")}
              variant="contained"
              color="secondary"
              className={[styles.largeButton, styles.rounded]}
            >
              Complete Order
            </Button>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
