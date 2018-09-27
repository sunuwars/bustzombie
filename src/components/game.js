import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";
import Btn from "./button";
import Timer from "./timer";
import GameOver from "./gameOver";
import YouHaveWon from "./youHaveWon";

export default class Game extends React.Component {
  state = {
    counting: false,
    seconds: 30,
    zombiesAlive: 0,
    firstZombieAppeared: false
  };
  componentDidMount() {
    this.intervalId = setInterval(this.countDown, 1000);
  }
  //calling this function will set firstZombieAppeared to true, this is useful in determining if user has won the game by checking
  // if zombiesAlive = 0
  setFirstZombieAppeared = () => {
    this.setState(prevState => {
      return { firstZombieAppeared: true };
    });
  };
  //as zombies respawn, this function will increment zombieAlive number
  increment = () => {
    this.setState(prevState => {
      // console.log("working")
      return { zombiesAlive: prevState.zombiesAlive + 1 };
    });
  };
  //as zombies get killed, this function will decrement zombieAlive number
  decrement = () => {
    this.setState(prevState => {
      return { zombiesAlive: prevState.zombiesAlive - 1 };
    });
  };
  //this will countDown the play time, so we can stop the game when seconds = 0
  countDown = () => {
    this.setState(prevState => {
      if (prevState.seconds == 1) {
        clearInterval(this.intervalId);
      }
      return {
        seconds: prevState.seconds - 1
      };
    });
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="page-container">
          <h1>Bust Zombieee</h1>
        </div>
        {/* render this div if this.state.seconds == 0, i.e time has not run out
         AND ( (first zombie has appeared AND zombies alive is not 0) OR (first zombie has not appeared, we don't want to end game before it starts! )*/}

        {!this.state.seconds == 0 &&
          ((this.state.firstZombieAppeared && this.state.zombiesAlive != 0) ||
            !this.state.firstZombieAppeared) && (
            <div>
              <div className="game-container">
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
                <Btn
                  zombiesAlive={this.state.zombiesAlive}
                  increment={this.increment}
                  decrement={this.decrement}
                  firstZombieAppeared={this.setFirstZombieAppeared}
                />
              </div>
              <Timer time={this.state.seconds} />
            </div>
          )}
        {this.state.seconds == 0 && <GameOver />}
        {this.state.zombiesAlive == 0 &&
          this.state.firstZombieAppeared && <YouHaveWon />}
      </div>
    );
  }
}
