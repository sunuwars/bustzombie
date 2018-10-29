import React from "react";
import Game from "./game";
import Start from "./start";

export default class Intro extends React.Component {
  state = {
    gameOn: false
  };
  startGame = () => {
    this.setState((prevState, props) => {
      return { gameOn: true };
    });
  };
  render() {
    return (
      <div>
        {!this.state.gameOn && (
          <div className="page-container">
            <h1 id='title'>Bust Zombieee</h1>
            <h1>The ZOMBIES are coming! </h1>
            <h1>DON'T let them fill the box! </h1>
            <Start clickHandler={this.startGame} />
          </div>
        )}
        {this.state.gameOn && <Game />}
      </div>
    );
  }
}
