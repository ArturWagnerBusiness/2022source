import { Link, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class CmdEditor extends Component {
  render() {
    return (
      <div className="CmdEditor">
        <Typography variant="h4" data-aos="fade-down">
          Command prompt text editor for Windows
        </Typography>
        <Typography data-aos="fade-right">
          If you already checked{" "}
          <Link
            href="https://arturwagnerbusiness.github.io/2018source/"
            target="_blank"
          >
            my site from 2018/2019
          </Link>{" "}
          then you might have already seen my terminal file editor.{" "}
          <em>(It is the most recent post)</em>. <br /> It still works in 2021!{" "}
          <br />
          <Link
            href="https://github.com/ArturWagnerBusiness/CMD"
            target="_blank"
          >
            Source is here
          </Link>
        </Typography>
        <br />
        <Link
          href="https://arturwagnerbusiness.github.io/2018source/"
          target="_blank"
        >
          <img
            data-aos="fade-left"
            src="/cmd-on-site.png"
            width="100%"
            alt="Image of terminal file editor on the website"
          />
        </Link>
      </div>
    );
  }
}
