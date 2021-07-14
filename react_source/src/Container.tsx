import React, { Component } from "react";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Interests from "./Components/Interests";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import { Box } from "@material-ui/core";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import WhatshotRoundedIcon from "@material-ui/icons/WhatshotRounded";
import HeadsetRoundedIcon from "@material-ui/icons/HeadsetRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
export default class Container extends Component {
  render() {
    return (
      <div className="Container">
        <div className="content" data-aos="fade-right">
          <Hero />
          <div className="container">
            <div className="center">
              <h4>
                <SchoolRoundedIcon
                  style={{ marginBottom: "-2px" }}
                  fontSize="large"
                />{" "}
                Education
              </h4>
            </div>
          </div>
          <div className="container">
            <Education />
          </div>
          <div className="container">
            <hr />
            <div className="center">
              <h4>
                <WhatshotRoundedIcon
                  style={{ marginBottom: "-2px" }}
                  fontSize="large"
                />{" "}
                Projects
              </h4>
            </div>
          </div>
          <div className="container">
            <Projects />
          </div>
          <div className="container">
            <hr />
            <div className="center">
              <h4>
                <HeadsetRoundedIcon
                  style={{ marginBottom: "-2px" }}
                  fontSize="large"
                />{" "}
                Interests!
              </h4>
            </div>
          </div>
          <div className="container">
            <Interests />
          </div>
          <br />
          <Box
            bgcolor="info.main"
            color="white"
            style={{
              paddingTop: "3px",
              boxShadow: "inset 0 5px 5px -5px black",
            }}
          >
            <div className="container">
              <div className="center">
                <h4>
                  <MailRoundedIcon
                    style={{ marginBottom: "-2px" }}
                    fontSize="large"
                  />{" "}
                  Contact and Info
                </h4>
              </div>
            </div>
            <div className="container">
              <Contact />
            </div>
            <div className="container center">
              <p>Last update on 14th July 2021</p>
            </div>
            <br />
          </Box>
        </div>
      </div>
    );
  }
}
