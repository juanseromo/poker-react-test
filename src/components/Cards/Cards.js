import React from 'react';

import Card from '../Card';
import './Cards.css';

const Cards = ({ values }) => {
  if (!values) return null;

  return (
    <div className="Cards">
      { values.map((value, i) => <Card value={value} key={i} />) }
    </div>
  );
}

export default Cards;
