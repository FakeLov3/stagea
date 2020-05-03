import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./templates/Home";
import Platform from "./templates/Platform";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/platform" exact component={Platform} />
    </BrowserRouter>
  );
}
