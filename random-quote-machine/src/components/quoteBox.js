import React from 'react';
import Contents from './contents';
import Actions from './actions';
import '../css/index.css';

let quotes;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {},
      color: '',
      idx: 0
    };
    this.nextQuote = this.nextQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {
        return response.json();
      }).then(data => {
        quotes = data.quotes;   // quotes = [{quote: '', author: ''}, ... {}], quotes.length = 102
        this.setState({
          quote: quotes[0],
          idx: 1
        });
      }).catch(e => {
        console.log('error messages: ' + e.message);
      });
    this.setState({
      color: randomColor()
    });
  }

  nextQuote() {
    let idx = this.state.idx,
        len = quotes.length;
    if (idx < len)
      this.setState({
        idx: ++idx,
      });
    if (idx == len)
      this.setState({
        idx: 0
      });
    this.setState({
      quote: quotes[idx],
      color: randomColor()
    })
  }

  render() {
    const { quote, color } = this.state;
    document.body.style.backgroundColor = color;
    return (
      <div id='quote-box'>
        <Contents quote={quote} color={color} key='contents' />
        <Actions quote={quote} color={color} nextQuote={this.nextQuote} key="actions" />
      </div>
    )
  }
}

export default QuoteBox;

function randomColor() {
  const randomVal = () => Math.floor(Math.random() * 256)
  const red = randomVal(),
        green = randomVal(),
        blue = randomVal();

  return `rgb(${red}, ${green}, ${blue}, 0.9)`;
}