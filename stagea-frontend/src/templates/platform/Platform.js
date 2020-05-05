import React from "react";
import Rooms from "components/Rooms";
import NetworkingDrawer from "components/NetworkingDrawer";

export default function Platform({ child }) {
  return (
    <div className="platform">
      <Rooms />
      {child}
      <NetworkingDrawer />
    </div>
  );
}
