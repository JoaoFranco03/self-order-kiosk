import { Box, Fade, Typography, Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";
import React, { useContext } from 'react';
import { setOrderType } from "../actions";
import Logo from "../components/Logo";
import { Store } from "../Store";
import { useStyles } from "../styles";

export default function ChooseScreen(props) {
  const styles = useStyles();
  const { dispatch } = useContext(Store);
  const chooseHandler = (orderType) => {
      setOrderType(dispatch, orderType);
      props.history.push('/order');
  };
  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.chooseBackground]}>
        <Box className={[styles.main, styles.center]}>
            <Logo large></Logo>
            <Typography
              variant="h3"
              component="h3"
              color="textPrimary"
              className={styles.centerText}
              gutterBottom
            >
              Where will you be<br></br>
              eating today?
            </Typography>
            <Box className={styles.cards}>
                <Card className={[styles.rounded, styles.cards, styles.space]}>
                    <CardActionArea className={styles.rounded} onClick={()=> chooseHandler('Eat In')}>
                        <CardMedia
                            component="img"
                            alt="Eat in"
                            image="/images/RestaurantIco.svg"
                            className={styles.media}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                color="textPrimary"
                                component="p"
                            > Eat in</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={[styles.rounded, styles.card, styles.space]}>
                    <CardActionArea className={styles.rounded} onClick={()=> chooseHandler('Take away')}>
                        <CardMedia
                            component="img"
                            alt="Take Away"
                            image="/images/TakeawayIco.svg"
                            className={styles.media}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h4"
                                color="textPrimary"
                                component="p"
                            > Take Away</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
      </Box>
    </Fade>
  );
}
