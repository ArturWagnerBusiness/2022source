import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ProjectWebsite from "./Projects/ProjectWebsite";
import CmdTextEditor from "./Projects/CmdTextEditor";
import PythonVideoTutorial from "./Projects/PythonVideoTutorial";
import SimpleGames from "./Projects/SimpleGames";
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
          <CmdTextEditor />
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={2}>
          <PythonVideoTutorial />
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={3}>
          <SimpleGames />
        </TabPanel>
        {
          // ? Add more projects here!
        }
      </div>
    );
  }
}
