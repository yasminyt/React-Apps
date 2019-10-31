import React from 'react';
import ReactDOM from 'react-dom';
import QuoteBox from './components/quoteBox';
import './css/footer.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <QuoteBox />
        <footer>
          by yasminyt
        </footer>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));