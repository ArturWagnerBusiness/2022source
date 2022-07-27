import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import FreeBreakfastRoundedIcon from "@material-ui/icons/FreeBreakfastRounded";
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
              <Typography
                variant="h3"
                color="secondary"
                style={{ textShadow: "0 0 5px black" }}
              >
                <FreeBreakfastRoundedIcon
                  style={{
                    fontSize: "50px",
                    marginBottom: "-9px",
                    filter: "drop-shadow(0 0 3px black)",
                  }}
                />{" "}
                Hello, I am <strong>Artur Wagner!</strong>
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                color="secondary"
                style={{ textShadow: "0 0 8px black" }}
              >
                <em>
                  "Programming should be a never ending story of creating,
                  learning and adapting. "
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
