import React from 'react';

import Chips from '../Chips';
import './Pots.css';

const Pots = ({ pots }) => (
  <div className="Pots">
    { pots.map(({ chips }, i) => <Chips amount={chips} key={i} />) }
  </div>
);

export default Pots;
