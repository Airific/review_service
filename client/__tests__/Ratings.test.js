/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Ratings from '../components/Ratings';

const rating = {
  communication: '5',
  location: '3',
  clean: '2',
  accuracy: '1',
  value: '4',
  check: '3',
  total: '3.45',
};

describe('Ratings component', () => {
  it('accepts ratings props', () => {
    const wrapper = mount(<Ratings rating={rating} />);
    expect(wrapper.props().rating).toEqual(rating);
  });
  it('contains locations average rating for cleanliness', () => {
    const wrapper = mount(<Ratings rating={rating} />);
    const children = wrapper.find('div[children="2"]');
    expect(children).toHaveLength(1);
  });
});
