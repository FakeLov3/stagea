import React from "react";
import Rooms from "../components/Rooms";
import VMaps from "../components/VirtualMap";
import NetworkingDrawer from "components/NetworkingDrawer";
import "../static/styles/css/platform.css";

export default function Platform() {
  return (
    <div className="platform">
      <Rooms />
      <VMaps />
      <NetworkingDrawer />
    </div>
  );
}
