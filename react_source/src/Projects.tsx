import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
// ! TEMPLATE CODE, FIX LATER
function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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
          >
            <Tab label="Personal website" />
            <Tab label="CMD" />
            <Tab label="Python Video Tutorial" />
          </Tabs>
        </AppBar>
        <TabPanel value={this.state.projectSelected} index={0}>
          Place to talk about my 2 sites
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={1}>
          Place to talk about the cmd. Mainly just a link to it
        </TabPanel>
        <TabPanel value={this.state.projectSelected} index={2}>
          <Typography variant="h5">My tutorial on how to Python</Typography>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4NA_vg0kxS4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </TabPanel>
        {
          // ? Add more projects here!
        }
      </div>
    );
  }
}
