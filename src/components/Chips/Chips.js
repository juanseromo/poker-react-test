import React from 'react';

import './Chips.css';

// TODO: Show actual chips rather than just text
const Chips = ({ amount }) => {
  if (!amount) return null;

  return (
    <div className="Chips">
      {amount}
    </div>
  );
}

export default Chips;
