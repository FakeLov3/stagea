import React from "react";
import speaker_photos from "./scheduleImage";

export default function Schedule() {
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
      <strong>Schedule</strong>
      <div>
        <button className="b_purple">Stage</button>
        <button className="b_orange">Sessions</button>
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
