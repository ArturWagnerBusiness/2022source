import React, { Component } from "react";
import "./Container.scss";
import Education from "./Education";
import Projects from "./Projects";
import Interests from "./Interests";
import Contact from "./Contact";
import { Typography } from "@material-ui/core";
export default class Container extends Component {
  render() {
    return (
      <div className="Container">
        <div className="content" data-aos="fade-right">
          <div className="head">
            <Typography variant="h3">
              👋 Hello, I am <strong>Artur Wagner!</strong>
            </Typography>
            <p>
              <em>
                "Programming is an infinite struggle in an infinite progression
                line."
              </em>
            </p>
          </div>
          <h2>🎓 Education</h2>
          <Education />
          <h2>🔥 Projects</h2>
          <Projects />
          <h2>🎵 Interests!</h2>
          <Interests />
          <h2>📫 Contact and Info</h2>
          <Contact />
          <h4 style={{ textAlign: "center" }}>
            🔨 Build with the awesome power of react!
          </h4>
        </div>
      </div>
    );
  }
}
