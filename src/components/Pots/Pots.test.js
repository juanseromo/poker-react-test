import React from 'react';
import { shallow } from 'enzyme';

import Pots from './Pots';
import Chips from '../Chips';

const props = {
  pots: [
    { chips: 1000, seatIds: [0, 1, 2] },
    { chips: 500, seatIds: [0, 1] },
  ],
};

describe('Pots', () => {
  let component;

  it('shows a Chips component for each pot', () => {
    component = shallow(<Pots {...props} />);
    expect(component.find(Chips).at(0).props()).toEqual({ amount: 1000 });
    expect(component.find(Chips).at(1).props()).toEqual({ amount: 500 });
  });
});
