import React from "react";
import Routes from "./routes";
import theme from "./Theme";
import { MuiThemeProvider } from "@material-ui/core";
import "static/styles/css/main.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
