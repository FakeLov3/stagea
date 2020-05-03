import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import HomeIcon from "./icons/HomeIcon";
import StageIcon from './icons/StageIcon';
import VideoIcon from "./icons/VideoIcon";
import SocialIcon from "./icons/SocialIcon";
import PressIcon from "./icons/PressIcon";
import SlideBoardIcon from "./icons/SlideBoardIcon";
import EngineIcon from "./icons/EngineIcon";
import StageaLogo from "./icons/StageaLogo";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Rooms() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <StageaLogo/>
      <Box>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
        <Typography>Welcome back,</Typography>
        <Typography>Leonardo Antues</Typography>
      </Box>

      <Typography>Choose your room:</Typography>

      <List>
        <ListItem button key='Lobby'>
          <ListItemIcon><HomeIcon active/></ListItemIcon>
          <ListItemText primary='Lobby'/>
        </ListItem>
        <ListItem button key='Stage'>
          <ListItemIcon><StageIcon/></ListItemIcon>
          <ListItemText primary='Stage'/>
        </ListItem>
        <ListItem button key='Session'>
          <ListItemIcon><VideoIcon/></ListItemIcon>
          <ListItemText primary='Session'/>
        </ListItem>
        <ListItem button key='Connect'>
          <ListItemIcon><SocialIcon/></ListItemIcon>
          <ListItemText primary='Connect'/>
        </ListItem>
        <ListItem button key='Press'>
          <ListItemIcon><PressIcon/></ListItemIcon>
          <ListItemText primary='Press'/>
        </ListItem>
        <ListItem button key='Sponsors'>
          <ListItemIcon><SlideBoardIcon/></ListItemIcon>
          <ListItemText primary='Sponsors'/>
        </ListItem>
        <ListItem button key='Support'>
          <ListItemIcon><EngineIcon/></ListItemIcon>
          <ListItemText primary='Support'/>
        </ListItem>
      </List>
    </Drawer>
  )
};