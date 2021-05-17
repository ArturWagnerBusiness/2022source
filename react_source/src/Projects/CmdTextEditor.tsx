import { Button, ButtonGroup, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class CmdTextEditor extends Component {
  render() {
    return (
      <div className="CmdTextEditor">
        <Typography variant="h4" data-aos="fade-down">
          Command prompt text editor for Windows
        </Typography>
        <Typography data-aos="fade-right">
          If you already checked{" "}
          <Link href="https://arturwagnerbusiness.github.io/2018source/">
            my site from 2018/2019
          </Link>{" "}
          then you might have already seen my terminal file editor.{" "}
          <em>(It is the most recent post)</em>. <br /> It still works in 2021!{" "}
          <br />
          <Link href="https://github.com/ArturWagnerBusiness/CMD">
            Source is here
          </Link>
        </Typography>
        <br />
        <img
          data-aos="fade-left"
          src="/images/cmd-on-site.png"
          width="100%"
          alt="terminal file editor on the website"
        />
        <ButtonGroup>
          <Button
            data-aos="fade-left"
            href="https://github.com/ArturWagnerBusiness/CMD"
          >
            <strong>Source code</strong>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
