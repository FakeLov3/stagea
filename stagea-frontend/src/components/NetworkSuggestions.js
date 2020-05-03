import React from "react";
import {
  Paper,
  Tab,
  Tabs,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import perfil1 from "static/images/perfil1.png";
import perfil3 from "static/images/perfil3.png";
import perfil4 from "static/images/perfil4.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "30px",
    marginLeft: "12px",
    width: "247px",
    height: "276px",
  },
  tabs: {
    backgroundColor: "#F5F5FB",
  },
  tab: {
    textTransform: "none",
    color: "black",
    alignContent: "center",
    fontWeight: "bold",
  },
  listItem: {
    padding: 0,
  },
  listItemText__secondary: {
    fontSize: "0.7em",
    color: "#979797",
  },
}));

export default function NetworkSuggestions() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Tabs className={classes.tabs}>
        <Tab className={classes.tab} label="Networking suggestions" />
      </Tabs>
      <Box p={2}>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar alt="Matheus Yudi" src={perfil1} />
            </ListItemAvatar>
            <ListItemText
              classes={{ secondary: classes.listItemText__secondary }}
              primary="Matheus Yudi"
              secondary="Also UX"
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar alt="Kaio Teoi" src={perfil4} />
            </ListItemAvatar>
            <ListItemText
              classes={{ secondary: classes.listItemText__secondary }}
              primary="Kaio Teoi"
              secondary="You share common interests"
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar alt="Carol Castilhejo" src={perfil3} />
            </ListItemAvatar>
            <ListItemText
              classes={{ secondary: classes.listItemText__secondary }}
              primary="Carol Castilhejo"
              secondary="You share common interests"
            />
          </ListItem>
        </List>
      </Box>
    </Paper>
  );
}
