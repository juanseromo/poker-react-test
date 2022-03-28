import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import cx from 'classnames';

import { seatShape } from '../../types';

import Seat from '../Seat';

const Seats = ({ seats, players }) => (
    <div className={cx('Seats', `Seats-${seats.length}`)}>
        {
            players ?
            seats.map((seat) => <Seat key={seat.id} {...seat} {...find(players, {seatId: seat.id})} />) :
            null
        }
    </div>
);

Seats.propTypes = {
  seats: PropTypes.arrayOf(seatShape).isRequired,
};

export default Seats;
