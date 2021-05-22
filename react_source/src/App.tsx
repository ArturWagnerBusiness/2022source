import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { cyan, blue } from "@material-ui/core/colors";
import React, { Component } from "react";
import Container from "./Container";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue["600"],
    },
    secondary: {
      main: cyan["300"],
    },
  },
});
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Container />
        </ThemeProvider>
      </div>
    );
  }
}
