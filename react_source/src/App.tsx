import React, { Component } from "react";

import TileScreen from "./startScreen/TileScreen";
import Content from "./content/Content";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Content />
        <TileScreen />
      </div>
    );
  }
}
