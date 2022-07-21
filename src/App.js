import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import Level1 from './components/Levels/Level1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started: false, level: 1};
    this.onStart = this.onStart.bind(this);
  }

  onStart(value) {
    this.setState({
      started: value
    });
  };

  render() {
    return (
      <div>
	<Timer onChange={this.onStart} />
	<Level1 level={this.state.level} parentStarted={this.state.started} />
      </div>
    );
  }
}

export default App;

