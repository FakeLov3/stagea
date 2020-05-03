import React from "react";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import stagea from "static/svgs/stagea.svg";
import Avatar from "static/images/avatar_1.png";
import Lobby from "../static/svgs/lobby.svg";
import Stage from "../static/svgs/stage.svg";
import Networking from "../static/svgs/networking.svg";
import Marketing from "../static/svgs/marketing.svg";
import Play from "../static/svgs/play.svg";
import Sponsors from "../static/svgs/sponsors.svg";
import Support from "../static/svgs/support.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "18%",
  },
  paper: {
    width: "18%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const roomsData = [
  {
    name: "Lobby",
    viewers: "120 attendees",
    image: Lobby,
    path: "",
  },
  {
    name: "Stage",
    viewers: "1,2k attendees",
    image: Stage,
    path: "stage",
  },
  {
    name: "Sessions",
    viewers: "500 attendees",
    image: Play,
    path: "sessions",
  },
  {
    name: "Connect",
    viewers: "480 attendees",
    image: Networking,
    path: "connect",
  },
  {
    name: "Press",
    viewers: "0 attendees",
    image: Marketing,
    path: "press",
  },
  {
    name: "Sponsors",
    viewers: "0 attendees",
    image: Sponsors,
    path: "sponsors",
  },
  {
    name: "Support",
    viewers: "0 attendees",
    image: Support,
    path: "support",
  },
];

// TODO: change selected room based on current path
export default function Rooms() {
  const classes = useStyles();

  const rooms = roomsData.map(({ name, viewers, image, path }) => {
    return (
      <li>
        <Link to={`/platform/${path}`} className={classes.link}>
          <img alt={`room-${name}`} src={image} />
          <span>
            <strong>{name}</strong>
            <span>{viewers}</span>
          </span>
        </Link>
      </li>
    );
  });

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className={classes.root}
      classes={{ paper: classes.paper }}
    >
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
