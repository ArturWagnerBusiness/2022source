import { Button, ButtonGroup, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class DiscordBot extends Component {
  render() {
    return (
      <div className="DiscordBot">
        <Typography variant="h4" data-aos="fade-down">
          Discord image and music bot!
        </Typography>
        <Typography data-aos="fade-right">
          Developed using javascript (node). <br />
          The bot is in early development now and will be changing a lot. <br />
          More information can be seen in the github repository.
        </Typography>
        <br />
        <ButtonGroup>
          <Button
            data-aos="fade-right"
            href="https://github.com/ArturWagnerBusiness/DiscordBot"
          >
            <strong>Source code</strong>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
