import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import CodeIcon from "@material-ui/icons/Code";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Contact.scss";

export default class Contact extends Component {
  state = {
    open: false,
  };
  render() {
    return (
      <div className="Contact">
        <Grid container justify="center" spacing={3} direction="column">
          <Grid key={0} item>
            <Button
              className="interactive"
              href="https://github.com/ArturWagnerBusiness/arturwagnerbusiness.github.io"
              data-aos="flip-left"
              variant="outlined"
              startIcon={<CodeIcon />}
            >
              Source code
            </Button>
          </Grid>
          <Grid key={1} item>
            <Button
              className="interactive"
              href="https://github.com/ArturWagnerBusiness"
              data-aos="flip-left"
              variant="outlined"
              startIcon={<GitHubIcon />}
            >
              Github Profile
            </Button>
          </Grid>
          <Grid key={2} item>
            <Button
              className="interactive"
              data-aos="flip-left"
              variant="outlined"
              startIcon={<AlternateEmailIcon />}
              onClick={() => {
                this.setState({
                  open: true,
                });
              }}
            >
              Contact Details
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={this.state.open}
          onClose={() => {
            this.setState({
              open: false,
            });
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Typography data-aos="fade-down" variant="h5">
              <strong>Contact Details</strong>
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText data-aos="fade-right" variant="h6">
              <strong>
                Email: arturwagner@yahoo.com <br /> Mobile: 07467125666
              </strong>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
