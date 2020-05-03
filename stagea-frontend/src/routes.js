import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./templates/Home";
import Platform from "./templates/Platform";
import Stage from "./templates/Stage";
import Connect from "./templates/Connect";
import Sessions from "./templates/Sessions";
import Press from "./templates/Press";
import Sponsors from "./templates/Sponsors";
import Support from "./templates/Support";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/platform" exact component={Platform} />
      <Route path="/platform/stage" exact component={Stage} />
      <Route path="/platform/sessions" exact component={Sessions} />
      <Route path="/platform/connect" exact component={Connect} />
      <Route path="/platform/press" exact component={Press} />
      <Route path="/platform/sponsors" exact component={Sponsors} />
      <Route path="/platform/support" exact component={Support} />
    </BrowserRouter>
  );
}
