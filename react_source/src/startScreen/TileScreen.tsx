import React, { Component } from "react";
import Tile from "./Tile";

interface TileScreenProps {}
interface TileScreenState {
  width: number;
  height: number;
  size: number;
}
export default class TileScreen extends Component<
  TileScreenProps,
  TileScreenState
> {
  state: TileScreenState = {
    width: 0,
    height: 0,
    size: 100,
  };
  tiles: JSX.Element[] = [];
  constructor(props: TileScreenProps) {
    super(props);
    document.body.style.overflow = "hidden";
    this.tiles = [];
    for (let x = 0; x < window.screen.width; x += this.state.size) {
      for (let y = 0; y < window.screen.height; y += this.state.size) {
        this.tiles.push(<Tile coordinates={{ x, y }} size={this.state.size} />);
      }
    }
  }
  componentWillUnmounted() {
    document.body.style.overflow = "auto";
  }
  render() {
    return (
      <div className="TileScreen">
        {this.tiles}
        <div className="EntryButton">
          <button
            onClick={() => {
              const tiles = document.querySelectorAll(".Tile");
              document
                .querySelector(".EntryButton")
                ?.classList.add("tile-fade");
              tiles.forEach((element) => {
                setTimeout(() => {
                  element.classList.add("tile-fade");
                }, Math.random() * 1000);
              });
            }}
          >
            Enter my site
          </button>
        </div>
      </div>
    );
  }
}
