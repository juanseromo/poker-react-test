import React from 'react';
import { shallow } from 'enzyme';

import Seat from './Seat';
import Chips from '../Chips';
import Cards from '../Cards';

const props = {
  id: 0,
  state: 'occupied',
  username: 'Frank',
  chips: 12345,
  cards: ['Ac', 'As'],
  bet: 100,
};

describe('Seats', () => {
  let component;

  describe('occupied', () => {
    it('shows the username and stack', () => {
      component = shallow(<Seat {...props} />);
      expect(component.find('.username').text()).toEqual('Frank')
      expect(component.find('.chips').text()).toEqual('12345')
    });

    xit('shows All-In when the player has bet all of their chips', () => {
      component = shallow(<Seat {...props} chips={0} />);
      expect(component.find('.chips').text()).toEqual('All-In')
    });

    it('shows the bet', () => {
      component = shallow(<Seat {...props} />);
      expect(component.find(Chips).props()).toEqual({ amount: 100 });
    });

    it('shows the hole cards', () => {
      component = shallow(<Seat {...props} />);
      expect(component.find(Cards).props()).toEqual({ values: ['Ac', 'As'] });
    })
  });

  describe('unoccuped', () => {
    it('shows seat available', () => {
      component = shallow(<Seat id={0} state="available" />);
      expect(component.find('.available').text()).toEqual('Seat Available');
    });
  });
});
