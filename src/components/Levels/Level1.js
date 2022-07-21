import React from 'react';

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  };

  handleOnChange = e => {
    const inputText = e.target.value;
    this.setState({
      value: inputText
    });
    console.log(this.props.parentStarted);
  };

  render() {
    return (
	<div>{(this.props.parentStarted && (this.props.level == 1))?
		<p>abc</p>: 
		""}</div>
    )};
}

export default Level1;

