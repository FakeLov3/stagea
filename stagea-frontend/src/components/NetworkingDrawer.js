import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import Chat from "./Chat";
import NetworkSuggestions from "./NetworkSuggestions";

const drawerWidth = 276;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "white",
  },
}));

export default function NetworkingDrawer() {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="right"
    >
      <Chat />
      <NetworkSuggestions />
    </Drawer>
  );
}
