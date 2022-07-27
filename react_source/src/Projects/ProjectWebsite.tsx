import { Button, ButtonGroup, Link, Typography } from "@material-ui/core";
import React, { Component } from "react";

export default class ProjectWebsite extends Component {
  render() {
    return (
      <div className="ProjectWebsite">
        <Typography variant="h4">2020 Web Design</Typography>
        <Typography>
          This website design I first{" "}
          <Link href="https://www.figma.com">Figma</Link> which is a great
          design tool to create layouts. Once I knew how I wanted to website to
          look like I was then able to go straight into the development process.
          At the time I really wanted to add fancy navigation bar so I used a
          css property skew to bend the rectangles into these polygons. <br />{" "}
          There is also a Theme changer at the top side.
          <br />
          The website only has 2 games and 2 musics I developed at the time.
        </Typography>
        <br />
        <img
          src="/images/2020source-home.jpg"
          alt="2020 website"
          width="100%"
        />
        <ButtonGroup>
          <Button href="https://arturwagnerbusiness.github.io/2020source/">
            <strong>View site</strong>
          </Button>
          <Button href="https://github.com/ArturWagnerBusiness/2020source">
            <strong>Source code</strong>
          </Button>
        </ButtonGroup>

        <br />
        <br />
        <Typography variant="h4">2018/2019 Web Design</Typography>
        <Typography>
          At the time I really wanted to develop a website to practice my
          development skills but I was unable to come up with a design. I
          decided to look around the internet for a website that looks simple
          but yet challenging to create. I stumbled onto{" "}
          <Link href="https://www.mikufan.com/">mikufan.com</Link> which I liked
          the layout of. The challenge was not directly looking at any css on
          the website but trying to recreate everything from just sight
        </Typography>
        <br />
        <img
          src="/images/2018source-home.jpg"
          alt="2020 website"
          width="100%"
        />
        <ButtonGroup>
          <Button href="https://arturwagnerbusiness.github.io/2018source/">
            <strong>View site</strong>
          </Button>
          <Button href="https://github.com/ArturWagnerBusiness/2018source">
            <strong>Source code</strong>
          </Button>
        </ButtonGroup>
        <br />
        <br />
        <Typography>
          At the time I didn't want the user to have to load every single post.
          As for example if I had 100 posts, loading 5 at a time would be
          appreciated. So there is a js file with paths to each post. At first
          only 5 posts are loaded and the next ones will only load if the user
          reached the bottom and clicks load more.
        </Typography>
        <br />
        <img
          src="/images/2018source-loadmore.jpg"
          alt="2020 website"
          width="100%"
        />
      </div>
    );
  }
}
