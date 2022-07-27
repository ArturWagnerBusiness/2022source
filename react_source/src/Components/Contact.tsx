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
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ReorderIcon from "@material-ui/icons/Reorder";
export default class Contact extends Component {
  state = {
    open: false,
  };
  render() {
    return (
      <div className="Contact">
        <Grid
          container
          justify="center"
          spacing={3}
          direction="column"
          alignItems="center"
        >
          <Grid key={0} item>
            <Button
              className="interactive"
              href="https://github.com/ArturWagnerBusiness/arturwagnerbusiness.github.io"
              data-aos="flip-left"
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<CodeIcon />}
            >
              <Typography variant="h5">Source code</Typography>
            </Button>
          </Grid>
          <Grid key={1} item>
            <Button
              className="interactive"
              href="https://github.com/ArturWagnerBusiness"
              data-aos="flip-left"
              variant="outlined"
              color="inherit"
              startIcon={<GitHubIcon />}
              size="large"
            >
              <Typography variant="h5">Github Profile</Typography>
            </Button>
          </Grid>
          <Grid key={2} item>
            <Button
              className="interactive"
              href="https://www.linkedin.com/in/arturwagnerbusiness/"
              data-aos="flip-left"
              variant="outlined"
              color="inherit"
              startIcon={<LinkedInIcon />}
              size="large"
            >
              <Typography variant="h5">Linkedin Profile</Typography>
            </Button>
          </Grid>

          <Grid key={3} item>
            <Button
              className="interactive"
              href="https://stackoverflow.com/users/9494053/artur-wagner/"
              data-aos="flip-left"
              variant="outlined"
              color="inherit"
              startIcon={<ReorderIcon />}
              size="large"
            >
              <Typography variant="h5">StackOverflow Profile</Typography>
            </Button>
          </Grid>

          <Grid key={4} item>
            <Button
              className="interactive"
              data-aos="flip-left"
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<AlternateEmailIcon />}
              onClick={() => {
                this.setState({
                  open: true,
                });
              }}
            >
              <Typography variant="h5">Contact Details</Typography>
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
              <strong>Email: arturwagner@yahoo.com</strong>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <br />
        <div className="center">
          <Typography variant="h5">
            <BuildRoundedIcon /> Build with the awesome power of react!
          </Typography>
        </div>
        <br />
      </div>
    );
  }
}
