import React from 'react';
import './App.css';
import Timer from './components/Timer/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {started: false};
  }

  render() {
    return (
      <div>
	<Timer />
      </div>
    );
  }
}

export default App;

