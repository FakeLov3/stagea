import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./templates/Home";
import PlatformRoutes from "./templates/platform/routes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" exact component={Home} />
      <PlatformRoutes />
    </BrowserRouter>
  );
}
