import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
interface ContentState {
  value: number;
}
export default class Content extends Component<{}, ContentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div className="Content">
        <div className="container">
          <AppBar position="sticky" color="default">
            <Tabs
              value={this.state.value}
              onChange={(event: React.ChangeEvent<{}>, newValue: number) => {
                this.setState({
                  value: newValue,
                });
              }}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
              <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
              <Tab
                label="Item Three"
                icon={<PersonPinIcon />}
                {...a11yProps(2)}
              />
              <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
              <Tab
                label="Item Five"
                icon={<ShoppingBasket />}
                {...a11yProps(4)}
              />
              <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
              <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
            </Tabs>
          </AppBar>
          <TabPanel value={this.state.value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={this.state.value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={this.state.value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={this.state.value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={this.state.value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={this.state.value} index={6}>
            Item Seven
          </TabPanel>
        </div>
      </div>
    );
  }
}
