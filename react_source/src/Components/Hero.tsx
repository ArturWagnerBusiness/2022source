import React, { Component } from "react";
import { Typography } from "@material-ui/core";
export default class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <div
          className="parallax-container valign-wrapper"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="section no-pad-bot container">
            <div className="center">
              <Typography variant="h3" color="secondary">
                👋 Hello, I am <strong>Artur Wagner!</strong>
              </Typography>
              <br />
              <Typography variant="subtitle1" color="secondary">
                <em>
                  "Programming is an infinite struggle in an infinite
                  progression line."
                </em>
              </Typography>
            </div>
          </div>
          <div className="parallax">
            <img src="/images/unsplash-keyboard (3).jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
