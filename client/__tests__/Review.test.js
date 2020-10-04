/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Review from '../components/ReviewList';

const ReviewItem = {
  name: 'Bob',
  date: 'May',
  photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
  text: 'Hello!',
};

describe('<Review />', () => {
  const wrapper = mount(<Review review={ReviewItem} />);

  it('should render one review', () => {
    expect(wrapper).toExist();
  });
});
