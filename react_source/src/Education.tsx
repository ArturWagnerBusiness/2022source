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
                <strong>
                  (Current){" "}
                  <Link href="https://www.kingston.ac.uk">
                    Kingston University
                  </Link>{" "}
                </strong>
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
                  Place where I was given opportunities to work in agile teams.
                  During the <em>second year</em> I was placed in pre-determined
                  teams to create a fully working site for "cheese enthusiasts".
                  Using html/css/js for front-end and php/mysql for back-end
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6">
                <strong>
                  <Link href="https://www.barnhill.hillingdon.sch.uk">
                    Barnhill Community High School - Sixth Form
                  </Link>{" "}
                </strong>
                <br />
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
                  During Sixth form I have made a lot of small applications in
                  python which was also my first language. I even used it to
                  automate development on my final project website to automate
                  generation on several html pages. Lot of these small projects
                  can be found{" "}
                  <Link href="https://github.com/ArturWagnerBusiness/Projects-2018-2020">
                    here
                  </Link>
                  .
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
