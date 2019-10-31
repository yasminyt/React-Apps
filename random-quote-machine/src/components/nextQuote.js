import React from 'react';
import '../css/index.css';

class NextQuote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.nextQuote();
  }

  render() {
    return (
      <button id='new-quote' style={{'backgroundColor': this.props.color}} onClick={this.handleClick}>New quote</button>
    )
  }
}

export default NextQuote;