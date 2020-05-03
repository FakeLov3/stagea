import React from "react";
import Rooms from "components/Rooms";
import NetworkingDrawer from "components/NetworkingDrawer";

export default function Platform() {
  return (
    <React.Fragment>
      <Rooms />
      <NetworkingDrawer />
    </React.Fragment>
  );
}
