import React from 'react';

import Chips from '../Chips';
import './Pots.css';

const Pots = ({ pots }) => {
  if (!pots) return null

  return (
      <div className="Pots">
        {pots.map(({chips}, i) => <Chips amount={chips} key={i}/>)}
      </div>
  )
};

export default Pots;
