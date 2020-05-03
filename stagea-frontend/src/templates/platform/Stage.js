import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import Rooms from "components/Rooms";
import NetworkingDrawer from "components/NetworkingDrawer";
import "../../static/styles/css/platform.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  stageContainer: {
    flexGrow: 1,
    top: 0,
    margin: "0 176px",
  },
  gridTitle: {},
  gridVideo: {},
  gridProgressBar: {},
}));

function StageFragment() {
  const classes = useStyles();

  // TODO: update sections with Images/content
  return (
    <Box className={classes.stageContainer}>
      <Grid container spacing={3}>
        <Grid item xs={4} className={classes.gridTitle}>
          <Typography>PEGN Expo 2020</Typography>
        </Grid>
        <Grid item xs={8} className={classes.gridProgressBar}>
          Progress bar here
        </Grid>

        <Grid item xs={12} className={classes.gridVideo}>
          Video here
        </Grid>

        <Grid content spacing={5}>
          <Grid item direction="column">
            Figma PDF
          </Grid>
          <Grid item direction="column">
            Figma Slides
          </Grid>
          <Grid item direction="column">
            Invite me to chat
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default function Stage() {
  return (
    <Grid container>
      <Rooms />
      <StageFragment />
      <NetworkingDrawer />
    </Grid>
  );
}
