import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ProjectWebsite from "./../Projects/ProjectWebsite";
import CmdTextEditor from "./../Projects/CmdTextEditor";
import PythonVideoTutorial from "./../Projects/PythonVideoTutorial";
import SimpleGames from "./../Projects/SimpleGames";
import DiscordBot from "./../Projects/DiscordBot";
import FinalYearProject from "../Projects/FinalYearProject";

import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import ComputerRoundedIcon from "@material-ui/icons/ComputerRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
import AdbIcon from "@material-ui/icons/Adb";
import SchoolIcon from "@material-ui/icons/School";

import "./Projects.override.scss";
const ICON_POSITION_OFFSET = {
  marginBottom: "-4px",
};

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
  };
  render() {
    return (
      <div className="Projects">
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <AppBar
              position="static"
              color="primary"
              style={{ height: "800px" }}
            >
              <Tabs
                value={this.state.projectSelected}
                onChange={(event, val) => {
                  this.setState({ projectSelected: val });
                }}
                orientation="vertical"
                variant="scrollable"
                scrollButtons="on"
              >
                {[
                  [
                    <LanguageRoundedIcon style={ICON_POSITION_OFFSET} />,
                    " Personal Websites",
                  ],
                  [
                    <SportsEsportsRoundedIcon style={ICON_POSITION_OFFSET} />,
                    " Simple Games",
                  ],
                  [
                    <SchoolIcon style={ICON_POSITION_OFFSET} />,
                    " Final Year Project",
                  ],
                  [<AdbIcon style={ICON_POSITION_OFFSET} />, " Discord Bot"],
                  [
                    <ComputerRoundedIcon style={ICON_POSITION_OFFSET} />,
                    " CMD Text Editor",
                  ],
                  [
                    <TheatersRoundedIcon style={ICON_POSITION_OFFSET} />,
                    " Video tutorial",
                  ],
                ].map((element) => {
                  return (
                    <Tab
                      className="Project-Override"
                      label={
                        <Typography
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          {element}
                        </Typography>
                      }
                    />
                  );
                })}
              </Tabs>
            </AppBar>
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              height: "800px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <TabPanel value={this.state.projectSelected} index={0}>
              <ProjectWebsite />
            </TabPanel>
            <TabPanel value={this.state.projectSelected} index={1}>
              <SimpleGames />
            </TabPanel>
            <TabPanel value={this.state.projectSelected} index={2}>
              <FinalYearProject />
            </TabPanel>
            <TabPanel value={this.state.projectSelected} index={3}>
              <DiscordBot />
            </TabPanel>
            <TabPanel value={this.state.projectSelected} index={4}>
              <CmdTextEditor />
            </TabPanel>
            <TabPanel value={this.state.projectSelected} index={5}>
              <PythonVideoTutorial />
            </TabPanel>
            {
              // ? Add more projects here!
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}
