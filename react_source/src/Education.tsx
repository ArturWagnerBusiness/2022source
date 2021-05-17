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
                  In Kingston I have been placed is several team projects which
                  moved from my comfort zones. During the <em>first year</em> I
                  was already made to create teams at the start of the year
                  where I didn't know anyone. During the <em>second year</em> I
                  was placed in pre-determined teams to create a fully working
                  site for "cheese enthusiasts".
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
                  generation on several html pages.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}
