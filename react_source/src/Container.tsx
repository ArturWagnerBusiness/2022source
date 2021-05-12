import React, { Component } from "react";
import "./Container.scss";
import Education from "./Education";
import Projects from "./Projects";
import Interests from "./Interests";
import { Typography } from "@material-ui/core";
export default class Container extends Component {
  render() {
    return (
      <div className="Container">
        <div className="content" data-aos="fade-right">
          <div className="head">
            <Typography variant="h3">
              👋 Hello I am <strong>Artur Wagner!</strong>{" "}
            </Typography>
            <p>
              I am a keen individual who has had their share of code experience.
              Welcome to my website!
            </p>
          </div>
          <h2>🎓 Education</h2>
          <Education />
          <h2>🔥 Projects</h2>
          <Projects />
          <h2>🎵 Interests!</h2>
          <Interests />
        </div>
      </div>
    );
  }
}
