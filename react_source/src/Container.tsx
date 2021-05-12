import React, { Component } from "react";
import "./Container.scss";

export default class Container extends Component {
  render() {
    return (
      <div className="Container">
        <div className="content">
          <h1>Welcome to Artur Wagner Business!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            doloribus enim natus iure ea, incidunt molestiae accusantium minus
            unde provident modi neque? Eligendi quam dicta dolorem quis
            perspiciatis debitis quibusdam.
          </p>
        </div>
      </div>
    );
  }
}
