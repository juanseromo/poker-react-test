import React from 'react';

import Card from '../Card';
import './Cards.css';

const Cards = ({ values, communityCards }) => {
  if (!values) return null;

  return (
    <div className="Cards">
      { values.map((value, i) => <Card value={value} key={i} communityCard={ communityCards } />) }
    </div>
  );
}

export default Cards;
