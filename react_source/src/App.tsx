import React, { Component } from "react";
import Container from "./Container";
import Sticky from "./Sticky";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container></Container>
        <Sticky></Sticky>
      </div>
    );
  }
}
