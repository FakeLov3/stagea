import React from "react";
import Rooms from "components/Rooms";
import NetworkingDrawer from "components/NetworkingDrawer";
import "static/styles/css/rooms.css";

export default function Platform() {
  return (
    <React.Fragment>
      <div className="platform">
        <Rooms />
      </div>
      <NetworkingDrawer />
    </React.Fragment>
  );
}
