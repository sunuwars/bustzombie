import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game-container">
        <img src={icon} alt={"zombie face"} />
      </div>
    );
  }
}
