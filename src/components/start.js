import React from "react";

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandler}>
          <h2> >> Play >></h2>
        </button>
      </div>
    );
  }
}
