import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";
import Btn from "./button"
export default class Game extends React.Component {

  render() {
    return (
      <div className="game-container">
        <Btn id='1' />
        <Btn id='2' />
        <Btn id='3' />
        <Btn id='4' />
        <Btn id='5' />
        <Btn id='6' />
        <Btn id='7' />
        <Btn id='8' />
      </div>
    );
  }
}
