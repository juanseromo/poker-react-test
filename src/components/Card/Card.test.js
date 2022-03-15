import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  let component;

  it('renders a Card with the correct sprite class', () => {
    component = shallow(<Card value="As" />);
    expect(component.find('.Card-As').length).toEqual(1);
  });
});
