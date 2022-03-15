import React from 'react';
import { shallow } from 'enzyme';

import Chips from './Chips';

describe('Chips', () => {
  let component;

  it('shows seat available', () => {
    component = shallow(<Chips amount={1000} />);
    expect(component.text()).toEqual('1000');
  });
});
