import React from "react";
import Rooms from "../components/Rooms";
import VMaps from "../components/VirtualMap";
import NetworkingDrawer from "components/NetworkingDrawer";
import "../static/styles/css/platform.css";

export default function Platform() {
  return (
    <React.Fragment>
      <div className="platform">
        <Rooms />
        <VMaps />
      </div>
      <NetworkingDrawer />
    </React.Fragment>
  );
}
