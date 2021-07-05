import React from "react";
import "fontsource-roboto";
import { Box, Card, CardActionArea, Typography, Fade } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { useStyles } from "../styles";
import Ads from "../components/Ads";

export default function HomeScreen(props) {
  const styles = useStyles();
  return (
    <Fade in={true}>
      <Card>
        <CardActionArea onClick={() => props.history.push("/choose")}>
          <Box className={[styles.root, styles.red]}>
            <Box className={[styles.main, styles.center]}>
              <Ads image></Ads>
            </Box>
            <Box className={[styles.Btn_StartOrder, styles.yellow]}>
              <TouchAppIcon fontSize="large"></TouchAppIcon>
              <Typography componetn="h5" variant="h5">
                Touch to Start
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Fade>
  );
}
