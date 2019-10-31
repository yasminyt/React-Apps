import React from 'react';
import '../css/index.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='text'>
        <article id="text">{this.props.quote}</article>
      </div>
    )
  }
}

export default Text;