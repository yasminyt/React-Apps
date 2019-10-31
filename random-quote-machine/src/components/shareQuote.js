import React from 'react';
import '../css/index.css';
import tweetURL from './../img/Twitter.png';
import githubURL from '../img/github.png';

const tweetShare = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';

const Share = props => {
  const { type, quote, color } = props;
  if (type === 'tweet') {
    
    return (
      <a href={`${tweetShare}${encodeURIComponent('"' + quote.quote + '"' + quote.author)}`} 
         style={{'backgroundColor': color}} id='tweet' target="_blank">
        <img src={tweetURL} />
      </a>
    )
  } else {
    return (
      <a href='#' style={{'backgroundColor': color}} id='github' target="_blank">
        <img src={githubURL} />
      </a>
    )
  }
}

export default Share