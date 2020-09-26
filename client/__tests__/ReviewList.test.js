import React from 'react';
import { shallow } from 'enzyme';
import ReviewList from '../components/ReviewList';

const mockReviews = [
  {
    name: 'test',
    date: 'May',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'Hello!',
  },
];
describe('ReviewList component', () => {
  test('renders', () => {
    const wrapper = shallow(<ReviewList reviews={mockReviews} />);

    expect(wrapper).toMatchSnapshot();
  });
  test('return default empty array when there is no data to map through', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper).toMatchSnapshot();
  });
  test('does not break without reviews', () => {
    const wrapper = shallow(<ReviewList />);
    expect(wrapper.find('li')).toHaveLength(0);
  });
  test('does not break with an empty array', () => {
    const wrapper = shallow(<ReviewList reviews={[]} />);
    expect(wrapper.find('li')).toHaveLength(0);
  })
});
