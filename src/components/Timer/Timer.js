import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {seconds: 0, started: false};
    this.startTimer = this.startTimer.bind(this);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  startTimer(e) {
    e.preventDefault();
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState(state => ({started: true}));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
	<form onSubmit={this.startTimer}>
      	  <button>Start</button>
	</form>
	{this.state.started ? <p>Seconds: {this.state.seconds}</p>: "Click the button to get started..."}
      </div>
    );
  }
}

export default Timer;

