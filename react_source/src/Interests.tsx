import { Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class Interests extends Component {
  render() {
    return (
      <div className="Interests">
        <Typography data-aos="fade-down">
          These performances were recorded during 2018
        </Typography>
        <iframe
          data-aos="zoom-in"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/mTknMHHh3zc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          data-aos="zoom-in"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/74v6qei7bZU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
