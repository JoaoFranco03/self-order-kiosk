import { Box, Typography, Card, CardMedia, Fade } from "@material-ui/core";
import React, { useContext } from "react";
import { useStyles } from "../styles";
import Logo from "../components/Logo";
import { CardActionArea } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

import { Store } from "../Store";
import { setPaymentType } from "../actions";
export default function SelectPaymentScreen(props) {
  const { dispatch } = useContext(Store);
  const styles = useStyles();
  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay Here") props.history.push("/payment");
    else props.history.push("/complete");
  };
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.chooseBackground]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            className={styles.centerText}
            gutterBottom
            variant="h3"
            component="h3"
          >
            Select Payment Type
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.rounded, styles.card, styles.space]}>
              <CardActionArea
                className={styles.rounded}
                onClick={() => selectHandler("Pay Here")}
              >
                <CardMedia
                  component="img"
                  alt="Pay Here"
                  image="/images/payhere.svg"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    Pay Here
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className={[styles.rounded, styles.card, styles.space]}>
              <CardActionArea
                className={styles.rounded}
                onClick={() => selectHandler("At Counter")}
              >
                <CardMedia
                  component="img"
                  alt="At Counter"
                  image="/images/atcounter.svg"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    color="textPrimary"
                    component="p"
                  >
                    At Counter
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
