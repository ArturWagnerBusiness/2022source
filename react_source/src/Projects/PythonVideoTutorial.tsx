import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import YouTubeVideo from "../util/YouTubeVideo";

export default class PythonVideoTutorial extends Component {
  render() {
    return (
      <div className="PythonVideoTutorial">
        <Typography variant="h4" data-aos="fade-down">
          My tutorial on how to Python
        </Typography>
        <Typography data-aos="fade-right">
          Python is a great language, I stumbled onto some typical errors that I
          decided to share solutions to. I myself needed to spend days trying to
          figure out how to solve some of them so decided to put all the
          solution into a single short video with time stamps.
        </Typography>
        <br />
        <YouTubeVideo
          max_width={600}
          url="https://www.youtube.com/embed/4NA_vg0kxS4"
        />
      </div>
    );
  }
}
