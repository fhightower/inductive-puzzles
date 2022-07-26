import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import Level1 from './components/Levels/Level1';
import Level2 from './components/Levels/Level2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started: false, level: 1};
    this.onStart = this.onStart.bind(this);
    this.completeLevel = this.completeLevel.bind(this);
	this.timerStop = React.createRef();
  }

  onStart(value) {
    this.setState({
      started: value
    });
  };

	completeLevel() {
		// stop timer
		this.timerStop.current.stopTimer();
		// show option for next level
		this.setState({
			level: this.state.level + 1
		});
		console.log("start next level...");
	}

  render() {
    return (
      <div>
		<p>Level: {this.state.level}</p>
	<Timer onChange={this.onStart} ref={this.timerStop} />
	<Level1 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
	<Level2 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
      </div>
    );
  }
}

export default App;

