import React from "react";
import icon from "../../public/zombieface.png";
import style from "../../public/style";

export default class Btn extends React.Component {
  state = {
    showZombie: false,
  };
  toggle = () => {
    this.setState((prevState, props) => {
      return { showZombie: !prevState.showZombie };
    });
  };
  refreshZombies = () => {
    this.setState( (prevState, props) => {
      if(!this.showZombie)
      return { showZombie: !prevState.showZombie};
    })
  }

  randomShowZombie = () => {
    this.setState( (prevState, props) => {
      this.gamePlaying = setInterval(this.refreshZombies, 100);
    })
  }
  render() {
    return (
      <div className="img-container">
      <button onClick="randomShowZombie">Start</button>
      <button>Stop</button>

        {this.state.showZombie &&
          <img src={icon} alt={"zombie face"} id={this.props.id} onClick={this.toggle} />
        }
        {!this.state.showZombie &&

          <div className='empty_img' id={this.props.id}></div>
        }


      </div>
    );
  }
}
