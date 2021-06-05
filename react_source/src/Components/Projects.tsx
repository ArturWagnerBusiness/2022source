import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { Component } from "react";
import ProjectWebsite from "./../Projects/ProjectWebsite";
import CmdTextEditor from "./../Projects/CmdTextEditor";
import PythonVideoTutorial from "./../Projects/PythonVideoTutorial";
import SimpleGames from "./../Projects/SimpleGames";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import ComputerRoundedIcon from "@material-ui/icons/ComputerRounded";
import TheatersRoundedIcon from "@material-ui/icons/TheatersRounded";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";
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
              [
                <LanguageRoundedIcon style={{ marginBottom: "-4px" }} />,
                " Personal Websites",
              ],
              [
                <ComputerRoundedIcon style={{ marginBottom: "-4px" }} />,
                " CMD Text Editor",
              ],
              [
                <TheatersRoundedIcon style={{ marginBottom: "-4px" }} />,
                " Video tutorial",
              ],
              [
                <SportsEsportsRoundedIcon style={{ marginBottom: "-4px" }} />,
                " Simple Games",
              ],
            ].map((element) => {
              return (
                <Tab
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
