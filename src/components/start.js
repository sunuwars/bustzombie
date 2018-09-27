import React from "react";

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandler}>
          <h1> >> Play >></h1>
        </button>
      </div>
    );
  }
}
