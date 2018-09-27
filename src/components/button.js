import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";

export default class Btn extends React.Component {
  state = {
    showZombie: false
  };

  componentDidMount() {
    setTimeout(
      this.respawnZombies,
      Math.floor(Math.random() * (5000 - 3000) + 3000)
    );
  }
  toggle = () => {
    this.setState((prevState, props) => {
      
      if (prevState.showZombie) {
        setTimeout(
          this.respawnZombies,
          Math.floor(Math.random() * (5000 - 3000) + 3000)
        ); 
        const {decrement} = props;
        decrement();
        return { showZombie: !prevState.showZombie };
      }

    });
  };
  respawnZombies = () => {
    this.setState((prevState, props) => {
      const { increment } = props;
      const {firstZombieAppeared} = props;
      // console.log(increment)
      increment();
      firstZombieAppeared();
      return { showZombie: !prevState.showZombie};
    });
  };

  render() {
    
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
