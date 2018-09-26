import React from "react";
import Intro from "./intro";
import { render } from "react-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Intro />
      </div>
    );
  }
}
