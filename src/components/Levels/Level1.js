import React from 'react';

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      target: 13,
    };
  };

  checkValue() {
    if (this.state.value === this.state.target) {
      this.setState({
	      value: this.state.value + "- Done!"
      }, this.props.completeLevel);
    }
  }

  incEven = e => {
    this.setState({
      value: this.state.value + 2
    }, this.checkValue);
  }

  dec = e => {
    this.setState({
      value: this.state.value - 1
    }, this.checkValue);
  }

  render() {
    return (
	<div>{(this.props.parentStarted && (this.props.level === 1))?
		<div>
			<button onClick={this.incEven}>a</button>
			<button onClick={this.dec}>b</button>
			<p>Current Value: {this.state.value}</p>
			<p>Target: {this.state.target}</p>
		</div>
		: ""}</div>
    )};
}

export default Level1;

