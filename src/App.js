import React from 'react';
import './App.css';
import Level1 from './components/Levels/Level1';
import Level2 from './components/Levels/Level2';
import Level3 from './components/Levels/Level3';

const maxLevel = 3;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {started: false, level: 0, seconds: 0, done: false};
		this.completeLevel = this.completeLevel.bind(this);
		this.startLevel = this.startLevel.bind(this);
	}

	incTimer() {
		this.setState({
			seconds: this.state.seconds + 1
		});
	}

	startLevel(e) {
		e.preventDefault();
		this.interval = setInterval(() => this.incTimer(), 1000);
		this.setState({
			started: true,
			level: this.state.level + 1
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
		this.setState({
			started: false
		});
		this.setState({
			done: this.state.level === maxLevel
		});
	}

	render() {
		return (
			<div>
				<span>Level: {this.state.level}</span><br/>
				<span>Total time: {this.state.seconds}</span><br/><br/>

				<div style={{display: this.state.started ? 'none' : 'block'}}>
					{this.state.level > 0 ?
						<p>Nice work! Your total time is {this.state.seconds} seconds on {this.state.level} levels.</p>:
						""}
				</div>

				<div style={{display: this.state.done ? 'block': 'none' }}>
					Congratulations 🎉! You finished all of the puzzles.
				</div>

				<form onSubmit={this.startLevel} style={{display: (this.state.started || this.state.done) ? 'none' : 'block'}}>
					<p>Click the button to start level {this.state.level + 1}...</p>
					<button>Start</button>
				</form>

				<Level1 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
				<Level2 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
				<Level3 level={this.state.level} parentStarted={this.state.started} completeLevel={this.completeLevel}/>
			</div>
		);
	}
}

export default App;

