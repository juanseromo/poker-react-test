import React from 'react';
import { shallow } from 'enzyme';

import Seats from './Seats';
import Seat from '../Seat';
import data from '../../data/table-1';

describe('Seats', () => {
  let component;

  it('renders a Seat for each seat at the table', () => {
    component = shallow(<Seats seats={data.seats} players={data.currentHand.players} />);
    expect(component.find(Seat).length).toEqual(6);
  });

  it('combines seat and player data for the seat', () => {
    component = shallow(<Seats seats={data.seats} players={data.currentHand.players} />);
    const seat4 = component.find(Seat).at(4);
    expect(seat4.props().bet).toEqual(20);
  });
});
