import { Button, ButtonGroup, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class FinalYearProject extends Component {
  render() {
    return (
      <div className="FinalYearProject">
        <Typography variant="h4">Final Year Project</Typography>
        <Typography variant="h4">
          (developed in my 3rd year during Computer Science Bachelors)
        </Typography>
        <br />
        <Typography>
          A platform that allowed the user to generate their own content
          (programming exercises) was developed during my final year at Kingston
          University.
        </Typography>

        <Typography>
          The execution was handled by NoobLab system already existing at the
          university.
        </Typography>

        <Typography>
          Project-oriented with allowing the university to gain a permanent
          source of new exercises from past students, that would be provided to
          the new/future students.
        </Typography>
        <br />
        <Typography>
          The main system features developed: <br />
          • Create exercises <br />
          • Allow for automatic exercise testing+execution (Passed to NoobLab){" "}
          <br />
          • Search for exercises (Sort by + Word Query) <br />
          • Rate Exercises (Like system) <br />• Secure Login System
        </Typography>
        <br />
        <ButtonGroup>
          <Button href="https://github.com/ArturWagnerBusiness/FYP_21-22">
            <strong>Source code</strong>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
