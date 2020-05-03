import React from "react";
import { Drawer } from "@material-ui/core";
import stagea from "static/svgs/stagea.svg";
import Avatar from "static/images/avatar_1.png";
import imageArr from "./roomsImage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "17%"
  },
  paper: {
    width: "18%"
  }
}));

export default function Rooms() {
  const classes = useStyles();

  const room_title = [
    "Lobby",
    "Stage",
    "Sessions",
    "Connect",
    "Press",
    "Sponsors",
    "Support",
  ];
  const viewrs = [
    "120 attendees",
    "1,2k attendees",
    "500 attendees",
    "480 attendees",
    "0 attendees",
    "0 attendees",
    "0 attendees",
  ];
  const rooms = [];
  for (const [index, value] of room_title.entries()) {
    rooms.push(
      <li>
        <img src={imageArr[index]} />
        <span>
          <strong>{value}</strong>
          <span>{viewrs[index]}</span>
        </span>
      </li>
    );
  }

  return (
    <Drawer variant="permanent" anchor="left" className={classes.root} classes={{paper: classes.paper}}>
      <div className="rooms">
        <a href="/" className="logo">
          <img src={stagea} />
        </a>
        <div className="profile">
          <img src={Avatar} />
          <span>
            <span class="wlcm">Welcome back,</span>
            <span>Leonardo Antunes</span>
          </span>
        </div>
        <div className="rooms__room">
          <span>Choose your room:</span>
          <ul>{rooms}</ul>
        </div>
      </div>
    </Drawer>
  );
}
