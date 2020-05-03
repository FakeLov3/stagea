import React from "react";
import { Route } from "react-router-dom";
import Platform from "./Platform";
import Stage from "./Stage";
import Sessions from "./Sessions";
import Connect from "./Connect";
import Press from "./Press";
import Sponsors from "./Sponsors";
import Support from "./Support";

export default function PlatformRoutes() {
  return (
    <>
      <Route path="/platform" exact component={Platform} />
      <Route path="/platform/stage" exact component={Stage} />
      <Route path="/platform/sessions" exact component={Sessions} />
      <Route path="/platform/connect" exact component={Connect} />
      <Route path="/platform/press" exact component={Press} />
      <Route path="/platform/sponsors" exact component={Sponsors} />
      <Route path="/platform/support" exact component={Support} />
    </>
  );
}
