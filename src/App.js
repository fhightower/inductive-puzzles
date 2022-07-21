import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import Level1 from './components/Levels/Level1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started: false};
    this.onStart = this.onStart.bind(this);
  }

  onStart(e) {
    console.log("here!")
    this.setState(state => ({
      started: true
    }));
  };

  render() {
    return (
      <div>
	<Timer onChange={this.onStart} />
	<span>Started: {this.state.started}</span>
      </div>
    );
  }
}

export default App;

