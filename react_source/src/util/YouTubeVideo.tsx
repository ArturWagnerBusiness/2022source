import React, { Component } from "react";
import "./YouTubeVideo.scss";
interface prop {
  url: string;
  max_width: number;
  center?: boolean;
}
export default class YouTubeVideo extends Component<prop, {}> {
  render() {
    return (
      <div
        className="YouTubeVideo"
        style={{
          maxWidth: this.props.max_width + "px",
          margin: this.props.center ? "5px auto" : "5px",
        }}
      >
        <div className="video">
          <iframe
            src={this.props.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}
