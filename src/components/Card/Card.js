import React from 'react';
import cx from 'classnames';

import './Card.css';
import './sprites.css';

const Card = ({ value }) => (
  <div className={cx('Card', `Card-${value}`)} />
);

export default Card;
