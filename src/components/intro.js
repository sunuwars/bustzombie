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
            <h1>Bust Zombieee</h1>
            <p>ZOMBIES keep coming! You need to click on them to bust them!</p>
            <p>DON'T let them fill the box! </p>
            <Start clickHandler={this.startGame} />
          </div>
        )}
        {this.state.gameOn && <Game />}
      </div>
    );
  }
}
