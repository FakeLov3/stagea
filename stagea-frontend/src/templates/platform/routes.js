import React from "react";
import { Route } from "react-router-dom";
import Platform from "./Platform";
import Stage from "./Stage";
import Sessions from "./Sessions";
import Connect from "./Connect";
import Press from "./Press";
import Sponsors from "./Sponsors";
import Support from "./Support";
import Lobby from "./Lobby";

export default function PlatformRoutes() {
  return (
    <>
      <Route
        path="/platform"
        exact
        component={() => <Platform child={<Lobby />} />}
      />
      <Route
        path="/platform/stage"
        exact
        component={() => <Platform child={<Stage />} />}
      />
      <Route
        path="/platform/sessions"
        exact
        component={() => <Platform child={<Sessions />} />}
      />
      <Route
        path="/platform/connect"
        exact
        component={() => <Platform child={<Connect />} />}
      />
      <Route
        path="/platform/press"
        exact
        component={() => <Platform child={<Press />} />}
      />
      <Route
        path="/platform/sponsors"
        exact
        component={() => <Platform child={<Sponsors />} />}
      />
      <Route
        path="/platform/support"
        exact
        component={() => <Platform child={<Support />} />}
      />
    </>
  );
}
