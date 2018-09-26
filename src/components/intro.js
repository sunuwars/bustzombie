import React from "react";
import Game from "./game";

export default class Intro extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Bust Zombieee</h1>
          <p>Zombies keep coming! You need to click on them to bust them!</p>
        </div>
        <Game />
      </div>
    );
  }
}
