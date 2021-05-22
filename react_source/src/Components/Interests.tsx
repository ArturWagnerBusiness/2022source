import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import YouTubeVideo from "../util/YouTubeVideo";
export default class Interests extends Component {
  render() {
    return (
      <div
        className="Interests"
        style={{
          textAlign: "center",
        }}
      >
        <Typography data-aos="fade-down">
          During my A-levels I learned a few piano pieces. <br /> I uploaded 2
          of them onto YouTube.
        </Typography>
        <YouTubeVideo
          max_width={600}
          center={true}
          url="https://www.youtube.com/embed/74v6qei7bZU"
        />
        <YouTubeVideo
          max_width={600}
          center={true}
          url="https://www.youtube.com/embed/mTknMHHh3zc"
        />
      </div>
    );
  }
}
