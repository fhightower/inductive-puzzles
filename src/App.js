import React from 'react';
import './App.css';
import Level1 from './components/Levels/Level1';
import Level2 from './components/Levels/Level2';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {started: false, level: 1, seconds: 0};
		this.completeLevel = this.completeLevel.bind(this);
		this.startTimer = this.startTimer.bind(this);
	}

	incTimer() {
		this.setState({
			seconds: this.state.seconds + 1
		});
	}

	startTimer(e) {
		e.preventDefault();
		this.interval = setInterval(() => this.incTimer(), 1000);
		this.setState({
			started: true
		});
	}

	stopTimer() {
		clearInterval(this.interval);
	}

	componentWillUnmount() {
		this.stopTimer();
	}

	completeLevel() {
		// stop timer
		this.stopTimer();
		// show option for next level
		this.setState({
			level: this.state.level + 1,
			started: false
		});
	}

	render() {
		return (
			<div>
				<p>Level: {this.state.level}</p>
				{this.state.started ?
					<p>Seconds: {this.state.seconds}</p>:
					<div>
						{this.state.level >= 2 ?
							<p>Congrats! You finished the puzzle in {this.state.seconds} seconds.</p>:
							""}
						<p>Click the button to start level {this.state.level}...</p>
					</div>}
				<form onSubmit={this.startTimer}>
					<button>Start</button>
				</form>
				<Level1 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
				<Level2 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
			</div>
		);
	}
}

export default App;

