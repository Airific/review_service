/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

const reviews = [
  {
    name: 'test',
    date: 'May',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'Hello!',
  },
  {
    name: 'alissa',
    date: 'June',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'test!',
  },
  {
    name: 'hack reactor',
    date: 'October',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'Learn to code!',
  },
];
const rating = {
  communication: '5',
  location: '3',
  clean: '2',
  accuracy: '1',
  value: '4',
  check: '3',
  total: '3.45',
};
describe('Header component', () => {
  it('render correctly Header component', () => {
    const wrapper = shallow(<Header reviews={reviews} rating={rating} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct amount of reviews and correct rating', () => {
    const wrapper = mount(<Header reviews={reviews} rating={rating} />);
    expect(wrapper.find('div').text()).toEqual('3.45 (3 reviews)');
  });
});
