import React from "react";
import Game from "./game";
import Start from "./start";
import { Title, Description } from "./text";

export default class MainPage extends React.Component {
  state = {
    gameOn: false,
    nextGame: false
  };
  startGame = () => {
    this.setState(prevState => {
      return { gameOn: true };
    });
  };
  render() {
    return (
      <div className="page-container">
        <Title />
        {!this.state.gameOn && (
          <div>
            <Description />
            <Start clickHandler={this.startGame} />
          </div>
        )}
        {this.state.gameOn && <Game />}
      </div>
    );
  }
}
