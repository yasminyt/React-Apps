import React from 'react';
import Share from './shareQuote';
import NextQuote from './nextQuote';

const Actions = props => {
  return (
    <div className='actionDiv'>
      <Share color={props.color} type='tweet' quote={props.quote} />
      <Share color={props.color} quote={props.quote} />
      <NextQuote color={props.color} nextQuote={props.nextQuote} />
    </div>
  )
};

export default Actions;