import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
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
        <Button
          href="https://github.com/ArturWagnerBusiness/arturwagnerbusiness.github.io"
          data-aos="fade-left"
          variant="outlined"
          startIcon={<CodeIcon />}
        >
          Source code
        </Button>
        <br />
        <br />
        <Button
          href="https://github.com/ArturWagnerBusiness"
          data-aos="fade-right"
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          Github Profile
        </Button>
        <br />
        <br />
        <Button
          data-aos="fade-left"
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
              Email: arturwagner@yahoo.com <br />
              Mobile: {"<Provided on email>"}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
