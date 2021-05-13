import React, { Component } from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import { Link, Paper, Typography } from "@material-ui/core";
export default class Education extends Component {
  render() {
    return (
      <div className="Education">
        <Timeline align="left">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6">
                <strong>(Current) </strong>
                <Link href="https://www.kingston.ac.uk" target="_blank">
                  Kingston University
                </Link>
                <br />
                <em>2019-2022</em>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className="timeline-info">
                <Typography>
                  Some short-medium paragraphs about what I did in the first and
                  second year of the university. Make it short as it would make
                  the history graph look ugly.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6">
                <Link
                  href="https://www.barnhill.hillingdon.sch.uk"
                  target="_blank"
                >
                  Barnhill Community High School
                </Link>{" "}
                (Sixth form) <br />
                <em>2017-2019</em>
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className="timeline-info">
                <Typography>
                  Barnhill Sixth form was a place where my journey as a
                  programmer started. <br />
                  My first language was python, which I immediately fell in love
                  in.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
