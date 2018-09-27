import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";
import Btn from "./button";
import Timer from './timer';
import GameOver from './gameOver';

export default class Game extends React.Component {
  state = {
    counting: false,
    seconds: 10
};
componentDidMount() {
  this.intervalId =  setInterval(
        this.decrement, 1000)
}

decrement = () => {
    this.setState((prevState) => {
        if (prevState.seconds == 1) {
            clearInterval(this.intervalId);
        }
        return {
            seconds:prevState.seconds - 1
        };
    }

)};

  render() {
   
    return (
      <div>
        <div className="header">
          <h1>Bust Zombieee</h1>
        </div>
        {!this.state.seconds == 0 && (
          <div>
        <div className="game-container">
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
          <Btn />
        </div>
        <Timer time={this.state.seconds}/>
        </div>
        )}
              {this.state.seconds == 0 && (
          <GameOver />
        )}
      </div>
    );
  }
}
