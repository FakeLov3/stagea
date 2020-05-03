import React from "react";
import {Grid} from '@material-ui/core';
import Rooms from "components/Rooms";
import NetworkingDrawer from "components/NetworkingDrawer";
import "../static/styles/css/platform.css";

function StageFragment() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        Hello
      </Grid>
    </Grid>
  );
}

export default function Stage() {
  return (
    <React.Fragment>
      <Rooms />
      <StageFragment />
      <NetworkingDrawer />
    </React.Fragment>
  );
}
