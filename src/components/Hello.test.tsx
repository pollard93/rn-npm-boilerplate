import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Hello } from './Hello';

describe('Hello tests', () => {
  it('renders three hello text', () => {
    const wrapper = shallow(<Hello compiler="test" />);
    expect(wrapper.contains(<Text>Hello</Text>)).to.be.true;
  });
});
