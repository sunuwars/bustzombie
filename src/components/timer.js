import React from 'react'

export default class Timer extends React.Component {
    // state = {
    //     counting: false,
    //     seconds: 60
    // };
    // componentDidMount() {
    //   this.intervalId =  setInterval(
    //         this.decrement, 1000)
    // }
    
    // decrement = () => {
    //     this.setState((prevState) => {
    //         if (prevState.seconds == 1) {
    //             clearInterval(this.intervalId);
    //         }
    //         return {
    //             seconds:prevState.seconds - 1
    //         };
    //     }

    // )};
    
    render() {
        return (
            <div className='timer'>
                <span> {this.props.time} </span>
            </div>
        )
    }
}