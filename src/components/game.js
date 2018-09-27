import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";
import Btn from "./button";

export default class Game extends React.Component {
  // state = {
  //   zombies: [
  //     { appear: false },
  //     { appear: false },
  //     { appear: true },
  //     { appear: false },
  //     { appear: false },
  //     { appear: false },
  //     { appear: false },
  //     { appear: false },
  //     { appear: false }
  //   ]
  // };

  // toggle = () => {
  //   this.setState((prevState, props) => {
  //     return { showZombie: !prevState.showZombie };
  //   });
  // };
  // refreshZombies = () => {
  //   this.setState((prevState, props) => {
  //     // if(!this.showZombie)
  //     return { showZombie: !prevState.showZombie };
  //   });
  // };

  render() {
    // const { zombies } = this.state;
    return (
      <div>
        <div className="header">
          <h1>Bust Zombieee</h1>
        </div>
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
      </div>
    );
  }
}
