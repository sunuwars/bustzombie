import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";
import Btn from "./button";
import Timer from './timer';

export default class Game extends React.Component {
  

  render() {
   
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
        <Timer />
      </div>
    );
  }
}
