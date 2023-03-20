import { Button, ButtonGroup, Grid, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class SimpleGames extends Component {
  render() {
    return (
      <div className="SimpleGames">
        <Typography variant="h4">Javascript/Electron VS Unity/C#</Typography>
        <Typography>
          In between 2019 and 2020 I wanted to see what I would be able to do
          with some game development. I developed 2 small games which are
          playable in a browser. Before I talk about them, you can find them at
          my{" "}
          <Link href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html">
            old website here
          </Link>
          .
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item container xs={6} spacing={3}>
            <Grid item xs={6}>
              <img
                style={{
                  width: "100%",
                  maxWidth: "320px",
                }}
                src="images/game-dau.png"
                alt="Game Darkness around us"
              />
              <br />
              <ButtonGroup>
                <Button href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html">
                  <strong>Website</strong>
                </Button>
                <Button href="https://arturwagnerbusiness.github.io/2020source/resources/games/darkness_within_us/index.html">
                  <strong>Play</strong>
                </Button>
                <Button href="https://github.com/ArturWagnerBusiness/Unity-game-2020">
                  <strong>Source</strong>
                </Button>
              </ButtonGroup>
              <br />
            </Grid>
            <Grid item xs={6}>
              <Typography>
                The first one on the left is "Darkness around us" which was a
                game developed in the Unity Engine.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6} spacing={3}>
            <Grid item xs={6}>
              <Typography>
                The second one was "Rise of Selior" which was developed using
                Phaser.js and Electron.
                <br />
                <em>
                  (The version on the web was striped from the electron to make
                  it executable on the web.)
                </em>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                style={{
                  width: "100%",
                  maxWidth: "269px",
                }}
                src="images/game-ros.png"
                alt="Game Rise of Salior"
              />
              <br />
              <ButtonGroup>
                <Button href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html">
                  <strong>Website</strong>
                </Button>
                <Button href="https://arturwagnerbusiness.github.io/2020source/resources/games/rise_of_selior/index.html">
                  <strong>Play</strong>
                </Button>
                <Button href="https://github.com/ArturWagnerBusiness/Engine">
                  <strong>Source</strong>
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
