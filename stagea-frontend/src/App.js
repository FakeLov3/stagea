import React from "react";
import Routes from "./routes";
import theme from "./Theme";
import "./static/styles/css/clear_fix.css";
import { MuiThemeProvider } from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
