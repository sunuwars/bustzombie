import React from "react";

export default class Timer extends React.Component {
  render() {
    return (
      <div className="timer">
        <span> {this.props.time} </span>
      </div>
    );
  }
}
