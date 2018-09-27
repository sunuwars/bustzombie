import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";

export default class Btn extends React.Component {
  state = {
    showZombie: false
  };

  componentDidMount() {
    setTimeout(
      this.refreshZombies,
      Math.floor(Math.random() * (5000 - 1000) + 1000)
    );
  }
  toggle = () => {
    this.setState((prevState, props) => {
      if (prevState.showZombie) {
        setTimeout(
          this.refreshZombies,
          Math.floor(Math.random() * (5000 - 1000) + 1000)
        );
      }
      return { showZombie: !prevState.showZombie };
    });
  };
  refreshZombies = () => {
    this.setState(prevState => {
      return { showZombie: !prevState.showZombie };
    });
  };

  // randomShowZombie = () => {
  //   this.setState( (prevState, props) => {
  //     this.gamePlaying = setInterval(this.refreshZombies, 100);
  //   })
  // }
  render() {
    // const { appear } = this.props.zombie;
    // console.log(appear);
    return (
      <div className="img-container">
        {this.state.showZombie && (
          <img
            src={icon}
            alt={"zombie face"}
            id={this.props.id}
            onClick={this.toggle}
          />
        )}
        {!this.state.showZombie && (
          <div className="empty_img" id={this.props.id} />
        )}
      </div>
    );
  }
}
