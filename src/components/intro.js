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
          <div className="header">
            <h1>Bust Zombieee</h1>
            <p>Zombies keep coming! You need to click on them to bust them!</p>
            <Start clickHandler={this.startGame} />
          </div>
        )}
        {this.state.gameOn && <Game />}
      </div>
    );
  }
}
