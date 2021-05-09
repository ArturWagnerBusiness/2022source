import React, { Component } from "react";

interface TileProps {
  coordinates: {
    x: number;
    y: number;
  };
  size: number;
}
interface TileState {}

export default class Tile extends Component<TileProps, TileState> {
  render() {
    return (
      <div
        className="Tile"
        style={{
          left: this.props.coordinates.x,
          top: this.props.coordinates.y,
          width: this.props.size - 6,
          height: this.props.size - 6,
        }}
      ></div>
    );
  }
}
