import React from "react";
import { Chip, Typography } from "@material-ui/core";
import speaker_photos from "./scheduleImage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2.5),
    fontWeight: "bolder",
    fontSize: "1.4rem",
    marginLeft: "3vh",
  },
  chipGroup: {
    marginLeft: "2vh",
  },
  purple: {
    color: "white",
    backgroundColor: "#7E73F9",
    margin: theme.spacing(0.5),
    minWidth: "80px",
  },
  orange: {
    color: "white",
    backgroundColor: "#FFA84F",
    margin: theme.spacing(0.5),
    minWidth: "80px",
  },
  typeSignalStage: {
    backgroundColor: "#7E73F9",
    borderRadius: "15px",
    width: "4px",
    display: "block",
    height: "30px",
    position: "absolute",
    left: "9px",
  },
  typeSignalSessions: {
    backgroundColor: "#FFA84F",
    borderRadius: "15px",
    width: "4px",
    display: "block",
    height: "30px",
    position: "absolute",
    left: "9px",
  },
}));

function ScheduleTypeSignal({type}) {
  const classes = useStyles();

  return <div className={classes[`typeSignal${type}`]} />;
}

export default function Schedule() {
  const classes = useStyles();

  const rooms = ["Stage", "Sessions", "Sessions", "Sessions", "Stage", "Stage"];
  const hours = [
    "05:30pm",
    "05:45pm",
    "05:45pm",
    "06:00pm",
    "06:30pm",
    "07:00pm",
  ];
  const topics = [
    "Improve your UI skills",
    "Improve your UI skills - Q&A",
    "Implementing Firebase + Ionic",
    "UX is the new black",
    "Making great presentations",
    "Improve your InDesign skills",
  ];
  const speakers = [
    "Gabriela Lima",
    "Gabriela Lima",
    "Diego Buzanello",
    "Mauro Cortella",
    "Fernanda Gaudard",
    "Henrique Miranda",
  ];
  const schedules = [];
  for (const [index, value] of hours.entries()) {
    schedules.push(
      <li>
        <ScheduleTypeSignal type={rooms[index]}/>
        <span>{rooms[index]}</span>
        <span>{value}</span>
        <span>{topics[index]}</span>
        <span>{speakers[index]}</span>
        <img src={speaker_photos[index]} />
      </li>
    );
  }

  return (
    <div className="schedule">
      <Typography className={classes.title}>Schedule</Typography>
      <div className={classes.chipGroup}>
        <Chip label="Stage" className={classes.purple} />
        <Chip label="Sessions" className={classes.orange} />
      </div>
      <ul>
        <li className="schedule__title">
          <strong>Room</strong>
          <strong>Time</strong>
          <strong>Topic</strong>
          <strong>Speakers</strong>
        </li>
        {schedules}
      </ul>
    </div>
  );
}
