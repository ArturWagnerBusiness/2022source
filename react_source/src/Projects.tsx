import { AppBar, Box, Link, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ProjectWebsite from "./Projects/ProjectWebsite";
import CmdEditor from "./Projects/CmdEditor";
import "./Projects.scss";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
export default class Projects extends Component {
  state = {
    projectSelected: 0,
    websiteProjectSelected: 0,
  };
  render() {
    return (
      <div className="Projects">
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.projectSelected}
            onChange={(event, val) => {
              this.setState({ projectSelected: val });
            }}
            variant="scrollable"
            scrollButtons="on"
          >
            {[
              "Personal Websites",
              "CMD Text Editor",
              "Python video tutorial",
              "Simple Games",
            ].map((element) => {
              return (
                <Tab
                  label={<Typography className="tab">{element}</Typography>}
                />
              );
            })}
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.projectSelected} index={0}>
          <ProjectWebsite />
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={1}>
          <CmdEditor />
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={2}>
          <Typography variant="h4" data-aos="fade-down">
            My tutorial on how to Python
          </Typography>
          <Typography data-aos="fade-right">
            Python is a great language, I stumbled onto some typical errors that
            I decided to share solutions to. I myself needed to spend days
            trying to figure out how to solve some of them so decided to put all
            the solution into a single short video with time stamps.
          </Typography>
          <br />
          <iframe
            data-aos="zoom-in"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4NA_vg0kxS4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={3}>
          <Typography variant="h4" data-aos="fade-down">
            Javascript/Electron VS Unity/C#
          </Typography>
          <Typography data-aos="fade-right">
            In between 2019 and 2020 I wanted to see what I would be able to do
            with some game development. I developed 2 small games which are
            playable in a browser. Before I talk about them, you can find them
            at my{" "}
            <Link
              href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html"
              target="_blank"
            >
              old website here
            </Link>
            .
          </Typography>
          <br />
          <Typography data-aos="fade-right">
            The first one at the top "Darkness around us" was a game developed
            in Unity Engine.
          </Typography>
          <Link
            href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html"
            target="_blank"
          >
            <img
              data-aos="fade-left"
              src="/images/game-dau.png"
              alt="Game Darkness around us"
            />
          </Link>
          <br />
          <Typography data-aos="fade-right">
            The second one "Rise of Selior" was a game developed using Phaser.js
            and Electron.
            <br />
            <em>
              (The version on the web was striped from the electron to make it
              executable on web.)
            </em>
          </Typography>
          <Link
            href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html"
            target="_blank"
          >
            <img
              data-aos="fade-left"
              src="/images/game-ros.png"
              alt="Game Rise of Salior"
            />
          </Link>
        </TabPanel>
        {
          // ? Add more projects here!
        }
      </div>
    );
  }
}
