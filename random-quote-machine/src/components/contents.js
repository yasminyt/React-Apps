import React from 'react';
import Quote from './text';
import Author from './author';
import '../css/index.css';

class Contents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { quote, color } = this.props;
    return (
      <div className='contents' style={{"color": color}}>
        <Quote quote={quote.quote} />
        <Author author={quote.author} />
      </div>
    )
  }
}

export default Contents;