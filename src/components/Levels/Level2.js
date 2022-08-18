import React from 'react';

class Level2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: -1,
      target: 11,
	  nextVal: 1
    };
  };

  checkValue() {
    if (this.state.value === this.state.target) {
      this.setState({
	      value: this.state.value + "- Done!"
      }, this.props.completeLevel);
    }
  }

  a = e => {
	  this.setState({
		  value: this.state.value + this.state.nextVal,
		  nextVal: this.state.nextVal + 1
	  }, this.checkValue);
  }

  b = e => {
    this.setState({
		value: this.state.value - this.state.nextVal,
		nextVal: this.state.nextVal + 1
    }, this.checkValue);
  }


  render() {
    return (
	<div>{(this.props.parentStarted && (this.props.level === 2))?
		<div>
			<button onClick={this.a}>a</button>
			<button onClick={this.b}>b</button>
			<p>Current Value: {this.state.value}</p>
			<p>Target: {this.state.target}</p>
		</div>
		: ""}</div>
    )};
}

export default Level2;

