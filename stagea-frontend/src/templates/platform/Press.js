import { Grid } from "@material-ui/core";
import Rooms from "../../components/Rooms";
import NetworkingDrawer from "../../components/NetworkingDrawer";
import React from "react";

export default function Press() {
  return (
    <Grid container>
      <Rooms />
      <NetworkingDrawer />
    </Grid>
  );
}
