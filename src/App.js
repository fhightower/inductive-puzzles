import React from 'react';
import './App.css';
import Level1 from './components/Levels/Level1';
import Level2 from './components/Levels/Level2';
import Level3 from './components/Levels/Level3';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {started: false, level: 0, seconds: 0};
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
	}

	render() {
		return (
			<div>
				<p>Level: {this.state.level}</p>
				{this.state.started ?
					<p>Seconds: {this.state.seconds}</p>:
					<div>
						{this.state.level > 0 ?
							<p>Nice work! Your total time is {this.state.seconds} seconds on {this.state.level} levels.</p>:
							""}
						<p>Click the button to start level {this.state.level + 1}...</p>
					</div>}
				<form onSubmit={this.startLevel} style={{visibility: this.state.started ? 'hidden' : 'visible'}}>
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

