import React from 'react';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => (
  <div className="Table">
    <div>
      <Seats seats={table.seats} players={table.currentHand.players} />
      <Cards values={table.currentHand.communityCards} />
      <Pots pots={table.currentHand.pots} />
    </div>
  </div>
);

Table.propTypes = {
  table: tableShape.isRequired,
};

export default Table;
