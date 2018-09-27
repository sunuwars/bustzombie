import React from 'react'

export default class Timer extends React.Component {
    state = {
        counting: false,
        seconds: 60
    };
    componentDidMount() {
        setInterval(
            this.decrement, 1000)
    }
    
    decrement = () => {
        this.setState((prevState) => {
            return {
                seconds:prevState.seconds - 1
            };
        }

    )};
    
    render() {
        return (
            <div className='timer'>
                <span> {this.state.seconds} </span>
            </div>
        )
    }
}