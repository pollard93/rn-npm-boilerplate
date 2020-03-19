import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Hello } from './Hello';

describe('Hello tests', () => {
  it('renders three hello text', () => {
    const wrapper = shallow(<Hello compiler="test" />);
    expect(wrapper.contains(<h1>Hello</h1>)).to.be.true;
  });
});
