import React from 'react';
import { tableShape } from '../../types';

import Seats from '../Seats';
import Cards from '../Cards';
import Pots from '../Pots';

import './Table.css';

const Table = ({ table }) => (
    <div className="Table">
        <Seats seats={table.seats} players={table.currentHand !== undefined ? table.currentHand.players : ''}/>
        <Cards communityCards={true} values={table.currentHand !== undefined ? table.currentHand.communityCards : []}/>
        <Pots pots={table.currentHand !== undefined ? table.currentHand.pots : []}/>
    </div>
);

Table.propTypes = {
    table: tableShape.isRequired,
};

export default Table;
