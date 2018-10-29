import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";

export default class Btn extends React.Component {
  state = {
    showZombie: false
  };

  componentDidMount() {
    //this will trigger spawnzombie function after random interval between 7sec to 1 sec
    const timeoutId = setTimeout(
      this.spawnZombie,
      Math.floor(Math.random() * (7000 - 2000) + 2000)
    );
    // const newFunction = (timeoutId, ()=> {
    //   console.log('timeoutId=', timeoutId);
    //   const {firstZombieAppeared} = this.props;
    //   firstZombieAppeared();
    // });
    // newFunction(timeoutId);
    // const newFun = ( setTimeout(
    //   this.spawnZombie,
    //   Math.floor(Math.random() * (7000 - 2000) + 2000)
    // ) , ()=> {
    //   // console.log('timeoutId=', timeoutId);
    //   const {firstZombieAppeared} = this.props;
    //   firstZombieAppeared();
    // } );
    //
    // newFun();

  }
  componentWillUnmount() {
    this.props.stopcountdown();
  }
  bustZombie = () => {
    this.setState((prevState, props) => {
        setTimeout(
          this.spawnZombie,
          Math.floor(Math.random() * (7000 - 2000) + 2000)
        );
        this.props.decrement();
        //return { showZombie: !prevState.showZombie };
        return { showZombie: false};
    });
  };
  spawnZombie = () => {
    this.setState((prevState, props) => {
      this.props.increment();
      this.props.firstZombieAppeared();
      //return { showZombie: !prevState.showZombie };
      return { showZombie: true};
    });
  };

  render() {
    return (
      <div className="img-container">
        {this.state.showZombie && (
          <img
            draggable="false"
            src={icon}
            alt={"zombie face"}
            id={this.props.id}
            onClick={this.bustZombie}
          />
        )}
        {!this.state.showZombie && (
          <div className="empty_img" id={this.props.id} />
        )}
      </div>
    );
  }
}
