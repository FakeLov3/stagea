import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import stagea from "static/svgs/stagea.svg";
import Avatar from "static/images/avatar_1.png";
import Lobby from "static/svgs/rooms/lobby.svg";
import LobbyActive from "static/svgs/rooms/lobby_active.svg";
import Stage from "static/svgs/rooms/stage.svg";
import StageActive from "static/svgs/rooms/stage_active.svg";
import Networking from "static/svgs/rooms/networking.svg";
import NetworkingActive from 'static/svgs/rooms/sponsors_active.svg'
import Marketing from "static/svgs/rooms/marketing.svg";
import Play from "static/svgs/rooms/play.svg";
import PlayActive from 'static/svgs/rooms/play_active.svg'
import Sponsors from "static/svgs/rooms/sponsors.svg";
import SponsorsActive from 'static/svgs/rooms/sponsors_active.svg'
import Support from "static/svgs/support.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "18%",
  },
  paper: {
    width: "18%",
  },
  list: {
    alignItems: "center",
    border: "0.8px solid rgba(203, 203, 203, 0.6)",
    boxSizing: "border-box",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "3vh",
    padding: "10%",
    position: "relative",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  listActive: {
    alignItems: "center",
    boxSizing: "border-box",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "3vh",
    padding: "10%",
    position: "relative",
    width: "100%",
    border: "1.5px solid #506cf0",
  },
}));

const roomsData = [
  {
    name: "Lobby",
    viewers: "120 attendees",
    image: Lobby,
    imageActive: LobbyActive,
    path: "",
  },
  {
    name: "Stage",
    viewers: "1,2k attendees",
    image: Stage,
    imageActive: StageActive,
    path: "stage",
  },
  {
    name: "Sessions",
    viewers: "500 attendees",
    image: Play,
    imageActive: PlayActive,
    path: "sessions",
  },
  {
    name: "Connect",
    viewers: "480 attendees",
    image: Networking,
    imageActive: NetworkingActive,
    path: "connect",
  },
  {
    name: "Press",
    viewers: "0 attendees",
    image: Marketing,
    imageActive: Marketing,
    path: "press",
  },
  {
    name: "Sponsors",
    viewers: "0 attendees",
    image: Sponsors,
    imageActive: SponsorsActive,
    path: "sponsors",
  },
  {
    name: "Support",
    viewers: "0 attendees",
    image: Support,
    imageActive: Support,
    path: "support",
  },
];

// TODO: change selected room based on current path
export default function Rooms() {
  const classes = useStyles();
  const location = useLocation();
  const [active, setActive] = useState(null);

  const handleClick = ({ name }) => {
    setActive(name);
  };

  const currentPath = location.pathname.split("/")[2];

  const checkActive = ({ name, path }) => {
    return active === name || path === currentPath;
  };

  const rooms = roomsData.map(({ name, viewers, image, imageActive, path }) => {
    const isActive = checkActive({ name, path });
    const styleClass = isActive ? classes.listActive : classes.list;
    const imageSrc = isActive ? imageActive : image;

    return (
      <li className={styleClass}>
        <Link
          to={`/platform/${path}`}
          className={classes.link}
          onClick={() => handleClick({ name })}
          disabled
        >
          <img alt={`room-${name}`} src={imageSrc} />
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
