import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';
import Seats from '../Seats';
import Pots from '../Pots';
import Cards from '../Cards';
import data from '../../data/table-1';

describe('Table', () => {
  let component;

  it('renders Seats', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Seats).length).toEqual(1);
  });

  it('renders Pots', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Pots).length).toEqual(1);
  });

  it('renders Cards', () => {
    component = shallow(<Table table={data} />);
    expect(component.find(Cards).length).toEqual(1);
  });
});
