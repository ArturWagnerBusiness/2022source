import { Button, ButtonGroup, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class SimpleGames extends Component {
  render() {
    return (
      <div className="SimpleGames">
        <Typography variant="h4" data-aos="fade-down">
          Javascript/Electron VS Unity/C#
        </Typography>
        <Typography data-aos="fade-right">
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
        <Typography data-aos="fade-right">
          The first one at the top "Darkness around us" was a game developed in
          Unity Engine.
        </Typography>
        <img
          style={{
            width: "100%",
            maxWidth: "320px",
          }}
          data-aos="fade-left"
          src="/images/game-dau.png"
          alt="Game Darkness around us"
        />
        <br />
        <ButtonGroup data-aos="fade-left">
          <Button href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html">
            <strong>View site</strong>
          </Button>
          <Button href="https://arturwagnerbusiness.github.io/2020source/resources/games/darkness_within_us/index.html">
            <strong>Play game</strong>
          </Button>
          <Button href="https://github.com/ArturWagnerBusiness/Unity-game-2020">
            <strong>View Source</strong>
          </Button>
        </ButtonGroup>
        <br />
        <br />
        <Typography data-aos="fade-right">
          The second one "Rise of Selior" was a game developed using Phaser.js
          and Electron.
          <br />
          <em>
            (The version on the web was striped from the electron to make it
            executable on web.)
          </em>
        </Typography>
        <img
          style={{
            width: "100%",
            maxWidth: "269px",
          }}
          data-aos="fade-left"
          src="/images/game-ros.png"
          alt="Game Rise of Salior"
        />
        <br />
        <ButtonGroup data-aos="fade-left">
          <Button href="https://arturwagnerbusiness.github.io/2020source/resources/webpages/games.html">
            <strong>View site</strong>
          </Button>
          <Button href="https://arturwagnerbusiness.github.io/2020source/resources/games/rise_of_selior/index.html">
            <strong>Play game</strong>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
