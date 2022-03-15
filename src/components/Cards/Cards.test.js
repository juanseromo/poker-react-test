import React from 'react';
import { shallow } from 'enzyme';

import Cards from './Cards';
import Card from '../Card';

describe('Cards', () => {
  let component;

  it('renders a Card for each value in the array', () => {
    component = shallow(<Cards values={['Ac', 'As']} />);
    const cards = component.find(Card);
    expect(cards.length).toEqual(2);
    expect(cards.at(0).props()).toEqual({ value: 'Ac' });
    expect(cards.at(1).props()).toEqual({ value: 'As' });
  });
});
